import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToursComponent } from './tours/tours.component';
import { HttpClientModule } from '@angular/common/http';
import { TourService} from './tour.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tours', component: ToursComponent}
];

@NgModule({
  declarations: [
    ToursComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ TourService ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
