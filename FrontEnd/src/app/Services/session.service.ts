import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../FrontOffice/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl: string = 'http://4.233.22.2:8089/Integration-Springv2/session/';

  constructor(public http: HttpClient) { }

  getSession(): Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl + 'retrieve-all-sessions');

  }
  addSession(session: Session): Observable<Session>{
    return this.http.post<Session>(this.baseUrl +'add-session',session);
  }
  updateSession(session: Session): Observable<Session> {
    return this.http.patch<Session>(this.baseUrl + 'update-session',session);
  }
  deleteSession(id:number): Observable<void> {
    console.log("test delete");

    return this.http.delete<void>('http://4.233.22.2:8089/Integration-Springv2/session/remove-session/'+id);
  }

}
