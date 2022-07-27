import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() villeId: string;
  @Input() villeName: string;
}
