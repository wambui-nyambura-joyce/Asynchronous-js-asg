// Question1
// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
const logMessageWithDelay = async (message, delay) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  };
  
  logMessageWithDelay("Message with 2 second delay", 2000);
  logMessageWithDelay("Message with no delay"); 


// Question2
// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given 
// a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
















// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task 
// is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom 
// success message if the task is successful, and a custom error message if there's an error.
const performTask = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task completed successfully");
      }, 2000);
    });
  };
  
  const task = async () => {
    try {
      const result = await performTask();
      console.log(`Success: ${result}`);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  
  task();
