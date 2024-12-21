import { Product, Size } from './../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Basic Sweatshirt",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Clothing", "Sweatshirts"],
      size: Size.M,
      price: 19.99,
      inStock: true,
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Hoodie",
      imageUrls: ["images/products/black_hoodie.png", "images/products/black_hoodie.png"],
      categories: ["Clothing", "Hoodies"],
      size: Size.L,
      price: 49.99,
      inStock: true,
      color: "Black",
    },
    {
      id: 3,
      name: "Basic T-Shirt",
      imageUrls: ["images/products/black_shirt.png", "images/products/black_shirt.png"],
      categories: ["Clothing", "T-Shirts"],
      size: Size.S,
      price: 9.99,
      inStock: true,
      color: "Gray",
    },
    {
      id: 4,
      name: "Mockup T-Shirt",
      imageUrls: ["images/products/mockup_shirt.png", "images/products/mockup_shirt.png"],
      categories: ["Clothing", "T-Shirts"],
      size: Size.XL,
      price: 14.99,
      inStock: true,
      color: "Black",
    },
    {
      id: 5,
      name: "Sports Watch",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Accessories", "Watches"],
      size: Size.M,
      price: 129.99,
      inStock: true,
      color: "Silver",
    },
    {
      id: 6,
      name: "Leather Wallet",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Accessories", "Wallets"],
      size: Size.S,
      price: 39.99,
      inStock: false,
      color: "Brown",
    },
    {
      id: 7,
      name: "Linen Shirt",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Clothing", "Shirts"],
      size: Size.L,
      price: 29.99,
      inStock: true,
      color: "White",
    },
    {
      id: 8,
      name: "Sporting Cap",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Accessories", "Hats"],
      size: Size.S,
      price: 15.99,
      inStock: true,
      color: "Black",
    },
    {
      id: 9,
      name: "Winter Boots",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Footwear", "Winter"],
      size: Size.XXL,
      price: 119.99,
      inStock: true,
      color: "Brown",
    },
    {
      id: 10,
      name: "Sports Bra",
      imageUrls: ["images/products/sweatshirt.png", "images/products/sweatshirt.png"],
      categories: ["Clothing", "Activewear"],
      size: Size.M,
      price: 24.99,
      inStock: true,
      color: "Pink",
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCount(n : number) {
    return this.products.slice(0, n);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

}
