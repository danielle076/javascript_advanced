// 1. Maak een blueprint "Product" van de volgende 3 producten.
// Zorg ervoor dat een methode buy() voor alle drie de producten werkt.
// Voor methode eat() maak je een subclass "Fruit" met een extra eigenschap "isRipe"

// const product = {
//     name: "Pineapple",
//     description: "Super healthy, but you need a knife, kind of",
//     price: 10,
//     quantity: 2,
//     weightGrams: 1000,
//     eat(){
//         console.log("BEFORE EATS:", this.quantity);
//         this.quantity = this.quantity - 1;
//         console.log("AFTER EATS:", this.quantity);
//     },
// };
//
// const product2 = {
//     name: "Apple",
//     description: "Just eat it",
//     price: 5,
//     quantity: 3,
//     weightGrams: 150,
//     eat(){
//         console.log("BEFORE EATS:", this.quantity);
//         this.quantity = this.quantity - 1;
//         console.log("AFTER EATS:", this.quantity);
//     },
// };
//
// const product3 = {
//     name: "Pen",
//     description: "It's mightier than the sword",
//     price: 2,
//     quantity: 5,
//     weightGrams: 20,
// };

class Product {
    constructor(name, description, price, quantity, weightGrams){
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.weightGrams = weightGrams;
    }
    buy(){
        console.log("BEFORE BUY:", this.quantity);
        this.quantity = this.quantity - 1;
        console.log("AFTER BUY:", this.quantity);
    }
}

class Fruit extends Product{
    constructor(name, description, price, quantity, weightGrams, isRipe){
        super(name, description, price, quantity, weightGrams);
        this.isRipe = isRipe;
    }
    eat(){
        console.log("YUM!");
    }
}

const pineapple = new Fruit("pineapple", "Super healthy, but you need a knife, kind of", 10, 2, 1000, true);
const apple = new Fruit("apple", "Just eat it", 5, 3, 150, false);
const pen = new Product("pen", "It's mightier than the sword", 2, 5, 20);

console.log(pineapple);
console.log(apple);
console.log(pen);

pineapple.buy(); // BEFORE BUY: 2 // AFTER BUY: 1
apple.buy(); // BEFORE BUY: 3 // AFTER BUY: 2
pen.buy(); // BEFORE BUY: 5 // AFTER BUY: 4

apple.eat(); // YUM!
// pen.eat(); // TypeError: pen.eat is not a function