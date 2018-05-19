import { DataService } from './../data.service';
import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'; 

const API_ACCOUNTS_LOGIN = "http://localhost:3000/api/accounts/login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; 
  constructor(fb:FormBuilder,
    private rest:RestApiService,
    private data:DataService,
    private router:Router) {
    this.loginForm = fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
   }
   
  ngOnInit() {
  }

  async login(){
    console.log('inside login method'); 
    try{
    const data = await this.rest.post(
      API_ACCOUNTS_LOGIN,{ 
      email:this.loginForm.value.email, 
      password:this.loginForm.value.password
      }); 
      
      if(data['success']){
        localStorage.setItem('token',data['token']); 
        console.log("Setting Token"); 
        this.router.navigate(['/']); 
      }else{
        console.log('Error Occured');
        this.data.error(data['message']); 
      }
    }catch(error){
      this.data.error(error['message']); 
    }
  }
}
