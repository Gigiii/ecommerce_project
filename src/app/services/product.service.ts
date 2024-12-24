import { Color, Product, Size } from './../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Basic Sweatshirt",
      imageUrls: ["images/products/sweatshirt.png", "images/products/black_hoodie.png", "images/products/white_shirt.png"],
      categories: ["Clothing", "Sweatshirts"],
      size: [Size.S, Size.M, Size.L],
      price: 19.99,
      inStock: true,
      color: [Color.Black, Color.Yellow, Color.White],
      description: `Stay cozy and stylish with our Basic Sweatshirt. Crafted for comfort and versatility, this wardrobe staple is perfect for layering or wearing solo on cool days. The premium fabric ensures a snug yet breathable fit, making it a must-have for any casual outing.

      - Soft and Durable Fabric
      - Modern and Minimalist Design
      - Available in Multiple Sizes`,
    },
    {
      id: 2,
      name: "Basic Hoodie",
      imageUrls: ["images/products/black_hoodie.png", "images/products/black_hoodie.png"],
      categories: ["Clothing", "Hoodies"],
      size: [Size.S, Size.M, Size.L, Size.XXL],
      price: 49.99,
      inStock: true,
      color: [Color.Black, Color.White, Color.Red],
      description: `Elevate your casual look with our Basic Hoodie. Designed for maximum comfort and effortless style, this hoodie is your go-to for staying warm while looking cool. The classic black color complements any outfit, making it perfect for everyday wear.

      - Comfortable Fit
      - Stylish and Practical Design
      - Premium Quality Material`,
    },
    {
      id: 3,
      name: "Basic T-Shirt",
      imageUrls: ["images/products/black_shirt.png", "images/products/black_shirt.png"],
      categories: ["Clothing", "T-Shirts"],
      size: [Size.S, Size.M, Size.L, Size.XL],
      price: 9.99,
      inStock: true,
      color: [Color.Cyan, Color.White, Color.Blue],
      description: `Refresh your wardrobe with our Basic T-Shirt. This versatile and timeless piece is perfect for layering or wearing on its own. The soft gray fabric ensures all-day comfort, whether you're out and about or relaxing at home.

      - Lightweight and Breathable
      - Perfect for Any Season
      - Affordable and Durable`,
    },
    {
      id: 4,
      name: "Mockup T-Shirt",
      imageUrls: ["images/products/mockup_shirt.png", "images/products/mockup_shirt.png"],
      categories: ["Clothing", "T-Shirts"],
      size: [Size.S, Size.M, Size.L, Size.XXL],
      price: 14.99,
      inStock: true,
      color: [Color.Black, Color.Red, Color.White],
      description: `Make a statement with our Mockup T-Shirt. Featuring a sleek black design, this shirt effortlessly combines style and comfort. It's a must-have addition for anyone looking to elevate their casual wear collection.

      - Trendy and Modern
      - Soft, Comfortable Fabric
      - Designed for a Relaxed Fit`,
    },
    {
      id: 5,
      name: "Sports Watch",
      imageUrls: ["images/products/sports_watch.png"],
      categories: ["Accessories", "Watches"],
      size: [Size.S, Size.M, Size.L, Size.XXL],
      price: 129.99,
      inStock: false,
      color: [Color.Blue, Color.Black, Color.White],
      description: `Stay ahead of the game with our Sports Watch. Engineered for precision and durability, this sleek accessory combines functionality and style. Perfect for workouts or casual outings, it complements any look effortlessly.

      - High-Quality Build
      - Multifunctional Features
      - Water-Resistant Design`,
    },
    {
      id: 6,
      name: "Leather Wallet",
      imageUrls: ["images/products/wallet.png"],
      categories: ["Accessories", "Wallets"],
      size: [Size.S, Size.L, Size.XXL],
      price: 39.99,
      inStock: false,
      color: [Color.Black, Color.White, Color.Blue],
      description: `Carry your essentials in style with our Leather Wallet. Made from premium-quality leather, this wallet offers a perfect blend of functionality and sophistication. Compact and durable, it's a timeless accessory for everyday use.

      - Elegant and Practical
      - Multiple Card Slots
      - Premium Leather Finish`,
    },
    {
      id: 7,
      name: "Linen Shirt",
      imageUrls: ["images/products/white_shirt.png", "images/products/black_shirt.png"],
      categories: ["Clothing", "Shirts"],
      size: [Size.S, Size.M, Size.L, Size.XXL],
      price: 29.99,
      inStock: true,
      color: [Color.White, Color.Red, Color.Black],
      description: `Stay cool and comfortable with our Linen Shirt. Perfect for warmer days, this lightweight and breathable shirt is designed for both style and comfort. Its versatile white color pairs effortlessly with any outfit.

      - Soft and Breathable Fabric
      - Classic and Timeless Look
      - Suitable for Casual or Formal Occasions`,
    },
    {
      id: 8,
      name: "Sporting Cap",
      imageUrls: ["images/products/cap.png"],
      categories: ["Accessories", "Hats"],
      size: [Size.S, Size.M, Size.L, Size.XXL],
      price: 15.99,
      inStock: true,
      color: [Color.Black, Color.Magenta, Color.White],
      description: `Complete your look with our Sporting Cap. Designed for both functionality and style, this cap is a perfect accessory for outdoor activities or casual outings. Its adjustable fit ensures maximum comfort.

      - Lightweight and Durable
      - Classic Black Design
      - One Size Fits Most`,
    },
    {
      id: 9,
      name: "Winter Boots",
      imageUrls: ["images/products/boots.png"],
      categories: ["Footwear"],
      size: [Size.S, Size.M, Size.L, Size.XL],
      price: 119.99,
      inStock: true,
      color: [Color.White, Color.Black, Color.Cyan],
      description: `Brave the cold with our Winter Boots. Built for warmth and durability, these boots are designed to keep you comfortable and stylish during the chilly season. The rugged design offers excellent grip on slippery surfaces.

      - Insulated for Warmth
      - Weather-Resistant Materials
      - Sturdy and Reliable`,
    },
    {
      id: 10,
      name: "Ryan Hoffman Shirt",
      imageUrls: ["images/products/ryan_shirt.png"],
      categories: ["Clothing"],
      size: [Size.S, Size.M, Size.L, Size.XL],
      price: 24.99,
      inStock: true,
      color: [Color.Black],
      description: `Maximize your workout performance with the really cool Ryan Hoffman Shirt!

      - Breathable and Sweat-Wicking
      - Supportive and Comfortable Fit
      - Stylish and Functional Design`,
    },
    {
      id: 11,
      name: "Basic Shirt",
      imageUrls: ["images/products/white_shirt.png", "images/products/black_shirt.png"],
      categories: ["Clothing", "Shirts"],
      size: [Size.S, Size.M, Size.L, Size.XXL],
      price: 29.99,
      inStock: true,
      color: [Color.White, Color.Red, Color.Black],
      description: `Stay cool and comfortable with our Linen Shirt. Perfect for warmer days, this lightweight and breathable shirt is designed for both style and comfort. Its versatile white color pairs effortlessly with any outfit.

      - Soft and Breathable Fabric
      - Classic and Timeless Look
      - Suitable for Casual or Formal Occasions`,
    },
  ];

  filterProducts(filters: {
    category?: string;
    color?: Color;
    size?: Size;
    maxPrice?: number;
    name?: string;
  }): Product[] {
    return this.products.filter((product) => {
      // Filter by category
      if (filters.category && !product.categories.some(category => filters.category?.includes(category))) {
          return false;
      }
      // Filter by color
      if (filters.color && !product.color.includes(filters.color)) {
        return false;
      }
      // Filter by size
      if (filters.size && !product.size.includes(filters.size)) {
        return false;
      }
      // Filter by max price
      if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
        return false;
      }
      // Filter by name
      if (
        filters.name &&
        !product.name.toLowerCase().includes(filters.name.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }


  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCount(n : number) {
    return this.products.slice(0, n);
  }

  getProductById(id: number): Product {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;  }

}
