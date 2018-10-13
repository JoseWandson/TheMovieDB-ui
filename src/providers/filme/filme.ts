import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmeProvider {

  public api_url = "https://api.themoviedb.org/3/";
  public api_key = "sua_senha";

  constructor(public http: Http) {
    console.log('Hello FilmeProvider Provider');
  }

  getPopular() {
    return this.http.get(this.api_url + "movie/popular?api_key=" + this.api_key);
  }

}
