













import { Component, OnInit,  ContentChildren, QueryList  } from '@angular/core';
  import{VilleComponent} from '../../VillesExemple/ville/ville.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class selectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ContentChildren(VilleComponent) topVilles: QueryList<VilleComponent>
  @ContentChildren(VilleComponent, {descendants: true}) allVilles: QueryList<VilleComponent>
}
