import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {

  @Input() action:string;
  @Input() form_json;
  @Output() url_form_event = new EventEmitter<{type:string, datarec:string}>();

  formPayload: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initializeFormControls();
  }

  // initializes the form controls and sets validators
  initializeFormControls() {
    this.formPayload = this.fb.group({
      inputURL:  [''],
      returnedURL:  ['']
    })
    for (const key in this.form_json.form_validations) {
      this.formPayload.controls[key].setValidators(this.form_json.form_validations[key]);
    }
  }

  // GET methods for form controls
  get inputURL() {
    return this.formPayload.get('inputURL');
  }

  get returnedURL() {
    return this.formPayload.get('returnedURL');
  }

  // Emits the output event
  atEvent() {
    this.url_form_event.emit({type:this.action, datarec:this.inputURL.value})
  }

  // Sets the value of the output to given value
  setOutput(url:string) {
    this.returnedURL.setValue(url);
  }
  
  // Copy output value to clipboard
  copyToClipboard() {
    navigator.clipboard.writeText(this.returnedURL.value);
  }

  // Clear output value whenever input value is changed
  clearOutput() {
    this.returnedURL.setValue("");
  }

}
