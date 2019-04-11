import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitysListComponent, DialogAddCity } from './components/citys-list/citys-list.component';

import { ErrorInterceptor } from './_helpers';

import { WeatherIcon } from './_pipes/weather-icons';
import { Temp } from './_pipes/temp';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import {
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    CitysListComponent,
    WeatherIcon,
    Temp,
    DialogAddCity
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [
    DialogAddCity
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
