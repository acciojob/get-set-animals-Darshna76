//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`${this.species} The Golden Retriever makes a sound`);
	}
	
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}
let myCat = new Cat("cat");
console.log(myCat.species); // Output: cat
myCat.makeSound(); // Output: The cat makes a sound.
myCat.purr(); // Output: purr

let myDog = new Dog("dog");
console.log(myDog.species); // Output: dog
myDog.makeSound(); // Output: The dog makes a sound.
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
