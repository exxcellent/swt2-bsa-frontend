import {WettkampfErgebnis} from '@wettkampf/components/wettkampf/wettkampergebnis/WettkampfErgebnis';
import {VereinDO} from '@verwaltung/types/verein-do.class';
import {VeranstaltungDO} from '@verwaltung/types/veranstaltung-do.class';
import {MatchDO} from '@verwaltung/types/match-do.class';
import {DsbMannschaftDO} from '@verwaltung/types/dsb-mannschaft-do.class';
import {WettkampfDO} from '@verwaltung/types/wettkampf-do.class';
import {BogenligaResponse} from '@shared/data-provider';
import {DsbMannschaftDataProviderService} from '@verwaltung/services/dsb-mannschaft-data-provider.service';
import {MatchDataProviderService} from '@verwaltung/services/match-data-provider.service';
import {WettkampfDataProviderService} from '@verwaltung/services/wettkampf-data-provider.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserPermission} from '@shared/services';


@Injectable({
  providedIn: 'root'
})
export class WettkampfErgebnisService {
  // Input
  public verein: VereinDO;
  public veranstaltung: VeranstaltungDO;
  public sportjahr: number;
  public match: number;

  // Output
  public wettkampErgebnisse: WettkampfErgebnis[];

  // toLoad
  public matches: Array<MatchDO> = [];
  public mannschaften: Array<DsbMannschaftDO> = [];
  public wettkaempfe: Array<WettkampfDO> = [];
  public currentManschaft: DsbMannschaftDO;
  private loading = false;
  private currentWettkampf: WettkampfDO;

  constructor(private wettkampfDataProvider: WettkampfDataProviderService,
              private mannschaftsDataProvider: DsbMannschaftDataProviderService,
              private matchDataProvider: MatchDataProviderService) {

  }

  public createErgebnisse(jahr: number, mannschaft: DsbMannschaftDO, allMannschaften: DsbMannschaftDO[], veranstaltung: VeranstaltungDO, all: boolean): WettkampfErgebnis[] {
    this.setupService(jahr, mannschaft, allMannschaften, veranstaltung, all);
    return this.wettkampErgebnisse;

  }

  private setupService(jahr: number, mannschaft: DsbMannschaftDO, allMannschaften: DsbMannschaftDO[], veranstaltung: VeranstaltungDO, all: boolean) {
    this.currentManschaft = mannschaft;
    this.veranstaltung = veranstaltung;
    this.mannschaften = allMannschaften;
    this.sportjahr = jahr;
    this.loadWettkaempfe(all);
  }

  public createWettkampfergebnisse(all: boolean): WettkampfErgebnis[] {
    this.wettkampErgebnisse = [];
    console.log(this.matches);
    for (let i = 0; i < this.matches.length ; i = i + 2) {
      if (((this.currentManschaft.id === this.matches[i].mannschaftId || this.currentManschaft.id === this.matches[i + 1].mannschaftId) || all === true)) {
      const wettkampfErgebnis = new WettkampfErgebnis(this.matches[i].nr, this.getMannschaftsname(this.matches[i].mannschaftId), 0, 1, 2,
        3, 4, this.getMannschaftsname(this.matches[i + 1].mannschaftId), 1, 2,
        3, 4, 4, this.matches[i].satzpunkte + ' : ' + this.matches[i + 1].satzpunkte, this.matches[i].matchpunkte + ' : ' + this.matches[i + 1].matchpunkte);
      this.wettkampErgebnisse.push(wettkampfErgebnis);
    }
    }
    return this.wettkampErgebnisse;

  }
  public getMannschaftsname(id: number): string {
    for (const mannschaften of this.mannschaften) {
      if (mannschaften.id === id) {
        return mannschaften.name;
      }
    }
  }

  loadWettkaempfe(all: boolean) {
    this.wettkampfDataProvider.findAll()
        .then((response: BogenligaResponse<WettkampfDO[]>) => this.handleLoadWettkaempfe(response.payload, all))
        .catch((response: BogenligaResponse<VereinDO[]>) => this.handleLoadWettkaempfe([], all));
  }

  handleLoadWettkaempfe(wettkaempfe: WettkampfDO[], all: boolean) {
    this.wettkaempfe = wettkaempfe;
    this.loadMatches(all);
  }


  private filterMannschaften() {
    this.currentManschaft = this.mannschaften.filter((mannschaft) => mannschaft.veranstaltungId === this.veranstaltung.id
      && this.veranstaltung.sportjahr === this.sportjahr)[0];
  }

  public loadMatches(all: boolean) {
    this.matchDataProvider.findAll()
        .then((response: BogenligaResponse<MatchDO[]>) => this.handleLoadMatches(response.payload, all))
        .catch((response: BogenligaResponse<MatchDO[]>) => this.handleLoadMatches([], all));
  }

  handleLoadMatches(matches: MatchDO[], all: boolean): WettkampfErgebnis[] {
    this.matches = matches;
    for (const i of this.wettkaempfe) {
      if (i.wettkampfVeranstaltungsId === this.veranstaltung.id) {
        this.currentWettkampf = i;
      }
    }
    this.filterMannschaften();
    return this.createWettkampfergebnisse(all);
  }


}





