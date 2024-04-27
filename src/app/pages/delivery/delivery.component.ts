import { Component, OnInit, booleanAttribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../../services';
import { IAddress } from '../../interfaces';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnInit {
  addressForm!: FormGroup;
  dataForm!: IAddress;

  constructor(
    private readonly fb: FormBuilder,
    private readonly deliveryService: DeliveryService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.addressForm = this.fb.group({
      name: [ 'Carrera', Validators.required ],
      initialNumber: [ '12', Validators.required ],
      typeStreet: [ 'Bis', Validators.required ],
      hash: [ '#', Validators.required ],
      secondNumber: [ 5, Validators.required ],
      subInfo: [ 'Norte', Validators.required ],
      separator: [ '-', Validators.required ],
      finalNumber: [ 45, Validators.required ],
      extraInfo: [ 'Apt 501', Validators.required ]
    });
  }


  onSubit() {
    console.log({ 'form': this.addressForm.value });
    if (this.addressForm.invalid) return;
  }
}
