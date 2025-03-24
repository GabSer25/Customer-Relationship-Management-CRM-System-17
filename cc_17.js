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

// Example:
const salesRep = new SalesRep("Jim Halpert");
salesRep.addClient(customer1);
console.log(`Sales Rep: ${salesRep.name}, Client Total (Michael): $${salesRep.getClientTotal("Michael Scott")}`);

// Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
  constructor(name, email, vipLevel) {
    super(name, email);
    this.vipLevel = vipLevel;
  }

  // Override getTotalSpent with 10% bonus
  getTotalSpent() {
    const baseTotal = super.getTotalSpent();
    return baseTotal + baseTotal * 0.10; // 10% bonus
  }
}

// Example:
const vipCustomer = new VIPCustomer("Bob Vance", "bobvance@email.com", "Gold");
vipCustomer.addPurchase(600);
vipCustomer.addPurchase(100);
console.log(`VIP Customer: ${vipCustomer.name}, Total with Bonus: $${vipCustomer.getTotalSpent()}`);

// Task 4 –Build a Client Report System
const customer2 = new Customer("Pam Beesly", "pambeesley@email.com");
customer2.addPurchase(300);
customer2.addPurchase(250);

const customer3 = new VIPCustomer("Jan Levinson", "janlevinson@email.com", "Platinum");
customer3.addPurchase(1000);

const allCustomers = [customer1, customer2, vipCustomer, customer3];
salesRep.addClient(customer2);
salesRep.addClient(customer3);

// Total revenue (VIP with bonus included)
const totalRevenue = allCustomers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue}`);

// Customers who spent over $500
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log("High-Spending Customers:");
highSpenders.forEach(c => console.log(`- ${c.name}: $${c.getTotalSpent()}`));

// Summary: name and total spent
const summary = allCustomers.map(c => ({
  name: c.name,
  totalSpent: c.getTotalSpent()
}));
console.log("Customer Summary:");
console.table(summary);