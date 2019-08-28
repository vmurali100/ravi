import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(private _http: HttpClient) {}

  getDataFromServer() {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }
}
