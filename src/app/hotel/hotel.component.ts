import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  hotelName: string="Grand Hotel";
  hotelStars:number=5;
  hotelLocation:string='Paris';
  GetNombreResidents()
  {
    return 198;
  }



  Message:string="Vous n'avez pas des reservations!";
  Isreserved:boolean = false;
  OnReserver()
  {
    this.Isreserved= true;
    this.Message="Votre reservation est confirmée ! ";
  }
 
  NomClient:string="";
  OnEcrirNom(evt: Event){
    this.NomClient=(<HTMLInputElement>evt.target).value;
  } 
  nombrePersonnes: string ='1';

  isClassVisible:boolean= false;

  isFontBig:boolean=false;
}
