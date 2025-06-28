import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-customer-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-customer-modal.component.html',
  styleUrl: './add-customer-modal.component.scss',
})
export class AddCustomerModalComponent {}
