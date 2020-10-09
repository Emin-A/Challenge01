// JS EXERCISES
//21) Given variable x = "John" and y = "Doe", write on the
//  console log "John <> Doe"
const x = "John";
const y = "Doe";

console.log(x + " " + "<>" + " " + y);

//22) Create an object with properties such name, surname, 
// email
const information = {
    name: "Emin",
    surname: "Avdovic",
    email: "eminavdovic@gmail.com"
}

// 23) Delete Email from the previously created object
delete information.email;
console.log(information);
//24) Create an array with 10 strings in it
const myArray = ["I","think","that","this","will","work","after","all","the","fuss."]

//  25) Print in the console every string in the previous array
console.log(myArray);
// 26) Create an array with 100 random numbers in it
// const randomNumbers = Math.random([0,100])

// console.log(randomNumbers());
const randomNumbers = 100
const randomArray = []

for (let i = 0; i < randomNumbers; i++) {
    randomArray.push(Math.floor(Math.random() * 100))
}
console.log(randomArray);

//27) Write a function to get the MAX and the MIN from the
//  previously created array
function maxMin() {
    // console.log(maxMin(randomArray));   
// return (maxMin ("Maximum values in the array is:" +m.max(randomArray)));
}
console.log(Math.max(...randomArray));
console.log(Math.min(...randomArray));

// 28) Create an array of arrays, in which every array has 
// 10 random numbers
const set = new Array();
set[0] = new Array ("13", "44", "27", "28", "26", "80",  "6", "19", "74", "41");
set[1] = new Array ("86", "51",  "6", "83", "40", "36", "96", "50", "48", "83");

console.log(set[0],set[1]);
// 29) Create a function that gets 2 arrays and returns the
//  longest one
const arrayOne = ["I","AM","OK!"];
const arrayTwo = ["AM","I","OK","!?"];

function getTwo(x,y) {
    var arrayOne = x;
    var arrayTwo = y;

// return arrayOne ? x >= y : arrayTwo;
if (x >= y) {
    return arrayOne
} else if (y >= x) {
    return arrayTwo
} else {
    return console.log("They are same!");
}

}
console.log(getTwo(arrayOne,arrayTwo));
//30) Create a function that gets 2 arrays of numbers and 
// returns the one with the higher sum of values

const listOne = ["25", "90", "88"];
const listTwo = ["11", "51", "10"];

function getMe(a,b) {
    var listOne = a
    var listTwo = b
if (a >= b) {
    return listOne
} else if (b >= a) {
    return listTwo
} else {
    console.log("They are same!");
}
}
console.log(getMe(listOne,listTwo));