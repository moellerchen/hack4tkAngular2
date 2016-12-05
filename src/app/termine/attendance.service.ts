import {Injectable} from '@angular/core';
import {Attendance} from "./attendance";
import {Termin} from "./termin";
import {TermineService} from "./termine.service";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {UsersService} from "../users/users.service";
import {User} from "../users/user";

@Injectable()
export class AttendanceService {

  private attendances: Attendance[];
  private termine: Termin[];


  constructor(private http: Http, private termineService: TermineService, private usersService: UsersService) {
    console.log('Start terminService');
    this.termineService.getTermine()
      .subscribe(
        (data: any[]) => {
          this.termine = data;
          console.log("received data: ");
          console.log(this.termine);
        }
      );
  }

  getData() {
    console.log("getAttendanceData");
    return this.http.get('http://localhost:3000/attendances').map((response: Response) => response.json());
  }

  getAttendanceOfUser(termin: Termin, user: User, attendances: Attendance[]) {
    for (let attendance of attendances) {
      if (attendance.wp_users_id == user.ID && attendance.tkh_termine_id == termin.id) {
        return attendance;
      }
    }
    return null;
  }

  setAttendance(termin: Termin, user: User, isAttending: boolean, attendances: Attendance[]) {

    let isAttendingString = Attendance.NICHT_ANGEGEBEN;


    if (isAttending) {
      isAttendingString = Attendance.ZUSAGE;
    } else {
      isAttendingString = Attendance.ABSAGE;
    }

    let tempAttendance = this.getAttendanceOfUser(termin, user, attendances);

    if (tempAttendance != null) {
      tempAttendance.teilnahme = isAttendingString;
    } else {
      tempAttendance = new Attendance(termin.id, user.ID, isAttendingString);
      attendances.push(tempAttendance);
    }


    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(tempAttendance);


    console.log("Setting Attendance:");
    console.log(tempAttendance);
    return this.http.put('http://localhost:3000/setAttendance', body, options).map((res: Response) => res.json());
  }


}
