import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlaskAPIService {

  baseUrl:string = "http://localhost:5000/";

  constructor(private httpClient : HttpClient) { }

  public generateShort(long:any): Observable<any> {
    return this.httpClient.get(this.baseUrl+'WantShortURL', {params:long});
  }

  public retrieveLong(short:any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'WantLongURL', short);
  }
}
