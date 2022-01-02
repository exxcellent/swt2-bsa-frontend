import {DataTransferObject} from '@shared/data-provider';

export class LigasyncligatabelleDtoClass implements DataTransferObject {
  id: number;
  version: number;

  veranstaltungId: number;
  veranstaltungName: string;
  wettkampfId: number;
  wettkampfTag: number;
  mannschaftId: number;
  mannschaftName: string;
  matchpkt: number;
  matchpktGegen: number;
  satzpkt: number;
  satzpktGegen: number;
  satzpktDifferenz: number;
  sortierung: number;
  tabellenplatz: number;

  static copyFrom(optional: {
    id?: number,
    version?: number,
    veranstaltungId?: number,
    veranstaltungName?: string,
    wettkampfId?: number,
    wettkampfTag?: number,
    mannschaftId?: number,
    mannschaftName?: string,
    matchpkt?: number,
    matchpktGegen?: number,
    satzpkt?: number,
    satzpktGegen?: number,
    satzpktDifferenz?: number,
    sortierung?: number,
    tabellenplatz?: number,
  } = {}): LigasyncligatabelleDtoClass {
    const copy = new LigasyncligatabelleDtoClass();
    if (optional.id >= 0) {
      copy.id = optional.id;
    } else {
      copy.id = null;
    }
    copy.version = optional.version || 1;
    copy.veranstaltungId = optional.veranstaltungId || null;
    copy.veranstaltungName = optional.veranstaltungName || null;
    copy.wettkampfId = optional.wettkampfId || null;
    copy.wettkampfTag = optional.wettkampfTag || null;
    copy.mannschaftId = optional.mannschaftId || null;
    copy.mannschaftName = optional.mannschaftName || null;
    copy.matchpkt = optional.matchpkt || null;
    copy.matchpktGegen = optional.matchpktGegen || null;
    copy.satzpkt = optional.satzpkt || null;
    copy.satzpktGegen = optional.satzpktGegen || null;
    copy.satzpktDifferenz = optional.satzpktDifferenz || null;
    copy.sortierung = optional.sortierung || null;
    copy.tabellenplatz = optional.tabellenplatz || null;
    return copy;
  }
}
