import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlShortenerComponent } from './views/shortener/url-shortener/url-shortener.component';
import { UrlShortener2Component } from './views/shortener/url-shortener2/url-shortener2.component';
import { UrlFormComponent } from './views/shortener/url-form/url-form.component';

const routes: Routes = [
  {path: '', component: UrlShortenerComponent},
  {path: '2', component:UrlShortener2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
