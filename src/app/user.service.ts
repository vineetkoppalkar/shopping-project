import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUserSource = new BehaviorSubject<User | undefined>(undefined);
  currentUser = this.currentUserSource.asObservable();

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    },
  ];

  constructor() {}

  setCurrentUser(userId: number): void {
    const user = this.getUser(userId);
    this.currentUserSource.next(user);
  }

  getCurrentUser(): User | undefined {
    return this.currentUserSource.getValue()
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
