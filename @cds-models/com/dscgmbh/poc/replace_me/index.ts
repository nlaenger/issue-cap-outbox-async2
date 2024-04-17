// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../../_';
import * as _sap_common from './../../../../sap/common';
import * as _ from './../../../..';
// the following represents the CDS aspect 'Positionen'
export function _PositionenAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Positionen extends Base {
        descr?: string | null;
        product?: string | null;
        steps?: __.Composition.of.many<Arbeitsschritte_>;
      static actions: {
      }
  };
}
export class Positionen extends _._cuidAspect(_PositionenAspect(__.Entity)) {}
// the following represents the CDS aspect 'Arbeitsschritte'
export function _ArbeitsschritteAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Arbeitsschritte extends Base {
        stepName?: string | null;
        stepStatus?: __.Association.to<StepStatu> | null;
        stepStatus_code?: string | null;
      static actions: {
      }
  };
}
export class Arbeitsschritte extends _._cuidAspect(_ArbeitsschritteAspect(__.Entity)) {}
export function _StatuAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Statu extends Base {
        code?: string;
      static actions: {
      }
  };
}
export class Statu extends _sap_common._CodeListAspect(_StatuAspect(__.Entity)) {}
Object.defineProperty(Statu, 'name', { value: 'com.dscgmbh.poc.replace_me.Status' })
export class Status extends Array<Statu> {}
Object.defineProperty(Status, 'name', { value: 'com.dscgmbh.poc.replace_me.Status' })

export function _StepStatuAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class StepStatu extends Base {
        code?: string;
      static actions: {
      }
  };
}
export class StepStatu extends _sap_common._CodeListAspect(_StepStatuAspect(__.Entity)) {}
Object.defineProperty(StepStatu, 'name', { value: 'com.dscgmbh.poc.replace_me.StepStatus' })
export class StepStatus extends Array<StepStatu> {}
Object.defineProperty(StepStatus, 'name', { value: 'com.dscgmbh.poc.replace_me.StepStatus' })

export function _BelegeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Belege extends Base {
        amount?: number | null;
        status?: __.Association.to<Statu> | null;
        status_code?: string | null;
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
        waehrs?: _.Currency | null;
        waehrs_code?: string | null;
    /**
    * Type for an association to Countries
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-country
    */
        land?: _.Country | null;
        land_code?: string | null;
        items?: __.Composition.of.many<Positionen_>;
      static actions: {
      }
  };
}
export class Belege extends _._cuidAspect(_BelegeAspect(__.Entity)) {}
Object.defineProperty(Belege, 'name', { value: 'com.dscgmbh.poc.replace_me.Belege' })
export class Belege_ extends Array<Belege> {}
Object.defineProperty(Belege_, 'name', { value: 'com.dscgmbh.poc.replace_me.Belege' })
