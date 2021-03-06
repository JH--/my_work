/*Create a constructor function for a Person, each person should have a firstName, lastName,
favoriteColor and favoriteNumber. Write a method called multiplyFavoriteNumber that takes in
 a number and returns the product of the number and the Person's favorite number */

function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(i){
		return i * this.favoriteNumber;
	}
}


//Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

/*
function Child(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}
*/

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.apply(this, arguments);
}
