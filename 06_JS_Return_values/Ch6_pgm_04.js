// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	return number1 + number2;

};

var sum = add(50, 23);

console.log(sum);

var sum2 = add(23,27);
console.log(sum2)

addThree = function(n1,n2,n3) {
	return n1+n2+n3;
};

var sum4 = addThree(9,8,7);
console.log(sum4);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */