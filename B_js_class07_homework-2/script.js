let inputName = prompt("Enter dog name:");
let inputKind = prompt("Enter the kind of the dog: ");
let inputDogWord = prompt("Enter what dog thinks: ");
let btn = document.getElementById("dogSpeak");

btn.addEventListener('click', function(){
    let dog = {
        name: inputName,
        kind: inputKind,
        speak: function(dogSay){
            return dogSay;
        }
    }
    console.log(dog.speak(inputDogWord))
    console.log("Dog says: " + dog.speak(inputDogWord));
})