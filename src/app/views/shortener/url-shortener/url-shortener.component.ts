import { Component, OnInit } from '@angular/core';
import { FlaskAPIService } from '../flask-api.service'

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  //When generating the short url
  longURL:string;
  shortURL:string;
  //When retrieving the long url
  shortURL2:string;
  longURL2:string;

  constructor(private flask:FlaskAPIService ) { }

  ngOnInit() {
  }

  // options: {
  //   observe?: 'response',
  //   params?:{[param: string]:string}, 
  //   responseType?: 'json',
  // }
  //res:any;

  //Generates the short url
  shorten() {
    console.log("this is the saved longURL:" + this.longURL);
    this.shortURL = "https://urlshortener.com/Token1";
    this.flask.generateShort(this.longURL); //.subscribe(data => {this.res=data;});
    //console.log("this is res: "+ this.res['returned shortURL'])
  }

  retrieve() {
    console.log("this is the given shortURL:" + this.shortURL2);
    this.longURL2 = "https://thisIsALongURL.com";
    this.flask.retrieveLong(this.shortURL2);
  }

  //Copies things from specified textbox
  copyToClipboard(copy) {
    if (copy == 'copy') {
      console.log("Copied text is:" + this.shortURL);
      navigator.clipboard.writeText(this.shortURL);
    } else {
      console.log("Copied text is:" + this.longURL2);
      navigator.clipboard.writeText(this.longURL2);
    }
  }

  //If the longURL/shortURL2 value is changed, shortURL/longURL2 box is emptied
  isChanged(url) {
    if (url == "long") {
      this.shortURL = "";
    } else {
      this.longURL2 = "";
    }
  }


}
