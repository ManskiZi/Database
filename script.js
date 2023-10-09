// Define an array of user objects with their information
const userArr = [{
    name: "Brian",
    lastLoggedOn: 5,
    location: "Illinois",
    contributions: 79
  }, {
    name: "Brent",
    lastLoggedOn: 30,
    location: "Austria",
    contributions: 25
  }, {
    name: "Selene",
    lastLoggedOn: 2,
    location: "Illinois",
    contributions: 116
  }];
  
  // Function to get all users
  function getAll() {
    let allUsers = [];
  
    // Iterate through the user array and add each user to the result array
    for (let i = 0; i < userArr.length; i++) {
      allUsers.push(userArr[i]);
    }
    return allUsers;
  }
  
  // Function to check if a user with a given name exists
  function checkExistingUser(e) {
    // Iterate through the user array
    for (let i = 0; i < userArr.length; i++) {
      // Check if the name matches the provided name
      if (userArr[i].name === e.currentTarget.name.value) {
        console.log(userArr[i]); // Log the user's information
        return true; // User exists
      }
    }
    console.log("User does not exist"); // Log a message if the user is not found
    return false; // User does not exist
  }
  
  // Function to check users with a last login greater than 10
  function checkLastLogin() {
    let results = [];
  
    // Iterate through the user array
    for (let i = 0; i < userArr.length; i++) {
      // Check if the lastLoggedOn value is greater than 10
      if (userArr[i].lastLoggedOn > 10) {
        results.push(userArr[i]); // Add user to results if condition is met
      }
    }
    return results;
  }
  
  // Function to check users with a specific location
  function checkLocation(e) {
    results = [];
  
    // Iterate through the user array
    for (let i = 0; i < userArr.length; i++) {
      // Check if the location matches the provided location
      if (userArr[i].location === e.currentTarget.location.value) {
        results.push(userArr[i]); // Add user to results if condition is met
      }
    }
    if (results.length > 0) {
      return results; // Return results if users with the location are found
    } else {
      console.log("No results found"); // Log a message if no users are found
      return false;
    }
  }
  
  // Function to check users with contributions greater than a specified value
  function checkContributions(e) {
    let validContributions = [];
  
    // Iterate through the user array
    for (let i = 0; i < userArr.length; i++) {
      // Check if contributions are greater than the provided value
      if (userArr[i].contributions > e.currentTarget.contributions.value) {
        validContributions.push(userArr[i]); // Add user to validContributions if condition is met
      }
    }
    if (validContributions.length > 0) {
      console.log(validContributions); // Log users with valid contributions
      return validContributions; // Return users with valid contributions
    } else {
      console.log("No results found"); // Log a message if no users are found
      return false;
    }
  }
  
  // Function to delete a user with the name "Selene"
  function deleteUser() {
    for (let i = 0; i < userArr.length; i++) {
      // Check if the user's name is "Selene"
      if (userArr[i].name === "Selene") {
        userArr.splice(i, 1); // Remove the user from the array
        console.log("User does not exist" + userArr); // Log a message
        return true; // User deleted
      }
    }
    console.log("User not found"); // Log a message if the user is not found
  }
  