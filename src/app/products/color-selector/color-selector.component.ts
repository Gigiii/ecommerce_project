import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../../interfaces/product';

@Component({
  selector: 'app-color-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  @Input() input_colors: Color[] = [];
  @Input() selectedColor: Color = this.input_colors[0];
  @Output() selectedColorChange = new EventEmitter<Color>();

  onColorChange(color: Color) {
    this.selectedColor = color;
    this.selectedColorChange.emit(this.selectedColor);
    console.log(this.selectedColor);
  }

  isSelected(color: Color) {
    return color == this.selectedColor;
  }
}
