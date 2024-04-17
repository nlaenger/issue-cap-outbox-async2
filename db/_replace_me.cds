namespace com.dscgmbh.poc.replace_me;

using {
    cuid,
    Country,
    Currency,
    sap.common.CodeList
} from '@sap/cds/common';
using from '@sap/cds-common-content';


entity Status : CodeList, {
    key code : String(20);
}

entity StepStatus : CodeList, {
    key code : String(20);
}

entity Belege : cuid {

    // cuid => Entity bekommt GUID key Feld mit dem Namen ID!
    amount : Decimal(10, 2);
    status : Association to one Status;
    waehrs : Currency;
    land   : Country;
    items  : Composition of many Positionen;
}

aspect Positionen : cuid {

    descr   : String(100);
    product : String(20);
    steps   : Composition of many Arbeitsschritte;
}

aspect Arbeitsschritte : cuid {

    stepName   : String(100);
    stepStatus : Association to StepStatus;
}
