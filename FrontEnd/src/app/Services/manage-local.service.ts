import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageLocalService {

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post<any>('http://4.233.22.2:8089/Integration-Springv2/Local', data);
  }

  getLocals() {
    return this.http.get<any[]>('http://4.233.22.2:8089/Integration-Springv2/Local');
  }

  getAvliablesLocals(){
    return this.http.get<any[]>('http://4.233.22.2:8089/Integration-Springv2/Local/avliables');
  }

  getallnames() {
    return this.http.get<any[]>('http://4.233.22.2:8089/Integration-Springv2/Local/allbynames');
  }

}
