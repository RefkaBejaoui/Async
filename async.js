// Event Loop Mechanism: Asynchronous programming in JavaScript relies on the event loop, a mechanism that allows non-blocking execution of code. 
//The event loop continuously checks the message queue for events or tasks and executes them in a sequential manner.
// 

//Callbacks: Callback functions are a fundamental concept in asynchronous JavaScript. 
//They are functions passed as arguments to other functions, to be executed later when a specific event occurs. 
//Callbacks enable the execution of code after asynchronous operations, such as file I/O or network requests, are completed.


// Promises: Promises are a more structured way to handle asynchronous operations compared to callbacks.
// They represent a value that might be available now, or in the future, or never. 
//Promises have states (pending, fulfilled, or rejected) and provide methods like 
//.then() and .catch() for handling the result or error of an asynchronous operation.


// Async/Await: Introduced in ECMAScript 2017, the async and await keywords simplify asynchronous code and make it look more synchronous. 
//An async function returns a promise, and within it, the await keyword is used to pause execution until a promise is resolved or rejected.
// This syntax enhances code readability and maintainability.


// Error Handling: Asynchronous programming in JavaScript requires careful error handling due to the nature of non-blocking operations. 
//Callbacks often involve error-first patterns (callback takes an error as its first parameter), while Promises use .catch() for error handling. 
//Async/Await simplifies error handling by allowing the use of try/catch blocks within asynchronous code.