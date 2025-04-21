//get the inputs
function getValues() {
    //get each input by ID
    let trustInput = document.getElementById('trustInput');
    let worthyInput = document.getElementById('worthyInput');
    // get the value out of the <input>
    let startNumber = parseInt(trustInput.value);
    let endNumber = parseInt(worthyInput.value);

    //parseInt turns a string into a number

    //if the input is not a number we get NAN 

    // validate that the inputs are numbers
    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
        // if (Text.isInteger(startNumber) && Text.isInteger(endNumber));
        //after you know if the number are both integers you 
        let generatedNumbers = generateTrustworthy(startNumber, endNumber);


        //want to generate the numbers with function generateNumbers
        displayNumbers(generatedNumbers);

    }

    else {
        //tell the user to enter valid numbers
        Swal.fire({
            backdrop: false,
            title: 'oops',
            text: 'please enter valid start and end number',
            icon: 'error',
        });


    }


    // what do i do if theyre not numbers 


}


//generate some numbers
function generateTrustworthy(start, end) {
    //generate numbers between start and end
    let numbers = [];


    for (let i = start; i <= end; i = i + 1) {
        if (i % 3 == 0 && i % 5 == 0) {
            numbers.push("TrustWorthy");
        }
        //replace the number with fizz by understanding 
        // that the numbers variable is saying that whatever is pushed
        //in the loop (numbers.push) will show up in the array 
        // that you want displayed on the table.
        //if i want to replace the value itself with a word i use (ELSE IF)

        else if (i % 3 == 0) {
            numbers.push("Trust")
        }
        else if (i % 5 == 0) {
            numbers.push("Worthy")
        }

        else
            numbers.push(i);

    }
    // if i is less than or equal to a hundred it will do whatever we 
    // want it to in the curly bracket
    // write down the number i is on

    return numbers;


}


//display the numbers on the page
function displayNumbers(numbers) {

    let tableHtml = '';



    //go through each number in the array
    for (let index = 0; index < numbers.length; index = index + 1) {
        //get one number out of the array
        let currentNumber = numbers[index];
        let className = '';





        //else if (currentNumber % 5 == 0) { className = 'worthy'; }
        //else (currentNumber % 15 == 0); { className = 'trustworthy'; }
        tableHtml = tableHtml + `<tr><td class="${className}"> ${currentNumber}</td></tr>`;
    }


    // create html for each number 
    // after, put that html in the table 

    let tableElement = document.getElementById('trustworthyTable');
    //put that html in the table
    tableElement.innerHTML = tableHtml;

    //bold the even numbers
    // figure out where to display them in the <table> 


}