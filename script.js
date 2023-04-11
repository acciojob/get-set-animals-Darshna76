class Animal {
	constructor(species){
		this.species = species;
	}
	get getterForSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`${this.species} makes a sound`);
	}
}

class Dog extends Animal {
 constructor(species) {
    super(species);
  }
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
 constructor(species) {
    super(species);
  }
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;