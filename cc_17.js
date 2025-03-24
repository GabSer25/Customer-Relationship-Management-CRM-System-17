// Task 1: Create a Customer class
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

// Task 2: Create a SalesRep class
class SalesRep {
  constructor(name) {
    this.name = name;
    this.clients = [];
  }

  // Add customer to the sales rep’s list
  addClient(customer) {
    this.clients.push(customer);
  }

  // Get specific client's total spent
  getClientTotal(name) {
    const client = this.clients.find(c => c.name === name);
    return client ? client.getTotalSpent() : 0;
  }
}

// Example usage:
const salesRep = new SalesRep("Jim Halpert");
salesRep.addClient(customer1);
console.log(`Sales Rep: ${salesRep.name}, Client Total (Michael): $${salesRep.getClientTotal("Michael Scott")}`);

