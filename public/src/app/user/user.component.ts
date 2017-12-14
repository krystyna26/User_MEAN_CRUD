import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [];
  

  constructor(private _userService: UserService) { }

  ngOnInit() {
    console.log("ngOnInit in user.component.ts")
    this.getUsers()
  }

  create(user: User){
    console.log("create() in UserComponent.ts")
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
    this.users.push(user);
  }

  destroy(user: User){
    console.log(user);
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));

    console.log("destroy() in UserComponent.ts")
    // const i = this.users.indexOf(user);
    // this.users.splice(i, 1);
  }

  update(user: User){
    console.log("update() in UserComponent.ts", user)
    // const i = this.users.indexOf(users.original);
    // this.users[i] = users.edited
    this._userService.update(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }

  getUsers(){
    console.log("getUsers() in user.component.ts")
    this._userService.getUsers()
    .then(users => this.users = users)
    .catch(err => console.log(err));
  }
}
