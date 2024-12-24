import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  @Input() subtotal! : number;
  shipping : number = 0;
  tax : number = 0;
  total : number = 0;
  
  ngOnInit(): void {
   this.calculateTotal(); 
  }

  ngOnChanges(): void {
    this.calculateTotal();
  }

  calculateTotal() {
    this.tax = this.subtotal * 0.1;
    if(this.tax + this.subtotal >= 100) {
      this.shipping = 0;
    }else{
      this.shipping = 10;
    }

    this.total = this.subtotal + this.tax + this.shipping;

  }

  checkout() {
    alert('You cannot checkout for now :(');
  }
}
