/* Exercise 1: Declaring and using variables
1. In index.html, before the closing body tag, use the script tag to link to this js file.

2. Declare a constant variable: question
Give it a string value:
"What is your favorite movie?"
3. Declare a variable: answer 
set its value to the prompt function
Pass prompt the question
4. Use console.log() to show the answer in the console.
5. !!! After testing your code, comment it out so the prompt doesn't get in your way for the rest of the exercises.
*/

const question = "What is your favorite movie?";
// let answer = prompt(question);
// console.log(answer);

/* ___________________________________________________________________________
Exercise 2: Exploring data types 
Be intentional when naming your variables.  Choose a name that is clear and specific about the data being held by that variable.
    TIP - when printing to the console, put a label on your console log so it's easier to tell what you're seeing.
    For example:  
      var helloWorld = 'hello world'
      console.log('helloWorld: ', helloWorld)
Complete the following:
*/

/* Declare a variable goneFishing and assign it a boolean value of whether you have ever gone fishing.  Then print it to the console. */
let goneFishing = true
console.log('Gone fishing: ' + goneFishing)


//Declare a variable called potato but do not assign it a value yet.  Print it to the console. What do you get?
let potato;
console.log('potato' + potato)

//Declare a variable called sum and assign it a value of 2 + 5.  Then print it to the console.
let sum = 2 + 5
console.log('2 + 5 = ' + sum)

//Declare a variable called nothing and assign it a value of null.  Then print it to the console.
let nothing = null
console.log('nothing: ' + nothing)

//Declare a variable called names and assign it a value of an empty string.  Then print it to the console. 
let names = ""
console.log('names: ' + names)

//Reassign the above names variable to the value of your middle name and print it to the console. Remember: once you've declared a variable, do not type a keyword before it again.
names = "Duy"
console.log('names: ' + names)

//Reassign the names variable to the value of your friend's name and print it in the console.
names = "Kenny"
console.log('names: ' + names)


 

/*
_______________________________________________________________________________
Exercise 3: Type Coercion & Type conversion */

//1. Declare a variable num with a number value
let num = 67

//2. Declare a variable called string with the same value but put quotation marks around it.
let string = "33"

/*3. Declare a third variable, mix, with value of the first variable added to the second: num + string
Print the third variable to console. */
let mix = num + string
console.log('mixed results: ' + mix)


// Use the tyeof operator to find the data type of mix and print it to the console.
console.log('mixed datatype: ' + typeof mix)


//Reassign the value of the mix variable to an actual sum of 2 numbers. Pass the string variable to parseInt() and add the num variables. Log the result it in the console.
mix = num + parseInt(string)
console.log('mixed datatype after conversion: ' + typeof mix)



/*
______________________________________________________________________________
Exercise 4: String Concatenation & Interpolation

1. Declare 2 variables, one with a number value, one with an animal name value.
2. Declare a third variable with a string value that concatenates the first 2 variables into this sentence:
"I love var2, I have var1 of them in my backyard."
3. Print the third variable in the console*/
let numAnimals = 7
let animalType = "donkeys"

let brag = "I love " + animalType + ", I have " + numAnimals + " of them in my backyard."
console.log(brag)

// Interpolation or template literal syntax
//4. Reassign the third variable above. Use template literal syntax instead of the plus sign to create the same sentence. Print it to the console.
brag = `I love ${animalType}, I have ${numAnimals} of them in my backyard.`
console.log(brag)

/*
__________________________________________________________________________
Exercise 5: Arithmetic Operators */

//1. Declare 2 variables, num1 and num2, and give them number values.
let num1 = 11
let num2 = 22

//2. Declare a third variable, total, and give it a value of num1 + num2
//Print total to the console using template literal syntax to show the entire equation
let total = num1 + num2
console.log(`${num1} + ${num2} = ${total}`)

//3. Reassign total to the value of num1 multiplied by num2 
//Print total to the console using template literal syntax to show the entire equation
//Repeat the last step for division and subtraction
total = num1 * num2
console.log(`${num1} * ${num2} = ${total}`)
 
total = num1 / num2
console.log(`${num1} / ${num2} = ${total}`)

total = num1 - num2
console.log(`${num1} - ${num2} = ${total}`)
/*
____________________________________________________________________________
Exercise 6: Incrementer & Decrementer Operators */

//1. Declare a variable: counter, set its value to 0
let counter = 0


//2. Reassign the value of counter to itself plus 1 and print it to the console
counter += 1
console.log(`counter: ${counter}`)


//3. Reassign the value of counter using an operator to increment it by 1 and print it to the console
counter += 1
console.log(`counter: ${counter}`)


//4. Reassign the value of counter using an operator to decrement it by 1 and print it to the console
counter -= 1
console.log(`counter: ${counter}`)


//5. Reassign the value of counter using the ++ operator and print it to the console
counter++
console.log(`counter: ${counter}`)