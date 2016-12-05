import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ClothesService {

  constructor(private http: Http) { }

  getClothes() {
    return this.http.get('http://localhost:3000/clothes')
      .map((response: Response) => response.json());
  }
}
