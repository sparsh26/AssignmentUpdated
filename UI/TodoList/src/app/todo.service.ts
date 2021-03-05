import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class TodoService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44318/api/TodoItems';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public get() {
    
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public add(payload: any) {
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
  }

  public remove(payload: any) {
    return this.http.delete(this.accessPointUrl + '/' + payload.itemId, { headers: this.headers });
  }

  public update(payload: any) {
    console.log(payload);
    return this.http.put(this.accessPointUrl + '/' + payload.itemId, payload, { headers: this.headers });
  }


}
