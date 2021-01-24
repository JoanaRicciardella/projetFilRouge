import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardstyleService {

  constructor(
    private http: HttpClient
  ) { 
    this.getHardstyle();
  }

  
  hardstyleSubject = new Subject<any[]>();
  private hardstyles = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  emitHardstyleSubject() {
    this.hardstyleSubject.next(this.hardstyles.slice());
  }

  styleOnHardstyle() {
    for (const hardstyle of this.hardstyles) {
      hardstyle.genre = 'hardstyle';
    }
    this.emitHardstyleSubject();
  }

  styleOnReStyle() {
    for (const hardstyle of this.hardstyles) {
      hardstyle.genre = 're-style';
    }
    this.emitHardstyleSubject();
  }

  switchOnHardstyle(index: number) {
    this.hardstyles[index].genre = 'hardstyle';
    this.emitHardstyleSubject();
  }
  

  switchOnReStyle(index: number) {
    this.hardstyles[index].genre = 're-style';
    this.emitHardstyleSubject();
  }

  getHardstyleById(id: number) {
    return this.http.get<any>('/api/hardstyles/' + id);
  }

  addHardstyle(hardstyle: any) {
    this.http.post<any>('/api/hardstyles', hardstyle, this.httpOptions).subscribe(res => {
      this.hardstyles.push(res);
      this.emitHardstyleSubject();
    });
  }

  getHardstyle() {
    this.http.get<any>('/api/hardstyles').subscribe((res) => {
      this.hardstyles = res;
      this.emitHardstyleSubject();
    });
  }

  modifHardstyle(hardstyle: any) {
    var index = this.hardstyles.findIndex(
      (hardstyleToModif) => {
        if(hardstyleToModif._id == hardstyle._id) {
          return true;
        }
      }
    )
    this.hardstyles.splice(index, 1, hardstyle);
    this.emitHardstyleSubject();
    return this.http.put<any>('/api/hardstyles/' + hardstyle._id, hardstyle, this.httpOptions);
  }


  deleteHardstyle(id: any) {
    this.http.delete<any>('/api/hardstyles/' + id).subscribe(res =>{
      var index = this.hardstyles.findIndex(
        (hardstyleToDelete) => {
          if(hardstyleToDelete._id == id) {
            return true;
          }
        }
      )
      this.hardstyles.splice(index, 1);
      this.emitHardstyleSubject();
    })
  }



}
