import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable()
export class ColorService {
    private http: HttpClient;
    private headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
    });

    constructor(http: HttpClient) {
        this.http = http;
    }

    public getColors() : Observable<Color[]> {
        return this.http.get<Color[]>(environment.colorsAPI, {headers: this.headers});
    }
}