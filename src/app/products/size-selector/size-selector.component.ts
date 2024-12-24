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
  sizes: Size[] = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
  @Input() input_sizes: string[] = [];
  @Input() selectedSize: Size | undefined;
  @Output() selectedSizeChange = new EventEmitter<Size>();


  onSizeChange(size: Size) : void {
    this.selectedSize = size;
    this.selectedSizeChange.emit(this.selectedSize);
  }

  isSizeAvailable(size: Size): boolean {
    return this.input_sizes.includes(size);
  }

  isChecked(size: Size) : boolean {
    return size == this.selectedSize;
  }
}
