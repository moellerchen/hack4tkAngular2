import { Component, OnInit } from '@angular/core';
import {TermineService} from "../termine/termine.service";
import {Observable} from "rxjs";
import {AttendanceService} from "../termine/attendance.service";
import {ClothesService} from "../termine/clothes.service";
import {Clothes} from "../termine/clothes";

@Component({
  selector: 'app-create-termin',
  templateUrl: './create-termin.component.html',
  styleUrls: ['./create-termin.component.css']
})
export class CreateTerminComponent implements OnInit {

  showTable = true;

  private clothes: Clothes[];


  constructor(private termineService: TermineService, private attendanceService: AttendanceService, private clothesService: ClothesService) {
    clothesService.getClothes().subscribe(
      (data: any[]) => {
        this.clothes = data;
        console.log(this.clothes);
      });
  }

  ngOnInit() {

  }

  set(){
    let anlass : string = (<HTMLInputElement>document.getElementById("anlass")).value;
    let datum :  string = (<HTMLInputElement>document.getElementById("datum")).value;
    let uhrzeit :  string = (<HTMLInputElement>document.getElementById("uhrzeit")).value;
    let treffpunkt :  string = (<HTMLInputElement>document.getElementById("treffpunkt")).value;

    let selectKleidung = <HTMLSelectElement>document.getElementById("kleidung");
    let kleidung :  number = parseInt(selectKleidung.options[selectKleidung.selectedIndex].value);

    this.termineService.setTermin(anlass, datum, uhrzeit, treffpunkt, kleidung).subscribe();
    alert("Termin wurde erstellt!");

  }
}
