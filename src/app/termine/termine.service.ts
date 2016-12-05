import {Injectable, OnInit} from '@angular/core';
import {Termin} from './termin';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from "../users/user";
import {Observer} from "rxjs";
import {Attendance} from "./attendance";
import {AppointmentComponent} from "../appointment/appointment.component";

@Injectable()
export class TermineService {

  newTermin = {
    anlass: '',
    datum: '',
    uhrzeit: '',
    ort_treffen: '',
    ort_auftritt: '',
    tkh_kleidung_id: 6,
    kommentar: '',
    sichtbar: false,
    oeffentlich: false
  };

  constructor(private http: Http) {
  }

  getTermine() {
    console.log("get data from node: ");
    return this.http.get('http://localhost:3000/termine')
      .map((response: Response) => response.json());
  }

  getTerminById(termine: Termin[], terminId: number): Termin {
    for (let termin of termine) {
      if (termin.id == terminId) {
        return termin
      }
    }
    console.log("Termin not found Termin-ID " + terminId);
    return null;
  }

  //Testen: !
  setTermin(anlass: string, datum: string, uhrzeit: string, ort: string, kleidung: number) {

    this.newTermin.anlass = anlass;
    this.newTermin.datum = datum;
    this.newTermin.uhrzeit = uhrzeit;
    this.newTermin.ort_treffen = ort;
    this.newTermin.tkh_kleidung_id = kleidung;


    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(this.newTermin);


    console.log("Setting Termin:");
    return this.http.post('http://localhost:3000/createTermin', body, options).map((res: Response) => res.json());
  }

  putTermin() {

  }


}
