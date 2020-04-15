// const meMyself = {
//     firstName: "Ashon",
//     lastName: "Woodbury",
//     hobbies: ["coding", "gaming", "stuff"],
//     hasACat: true,
//     timeToWork: function () {
//         console.log("Get to work!")
//     }
// }

// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     bark: function(){
//         window.alert("WOOF")
//     },
//     contentsOfStomach: [],
//     eat: function(item) {
//         //push eaten items into contentsOfStomach
//         rufusTheDog.contentsOfStomach.push(item)
//         this.contentsOfStomach.push(item)
//     },
//     puke: function () {
//         rufusTheDog.contentsOfStomach.length = 0
//     },
// }

// rufusTheDog.eat("snacks")
// rufusTheDog.eat("a stick")

// console.log("This is in Rufus' stomach:", `${rufusTheDog.contentsOfStomach}`)


//Practice

//Represent your pet

// const myCat = {
//     name: "Zula",
//     species: "Tabby",
//     nicknames: [
//         "Zuzu", 
//         "Zula Zu", 
//         "Princess", 
//         "Troublemaker"
//     ],
//     age: 1,
//     meow: function(){
//         window.alert("MEOW")
//     },

//     favoriteToys: [

//     ],
//     play: function(toy){
//         if (toy === "fuzzy") {
//             myCat.favoriteToys.push(toy)
//         } else {
//             console.log("Didn't like that one")
//         }
//     }
// }

// myCat.play("box")
// console.log(myCat.favoriteToys)

// window.alert("meow");
// myCat.meow()

//Fast Food Ordering

// const restaurant = {
//     name: "Bob's Burgers",
//     placeOrder: function (meal) {
//         if (this.fries === true) {
//             return `You have ordered a ${this.sandwichType}. It comes with fries and a ${this.drinkSize} drink. Enjoy!`
//         } else {
//             return `You have ordered a ${this.sandwichType}. It doesn't come with fries and a ${this.drinkSize} drink. Enjoy!`
//         }
//     },
//     orders: [

//     ],
//     allOrders: function(){
//         return `${this.orders}`
//     }

// }

// const chickenComboMeal = {
//     sandwichType: "Chicken sandwich",
//     fries: true,
//     drinkSize: "Medium"
// }

// const burgerComboMeal = {
//     sandwichType: "Double cheeseburger",
//     fries: true,
//     drinkSize: "Large"
// }

// const fishComboMeal = {
//     sandwichType: "Fish sandwich",
//     fries: false,
//     drinkSize: "Medium"
// }


// Place an order
// console.log(restaurant.placeOrder(chickenComboMeal))

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()


// const restaurant = {
//     name: "Bob's Burgers",
//     orders: [],
//     placeOrder: function (meal) {
//         this.orders.push(meal)
    
//     if(meal === chickenComboMeal) {
//         console.log(`We have received your order. Your ${chickenComboMeal.sandwichType} combo and a ${chickenComboMeal.drinkSize} drink are coming right up. Thank you for your order!`)
//     } else if (meal === cheeseburgerComboMeal) {
//         console.log(`We have received your order. Your ${cheeseburgerComboMeal.sandwichType} combo and a ${cheeseburgerComboMeal.drinkSize} drink are coming right up. Thank you for your order!`)
//     } else if (meal === hamburgerComboMeal){
//         console.log(`We have received your order. Your ${hamburgerComboMeal.sandwichType} combo and a ${hamburgerComboMeal.drinkSize} drink are coming right up. Thank you for your order!`)
//     }
//     }
// }

    
   

//    const chickenComboMeal = {
//     sandwichType: "Chicken Sandwich",
//     fries:  true,
//     drinkSize: "Medium"
//     }
//     const cheeseburgerComboMeal = {
//         sandwichType: "Cheeseburger",
//         fries: true,
//         drinkSize: "large"
//     }
//     const hamburgerComboMeal = {
//         sandwichType: "Hamburger",
//         fries: true,
//         drinkSize: "Medium"
//     }


// Place an order
// restaurant.placeOrder(hamburgerComboMeal)
// restaurant.placeOrder(cheeseburgerComboMeal)
// restaurant.placeOrder(chickenComboMeal)
// Invoke the function to return the list of all orders
// console.log(restaurant.orders)
// Output all orders to the console using console.table()
// console.table(restaurant.orders)

//Political campaign

const politicalCandidate = {
    const platformStatements =
}