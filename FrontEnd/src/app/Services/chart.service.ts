import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient){ }
  getSatisfactionData() {
    return this.http.get<any[]>('http://4.233.22.2:8089/Integration-Springv2/satisfactionData');
  }
}
