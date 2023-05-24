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
  .set('Content-Type', 'application/json');
  //.set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient : HttpClient) { }

  public generateShort(long:string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("longURL", long);
    return this.httpClient.get(this.baseUrl+'WantShortURL',{params:queryParams});
  }

  public retrieveLong(short:string) { //post
    return this.httpClient.post(this.baseUrl+'WantLongURL', {shortURL:short}).subscribe(data => console.log(data));

  }
}
