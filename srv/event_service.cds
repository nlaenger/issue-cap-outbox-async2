using {com.dscgmbh.poc.replace_me as db} from '../db/_replace_me';


service event_service {

  entity Belege          as projection on db.Belege;
  entity Positionen      as projection on db.Belege.items;
  entity Arbeitsschritte as projection on db.Belege.items.steps;

  event TestEvent1 {
    ID   : UUID;
    name : String;
  }

  event TestEvent2 {
    ID   : UUID;
    name : String;
  }

  event TestEvent3 {
    ID   : UUID;
    name : String;
  }
};
