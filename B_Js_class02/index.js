// Exercises
// A
let number1 = 99;
let number2 = 101;
let test = 100;
let razlika1 = test - number1;
let razlika2 = test - number2;

if(razlika1 < 0){
	razlika1 *= -1;
	//razlika1 = razlika1 * -1;
	//razlika1 = Math.abs(razlika1);
}
if(razlika2 < 0){
	razlika2 *= -1;
}

if(razlika1 < razlika2){
	console.log(number1 + " is closer!");
} else if(razlika2 < razlika1) {
	console.log(number2 + " is closer!")
} else {
	console.log(number1 + " and " + number2 + " are equaly close!");
}

// B
let year = 1996;
let result = (year - 4) % 12;
switch (result) {
	case 0:
		console.log("Rat");
		break;
	case 1:
		console.log("Ox");
	break;
	
	case 2:
		console.log("Tiger");
	break;

	case 3:
		console.log("Rabbit");
	break;

	case 4:
		console.log("Dragon");
	break;

	case 5:
		console.log("Snake");
	break;

	case 6:
		console.log("Horse");
	break;

	case 7:
		console.log("Goat");
	break;

	case 8:
		console.log("Monkey");
	break;

	case 9:
		console.log("Rooster");
	break;

	case 10:
		console.log("Dog");
	break;

	case 11:
		console.log("Pig");
	break;

	default:
		break;
}

// Homework A
let num1 = 5;
let num2 = 15;
let num3 = 7;
let result1 = (num1 + num2 + num3) / 3;

if(isNaN(num1) || num1 < 0){
	console.log("Enter a valid number!");
}
else if(isNaN(num2) || num2 < 0){
	console.log("Enter a valid number!");
}
else if(isNaN(num3) || num3 < 0){
	console.log("Enter a valid number!");
}
else {
	console.log(result1);
}


// Homework B
// alert("Coffee - 2$, Water - 1$, Wine - 5$, Juice - 3$, Beer - 4$, Whisky - 10$");
// let input = prompt("What would you like to order?");
// let quantity = parseInt(prompt("Quantity:"));
// let total = 0;

// switch (input) {
// 	case "Coffee":
// 		total = quantity * 2
// 		console.log(`Type: ${input},\nQuantity: ${quantity},\nTotal: ${total}`);
// 		break;
// 	case "Water":
// 		total = quantity * 1
// 		console.log(`Type: ${input},\nQuantity: ${quantity},\nTotal: ${total}`);
// 		break;
// 	case "Wine":
// 		total = quantity * 5
// 		console.log(`Type: ${input},\nQuantity: ${quantity},\nTotal: ${total}`);
// 		break;
// 	case "Juice":
// 		total = quantity * 3
// 		console.log(`Type: ${input},\nQuantity: ${quantity},\nTotal: ${total}`);
// 		break;
// 	case "Beer":
// 		total = quantity * 4
// 		console.log(`Type: ${input},\nQuantity: ${quantity},\nTotal: ${total}`);
// 		break;
// 	case "Whisky":
// 		total = quantity * 10
// 		console.log(`Type: ${input},\nQuantity: ${quantity},\nTotal: ${total}`);
// 		break;
// 	default:
// 		break;
// }

// Homework Bonus
let random = Math.floor(Math.random() * 5) + 1;

switch (random) {
	case 1:
		alert("You are on the right track");
		break;
	case 2:
		alert("Danger is near");
		break;
	case 3:
		alert("Luck will find you");
		break;
	case 4:
		alert("You are about to make a mistake");
		break;
	case 5:
		alert("Your future is unclear");
		break;

	default:
		break;
}