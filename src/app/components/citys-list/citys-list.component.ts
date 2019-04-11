import { Component, OnInit, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { WeatherService, GeocodingApiService } from '../../_services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-citys-list',
  templateUrl: './citys-list.component.html',
  styleUrls: ['./citys-list.component.scss']
})
export class CitysListComponent implements OnInit {

  public loc: any;

  public citys: [];

  constructor(
    private ws: WeatherService,
    private geo: GeocodingApiService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          this.ws.getWeather(lat, lng)
          .pipe(first())
          .subscribe((data: any) => {
            this.loc = data;
          }, error => {
    
          })
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    this.citys = JSON.parse(localStorage.getItem('citys'));

    this.citys.forEach((element: any) => {
      this.ws.getWeather(element.lat, element.lng)
      .pipe(first())
      .subscribe((data: any) => {
        element.temp = data;
      }, error => {

      })
    });

    console.log(this.citys);
  }

  delete(i) {
    this.citys.splice(i, 1);
    localStorage.setItem('citys', JSON.stringify(this.citys));
  }

  getLocation(address) {
    // let address = 'Kiev';
    this.geo.findFromAddress(address)
      .pipe(first())
      .subscribe((data: any) => {
        if (data.status == 'OK') {
          let lat = data.results[0].geometry.location.lat;
          let lng = data.results[0].geometry.location.lng;
          this.ws.setCity({ name: address, lat, lng });
          this.citys = JSON.parse(localStorage.getItem('citys'));
        } else if (data.status == 'ZERO_RESULTS') {
          console.log('geocodingAPIService', 'ZERO_RESULTS', data.status);
        } else {
          console.log('geocodingAPIService', 'Other error', data.status);
          this.openDiaolog();
        }
      }, error => {

      });
  }

  timeZone() {
    return this.loc.timezone;
  }

  openDiaolog() {
    const dialogRef = this.dialog.open(DialogAddCity, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
      if (result) {
        this.getLocation(result);  
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogAddCity {
  name:string;
  constructor(
    public dialogRef: MatDialogRef<DialogAddCity>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}