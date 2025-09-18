import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastGlobalService {
  private toastSubject = new BehaviorSubject<string | null>(null);
  toast$ = this.toastSubject.asObservable();

  show(msg: string) {
    this.toastSubject.next(msg);
    setTimeout(() => this.toastSubject.next(null), 2000);
  }
}
