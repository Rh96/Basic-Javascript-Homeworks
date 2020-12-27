let userInput = prompt("Enter recipe name:");
let userInput2 = parseInt(prompt("Enter number of ingredients for the recipe: "));
let ingredientNames = [];
let recipeNames = [];
let body = document.querySelector('body');

// Function enter recipe name
let askUserForRecipeName = (recipeName) => {
    let crtHdr = document.createElement('h1');
    if(recipeName === ""){
        console.log("Enter the name of the recipe!");
    }
    else {
        recipeNames.push(recipeName);
        console.log("Succesfully added recipe name!");
    }
    crtHdr.innerHTML = recipeName;
    body.appendChild(crtHdr);
}

// Function ingredients length
let askUserForIngredientsNum = (numOfIngredients) => {
    if(isNaN(numOfIngredients)){
        console.log("You didn't enter a number or is not a number that you entered!")
    }
    else {
        return numOfIngredients;
    }
}
// askUserForRecipeName(userInput);
// askUserForIngredientsNum(userInput2);

// Enter ingredient names
let askUserToEnterIngredientName = () => {
    let crtUoList = document.createElement('ul');
    let numOfIng = askUserForIngredientsNum(userInput2);
        let i = 0;
        while(i < numOfIng){
            let ingName = prompt("Enter ingredients name:");
            if(ingName === ""){
                console.log("Enter the name of the ingredient!");
            }
            else {
                ingredientNames.push(ingName);
                i++;
            }
        }
    for (const item of ingredientNames) {
        crtUoList.innerHTML += `<li>${item}</li>`; 
    }
    body.appendChild(crtUoList);
}

askUserForRecipeName(userInput);
askUserForIngredientsNum(userInput2);
askUserToEnterIngredientName();
// console.log(ingredientNames);