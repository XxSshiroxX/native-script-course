import { Component } from '@angular/core';
import { ToastGlobalService } from './toast-global.service';

@Component({
  selector: 'app-toast-global',
  template: `<StackLayout *ngIf="message" class="toast-global"><Label [text]="message"></Label></StackLayout>`,
  styleUrls: ['./toast-global.component.css']
})
export class ToastGlobalComponent {
  message: string | null = null;
  constructor(private toastService: ToastGlobalService) {
    this.toastService.toast$.subscribe(msg => this.message = msg);
  }
}
