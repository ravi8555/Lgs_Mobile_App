import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private self:any  = this
  public api:any = 'https://jsonplaceholder.typicode.com/posts'
  public apiKey:any = '4776deb0856547238b5761f7bfa558d2';
  constructor(public http: HttpClient) { }
  // test(){
  //   console.log(this)

  // }
  getApi():Observable<any>{
    // console.log(this)

    // return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2021-12-01&sortBy=publishedAt&apiKey='+this.apiKey);
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.apiKey)
    // return this.http.get(this.api)
  }
  // test()
  
}
