import { Component} from '@angular/core';

@Component({
    selector:'app-first', 
    templateUrl:'./firstcomponent.component.html',
   // styleUrls:['./firstcomponent.component.css']
   styles:[`
   h2{color: blueviolet;}
   p{color: darkblue;}
   b{color: gold;}
   `]
})
export class FirstComponent
{
    // ici ajouter les proprietes et methodes à exposer
}




