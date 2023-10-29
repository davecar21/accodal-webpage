import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeConversionService {
  private apiConvertTimeZone = `/api/Conversion/ConvertTimeZone`;
  private apiCurrentTime = `/api/Time/current/zone?timeZone=Asia/Manila`;

  constructor(private http: HttpClient) { }

  getTimeForTimeZone(toTimeZone: string, currentDateTime: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      "fromTimeZone": "Asia/Manila",
      "dateTime": currentDateTime,
      "toTimeZone": toTimeZone,
      "dstAmbiguity": ""
  };
    const body = JSON.stringify(data);
    return this.http.post(this.apiConvertTimeZone, body, { headers });
  }

  getCurrentTime(){
    return this.http.get(this.apiCurrentTime);
  }
}
