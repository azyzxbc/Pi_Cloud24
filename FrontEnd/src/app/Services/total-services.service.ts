import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalServicesService {
  private baseUrl = 'http://4.233.22.2:8089/Integration-Springv2/Local';
  constructor(private http: HttpClient) { }
  getTotalNumberOfLocals(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total`);
  }
}
