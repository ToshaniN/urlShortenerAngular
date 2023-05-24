import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlaskAPIService {

  baseUrl:string = "http://localhost:5000/";

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient : HttpClient) { }

  public generateShort(long:string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("longURL", long);
    //let res;
    return this.httpClient.get(this.baseUrl+'WantShortURL',{params:queryParams}).subscribe(data=>console.log(data));
    //console.log("This is res:" + res['returned shortURL']);
    //return res;
  }

  public retrieveLong(short:string) { //post
    return this.httpClient.post(this.baseUrl+'WantLongURL', {shortURL:short}).subscribe(data => console.log(data));

  }
}
