import { Component, OnInit } from '@angular/core';
import {ParticularUser, UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['../background-rectangle.css', './all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers: Array<ParticularUser> = [];
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }

  getFullName(firstname: string, lastname: string){
    return firstname + " " + lastname;
  }

}
