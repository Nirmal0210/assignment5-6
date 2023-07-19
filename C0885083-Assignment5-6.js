// Student Name - Nirmal Panchal
// Student ID - C0885083

class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Color: ${this.color}`);
      console.log(`Price: $${this.price}`);
      console.log(`Gas: ${this.gas} liters`);
    }
  
    loseGas() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.year;
      const gasLoss = age === 0 ? 5 : 5 + age;
  
      this.gas -= gasLoss;
      if (this.gas < 0) {
        this.gas = 0;
      }
    }
  }
  
  // Create car objects
  const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  // Honk method for each car
  console.log("\n\nCar 1:");
  car1.honk();
  console.log("\n\nCar 2:");
  car2.honk();
  console.log("\n\nCar 3:");
  car3.honk();
  console.log("\n\nCar 4:");
  car4.honk();
  console.log("\n\nCar 5:");
  car5.honk();
  console.log("\n\nCar 6:");
  car6.honk();
  
  // Car race for 7 turns
  for (let turn = 1; turn <= 7; turn++) {
    car1.loseGas();
    car2.loseGas();
    car3.loseGas();
    car4.loseGas();
    car5.loseGas();
    car6.loseGas();
  }
  
  console.log("\nAfter 7 turns, remaining gas:");
  console.log("\nCar 1:", car1.gas, "liters");
  console.log("\nCar 2:", car2.gas, "liters");
  console.log("\nCar 3:", car3.gas, "liters");
  console.log("\nCar 4:", car4.gas, "liters");
  console.log("\nCar 5:", car5.gas, "liters");
  console.log("\nCar 6:", car6.gas, "liters");
  