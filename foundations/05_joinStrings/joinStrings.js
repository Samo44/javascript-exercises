// step 2
const firstName = "Carlos";
const lastName = "Stevenson";
const birthYear = 1947; 
const thisYear = 1965;

// const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

// step 3
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";
module.exports = {
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName,
  fullName,
  age
}
