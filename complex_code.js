/* 
   Filename: complex_code.js

   Description: 
   This is a complex JavaScript code that demonstrates various advanced concepts and techniques.
   It simulates a simplistic e-commerce shopping cart with a product catalog, cart management, and basic checkout process. 

   Author: [Your Name]
   Date: [Current Date]
*/


// Define a Product class to represent individual products in the catalog
class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  // Function to get the formatted price of the product
  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}

// Define a Catalog class to manage the products available for purchase
class Catalog {
  constructor() {
    this.products = [];
  }

  // Function to add a new product to the catalog
  addProduct(product) {
    this.products.push(product);
  }

  // Function to display all products in the catalog
  displayCatalog() {
    console.log("Product Catalog:");
    this.products.forEach((product) => {
      console.log(`- ${product.name}: ${product.getFormattedPrice()}`);
    });
  }
}

// Define a Cart class to manage the shopping cart
class Cart {
  constructor() {
    this.items = [];
  }

  // Function to add a product to the cart
  addToCart(product) {
    this.items.push(product);
    console.log(`Added '${product.name}' to the cart.`);
  }

  // Function to remove a product from the cart
  removeFromCart(product) {
    const index = this.items.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed '${product.name}' from the cart.`);
    }
  }

  // Function to calculate the total price of all items in the cart
  calculateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  }

  // Function to display the cart contents
  displayCart() {
    console.log("Shopping Cart:");
    this.items.forEach((item) => {
      console.log(`- ${item.name}: ${item.getFormattedPrice()}`);
    });
    console.log(`Total Price: ${this.calculateTotalPrice()}`);
  }
}

// Define a Checkout class to simulate the checkout process
class Checkout {
  static processPayment(paymentAmount) {
    console.log(`Processing payment of $${paymentAmount.toFixed(2)}...`);
    // Simulate payment processing
    console.log("Payment processed successfully!");
  }
}

// Create an instance of the Catalog class
const catalog = new Catalog();

// Create some sample products and add them to the catalog
const product1 = new Product(1, "Product 1", 9.99, "This is the first product.");
const product2 = new Product(2, "Product 2", 19.99, "This is the second product.");
const product3 = new Product(3, "Product 3", 29.99, "This is the third product.");
catalog.addProduct(product1);
catalog.addProduct(product2);
catalog.addProduct(product3);

// Display the catalog
catalog.displayCatalog();

// Create an instance of the Cart class
const cart = new Cart();

// Add products to the cart
cart.addToCart(product1);
cart.addToCart(product3);

// Display the cart contents
cart.displayCart();

// Remove a product from the cart
cart.removeFromCart(product1);

// Display the updated cart contents
cart.displayCart();

// Simulate the checkout process
Checkout.processPayment(cart.calculateTotalPrice());