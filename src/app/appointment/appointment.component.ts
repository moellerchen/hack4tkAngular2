import {Component, OnInit} from '@angular/core';
import {TermineService} from "../termine/termine.service";
import {Termin} from "../termine/termin";
import {User} from "../users/user";
import {Attendance} from "../termine/attendance";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {UsersService} from "../users/users.service";
import {AttendanceService} from "../termine/attendance.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  private termine: Termin[];
  private attendances: Attendance[];
  showTable = false;

  constructor(private termineService: TermineService,
              private attendanceService: AttendanceService,
              private authService: AuthService) {
    console.log('Start terminService');
    this.termineService.getTermine()
      .subscribe(
        (data: any[]) => {
          this.termine = data;
          this.displayTermine();
        }
      );
    attendanceService.getData()
      .subscribe(
        (data: any[]) => {
          this.attendances = data;
          console.log(this.attendances);
        }
      );
  }

  ngOnInit() {

  }

  displayTermine() {
    if(this.termine) {
      this.showTable = true;
      return this.termine;
    }

  }

  zusage(terminId: number) {
    let tempTermin = this.termineService.getTerminById(this.termine, terminId);
    if (tempTermin) {
      this.attendanceService.setAttendance(tempTermin, this.authService.currentUser, true, this.attendances).subscribe();
      alert("Dem Termin mit der ID" + terminId + " wurde zugesagt!");
    }
  }

  absage(terminId: number) {
    let tempTermin = this.termineService.getTerminById(this.termine, terminId);
    if (tempTermin) {
      this.attendanceService.setAttendance(tempTermin, this.authService.currentUser, false, this.attendances).subscribe();
      alert("Dem Termin mit der ID" + terminId + " wurde abgesagt!");
    }
  }

  isAttending(termin): String {
    if (this.attendances) {
      let attendance = this.attendanceService.getAttendanceOfUser(termin, this.authService.currentUser, this.attendances);
      if (attendance != null) {
        return attendance.teilnahme;
      }
      return 'na';
    }
  }
}
