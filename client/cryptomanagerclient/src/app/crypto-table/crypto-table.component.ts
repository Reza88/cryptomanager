import { CryptoCurrency } from './../models/crypto-currency.class';
import { CryptoApiService } from './../crypto-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.scss']
})
export class CryptoTableComponent implements OnInit {
  public topCryptos: CryptoCurrency[]; 

  constructor(public cryptoApiService:CryptoApiService) {
    this.getTopCryptos(); 
   }

  ngOnInit() {
  }

  public getTopCryptos():void{
    this.cryptoApiService.getAllCryptos().subscribe((data:any)=>{
      this.topCryptos = data.map((element:any)=>{
        return new CryptoCurrency(element); 
      }); 
    }); 
  }

}
