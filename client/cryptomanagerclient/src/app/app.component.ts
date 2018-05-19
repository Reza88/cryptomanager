import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  //Just a getter inside an ES6 Class 
  get token(){
    return localStorage.getItem('token'); 
  }
  

}
