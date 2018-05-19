import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CryptoApiService {
   CRYPTOCOMPARE_API_URI:string = "https://www.cryptocompare.com/";
   ALL_CRYPTOS:string = "https://api.coinmarketcap.com/v1/ticker/";
   LIMIT:string = '100'; 
   constructor(private http:HttpClient) { }

  public getAllCryptos(){
    return this.http.get(this.ALL_CRYPTOS);
  }

}
