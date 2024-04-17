// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
import * as _ from './..';
import * as _sap_common from './../sap/common';
export default { name: 'event_service' }
export function _BelegeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Belege extends Base {
        ID?: string;
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
Object.defineProperty(Belege, 'name', { value: 'event_service.Belege' })
export class Belege_ extends Array<Belege> {}
Object.defineProperty(Belege_, 'name', { value: 'event_service.Belege' })

export function _PositionenAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Positionen extends Base {
        up_?: __.Association.to<Belege>;
        up__ID?: string;
        ID?: string;
        descr?: string | null;
        product?: string | null;
        steps?: __.Composition.of.many<Arbeitsschritte_>;
      static actions: {
      }
  };
}
export class Positionen extends _PositionenAspect(__.Entity) {}
Object.defineProperty(Positionen, 'name', { value: 'event_service.Positionen' })
export class Positionen_ extends Array<Positionen> {}
Object.defineProperty(Positionen_, 'name', { value: 'event_service.Positionen' })

export function _ArbeitsschritteAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Arbeitsschritte extends Base {
        up_?: __.Association.to<Positionen>;
        up__ID?: string;
        up__up__ID?: string;
        ID?: string;
        stepName?: string | null;
        stepStatus?: __.Association.to<StepStatu> | null;
        stepStatus_code?: string | null;
      static actions: {
      }
  };
}
export class Arbeitsschritte extends _ArbeitsschritteAspect(__.Entity) {}
Object.defineProperty(Arbeitsschritte, 'name', { value: 'event_service.Arbeitsschritte' })
export class Arbeitsschritte_ extends Array<Arbeitsschritte> {}
Object.defineProperty(Arbeitsschritte_, 'name', { value: 'event_service.Arbeitsschritte' })

export function _StatuAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Statu extends Base {
        code?: string | null;
      static actions: {
      }
  };
}
export class Statu extends _sap_common._CodeListAspect(_StatuAspect(__.Entity)) {}
Object.defineProperty(Statu, 'name', { value: 'com.dscgmbh.poc.replace_me.Status' })
export class Status extends Array<Statu> {}
Object.defineProperty(Status, 'name', { value: 'com.dscgmbh.poc.replace_me.Status' })

/**
* Code list for currencies
* 
* See https://cap.cloud.sap/docs/cds/common#entity-currencies
*/
export function _CurrencyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Currency extends Base {
        code?: string | null;
        symbol?: string | null;
        minorUnit?: number | null;
      static actions: {
      }
  };
}
export class Currency extends _sap_common._CodeListAspect(_CurrencyAspect(__.Entity)) {}
Object.defineProperty(Currency, 'name', { value: 'sap.common.Currencies' })
export class Currencies extends Array<Currency> {}
Object.defineProperty(Currencies, 'name', { value: 'sap.common.Currencies' })

/**
* Code list for countries
* 
* See https://cap.cloud.sap/docs/cds/common#entity-countries
*/
export function _CountryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Country extends Base {
        code?: string | null;
      static actions: {
      }
  };
}
export class Country extends _sap_common._CodeListAspect(_CountryAspect(__.Entity)) {}
Object.defineProperty(Country, 'name', { value: 'sap.common.Countries' })
export class Countries extends Array<Country> {}
Object.defineProperty(Countries, 'name', { value: 'sap.common.Countries' })

export function _StepStatuAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class StepStatu extends Base {
        code?: string | null;
      static actions: {
      }
  };
}
export class StepStatu extends _sap_common._CodeListAspect(_StepStatuAspect(__.Entity)) {}
Object.defineProperty(StepStatu, 'name', { value: 'com.dscgmbh.poc.replace_me.StepStatus' })
export class StepStatus extends Array<StepStatu> {}
Object.defineProperty(StepStatus, 'name', { value: 'com.dscgmbh.poc.replace_me.StepStatus' })

// event
export class TestEvent1 {
    ID: string | null;
    name: string | null;
}
// event
export class TestEvent2 {
    ID: string | null;
    name: string | null;
}
// event
export class TestEvent3 {
    ID: string | null;
    name: string | null;
}