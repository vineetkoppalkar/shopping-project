import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUser = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.subscribeToAlert();
  }

  subscribeToAlert(): void {
    this.alertService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  onSubmit(): void {
    const user = this.newUser.value;
    this.userService.addUser(user);
    this.alertService.changeMessage(
      `Creating user '${user.name}' with email '${user.email}'.`
    );
    this.router.navigateByUrl('/users');
  }
}
