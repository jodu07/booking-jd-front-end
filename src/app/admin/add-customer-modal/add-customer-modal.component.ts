import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-add-customer-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-customer-modal.component.html',
  styleUrl: './add-customer-modal.component.scss',
})
export class AddCustomerModalComponent {
  nodeSelected!: Customer;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public matData: Customer,
    public dialogRef: MatDialogRef<AddCustomerModalComponent>
  ) {}

  /** Initial method. */
  ngOnInit(): void {
    this.nodeSelected = this.matData;
  }
}
