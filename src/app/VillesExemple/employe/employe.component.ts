import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  NomEmploye:string='Amira';
  DateEntree:string='15 mai 2019';
  Technologies:string='Asp.net, Angular, PHP, Java';
  homeTown = true;
  onChangeCity() {
     this.homeTown = (this.homeTown === true)? false : true;
  }
}
