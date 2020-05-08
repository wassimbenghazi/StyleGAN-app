import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
@Injectable()
export class AiTestService {
  private _loginUrl = "http://localhost:5000/"
  private header = new HttpHeaders({'content-type': 'application/json', 'Accept-Charset': 'UTF-8'});
   options = { headers: this.header };
  constructor(private http: HttpClient) {}
    Predict(user1) {
      return this.http.post<any>(this._loginUrl, user1,this.options)}
    }

