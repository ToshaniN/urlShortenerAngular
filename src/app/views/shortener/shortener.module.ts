import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [UrlShortenerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UrlShortenerComponent
  ] 
})
export class ShortenerModule { }
