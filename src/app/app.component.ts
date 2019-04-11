import { Component, OnInit } from '@angular/core';
import { WeatherService } from './_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  
  public lat;
  public lng;

  constructor(private ws: WeatherService) {

  }

  ngOnInit() {
  }

}
