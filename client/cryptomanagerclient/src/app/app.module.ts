import { AuthGuardService } from './auth-guard.service';
import { CryptoApiService } from './crypto-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './data.service';
import {RestApiService} from './rest-api.service'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CryptoTableComponent } from './crypto-table/crypto-table.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    CryptoTableComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [DataService,RestApiService,CryptoApiService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
