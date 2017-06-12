import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

  constructor( private http: Http ) { }

  // Get all posts from the API
  getAllData() {
    return this.http.get('/api/reports')
      .map(res => res.json());
  }
  addData(data) {
    console.log('data is:'+data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/reports', data, options)
      .map(res => res.json());
             
  } 
  editData(data){
    console.log("in edit function"+data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('api/reports/'+JSON.parse(data)._id, data, options)
      .map(res => res.json());
  }
  deleteData(data){
    console.log("in delete function"+data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('api/reports/'+JSON.parse(data)._id, options)
    .map(res => res.json());
  }

}
