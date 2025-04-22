//get the inputs
function getValues() {
    //get each input by ID
    let trustInput = document.getElementById('trustInput');
    // this gets the id from the element 
    let worthyInput = document.getElementById('worthyInput');
    // get the value out of the <input> element which is 3 and 5
    let trustNumber = parseInt(trustInput.value);
    //this is where the string (trustinput.value)is turned into an integer by parseInt
    //trustNumber now represents that input's element value
    let worthyNumber = parseInt(worthyInput.value);

    //parseInt turns a string into a number

    //if the input is not a number we get NAN 

    // validate that the inputs are numbers
    if (Number.isInteger(trustNumber) && Number.isInteger(worthyNumber)) {
        // another way to say it is if (number.isNAN(trustNumber) || number.isNAN(worthyNumber))
        //after you know if the number are both integers you 
        //
        let generatedNumbers = generateTrustworthy(trustNumber, worthyNumber);


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
function generateTrustworthy(trust, worthy) {
    //generate numbers between start and end
    let numbers = [];


    for (let i = 1; i <= 100; i = i + 1) {
        if (i % trust == 0 && i % worthy == 0) {
            numbers.push("TrustWorthy");
        }
        //replace the number with fizz by understanding 
        // that the numbers variable is saying that whatever is pushed
        //in the loop (numbers.push) will show up in the array 
        // that you want displayed on the table.
        //if i want to replace the value itself with a word i use (ELSE IF)

        else if (i % trust == 0) {
            numbers.push("Trust")
        }
        else if (i % worthy == 0) {
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
    for (let i = 0; i < numbers.length; i = i + 1) {
        //this means that i should always be less than how many numbers are in the array for ex.
        //[1,2,3,4,5,6,7,8] this means that i should always be less than 8 for the loop to continue.
        let value = numbers[i];
        // this means that the value is assigned the number of


        tableHtml = tableHtml + `<tr><td> ${value}</td></tr>`;
    }


    // create html for each number 
    // after, put that html in the table 

    let tableElement = document.getElementById('trustworthyTable');
    //put that html in the table
    tableElement.innerHTML = tableHtml;

    //bold the even numbers
    // figure out where to display them in the <table> 


}