import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimeConversionService } from './services/time-conversion.service';
import { PexelsService } from './services/pexels.services';

import { HttpClientModule } from '@angular/common/http';
import { TimeConversionComponent } from './time-conversion/time-conversion.component';
import { PexelsComponent } from './pexels/pexels.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeConversionComponent,
    PexelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TimeConversionService,
    PexelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
