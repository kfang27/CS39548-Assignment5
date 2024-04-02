// Looping a triangle
/*
for (let string1 = "#"; string1.length <= 7; string1 += "#"){
    console.log(string1, string1.length);
}

// Fizzbuzz

for (let number = 1; number < 101; number += 1){
    if (number % 3 == 0){
        if (number % 5 == 0){
            console.log("FizzBuzz");
        }
        else{
            console.log("Fizz");
        }
    }
    else if (number % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(number);
    }
}


// Chessboard
let final_string = "";
for (let row_count = 1; row_count <= 8; row_count += 1){
    let curr_string = "";

    for (let line_size = 0; line_size < 8; line_size += 1){
        // If row count is even
        if (row_count % 2 == 0){
            // If current line length is even
            if (curr_string.length % 2 == 0){
                curr_string += "#";
            }
            
            else{
                curr_string += " ";
            }
        }

        // If row count is odd
        else{
            if (curr_string.length % 2 == 0){
                curr_string += " ";
            }
            
            else{
                curr_string += "#";
            }
        }
    }
    if (row_count < 8){
        final_string += curr_string + "\n";
    }
    else{
        final_string += curr_string;
    }
}
console.log(final_string)
*/

function min(num1, num2) {
    if (num1 < num2){
        return num1;
    }
    else {
        return num2;
    }
}
//console.log(min(1,2));

function isEven(num){
    if (num == 0){
        return true;
    }
    if (num == 1){
        return false;
    }
    else if (num < 0){
        return isEven(-(num));
    }
    else{
        return isEven(num - 2);
    }
}
//console.log(isEven(-1));

// Bean Counting
function countsB(string) {
    /*
    let B_counter = 0;

    for (let i = 0; i < string.length; i++){
        if (string[i] == 'B'){
            B_counter += 1;
            
        }
    }
    return B_counter
    */
   return countChar(string, 'B');
}
//console.log("Number of Bs:", countsB("aaaaBBBBBBBB"))

function countChar(string, character){
    let char_counter = 0;
    
    for (let i=0; i < string.length; i++){
        if (string[i] == character){
            char_counter += 1;
        }
    }

    return char_counter;
}
//console.log("number of char:", countChar("kakkerlak", "k"));

// The Sum of a Range 
function range(start, end){
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
console.log(range(1,10))

function sum(arr){
    total = 0;
    
    for (let i=0; i <= arr.length - 1; i++){
        total += arr[i];
    }
    return total
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sum(range(1, 10)));