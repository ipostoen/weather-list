import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeocodingApiService {
    private API_URL: string;

    constructor(private http: HttpClient) {
        this.API_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA5Yz6RkCAZyVcoKGr8N2p4BAEfsT3Xl-o&address=`;
    }

    findFromAddress(address: string) {
        let compositeAddress = [address];

        let url = `${this.API_URL}${address}`;

        return this.http.get<any>(url, {observe: 'response'})
        .pipe(map((res) => {
            return res.body;           
        }));
    }
}