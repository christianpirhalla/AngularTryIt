import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TestbuttonService {

  constructor(private http: HttpClient) { }

getMuffinName(){
  return this.http.get('https://localhost:8080/muffins/1');
}

}