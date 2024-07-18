// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);

var showLarger = function(n1,n2) {
    var large = Math.max(n1,n2)
    console.log(large + " is the larger than " + n1 + ", " + n2);
}

showLarger(12,3)
showLarger(7,5)

var showSmaller = function(n1,n2,n3) {
    var small = Math.min(n1,n2,n3)
    console.log(small + " is the smallest among " + n1 + ", " + n2 + ", and " + n3);
}
showSmaller(12,3,4)



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */