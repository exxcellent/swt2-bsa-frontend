import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined, isUndefined} from '@shared/functions';
import {ButtonType, CommonComponentDirective} from '../../../../shared/components';

import {EINSTELLUNGEN_DETAIL_CONFIG} from './einstellungen-detail.config';

import {DsbMitgliedDataProviderService} from '@verwaltung/services/dsb-mitglied-data-provider.service';
import {DSB_MITGLIED_DETAIL_CONFIG} from '@verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.config';
import {DsbMitgliedDO} from '@verwaltung/types/dsb-mitglied-do.class';
import {VereinDO} from '@verwaltung/types/verein-do.class';
import {VereinDataProviderService} from '@verwaltung/services/verein-data-provider.service';
import {HttpClient} from '@angular/common/http';
import {
  CurrentUserService,
  Notification, NotificationOrigin,
  NotificationService,
  NotificationSeverity, NotificationType, NotificationUserAction,
  UserPermission
} from '@shared/services';
import {EinstellungenDO} from '@verwaltung/types/einstellungen-do.class';
import {EinstellungenProviderService} from '@verwaltung/services/einstellungen-data-provider.service';
import {BogenligaResponse, RequestResult} from '@shared/data-provider';
import {toTableRows} from '../../../../shared/components/tables';
import {EinstellungenDTO} from '@verwaltung/types/datatransfer/einstellungen-dto.class';
import {LigaDO} from '@verwaltung/types/liga-do.class';
import {UserProfileDO} from '@user/types/user-profile-do.class';
import {UserProfileDTO} from '@user/types/model/user-profile-dto.class';
import {VeranstaltungDO} from '@verwaltung/types/veranstaltung-do.class';
import {TableRow} from '@shared/components/tables/types/table-row.class';


const ID_PATH_PARAM = 'id';
const NOTIFICATION_UPDATE_EINSTELLUNG = 'einstellung_detail_update';
const NOTIFICATION_SAVE_EINSTELLUNG = 'einstellung_detail_save';

@Component({
  selector: 'bla-einstellungen-detail',
  templateUrl: './einstellungen-detail.component.html',
  styleUrls: ['./einstellungen-detail.component.scss']
})
export class EinstellungenDetailComponent extends CommonComponentDirective implements OnInit {
  public config = EINSTELLUNGEN_DETAIL_CONFIG;
  public ButtonType = ButtonType;
  public currentEinstellung: EinstellungenDO= new EinstellungenDO();
  public neucurrentEinstellung: EinstellungenDO= new EinstellungenDO();
  public allEinstellungen: Array<EinstellungenDO> = [new EinstellungenDO()];




  //public currentMitglied: DsbMitgliedDO = new DsbMitgliedDO();
  //public currentVerein: VereinDO = new VereinDO();
  // public vereine: Array<VereinDO> = [new VereinDO()];
  //public vereine: VereinDO[];
  // public currentVerein: VereinDO;

  //public dsbMitgliedNationalitaet: string[];
  public loadingVereine = true;

  public vereineLoaded;

  public  nationen: Array<string> = [];

  public currentMitgliedNat: string;
  public deleteLoading = false;
  public saveLoading = false;
  public rows: TableRow[];
  public id;
  public test = "app.bogenliga.frontend.autorefresh.active";

  constructor(private einstellungenDataProvider: EinstellungenProviderService,private router: Router,private route: ActivatedRoute,private notificationService: NotificationService, private einstellungenProviderService:EinstellungenProviderService,private httpService: HttpClient, ) {
    super();
  }

  public entityExists(): boolean {
    return this.currentEinstellung.id >= 0;
  }


  public onSave(ignore: any): void {
    this.saveLoading = true;

    this.currentEinstellung.value = this.neucurrentEinstellung.value;

  }

  //console.log('current nation: ' + this.currentMitgliedNat);
  //console.log('current kampfrichter: ' + this.currentMitglied.kampfrichter);

  //for (let i = 0; i < this.nationen.length; i++) {
  //if (this.nationen[i] === this.currentMitgliedNat) {
  //this.currentMitglied.nationalitaet = this.nationenKuerzel[i];
  //}
  //}

  // müssen ersetzt werden
  //public currentMitglied: DsbMitgliedDO = new DsbMitgliedDO();
  //public currentVerein: VereinDO = new VereinDO();
  //public nationen: Array<string> = [];
  //public nationenKuerzel: Array<string> = [];
  //public currentMitgliedNat: string;



  ngOnInit() {

    this.loading = true;
    //this.notificationService.discardNotification();
    this.route.params.subscribe((params) => {
      if (!isUndefined(params[ID_PATH_PARAM])) {
        this.id = params[ID_PATH_PARAM];
        if (this.id === 'add') {
          this.currentEinstellung = new EinstellungenDO();
          console.log("test");


          //this.loadAllEinstellungen();

          this.loading = false;
          this.deleteLoading = false;
          this.saveLoading = false;
        } else {


          this.loadById(params[ID_PATH_PARAM]);
        }
      }
    });





  };


  private handleLoadTableRowsSuccess(response: BogenligaResponse<EinstellungenDTO[]>): void {

    this.rows = []; // reset array to ensure change detection
    this.rows = toTableRows(response.payload);
    this.loading = false;


  }


  private loadById(id:string) {

    console.log("loadByid wurde aufgerufen");

    this.einstellungenProviderService.findById(id)
        .then((response: BogenligaResponse<EinstellungenDO>) =>this.handleSuccess(response))
        .catch((response: BogenligaResponse<EinstellungenDO>) => this.handleSuccess(response));
  }


  private handleSuccess(response: BogenligaResponse<EinstellungenDO>) {
    this.currentEinstellung = response.payload;
    this.loading = false;






  }

  private handleLoadTableRowsFail(response: BogenligaResponse<EinstellungenDTO[]>) {
    this.loading = false;

  }







  private handleUserResponseArraySuccess(response: BogenligaResponse<EinstellungenDO[]>): void {
    this.allEinstellungen = [];
    this.allEinstellungen = response.payload;
    if (this.id === 'add') {
      this.currentEinstellung = this.allEinstellungen[0];
    } else {
      this.currentEinstellung = this.allEinstellungen.filter((user) => user.id === this.currentEinstellung.id)[0];
    }
    this.loading = false;
  }

  private handleUserResponseArrayFailure(response: BogenligaResponse<EinstellungenDTO[]>): void {
    this.allEinstellungen = [];
    this.loading = false;
  }

  //private loadingeinstellung(type: string){
  //this.dbsProvider.findAll(type)
  //.then((response)=>{
  //this.handle
  //} )
  //}


  changevalue($event: MouseEvent) {
    this.saveLoading = true;


    this.currentEinstellung.value = this.neucurrentEinstellung.value;


    this.einstellungenProviderService.update(this.currentEinstellung)
        .then((response: BogenligaResponse<EinstellungenDO>) => {
          if (!isNullOrUndefined(response)
            && !isNullOrUndefined(response.payload)
            && !isNullOrUndefined(response.payload.id)) {
          }

          const id = this.currentEinstellung.id;

        }, (response: BogenligaResponse<EinstellungenDO>) => {
          console.log('Failed');
          this.saveLoading = false;
        });


  }


  createEinstellung($event: MouseEvent) {
    this.saveLoading = true;

    // persist
    //this.currentEinstellung.key = this.currentEinstellung.key; // Set selected region id
    //this.currentEinstellung.id = 10;

    console.log('Saving verein: ', this.currentEinstellung);

    this.einstellungenProviderService.findAll()
        .then((response: BogenligaResponse<EinstellungenDTO[]>) => this.currentEinstellung.id = response.payload.length+1)

    this.einstellungenProviderService.create(this.currentEinstellung)
        .then((response: BogenligaResponse<EinstellungenDO>) => {
          if (!isNullOrUndefined(response)
            && !isNullOrUndefined(response.payload)
            && !isNullOrUndefined(response.payload.id)) {
            console.log('Saved with id: ' + response.payload.id);

            const notification: Notification = {
              id:          NOTIFICATION_SAVE_EINSTELLUNG,
              title:       'MANAGEMENT.EINSTELLUNG_DETAIL.NOTIFICATION.SAVE.TITLE',
              description: 'MANAGEMENT.EINSTELLUNG_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
              severity:    NotificationSeverity.INFO,
              origin:      NotificationOrigin.USER,
              type:        NotificationType.OK,
              userAction:  NotificationUserAction.PENDING
            };
            /*
            this.notificationService.observeNotification(NOTIFICATION_SAVE_EINSTELLUNG)
                .subscribe((myNotification) => {
                  if (myNotification.userAction === NotificationUserAction.ACCEPTED) {
                    this.saveLoading = false;
                    this.router.navigateByUrl('/verwaltung/einstellungen/' + response.payload.key);
                  }
                });

            this.notificationService.showNotification(notification);
            */
          }
        }, (response: BogenligaResponse<EinstellungenDO>) => {
          console.log('Failed');
          this.saveLoading = false;


        });






  }
}

