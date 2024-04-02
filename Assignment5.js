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
