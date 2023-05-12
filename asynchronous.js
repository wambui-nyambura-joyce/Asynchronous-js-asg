// Question1
// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
const study = async (message, delay) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  };
  
  study("Message with 2 second delay", 3000);
  study("Message with no delay"); 


// Question2
// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given 
// a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
const getUserData = async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id, name: `User ${id}`, age: Math.floor(Math.random() * 30) + 18 };
        resolve(userData);
      }, Math.random() * 2000 + 1000);
    });
  };
  
  const fetchUserDataInSequence = async (userIds) => {
    for (const id of userIds) {
      try {
        const userData = await getUserData(id);
        console.log(userData);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const userIds = [1, 2, 3, 4, 5];
  fetchUserDataInSequence(userIds);
  















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
