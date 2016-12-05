import {Attendance} from "./attendance";
export class Termin {

  constructor(public id: number,
              public anlass: String,
              public datum: String,
              public uhrzeit: String,
              public ort_treffen: String,
              public ort_auftritt: String,
              public kleidung: String,
              public kommentar: String,
              public sichtbar: boolean,
              public oeffentlich: boolean
  ) {

  }
}
