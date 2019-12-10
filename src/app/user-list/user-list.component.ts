import { Component, OnInit } from '@angular/core';
import {IUser} from '../user/iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  get userFilter(): string {
    return this._userFilter;
  }

  set userFilter(value: string) {
    this._userFilter = value;
    this.filteredUsers = this.performFilter(this.userFilter);
  }
  pageTitle: String = 'Liste des utilisateurs';
  users: IUser[] = [
    {
      'userId': 1,
      'userName': 'Bob',
      'userAge': 48,
      'userJob': 'Architecte',
      'userSkills': 'JEE,Java,SOA',
      'userRating': 4.5,
      'userImage': 'assets/images/bob.jpg'
    },
    {
      'userId': 2,
      'userName': 'Melinda',
      'userAge': 35,
      'userJob': 'Chef de projet',
      'userSkills': 'SCRUM,Kanban',
      'userRating': 4.7,
      'userImage': 'assets/images/melinda.jpg'
    },
    {
      'userId': 3,
      'userName': 'Sarah',
      'userAge': 28,
      'userJob': 'Développeur',
      'userSkills': 'Java,JavaScript,Angular',
      'userRating': 3.5,
      'userImage': 'assets/images/sarah.jpg'
    },
    {
      'userId': 4,
      'userName': 'Eric',
      'userAge': 23,
      'userJob': 'Développeur',
      'userSkills': 'C++,.Net',
      'userRating': 3.7,
      'userImage': 'assets/images/eric.jpg'
    },
    {
      'userId': 5,
      'userName': 'Vincent',
      'userAge': 40,
      'userJob': 'Testeur',
      'userSkills': 'Junit,Selenium,Squash,Robot Framework',
      'userRating': 3.9,
      'userImage': 'assets/images/vincent.jpg'
    }
  ];
  imageSize: any = 50;
  showRating = false;
  private _userFilter: string;
  private filteredUsers;

  constructor() {
    this.filteredUsers = this.users;
  }

  ngOnInit() {
  }
  toggleRating() {
    this.showRating = !this.showRating;
  }
  performFilter(filterBy: string) {
    return this.users.filter( user  => user.userName.indexOf(this._userFilter) >= 0 );
  }

}
