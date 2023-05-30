import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FlaskAPIService } from '../flask-api.service';
import { UrlFormComponent } from '../url-form/url-form.component';

@Component({
  selector: 'app-url-shortener2',
  templateUrl: './url-shortener2.component.html',
  styleUrls: ['./url-shortener2.component.css']
})

export class UrlShortener2Component implements OnInit {

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


  constructor(private flask:FlaskAPIService) {}

  ngOnInit() {
  }

  // Calls function based on whether the generate or retrieve button has been clicked in UI
  url_form_event(eventInfo){
    switch(eventInfo.type) {
      case "generate":
        this.shorten(eventInfo.datarec);
        break;
      case "retrieve":
        this.retrieve(eventInfo.datarec);
        break;
    }
  }

  // Methods that make API calls based on what action is being done (generate shortURL => shorten, retrieve longURL => retrieve)
  shorten(longurl:string) {
    let jsonParams = {"longURL" : longurl}
    this.flask.generateShort(jsonParams)
   .subscribe((data)=>{this.generateView.setOutput(data['returned shortURL']);})
  }

  retrieve(shorturl:string) {
    let jsonParams = {"shortURL" : shorturl}
    this.flask.retrieveLong(jsonParams)
    .subscribe((data) => {this.retrieveView.setOutput(data['returned longURL']);})
  }

}
