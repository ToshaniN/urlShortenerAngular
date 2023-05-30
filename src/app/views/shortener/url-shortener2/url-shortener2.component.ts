import { Component, OnInit, TemplateRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { FlaskAPIService } from '../flask-api.service';
import { UrlFormComponent } from '../url-form/url-form.component';

@Component({
  selector: 'app-url-shortener2',
  templateUrl: './url-shortener2.component.html',
  styleUrls: ['./url-shortener2.component.css']
})

export class UrlShortener2Component implements OnInit {

  //When generating the short url
  // returnedShortURL:string;
  // //When retrieving the long url
  // returnedLongURL:string;
  //URL format
  urlPattern = /((http|https):\/\/)(www\.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)/

  //Input
  form_json = {
    "short_url_form":   { //generates short url
      "heading": "Enter a long URL here:",
      "input_url_label": "Enter URL:",
      "input_url_placeholder": "https://example.com",
      "output_url_label": "Short URL:",
      "output_url_placeholder": "View short URL here",
      "btn_label":"Generate",
      "form_validations": {
        "inputURL" : [Validators.required, Validators.pattern(this.urlPattern)], // instance of Validator Class of angular/forms
      }
    },
    "long_url_form":   {  //retrieves long url
      "heading": "Enter a short URL here:",
      "input_url_label": "Enter URL:",
      "input_url_placeholder": "https://example.com",
      "output_url_label": "Long URL:",
      "output_url_placeholder": "View long URL here",
      "btn_label":"Retrieve",
      "form_validations": {
        "inputURL" : [Validators.required, Validators.pattern(this.urlPattern)], // instance of Validator Class of angular/forms
      }
    }
  }

    //ViewChild
    @ViewChild('generateView', {static:true}) generateView: UrlFormComponent;
    @ViewChild('retrieveView', {static:true}) retrieveView: UrlFormComponent;

  //FORMS
  // getShortForm = new FormGroup({
  //   longURL: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)])
  // });

  // getLongForm = new FormGroup({
  //   givenShortURL: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)])
  // });

  //formPayload: FormGroup;//= new FormGroup ({
  //   givenLongURL: new FormControl ('', [Validators.required, Validators.pattern(this.urlPattern)]),  
  //   givenShortURL: new FormControl ('', [Validators.required, Validators.pattern(this.urlPattern)])
  // });

  constructor(private flask:FlaskAPIService) {} //, private fb:FormBuilder) { }

  ngOnInit() {
    // this.formPayload = this.fb.group({
    //   givenLongURL: ['', [Validators.required, Validators.pattern(this.urlPattern)]],  
    //   givenShortURL: ['', [Validators.required, Validators.pattern(this.urlPattern)]]
    // })
  }

  //GET METHODS
  // get givenLongURL() {
  //   return this.formPayload.get('givenLongURL');
  // }

  // get givenShortURL() {
  //   return this.formPayload.get('givenShortURL');
  // }

  url_form_event(eventInfo){
    //console.log("From child, the action is:" + JSON.stringify(eventInfo.type) + " and the url is: " + JSON.stringify(eventInfo.datarec));
    switch(eventInfo.type) {
      case "generate":
        this.shorten(eventInfo.datarec);
        break;
      case "retrieve":
        this.retrieve(eventInfo.datarec);
        break;
    }
  }

  //SUBMIT METHODS
  shorten(longurl:string) {
    // console.log("this is the given longURL:" + this.givenLongURL.value);
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("longURL", longurl);
    //console.log("Query params: " + (queryParams))
    // const jsonParams = queryParams.keys().reduce((object, key) => {
    //   object[key] = queryParams.get(key)
    //   return object
    // }, {})
    //console.log("this is the given longURL:" + longurl);
    let jsonParams = {"longURL" : longurl}
    //console.log("json Params: " + JSON.stringify(jsonParams))
    this.flask.generateShort(jsonParams)
   .subscribe((data)=>{this.generateView.setOutput(data['returned shortURL']);})
  //  .subscribe((data) => {console.log("This is the generated shortURL: " + data['returned shortURL'])})
  }

  retrieve(shorturl:string) {
    // console.log("this is the given shortURL:" + this.givenShortURL.value);
    //console.log("this is the given shortURL:" + shorturl);
    let jsonParams = {"shortURL" : shorturl}
    //console.log("json Params: " + JSON.stringify(jsonParams))
    this.flask.retrieveLong(jsonParams)
    .subscribe((data) => {this.retrieveView.setOutput(data['returned longURL']);})
    //.subscribe((data) => {console.log("This is the retrieved longURL: " + data['returned longURL'])})
  }

  //Copies things from specified textbox
  // copyToClipboard(copy:string) {
  //   if (copy == 'copy') {
  //     console.log("Copied text is:" + this.returnedShortURL);
  //     navigator.clipboard.writeText(this.returnedShortURL);
  //   } else {
  //     console.log("Copied text is:" + this.returnedLongURL);
  //     navigator.clipboard.writeText(this.returnedLongURL);
  //   }
  // }

  // //If the longURL/shortURL2 value is changed, shortURL/longURL2 box is emptied
  // isChanged(url:string) {
  //   if (url == "long") {
  //     this.returnedShortURL = "";
  //   } else {
  //     this.returnedLongURL = "";
  //   }
  // }
  

}
