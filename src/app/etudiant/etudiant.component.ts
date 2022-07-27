import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  NomEtudiant:string="Anna-Belle"
  @Input ()
  QuestiondeMonEnseignant: string;
  
  @Output() 
  ReponseEvent= new EventEmitter<string>();
  ReponseSaisie:string=""; 
  addReponse() { //Methode executée par le bouton
    this.ReponseEvent.emit(this.ReponseSaisie);
    }	
}
