// Greets the world.
console.log('Hello world!');
// Function with intentional error
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!!"));
}
greet("Brendan", new Date());
