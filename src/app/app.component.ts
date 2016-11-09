import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.Emulated,//ez a default ertek
  styleUrls: []
  /* styleUrls: ['./app.component.scss'] */
})
export class AppComponent {

    isAuthenticated:boolean = false;
    user:Object = {};

    constructor(){
      this.isAuthenticated = false;
      this.user = {};
    }

}
