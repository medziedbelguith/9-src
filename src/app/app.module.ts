import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstComponent} from './FirstComponent/firstcomponent.component';
import { from } from 'rxjs';
import { HotelComponent } from './hotel/hotel.component';
import { FormsModule } from '@angular/forms';
import { ConsultationComponent } from './consultation/consultation.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { VilleComponent } from './VillesExemple/ville/ville.component';
import { AdresseComponent } from './VillesExemple/adresse/adresse.component';
import { EmployeComponent } from './VillesExemple/employe/employe.component';
import { selectionComponent } from './VillesExemple/selection/selection.component';
import { PersonneComponent } from './ExempleSport/personne/personne.component'; 
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HotelComponent,
    ConsultationComponent,
    EnseignantComponent,
    EtudiantComponent,
    VilleComponent,
    AdresseComponent,
    EmployeComponent,
    selectionComponent,
    PersonneComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
