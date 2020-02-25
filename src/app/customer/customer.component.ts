import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.customerService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.customerService.form.valid) {
      if (this.customerService.form.get('$key').value == null) {
        // insert operation
        this.customerService.insertCustomer(this.customerService.form.value);
      } else {
        this.customerService.updateCustomer(this.customerService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000); // disappear after 3 secs
      this.submitted = false;
      this.customerService.form.reset();
    }
    // else {
    //   // update operation
    // }
  }

}
