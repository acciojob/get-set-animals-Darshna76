class Animal {
	constructor(species){
		this.species = species;
	}
	get getterForSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`a sound the animal makes`);
	}
}

class Dog extends Animal {
	super(species);
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
super(species);
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;