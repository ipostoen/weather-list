import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    private citysSubject: BehaviorSubject<any>;
    public citys: Observable<any>;

    constructor(
        private http: HttpClient
    ) {
        this.citysSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('citys')));
        this.citys = this.citysSubject.asObservable();
    }

    public get citysValue(): any {
        return this.citysSubject.value;
    }

    setCity(city: any) {
        let citys = JSON.parse(localStorage.getItem('citys'));
        if (citys) {
            citys = citys.concat([ city ]);
            localStorage.setItem('citys', JSON.stringify(citys));
        } else {
            localStorage.setItem('citys', JSON.stringify([ city ])); 
        }
    }

    getWeather(lat, lng) {
        let url = `http://localhost:3000/api/weather/${lat},${lng}`;
        return this.http.get(url, {observe: 'response'})
        .pipe(map((res) => {
            return res.body;           
        }));
    }

}