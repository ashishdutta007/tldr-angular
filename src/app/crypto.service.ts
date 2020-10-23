import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CryptoService {
  constructor(public http: HttpClient) {}

  getBreeds() {
    // returns an Observable
    return this.http.get("https://dog.ceo/api/breeds/list/all");
  }
}
