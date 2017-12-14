import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../user'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    
  }

  create(){
    console.log("create() in user-new.component.ts")
    // call server to save 
    this.createNewUserEvent.emit(this.newUser);
    // redefining label to pointing to new 
    this.newUser = new User();
  }
}
