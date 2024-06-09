import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudygService {
  constructor(private http: HttpClient) { }
  getSession(){
    return this.http.get('http://4.233.22.2:8089/Integration-Springv2/Studygroup/retrieve-all-StudyGroup')
  }
  updateSession(id:any,user:any){

    return this.http.put('http://4.233.22.2:8089/Integration-Springv2/Studygroup/modify-studygroup/'+id,user)
   }

  addSession(user:any){
    return this.http.post('http://4.233.22.2:8089/Integration-Springv2/Studygroup/addStudyGroup',user)
  }


  deleteSession(id:any){

    return this.http.delete('http://4.233.22.2:8089/Integration-Springv2/Studygroup/remove-studygroup/'+id)
  }

  sessionDetails(id:any){

    return this.http.get('http://4.233.22.2:8089/Integration-Springv2/Studygroup/retrieve-studygroup/'+id)
  }

  incrementNbpIfUnderFive(id: number): Observable<any> {
    return this.http.put<any>(` http://4.233.22.2:8089/Integration-Springv2/Studygroup/increment-nbp/${id}`, {});
  }
  getLocal(){
    return this.http.get('http://4.233.22.2:8089/Integration-Springv2/Local/allbynames')
  }
  idNameLocal(name: any): Observable<any> {
    return this.http.get(`http://4.233.22.2:8089/Integration-Springv2/Local/idByName/`+name);
  }
  createStudygroupWithLocal(studygroup: any, localId: number): Observable<any> {
    return this.http.post<any>(`http://4.233.22.2:8089/Integration-Springv2/Studygroup/create-studygroup-with-local/${localId}`, studygroup);
  }

}
