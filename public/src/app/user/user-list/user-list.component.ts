import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  destroy(user: User){
    console.log("destroy() in user-list.component.ts - button clicked")
    this.destroyUserEvent.emit(user);
  }

  update(user: User){
    console.log("update() in user-list.component.ts - button clicked")
    this.updateUserEvent.emit(user)
  }
}
