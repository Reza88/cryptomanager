import { DataService } from './../data.service';
import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PasswordValidation } from './password-validation';

const API_ACCOUNTS_SIGNUP = "http://localhost:3000/api/accounts/signup"; 


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup; 

  constructor(fb:FormBuilder, private rest:RestApiService, private data:DataService) {
    this.registrationForm = fb.group({
      name: ['',Validators.required], 
      email:['',Validators.required], 
      password:['',Validators.required],
      password1:['', Validators.required]
    },{
      validator:PasswordValidation.MatchPassword
    })
   }

  ngOnInit() {
  }

   async register(){
    const data =  await this.rest.post(
      API_ACCOUNTS_SIGNUP,{
        name:this.registrationForm.value.name,
        email:this.registrationForm.value.email, 
        password:this.registrationForm.value.password, 
        password1:this.registrationForm.value.password1
      }
    ); 

    if(data['success']){
      localStorage.setItem('token',data['token']); 
      console.log('token is set'); 
      this.data.success('Registration Successful!'); 
    }else{
      this.data.error(data['message']); 
    }
  }
}
