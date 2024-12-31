// Questoin no 1


function list() {
    const chooseFruits = [];
    for (let i = 0; i < 4; i++) {
        fruitsName = prompt('Enter the name of the fruit');
        chooseFruits .push(fruitsName);
    }
    delete chooseFruits [1];

    console.log(chooseFruits.join(" | "));
}
list();


// Questoin no 2

function lastChar(string){
    return string[string.length - 1];
    
}
console.log(lastChar("JavaScript")); 

  
// Question no 3

function reverse(word) {
    return word.split("").reverse().join("");
}
console.log(reverse("hello worlds"));

function reverse2(word) {
    return word.split("").reverse().reverse().join("");
}
console.log(reverse2("hello world"));