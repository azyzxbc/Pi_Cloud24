import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getstats() {
    return this.http.get<any>('http://4.233.22.2:8089/Integration-Springv2/Local/stats');
  }

  getstatsAvliablesLocals() {
    return this.http.get<any[]>('http://4.233.22.2:8089/Integration-Springv2/Local/stats_avliables');
  }
}
