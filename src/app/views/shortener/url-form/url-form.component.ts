import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {

  @Input() action:string;
  @Input() form_json;
  @Output() url_form_event = new EventEmitter<{type:string, datarec:string}>();


  //urlPattern = /((http|https):\/\/)(www\.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)/
  formPayload: FormGroup //= new FormGroup ({
  //     inputURL: new FormControl (''),
  //     returnedURL: new FormControl ('')
  //  }); 

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initializeFormControls();
  }

  initializeFormControls() {
    this.formPayload = this.fb.group({
      inputURL:  [''],
      returnedURL:  ['']
    })
    for (const key in this.form_json.form_validations) {
      if (key == "inputURL") {
        this.formPayload.controls["inputURL"].setValidators(this.form_json.form_validations.inputURL);
      }
    }
  }

  get inputURL() {
    return this.formPayload.get('inputURL');
  }

  get returnedURL() {
    return this.formPayload.get('returnedURL');
  }

  atEvent() {
    //console.log("this is in child: " + JSON.stringify({type:this.action, datarec:this.inputURL.value}))
    this.url_form_event.emit({type:this.action, datarec:this.inputURL.value})
  }

  setOutput(url:string) {
    this.returnedURL.setValue(url);
  }
  
  copyToClipboard() {
    navigator.clipboard.writeText(this.returnedURL.value);
  }

  clearOutput() {
    this.returnedURL.setValue("");
  }

}
