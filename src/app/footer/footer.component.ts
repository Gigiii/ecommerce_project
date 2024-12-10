import { Component } from '@angular/core';
import { LogoSmallComponent } from '../SVGs/logo-small/logo-small.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoSmallComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
