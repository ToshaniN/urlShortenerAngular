import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlShortener2Component } from './url-shortener2/url-shortener2.component';
import { UrlFormComponent } from './url-form/url-form.component';



@NgModule({
  declarations: [UrlShortenerComponent, UrlShortener2Component, UrlFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UrlShortenerComponent,
    UrlShortener2Component
  ] 
})
export class ShortenerModule { }
