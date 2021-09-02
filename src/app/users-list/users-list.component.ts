import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  message: string;

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.subscribeToAlert();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  subscribeToAlert(): void {
    this.alertService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  setCurrentUser(userId: number): void {
    this.userService.setCurrentUser(userId);
    const user = this.userService.getCurrentUser();
    if (user) {
      this.alertService.changeMessage(
        `Setting '${user.name}' as the current user.`
      );
    }
  }
}
