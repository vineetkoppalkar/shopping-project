import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User | undefined;
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    },
  ];

  constructor() {}

  setCurrentUser(userId: number): void {
    this.currentUser = this.getUser(userId);
  }

  getCurrentUser(): User | undefined {
    return this.currentUser;
  }

  addUser(user: User): void {
    user.id = Date.now();
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(userId: number): User | undefined {
    return this.users.find((user) => user.id === userId);
  }
}
