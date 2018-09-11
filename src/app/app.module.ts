import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { TourService} from './tour.service';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    // ToursComponent
  ],
  providers: [ TourService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
