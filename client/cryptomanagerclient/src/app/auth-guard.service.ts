import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

  constructor(private router:Router) { }

 /*  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(localStorage.getItem('token')){
      return state.url.startsWith('/profile') ? true : (this.router.navigate(['/']),false);  
    }else{
      return state.url.startsWith('/profile') ? (this.router.navigate(['/']),false) : true; ß
    }
  } */
  

}
