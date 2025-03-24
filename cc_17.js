// Task 1: Created Customer class
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
  }

  // Method to add a new purchase
  addPurchase(amount) {
    this.purchaseHistory.push(amount);
  }

  // Method to get total spent
  getTotalSpent() {
    return this.purchaseHistory.reduce((sum, purchase) => sum + purchase, 0);
  }
}

// Example:
const customer1 = new Customer("Michael Scott", "worldsbestboss@email.com");
customer1.addPurchase(200);
customer1.addPurchase(150);
console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);


