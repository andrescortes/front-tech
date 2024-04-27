import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrl: './delivery-date.component.css'
})
export class DeliveryDateComponent implements OnInit {

  deliveryDateForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.deliveryDateForm = this.fb.group({
      date: [ '', Validators.required ],
      hours: [ '', Validators.required ]
    })
  }

  onSubmit() {
    console.log({ 'form': this.deliveryDateForm.value });

  }
}
