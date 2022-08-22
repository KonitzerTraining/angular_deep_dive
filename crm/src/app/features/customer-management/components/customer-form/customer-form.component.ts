import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  @Input() formData ?: Customer | null;
  @Output()
  customerFormSubmit = new EventEmitter();

  customerForm = this.fb.group({
    name: [
      'asdf',
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
    credit: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.formData);
    if(this.formData) {
      this.customerForm.patchValue(this.formData);
    }
  }

  formSubmitHandler() {
    this.customerFormSubmit.emit(this.customerForm.value);
  }

}
