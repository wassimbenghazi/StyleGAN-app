import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FlowerService {
  private _uploding = "http://1b079399.ngrok.io/uploding"
  private _predict = "http://1b079399.ngrok.io/predict"
  private header = new HttpHeaders({'content-type': 'multipart/form-data', 'Accept-Charset': 'UTF-8'});
  private header2 = new HttpHeaders({'content-type': 'application/json', 'Accept-Charset': 'UTF-8'});
  options = { headers: this.header };
  options2 = { headers: this.header2 };

  constructor(private http: HttpClient) {}
    Uploding(img) {
      return this.http.post(this._uploding, img)
      // return this.http.post<any>(this._loginUrl, img,this.options)
    }
    
    Predicting(data):Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      return this.http.post(this._predict, data, {headers: headers, responseType: 'blob' as 'json' })
    }
  }



