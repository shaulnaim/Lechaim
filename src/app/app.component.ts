import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
     constructor(){}
}

export class Const {
  public static BASE_URL ='http://localhost:3000/';
}
