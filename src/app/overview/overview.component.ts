import {Component, OnInit} from '@angular/core';
import {AttendanceService} from "../termine/attendance.service";
import {Attendance} from "../termine/attendance";
import {terminTeilnahme} from "./terminTeilnahme";
import {isNullOrUndefined} from "util";
import {TermineService} from "../termine/termine.service";
import {Termin} from "../termine/termin";
import {UsersService} from "../users/users.service";
import {User} from "../users/user";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private attendances: Attendance[];
  private users: User[];
  private terminTeilnahme: terminTeilnahme[];
  private termine: Termin[];
  showTableOverview = true;

  constructor(private attendanceService: AttendanceService, private termineService: TermineService, private usersService: UsersService) {
    this.attendanceService.getData()
      .subscribe(
        (data: any[]) => {
          this.attendances = data;
          console.log(this.attendances);
          this.displayTermine();
        }
      );

    this.termineService.getTermine()
      .subscribe(
        (data: any[]) => {
          this.termine = data;
          console.log(this.termine);
        });

    this.usersService.getData()
      .subscribe(
        (data: any[]) => {
          this.users = data;
          console.log(this.users);
        }
      );

  }

  ngOnInit() {

  }


  displayTermine() {

    let termine: string[];


    if (this.users && this.termine && this.attendances) {

      //represents entries in mainTeilnahme
      let z = 0;

      let mainTeilnahme = [{
        "termin": "",
        "datum": "",
        "userZu": [],
        "userAb": []
      }];

      if (!this.attendances[0]) {

      } else {
       //Fill in first data in termine
        termine = [(this.attendances[0].tkh_termine_id.toString())];

        //collect termine
        let i = 0;
        for (let attendance of this.attendances) {
          if (attendance.tkh_termine_id.toString() != termine[i]) {
            termine.push(attendance.tkh_termine_id.toString());
          }
          i += 1;
        }

        //push users for each termin
        for (let i in termine) {



          let tempTeilnahme = {
            "termin": "",
            "datum": "",
            "userZu": [],
            "userAb": []
          };

          tempTeilnahme.termin = termine[i];

          //fill in right data
          for (let attendance of this.attendances) {
            if (tempTeilnahme.termin === attendance.tkh_termine_id.toString()) {
              if (attendance.teilnahme === Attendance.ZUSAGE) {
                for (let use of this.users) {
                  if (use.ID.toString() === attendance.wp_users_id.toString()) {
                    tempTeilnahme.userZu.push(use.user_nicename.toString());
                  }
                }

              } else if (attendance.teilnahme === Attendance.ABSAGE) {
                for (let use of this.users) {
                  if (use.ID.toString() === attendance.wp_users_id.toString()) {
                    tempTeilnahme.userAb.push(use.user_nicename.toString());
                  }
                }
              }
            }
          }

          //Convert ID into name
          for (let ter of this.termine) {
            if (ter.id.toString() === termine[i]) {
              tempTeilnahme.termin = ter.anlass.toString();
              tempTeilnahme.datum = ter.datum.toString().substr(0, 10);
            }
          }

          if( z == 0){
            mainTeilnahme = [{
              "termin": tempTeilnahme.termin,
              "datum": tempTeilnahme.datum.substr(0, 10),
              "userZu": tempTeilnahme.userZu,
              "userAb": tempTeilnahme.userAb
            }];

          } else if (z != 0) {
            mainTeilnahme.push(tempTeilnahme);
          }
          z += 1;
        }

        //insert into terminTeilnahme Class
        this.terminTeilnahme = mainTeilnahme;
        this.showTableOverview = true;
        return this.terminTeilnahme;
      }
    }

  }
}
