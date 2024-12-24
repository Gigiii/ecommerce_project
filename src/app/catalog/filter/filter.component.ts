import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Size } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ColorSelectorComponent } from '../../products/color-selector/color-selector.component';
import { SizeSelectorComponent } from '../../products/size-selector/size-selector.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, ColorSelectorComponent, SizeSelectorComponent, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() category: string | undefined;
  @Input() color: Color | undefined;
  @Input() size: Size | undefined;
  @Input() maxPrice: number | undefined;
  @Input() name: string | undefined;
  @Output() filterChange = new EventEmitter<{
    category?: string;
    color?: Color;
    size?: Size;
    maxPrice?: number;
    name?: string;
  }>();

  availableCategories: string[] = [
    "Clothing", "Accessories", "Sweatshirts", "Hoodies", "T-Shirts", "Footwear"
  ];

  selectedCategories: string[] = [];

  onCategoryChange(category: string, event: any): void {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.onFilterChange();
  }

  availableColors: Color[] = [
    Color.Red,
    Color.Green,
    Color.Blue,
    Color.Black,
    Color.White,
    Color.Yellow,
    Color.Cyan,
    Color.Magenta,
  ];

  availableSizes: Size[] = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];

  clearFilters(): void {
    this.category = undefined;
    this.color = undefined;
    this.size = undefined;
    this.maxPrice = undefined;
    this.name = undefined;
    this.selectedCategories = [];
    this.onFilterChange();
  }

  onPriceChange(): void {
    if (this.maxPrice !== undefined && this.maxPrice < 0) {
      this.maxPrice = Math.abs(this.maxPrice);
    }else{
      this.onFilterChange();
    }
  }

  onFilterChange(): void {
    this.filterChange.emit({
      category: this.selectedCategories.join(', '),
      color: this.color,
      size: this.size,
      maxPrice: this.maxPrice,
      name: this.name,
    });
  }
}
