import {Component, OnInit} from '@angular/core';
import {MatchDOExt} from '../../types/match-do-ext.class';
import {PasseDO} from '../../types/passe-do.class';
import {SchusszettelProviderService} from '../../services/schusszettel-provider.service';
import {BogenligaResponse} from '../../../shared/data-provider';
import {isUndefined} from '../../../shared/functions';
import {ActivatedRoute} from '@angular/router';
import {
  NotificationOrigin,
  NotificationService,
  NotificationSeverity,
  NotificationType,
  NotificationUserAction
} from '../../../shared/services';
import {NumberOnlyDirective} from './number.directive';

@Component({
  selector:    'bla-schusszettel',
  templateUrl: './schusszettel.component.html',
  styleUrls:   ['./schusszettel.component.scss']
})
export class SchusszettelComponent implements OnInit {

  match1: MatchDOExt;
  match2: MatchDOExt;

  constructor(private schusszettelService: SchusszettelProviderService,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {
  }

  /**
   * Called when component is initialized.
   *
   * Initializes the match objects needed for template bindings,
   * then reads the matchIds from url and gets them via schusszettel-service.
   */
  ngOnInit() {
    // initialwert schützen inputs

    this.match1 = new MatchDOExt(null, null, null, 1, 1, 1, 1, [], 1, 1, null, null);
    this.match1.nr = 1;
    this.match1.schuetzen = [];

    this.match2 = new MatchDOExt(null, null, null, 1, 1, 1, 1, [], 1, 1, null, null);
    this.match2.nr = 1;
    this.match2.schuetzen = [];

    this.initSchuetzen();
    this.route.params.subscribe((params) => {
      if (!isUndefined(params['match1id']) && !isUndefined(params['match2id'])) {
        const match1id = params['match1id'];
        const match2id = params['match2id'];
        this.schusszettelService.findMatches(match1id, match2id)
            .then((data: BogenligaResponse<Array<MatchDOExt>>) => {
              this.match1 = data.payload[0];
              this.match2 = data.payload[1];
              if (this.match1.schuetzen.length <= 0 || this.match2.schuetzen.length <= 0) {
                this.initSchuetzen();
              } else {
                this.initSumSatz();
                this.setPoints();
              }
            }, (error) => {
              console.error(error);
            });

      }
    });
  }

  /**
   * Called when ngModel for passe.ringzahlPfeilx changes.
   * If the new, inputed value contains a '+', the ringzahl is set to 10.
   * With the params, the correct PasseDO and its ringzahlPfeilx is selected and set.
   * The value is a string, so before setting the ringzahl it needs to be parsed to number.
   * After that, sets the match's sumSatzx depending on which Satz was edited.
   * @param value
   * @param matchNr
   * @param schuetzenNr
   * @param satzNr
   * @param pfeilNr
   */
  onChange(value: string, matchNr: number, schuetzenNr: number, satzNr: number, pfeilNr: number) {
    const match = this['match' + matchNr];
    const satz = match.schuetzen[schuetzenNr][satzNr];
    if (value.indexOf(NumberOnlyDirective.ALIAS_10) !== -1) {
      pfeilNr === 1 ? satz.ringzahlPfeil1 = NumberOnlyDirective.MAX_VAL : satz.ringzahlPfeil2 = NumberOnlyDirective.MAX_VAL;
    } else {
      let realValue = parseInt(value, 10); // value ist string, ringzahlen sollen number sein -> value in number
                                           // umwandeln
      realValue = realValue >= NumberOnlyDirective.MIN_VAL ? realValue : null;
      pfeilNr === 1 ? satz.ringzahlPfeil1 = realValue : satz.ringzahlPfeil2 = realValue;
    }
    match.sumSatz[satzNr] = this.getSumSatz(match, satzNr);
    this.setPoints();
  }

  save() {
    this.notificationService.showNotification({
      id:          'schusszettelSave',
      title:       'Lädt...',
      description: 'Schusszettel wird gespeichert...',
      severity:    NotificationSeverity.INFO,
      origin:      NotificationOrigin.USER,
      type:        NotificationType.OK,
      userAction:  NotificationUserAction.PENDING
    });
//    for (let j = 0; j < 5; j++) {
      //TODO
//    }
    this.schusszettelService.create(this.match1, this.match2)
        .then((data: BogenligaResponse<Array<MatchDOExt>>) => {
          this.match1 = data.payload[0];
          this.match2 = data.payload[1];
          this.initSumSatz();
          this.setPoints();
          this.notificationService.discardNotification();
        }, (error) => {
          console.error(error);
          this.notificationService.discardNotification();
        });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  /**
   * Initializes schuetzen-array of matches.
   * Pushes three arrays into schuetzen, then pushes five PasseDO in each of the three arrays.
   */
  private initSchuetzen() {
    for (let i = 0; i < 3; i++) {
      this.match1.schuetzen.push(new Array<PasseDO>());
      this.match2.schuetzen.push(new Array<PasseDO>());
      for (let j = 0; j < 5; j++) {
        if (i === 0) {
          this.match1.schuetzen[i].push(new PasseDO(null, this.match1.id, this.match1.mannschaftId, this.match1.wettkampfId, this.match1.nr, j + 1));
          this.match2.schuetzen[i].push(new PasseDO(null, this.match2.id, this.match2.mannschaftId, this.match2.wettkampfId, this.match2.nr, j + 1));
        } else if (i === 1) {
          this.match1.schuetzen[i].push(new PasseDO(null, this.match1.id, this.match1.mannschaftId, this.match1.wettkampfId, this.match1.nr, j + 1));
          this.match2.schuetzen[i].push(new PasseDO(null, this.match2.id, this.match2.mannschaftId, this.match2.wettkampfId, this.match2.nr, j + 1));
        } else {
          this.match1.schuetzen[i].push(new PasseDO(null, this.match1.id, this.match1.mannschaftId, this.match1.wettkampfId, this.match1.nr, j + 1));
          this.match2.schuetzen[i].push(new PasseDO(null, this.match2.id, this.match2.mannschaftId, this.match2.wettkampfId, this.match2.nr, j + 1));
        }
      }
    }
  }

  /**
   * Adds each ringzahlen of all three schuetzen of the match of the Satz and returns it.
   * @param match
   * @param satzNr
   */
  private getSumSatz(match: MatchDOExt, satzNr: number): number {
    let sum = 0;
    for (const i of Object.keys(match.schuetzen)) {
      sum += match.schuetzen[i][satzNr].ringzahlPfeil1;
      sum += match.schuetzen[i][satzNr].ringzahlPfeil2;
    }
    sum -= match.fehlerpunkte[satzNr];

    return sum;
  }

  /**
   * Sets satzpunkte and matchpunkte of both matches according to the sumSatzx and satzpunkte.
   */
  private setPoints() {
    // kumulativ
    if (this.match1.wettkampfTyp === 'Liga kummulativ') {
      this.setKummulativePoints();
    } else if (this.match1.wettkampfTyp === 'Liga Satzsystem') {
      this.setSatzPoints();
    }

    if (this.match1.satzpunkte >= 6) {
      this.match1.matchpunkte = 2;
      this.match2.matchpunkte = 0;
    } else if (this.match2.satzpunkte >= 6) {
      this.match1.matchpunkte = 0;
      this.match2.matchpunkte = 2;
    } else if (this.match2.satzpunkte === 5 && this.match1.satzpunkte === 5) {
      this.match1.matchpunkte = 1;
      this.match2.matchpunkte = 1;
    }
  }

  private setSatzPoints() {

    let counterMatch1 = 0;
    let counterMatch2 = 0;
    for (let i = 0; i < 5; i++) {
      if (this.match1.sumSatz[i] > this.match2.sumSatz[i]) {
        counterMatch1 += 2;
      } else if (this.match1.sumSatz[i] < this.match2.sumSatz[i]) {
        counterMatch2 += 2;
      } else if (this.match1.sumSatz[i] === this.match2.sumSatz[i] &&
        this.match1.sumSatz[i] > 0 && this.match2.sumSatz[i] > 0) {
        counterMatch1++;
        counterMatch2++;
      }
    }
    this.match1.satzpunkte = counterMatch1;
    this.match2.satzpunkte = counterMatch2;
    this.match1.matchpunkte = 0;
    this.match2.matchpunkte = 0;

    if (this.match1.satzpunkte > 7 || this.match2.satzpunkte > 7) {
      this.notificationService.showNotification({
        id: 'schusszettelEntschieden',
        title: 'Eingabefehler?',
        description: 'Satzpunkte >7',
        severity: NotificationSeverity.ERROR,
        origin: NotificationOrigin.SYSTEM,
        type: NotificationType.OK,
        userAction: NotificationUserAction.ACCEPTED
      });
    }
  }

  private setKummulativePoints() {
    let kumuluativ1 = 0;
    let kumuluativ2 = 0;

    for (let i = 0; i < 3; i++) {
      kumuluativ1 += this.match1.sumSatz[i];
      kumuluativ2 += this.match2.sumSatz[i];
    }

    if (kumuluativ1 > kumuluativ2) {
      this.match1.satzpunkte = 6;
      this.match2.satzpunkte = 0;
    } else if (kumuluativ1 < kumuluativ2) {
      this.match1.satzpunkte = 0;
      this.match2.satzpunkte = 6;
    }
  }

  private initSumSatz() {
    for (let i = 0; i < 5; i++) {
      this.match1.sumSatz[i] = this.getSumSatz(this.match1, i);
      this.match2.sumSatz[i] = this.getSumSatz(this.match2, i);
    }
  }

  private getSummeSchuetze(schuetzeNr: number, matchNr: number): number {
    let sum = 0;
    const match = this['match' + matchNr];
    for (const passe of match.schuetzen[schuetzeNr]) {
      sum += passe.ringzahlPfeil1 + passe.ringzahlPfeil2;
    }
    return sum;
  }
}
