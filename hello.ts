// Greets the world.
console.log('Hello world!')

// Function with intentional error
function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet("Brendan", new Date())