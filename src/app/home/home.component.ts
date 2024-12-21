import { Component } from '@angular/core';
import { ProductRowComponent } from './product-row/product-row.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductRowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
