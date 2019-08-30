import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { userInfo } from "os";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  addUserFromService(user) {
    return this._http.post("http://localhost:3000/users", user);
  }

  getLatestUsersFromServer() {
    return this._http.get("http://localhost:3000/users");
  }
  deleteUserFromServer(user) {
    return this._http.delete("http://localhost:3000/users/" + user.id);
  }
  updateUserFromService(user) {
    return this._http.put("http://localhost:3000/users/" + user.id, user);
  }
}
