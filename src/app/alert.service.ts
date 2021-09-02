import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private messageSource = new Subject<string>();
  currentMessage = this.messageSource.asObservable();

  ngOnInit(): void {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
