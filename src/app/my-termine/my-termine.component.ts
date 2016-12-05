import { Component, OnInit } from '@angular/core';
import {Termin} from "../termine/termin";
import {Attendance} from "../termine/attendance";
import {AttendanceService} from "../termine/attendance.service";
import {TermineService} from "../termine/termine.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-my-termine',
  templateUrl: './my-termine.component.html',
  styleUrls: ['./my-termine.component.css']
})
export class MyTermineComponent implements OnInit {

  showTable = true;
  private termine: Termin[];
  private attendances: Attendance[];

  constructor(private termineService: TermineService,
              private attendanceService: AttendanceService,
              private authServie: AuthService) {
    this.termineService.getTermine()
      .subscribe(
        (data: any[]) => {
          this.termine = data;
        }
      );
    this.attendanceService.getData()
      .subscribe(
        (data: any[]) => {
          this.attendances = data;
          console.log(this.attendances);
        }
      );
  }


  ngOnInit() {
  }

  getTermineOfCurrentUser(): Termin[]{
      let attendetTermine: Termin[] = [];
      if (this.attendances) {
        for (let attendance of this.attendances) {
          if (attendance.wp_users_id == this.authServie.currentUser.ID && attendance.teilnahme == Attendance.ZUSAGE) {
            let tempTermin = this.termineService.getTerminById(this.termine, attendance.tkh_termine_id)
            if (tempTermin != null) attendetTermine.push(tempTermin);
          }
        }
      }
      return attendetTermine;
  }


}
