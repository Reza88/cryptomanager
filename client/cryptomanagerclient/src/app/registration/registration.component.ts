import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  name=''; 
  email=''; 
  password=''; 
  password1=''; 
  btnDisabled = false; 

  constructor() { }

  ngOnInit() {
  }

}