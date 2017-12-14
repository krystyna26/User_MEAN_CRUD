import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getUsers(){
    console.log("user.service")
    return this._http.get("/users")
    .map(data => data.json()).toPromise()
  }

  create(user: User){
    console.log("user.service")
    return this._http.post("/users", user)
    .map(data => data.json()).toPromise()
  }

  destroy(user: User){
    console.log("user.service")
    return this._http.delete("/users/"+ user._id)
    .map(data => data.json()).toPromise()
  }

  update(user: User){
    console.log("user.service")
    return this._http.put("/users/"+ user._id, user)
    .map(data => data.json()).toPromise()
  }

  getUser(user: User){
    console.log("user.service")
    return this._http.get("/users/"+user._id)
    .map(data => data.json()).toPromise()
  }
}

