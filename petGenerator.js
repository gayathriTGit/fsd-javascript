/* 
Exercise: Pet Generator

Goal: Create a simple "Pet Generator" that helps practice basic functions 
and array methods. You'll create a virtual pet with random traits!

Instructions:
1. Use the arrays provided below
2. Complete the functions that are started for you
3. Run the code to see your generated pet description
*/

// Arrays with pet traits
const petTypes = ["dog", "cat", "rabbit", "hamster", "bird"];
const petColors = ["brown", "white", "black", "golden", "gray", "spotted"];
const petPersonalities = ["playful", "lazy", "friendly", "shy", "energetic"];
const petTricks = ["sit", "roll over", "fetch", "high five", "spin"];

// 1. Complete this function to return a random item from any array
function getRandomItem(array) {
  // Use Math.random() and Math.floor() to get a random index
  // Then return the item at that index
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}

// 2. Complete this function to create a pet object
function createPet() {
  // Use getRandomItem() to get random values from each array
  // Create and return an object with type, color, personality, and favoriteTrick properties
  const petObject = {
      type: getRandomItem(petTypes),
      color: getRandomItem(petColors),
      personality: getRandomItem(petPersonalities), 
      favoriteTrick: getRandomItem(petTricks)
  }
  return petObject;
}

// 3. Complete this function to find if a specific pet type exists in our petTypes array
function isPetAvailable(petToCheck) {
  // Use the includes() array method to check if petTypes includes petToCheck
  // Return true or false
  return petTypes.includes(petToCheck, 0);
}

// 4. Complete this function to add a new pet type to our array
function addNewPetType(newType) {
  // Use the push() array method to add newType to the petTypes array
  // Return the updated array
  if (!isPetAvailable(newType)) {
      petTypes.push(newType);
  }
}

// 5. Complete this function to create a pet description
function describePet(pet) {
  // Return a string that uses the pet object properties to create a description
  // Example: "Your pet is a playful golden dog that can do a high five!"  
  return `Your pet is a ${pet.personality} ${pet.color} ${pet.type} that can do a ${pet.favoriteTrick}`
}

// Testing the functions - uncomment these lines when you're ready to test!

 const myPet = createPet();
 console.log(describePet(myPet));
 console.log("Is turtle available?", isPetAvailable("turtle"));
 console.log("Adding turtle to available pets...");
 addNewPetType("turtle");
 console.log("Is turtle available now?", isPetAvailable("turtle"));
 console.log("All available pet types:", petTypes);