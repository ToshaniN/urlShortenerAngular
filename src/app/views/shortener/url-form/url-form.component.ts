import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {

  constructor() { }

  @Input() 
  urlFormTemp:TemplateRef<any>;
  public data:string="hiya there";

  ngOnInit() {
  }

}
