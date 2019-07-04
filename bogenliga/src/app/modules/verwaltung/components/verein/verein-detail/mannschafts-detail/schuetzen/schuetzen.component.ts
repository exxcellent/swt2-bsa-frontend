import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined, isUndefined} from '@shared/functions';
import {
  ButtonType,
  CommonComponent, hideLoadingIndicator,
  showDeleteLoadingIndicatorIcon,
  toTableRows
} from '../../../../../../shared/components';
import {BogenligaResponse} from '../../../../../../shared/data-provider';
import {
  Notification,
  NotificationOrigin,
  NotificationService,
  NotificationSeverity,
  NotificationType,
  NotificationUserAction
} from '../../../../../../shared/services/notification';
import {DsbMitgliedDO} from '../../../../../types/dsb-mitglied-do.class';
import {SCHUETZE_TABLE_CONFIG, SCHUETZEN_CONFIG} from './schuetzen.config';
import {DsbMannschaftDO} from '@verwaltung/types/dsb-mannschaft-do.class';
import {DsbMannschaftDataProviderService} from '@verwaltung/services/dsb-mannschaft-data-provider.service';
import {DsbMitgliedDataProviderService} from '@verwaltung/services/dsb-mitglied-data-provider.service';
import {TableRow} from '@shared/components/tables/types/table-row.class';
import {MannschaftsmitgliedDataProviderService} from '@verwaltung/services/mannschaftsmitglied-data-provider.service';
import {MannschaftsMitgliedDO} from '@verwaltung/types/mannschaftsmitglied-do.class';
import {DsbMitgliedDTO} from '@user/types/model/dsb-mitglied-dto.class';
import {VereinDO} from '@verwaltung/types/verein-do.class';
import {VereinDataProviderService} from '@verwaltung/services/verein-data-provider.service';
import {VersionedDataObject} from '@shared/data-provider/models/versioned-data-object.interface';
import {VereinDTO} from '@verwaltung/types/datatransfer/verein-dto.class';


const ID_PATH_PARAM = 'id';
const NOTIFICATION_SAVE_SCHUETZE = 'schütze_hinzufügen_save';
const NOTIFICATION_DUPLICATE_SCHUETZE = 'schütze_hinzufügen_doppelt';
const NOTIFICATION_OVERUSED_SCHUETZE = 'schütze_hinzufügen_in_zu_vielen_mannschaften';

@Component({
  selector:    'bla-schuetzen',
  templateUrl: './schuetzen.component.html',
  styleUrls:   ['./schuetzen.component.scss']
})
export class SchuetzenComponent extends CommonComponent implements OnInit {
  public config = SCHUETZEN_CONFIG;
  public table_config = SCHUETZE_TABLE_CONFIG;
  public rows: TableRow[];
  public ButtonType = ButtonType;
  public currentMannschaft: DsbMannschaftDO = new DsbMannschaftDO();
  public memberToAdd: MannschaftsMitgliedDO = new MannschaftsMitgliedDO();
  public members: DsbMitgliedDTO[] = [new DsbMitgliedDTO()];

  // attributes for the filter of the members
  public vorname = '';
  public nachname = '';
  public mitgliedsnummer = '';
  public currentVerein: VereinDO = new VereinDO();

  public deleteLoading = false;
  public saveLoading = false;

  constructor(private mannschaftProvider: DsbMannschaftDataProviderService,
              private dsbMitgliedProvider: DsbMitgliedDataProviderService,
              private mannschaftMitgliedProvider: MannschaftsmitgliedDataProviderService,
              private vereineProvider: VereinDataProviderService,
              private router: Router,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.loading = true;

    this.loadMannschaftById(Number.parseInt(this.route.snapshot.url[2].path, 10));
    this.loadVereinById(Number.parseInt(this.route.snapshot.url[1].path, 10));

    this.notificationService.discardNotification();

    this.route.params.subscribe((params) => {
      if (!isUndefined(params[ID_PATH_PARAM])) {
        const id = params[ID_PATH_PARAM];
        if (id === 'add') {
          this.currentMannschaft = new DsbMannschaftDO();
          this.loading = false;
          this.deleteLoading = false;
          this.saveLoading = false;
        } else {
          // this.loadById(params[ID_PATH_PARAM]);
        }
      }
    });
  }

  public onSave(member: VersionedDataObject): void {
    this.saveLoading = true;

    this.memberToAdd.dsbMitgliedId = member.id;
    this.memberToAdd.mannschaftsId = this.currentMannschaft.id;

    this.mannschaftMitgliedProvider.findAllByTeamId(this.currentMannschaft.id)
        .then((teamMembers: BogenligaResponse<MannschaftsMitgliedDO[]>) => {
          console.log(teamMembers.payload);
          if (this.duplicateMember(teamMembers.payload, this.memberToAdd)) {
            this.showDuplicateMember();
          } else {
            this.saveMemberInTeam(member.id);
          }
        })
        .catch((teamMembers: BogenligaResponse<MannschaftsMitgliedDO>) => {
          console.log('Failure');
        });
  }

  private duplicateMember(teamMembers: MannschaftsMitgliedDO[], member: MannschaftsMitgliedDO): boolean {
    console.log('checking for duplicate member...');
    let duplicateFound = false;
    teamMembers.forEach((teamMember) => {
      if (teamMember.dsbMitgliedId === member.dsbMitgliedId) {
        console.log('duplicate member: ' + teamMember);
        duplicateFound = true;
      }
    });
    return duplicateFound;
  }

  private saveMemberInTeam(memberId: number) {
    this.mannschaftMitgliedProvider.findByMemberId(memberId)
        .then((response: BogenligaResponse<MannschaftsMitgliedDO[]>) => {
          if (response.payload.length <= 1) {
            this.memberToAdd.dsbMitgliedEingesetzt = response.payload.length;

            console.log('saving ' + this.memberToAdd + ' in Mannschaft');

            this.mannschaftMitgliedProvider.create(this.memberToAdd)
                .then((savedResponse: BogenligaResponse<MannschaftsMitgliedDO>) => {
                  if (!isNullOrUndefined(savedResponse)
                    && !isNullOrUndefined(savedResponse.payload)
                    && !isNullOrUndefined(savedResponse.payload.id)) {
                    console.log('Saved with id: ' + savedResponse.payload.id);

                    const notification: Notification = {
                      id:          NOTIFICATION_SAVE_SCHUETZE,
                      title:       'MANAGEMENT.SCHUETZE_HINZUFUEGEN.NOTIFICATION.SAVE.TITLE',
                      description: 'MANAGEMENT.SCHUETZE_HINZUFUEGEN.NOTIFICATION.SAVE.DESCRIPTION',
                      severity:    NotificationSeverity.INFO,
                      origin:      NotificationOrigin.USER,
                      type:        NotificationType.OK,
                      userAction:  NotificationUserAction.PENDING
                    };

                    this.notificationService.observeNotification(NOTIFICATION_SAVE_SCHUETZE)
                        .subscribe((myNotification) => {
                          if (myNotification.userAction === NotificationUserAction.ACCEPTED) {
                            this.saveLoading = false;
                            this.router.navigateByUrl('/verwaltung/vereine/' + this.currentVerein.id
                              + '/' + this.currentMannschaft.id + '/add');
                          }
                        });

                    this.notificationService.showNotification(notification);
                  }
                }, (savedResponse: BogenligaResponse<MannschaftsMitgliedDO>) => {
                  console.log(savedResponse.payload);
                  console.log('Failed');
                  this.saveLoading = false;
                });
          } else {
            this.showMemberInTooManyTeams();
          }
        }).catch((response: BogenligaResponse<MannschaftsMitgliedDO[]>) => {
      console.log('Failure');
      this.saveLoading = false;
    });
  }

  // shows a notification for the user, if the member, he wants to add, is used in to many teams
  private showMemberInTooManyTeams() {
    const MemberInTooManyTeamsNotification: Notification = {
      id:          NOTIFICATION_OVERUSED_SCHUETZE,
      title:       'MANAGEMENT.SCHUETZE_HINZUFUEGEN.NOTIFICATION.OVERUSED.TITLE',
      description: 'MANAGEMENT.SCHUETZE_HINZUFUEGEN.NOTIFICATION.OVERUSED.DESCRIPTION',
      severity:    NotificationSeverity.INFO,
      origin:      NotificationOrigin.USER,
      type:        NotificationType.OK,
      userAction:  NotificationUserAction.PENDING
    };

    this.notificationService.observeNotification(NOTIFICATION_OVERUSED_SCHUETZE)
        .subscribe((myDuplicateNotification) => {
          if (myDuplicateNotification.userAction === NotificationUserAction.ACCEPTED) {
            this.saveLoading = false;
            this.router.navigateByUrl('/verwaltung/vereine/' + this.currentVerein.id
              + '/' + this.currentMannschaft.id + '/add');
          }
        });
    this.notificationService.showNotification(MemberInTooManyTeamsNotification);
  }

  // shows a notification for the user, if the member, he wants to add, already exists in the team
  private showDuplicateMember() {

      const duplicateMemberNotification: Notification = {
        id:          NOTIFICATION_DUPLICATE_SCHUETZE,
        title:       'MANAGEMENT.SCHUETZE_HINZUFUEGEN.NOTIFICATION.DUPLICATE.TITLE',
        description: 'MANAGEMENT.SCHUETZE_HINZUFUEGEN.NOTIFICATION.DUPLICATE.DESCRIPTION',
        severity:    NotificationSeverity.INFO,
        origin:      NotificationOrigin.USER,
        type:        NotificationType.OK,
        userAction:  NotificationUserAction.PENDING
      };

      this.notificationService.observeNotification(NOTIFICATION_DUPLICATE_SCHUETZE)
          .subscribe((myDuplicateNotification) => {
            if (myDuplicateNotification.userAction === NotificationUserAction.ACCEPTED) {
              this.saveLoading = false;
              this.router.navigateByUrl('/verwaltung/vereine/' + this.currentVerein.id
                + '/' + this.currentMannschaft.id + '/add');
            }
          });

      this.notificationService.showNotification(duplicateMemberNotification);
    }

  public onSearch() {
     const filteredMembers = this.members.filter((member) => {
        return (member.vorname.startsWith(this.vorname) || this.vorname.length === 0)
        && (member.nachname.startsWith(this.nachname) || this.nachname.length === 0)
        && (member.mitgliedsnummer.startsWith(this.mitgliedsnummer) || this.mitgliedsnummer.length === 0);
    });
     this.rows = toTableRows(filteredMembers);
  }

  // sets the current Mannschaft, to which the User wants to add the member
  private loadMannschaftById(id: number) {
    this.mannschaftProvider.findById(id)
        .then((response: BogenligaResponse<DsbMannschaftDO>) => this.handleMannschaftSuccess(response))
        .catch((response: BogenligaResponse<DsbMannschaftDO>) => this.handleMannschaftFailure(response));
  }

  private handleMannschaftSuccess(response: BogenligaResponse<DsbMannschaftDO>) {
    this.currentMannschaft = response.payload;
    this.loading = false;
    console.log(this.currentMannschaft);
    this.loadTableRows();
  }

  private handleMannschaftFailure(response: BogenligaResponse<DsbMannschaftDO>) {
    this.loading = false;
  }

  private loadTableRows() {
    this.loading = true;

    this.dsbMitgliedProvider.findAll()
        .then((response: BogenligaResponse<DsbMitgliedDTO[]>) => this.handleTableRowSuccess(response))
      .catch((response: BogenligaResponse<DsbMitgliedDTO[]>) => this.handleTableRowFailure(response));
  }

  private handleTableRowSuccess(response: BogenligaResponse<DsbMitgliedDTO[]>) {
    this.rows = [];
    this.members = [];
    this.members = response.payload;
    this.rows = toTableRows(response.payload);
    this.loading = false;
  }

  private handleTableRowFailure(response: BogenligaResponse<DsbMitgliedDTO[]>) {
    this.rows = [];
    this.loading = false;
  }

  private loadVereinById(id: number) {
    this.loading = true;
    this.vereineProvider.findById(id)
        .then((response: BogenligaResponse<VereinDTO>) => this.handleVereinSuccess(response))
        .catch((response: BogenligaResponse<VereinDTO>) => this.handleVereinFailure(response));
  }

  private handleVereinSuccess(response: BogenligaResponse<VereinDTO>) {
    this.currentVerein = response.payload;
    this.loading = false;
  }

  private handleVereinFailure(response: BogenligaResponse<VereinDTO>) {
    this.loading = false;
  }

}