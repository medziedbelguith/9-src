

import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import {MaladieEnum} from './MaladieEnum';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})

export class ConsultationComponent implements OnInit {
  constructor() { 
    this.EtatSante=Math.random()>0.5? 'Malade':'Saint';
    this.CouleurSante = this.EtatSante=='Malade'? 'red':'green';
    
    this.IsAssure = Math.random()>0.5?  true: false;
    this.MessageAssurance= this.IsAssure? 'Le patient est assuré':'Le patient n\'est pas assuré';
  }
  ngOnInit() {
  }
NomPatient: string="Alex";
EtatSante:string='';
CouleurSante:string='';
IsAssure:boolean;
MessageAssurance: string;

NomTraitement:string="";
traitements=[];
ajouterTraitement(){
  this.traitements.push(this.NomTraitement);
 this.NomTraitement="";
}
mEnum =  MaladieEnum;
patientMaladie =MaladieEnum.Infection;
}


