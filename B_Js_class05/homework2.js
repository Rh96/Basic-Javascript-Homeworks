let slcResult = document.querySelector('#result');

let sum = (array) => {
    let total = 0;
    let op = '';
    let elem = '';
    for (let num = 0; num < array.length; num++) {
        total += array[num];
        if (array.length - 1 === num) {
            op += `${array[num]} = `; 
        } else {
            op += `${array[num]} + `;
        }
    }
    elem = `<span>${op} ${total}</span>`;
    slcResult.innerHTML = elem;
}
sum([2,4,5]);