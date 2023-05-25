import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators} from '@angular/forms';
import { FlaskAPIService } from '../flask-api.service';

@Component({
  selector: 'app-url-shortener2',
  templateUrl: './url-shortener2.component.html',
  styleUrls: ['./url-shortener2.component.css']
})

export class UrlShortener2Component implements OnInit {

  //When generating the short url
  shortURL:string;
  //When retrieving the long url
  returnedLongURL:string;
  //URL format
  urlPattern = /((http|https):\/\/)(www\.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)/

  //FORMS
  getShortForm = new FormGroup({
    longURL: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)])
  });

  getLongForm = new FormGroup({
    givenShortURL: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)])
  });

  constructor(private flask:FlaskAPIService) { }

  // @Input() 
  // urlFormTemp:TemplateRef<any>;
  // public data:string="hiya there";

  ngOnInit() {
  }

  //GET METHODS
  get longURL() {
    return this.getShortForm.get('longURL');
  }

  get givenShortURL() {
    return this.getLongForm.get('givenShortURL');
  }

  //SUBMIT METHODS
  shorten() {
    console.log("this is the saved longURL:" + this.longURL.value);
    this.flask.generateShort(this.longURL.value)
    .subscribe((data)=>{this.shortURL= data['returned shortURL'];})
  }

  retrieve() {
    console.log("this is the given shortURL:" + this.givenShortURL.value);
    this.flask.retrieveLong(this.givenShortURL.value)
    .subscribe((data) => {this.returnedLongURL= data['returned longURL'];})
  }

  //Copies things from specified textbox
  copyToClipboard(copy) {
    if (copy == 'copy') {
      console.log("Copied text is:" + this.shortURL);
      navigator.clipboard.writeText(this.shortURL);
    } else {
      console.log("Copied text is:" + this.returnedLongURL);
      navigator.clipboard.writeText(this.returnedLongURL);
    }
  }

  //If the longURL/shortURL2 value is changed, shortURL/longURL2 box is emptied
  isChanged(url) {
    if (url == "long") {
      this.shortURL = "";
    } else {
      this.returnedLongURL = "";
    }
  }
  

}
