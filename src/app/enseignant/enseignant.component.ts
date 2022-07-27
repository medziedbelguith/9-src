import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  NomEnseignant: string = "Mr Arnauld";
  Question: string = "Qu'elle est la surface de la France en Km² ?";
  bonneReponse: number = 643801;

  ReponseEtudiant: number;
  IsBonneReponse: boolean;
  saveData(std: number) {
    this.ReponseEtudiant = std;
    this.IsBonneReponse = this.bonneReponse == this.ReponseEtudiant;
  }


}
