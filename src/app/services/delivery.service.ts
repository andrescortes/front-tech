import { Injectable, OnInit } from '@angular/core';
import { IAddress } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService implements OnInit {
  subInfo: string[] = [ 'Norte', 'Sur', 'Occidente', 'Oriente' ];
  typeLocation: string[] = [ 'Carrera', 'Calle', 'Avenida', 'Trasversal', 'Circular', 'diagonal' ];
  extraInfo: string[] = [ 'Torre', 'Bloque' ]
  address!: IAddress;

  constructor() { }

  ngOnInit(): void {
    this.address = this.generateAddress();
  }

  generateAddress(): IAddress {

    const randomTypeLocation = this.getRadomNumber(this.typeLocation.length - 1);
    const randomExtraInfo = this.getRadomNumber(this.extraInfo.length - 1);
    const randomSubInfo = this.getRadomNumber(this.subInfo.length - 1);

    return {
      name: this.typeLocation[ randomTypeLocation ],
      initialNumber: this.getRadomNumber(100),
      typeStreet: this.extraInfo[ randomExtraInfo ],
      hash: this.getRadomNumber(100) % 2 == 0 ? '#' : '',
      secondNumber: this.getRadomNumber(100),
      subInfo: this.subInfo[ randomSubInfo ],
      separator: '-',
      finalNumber: this.getRadomNumber(100),
      extraInfo: ''
    }
  }

  getRadomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

}
