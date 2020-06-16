import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {REGIONEN_CONFIG} from './regionen.config';
import Sunburst from 'sunburst-chart';
import {RegionDO} from '@verwaltung/types/region-do.class';
import {VereinDO} from '@verwaltung/types/verein-do.class';
import {BogenligaResponse} from '@shared/data-provider';
import {ChartNode} from './ChartNode';
import {VereinDataProviderService} from '@verwaltung/services/verein-data-provider.service';
import {LigaDataProviderService} from '@verwaltung/services/liga-data-provider.service';
import {RegionDataProviderService} from '../../../verwaltung/services/region-data-provider.service';
import {LigaDO} from '@verwaltung/types/liga-do.class';
import {LigaDTO} from '@verwaltung/types/datatransfer/liga-dto.class';
import {VereinDTO} from '@verwaltung/types/datatransfer/verein-dto.class';
import {RoleVersionedDataObject} from '@verwaltung/services/models/roles-versioned-data-object.class';
import {Router} from '@angular/router';
//import {LigatabelleComponent} from '../../../ligatabelle/components/ligatabelle/ligatabelle.component';
//import {VeranstaltungDO} from '@verwaltung/types/veranstaltung-do.class';


const chartMaxSizeMultiplikator = 0.8;
const chartDetailsSizeMultiplikator = 0.5;

@Component({
  selector:    'bla-regionen',
  templateUrl: './regionen.component.html',
  styleUrls: ['./regionen.component.scss']
})

export class RegionenComponent implements OnInit {

  public config = REGIONEN_CONFIG;
  private regionen: RegionDO[];

  public currentRegionDO: RegionDO;

  private selectedVereinDO: VereinDO;
  private selectedLigaDO: LigaDO;

  private ligen: LigaDTO[];
  private vereine: VereinDTO[];


  @ViewChild('chart') myDiv: ElementRef;

  constructor(private regionDataProviderService: RegionDataProviderService,
              private vereinDataProviderService: VereinDataProviderService,
              private ligaDataProviderService: LigaDataProviderService,
              private router: Router) {
  }

  ngOnInit() {
    this.getDataAndShowSunburst();
    this.currentRegionDO = new RegionDO();
  }

  convertDataToTree(currentRegion: RegionDO, allRegions: RegionDO[]): ChartNode {

    const root = new ChartNode(currentRegion.regionName, this.createColor(currentRegion), currentRegion.id);

    // console.log(currentRegion.regionName);
    if (currentRegion.regionTyp === 'KREIS') {
      return root;
    }
    allRegions.filter((region) => region.regionUebergeordnet === currentRegion.id)
              .forEach((r) => root.add(this.convertDataToTree(r, allRegions)));

    return root;
  }

  createColor(currentRegion: RegionDO): string {

    let color = '';

    if (currentRegion == null) {
      color = 'grey';
    } else if (currentRegion.regionTyp === 'BUNDESVERBAND') {
      color = 'yellow';
    } else if (currentRegion.regionTyp === 'LANDESVERBAND') {
      color = 'red';
    } else if (currentRegion.regionTyp === 'BEZIRK') {
      color = 'blue';
    } else if (currentRegion.regionTyp === 'KREIS') {
      color = 'black';
    }
    return color;
  }

  getDataAndShowSunburst() {
    this.regionDataProviderService.findAll()
        .then((response: BogenligaResponse<RegionDO[]>) => {
            this.regionen = response.payload;
            this.loadSunburst();
          }
        );
  }


  loadSunburst() {
    const desc: HTMLInputElement = document.querySelector('#descriptionWrapper') as HTMLInputElement;
    desc.style.display = 'block';

    const data = this.convertDataToTree(this.regionen.filter((f) =>
      f.regionTyp === 'BUNDESVERBAND')[0], this.regionen).toJsonString();

    const myChart = Sunburst();

    myChart
      .data(JSON.parse(data))
      .width(window.innerWidth * chartMaxSizeMultiplikator)
      .height(window.innerHeight * chartMaxSizeMultiplikator)
      .size('size')
      .color('color')
      .onNodeClick((node) => {
        // what should happen after clicking the node
        myChart.focusOnNode(node);

        if (node == null) {
          myChart.width(window.innerWidth * chartMaxSizeMultiplikator);
          myChart.height(window.innerHeight * chartMaxSizeMultiplikator);
        } else {
          myChart.width(window.innerWidth * chartDetailsSizeMultiplikator);
          myChart.height(window.innerHeight * chartDetailsSizeMultiplikator);
        }
        this.showDetails(node);

        })
      (this.myDiv.nativeElement);


    // for automatic resizing
    window.addEventListener('resize', (func) => {
      const node = myChart.focusOnNode();
      if (node != null) {
        myChart
          .width(window.innerWidth * chartDetailsSizeMultiplikator)
          .height(window.innerHeight * chartDetailsSizeMultiplikator);
      } else {
        myChart
          .width(window.innerWidth * chartMaxSizeMultiplikator)
          .height(window.innerHeight * chartMaxSizeMultiplikator);
      }
    });
  }

  showDetails(node) {
    if (node != null) {

      this.regionDataProviderService.findById(node.id)
          .then((response: BogenligaResponse<RegionDO>) => {
              this.currentRegionDO = response.payload;
              this.reloadVereineUndLigen();
              const details: HTMLInputElement = document.querySelector('#detailsWrapper') as HTMLInputElement;
              details.style.display = 'block';
              const desc: HTMLInputElement = document.querySelector('#descriptionWrapper') as HTMLInputElement;
              desc.style.display = 'none';
              const desc1: HTMLInputElement = document.querySelector('#descriptionWrapperClose') as HTMLInputElement;
              desc1.style.display = 'block';
            }
          );
    } else {
      const details: HTMLInputElement = document.querySelector('#detailsWrapper') as HTMLInputElement;
      details.style.display = 'none';
      const desc: HTMLInputElement = document.querySelector('#descriptionWrapper') as HTMLInputElement;
      desc.style.display = 'block';
      const desc1: HTMLInputElement = document.querySelector('#descriptionWrapperClose') as HTMLInputElement;
      desc1.style.display = 'none';
    }
  }

  reloadVereineUndLigen() {
    this.vereinDataProviderService.findAll()
        .then((response: BogenligaResponse<VereinDO[]>) => this.setVereinDataObjects(response))
        .catch((response: BogenligaResponse<VereinDO[]>) => this.getEmptyList());

    this.ligaDataProviderService.findAll()
        .then((response: BogenligaResponse<LigaDO[]>) => this.setLigaDataObjects(response))
        .catch((response: BogenligaResponse<LigaDO[]>) => this.getEmptyList());
  }

  public getVereine() {
    return this.vereine;
  }

  public getLigen() {
    return this.ligen;
  }

  public setVereinDataObjects(response: BogenligaResponse<VereinDO[]>): void {

    this.vereine = [];
    response.payload.forEach((responseItem) => {
      if (responseItem.regionId === this.currentRegionDO.id) {
        this.vereine.push(responseItem);
      }
    });
    return;
  }

  public setLigaDataObjects(response: BogenligaResponse<LigaDO[]>): void {

    this.ligen = [];
    response.payload.forEach((responseItem) =>  {
       if (responseItem.regionId === this.currentRegionDO.id) {
        this.ligen.push(responseItem);
      }
    });

    return;
  }

  public onSelectVerein(event: VereinDO): void {
    this.selectedVereinDO = event[0];
    this.router.navigateByUrl('/verwaltung/vereine/' + this.selectedVereinDO.id);
  }

  public onSelectLiga(event: LigaDO): void {
    this.selectedLigaDO = event[0];
    console.log(this.selectedLigaDO);
    this.router.navigateByUrl('/ligatabelle/' + this.selectedLigaDO.id);
    //this.router.navigateByUrl('/ligatabelle');
  }

  public getEmptyList(): RoleVersionedDataObject[] {
    return [];
  }

}
