import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment as env } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  private apiPexels = `/search?query=japan`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': env.PEXELS_API_KEY
    })
  };
  

  constructor(private http: HttpClient) { }

  getPexels(query:any){
    let apiPexelsQuery = `&per_page=6`;
    apiPexelsQuery += query.page ? `&page=${query.page}` : '';
    return this.http.get(this.apiPexels+apiPexelsQuery, this.httpOptions);
  }
}
