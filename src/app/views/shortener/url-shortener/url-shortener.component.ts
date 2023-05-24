import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  //Generates the short url
  shorten() {
    console.log("this is the saved longURL:" + this.longURL);
    this.shortURL = "https://urlshortener.com/Token1";
  }

  retrieve() {
    console.log("this is the given shortURL:" + this.shortURL2);
    this.longURL2 = "https://thisIsALongURL.com";
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
