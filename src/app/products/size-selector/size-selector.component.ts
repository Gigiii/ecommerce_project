import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Size } from '../../interfaces/product';

@Component({
  selector: 'app-size-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './size-selector.component.html',
  styleUrl: './size-selector.component.scss'
})
export class SizeSelectorComponent{
  sizes: string[] = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
  @Input() input_sizes: string[] = [];
  @Input() selectedSize: string = '';
  @Output() selectedSizeChange = new EventEmitter<string>();


  onSizeChange(size: string) : void {
    this.selectedSize = size;
    this.selectedSizeChange.emit(this.selectedSize);
  }

  isSizeAvailable(size: string): boolean {
    return this.input_sizes.includes(size);
  }

  isChecked(size: string) : boolean {
    return size == this.selectedSize;
  }
}
