import { Component, input } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css',
})
export class ErrorModalComponent {
  title = input<string>();
  message = input<string>();

  onClearError() {}
}
