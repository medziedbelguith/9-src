import { Component, OnInit,ContentChild  } from '@angular/core';
import { VilleComponent } from '../ville/ville.component';

@Component({
  selector: 'adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @ContentChild(VilleComponent) ville: VilleComponent;
	title = 'Addresse';

}
