import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIcon implements PipeTransform {
  private icons = {
    'clear-day' : 'wi-day-sunny',
    'clear-night' : 'wi-night-clear',
    'rain' : 'wi-rain',
    'snow' : 'wi-snow',
    'sleet' : 'wi-sleet',
    'wind' : 'wi-cloudy-windy',
    'fog' : 'wi-fog',
    'cloudy' : 'wi-cloudy',
    'partly-cloudy-day' : 'wi-day-cloudy',
    'partly-cloudy-night' : 'wi-night-partly-cloudy'
  }

  transform(value) {
    return this.icons[value];
  }
}