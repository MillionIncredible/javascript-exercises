const findTheOldest = function (people) {
  const currentFullYear = new Date().getFullYear();

  const oldestPerson = people.reduce((currentOldestPerson, currentPerson) => {
    const currentOldestPersonsAge =
      (currentOldestPerson.yearOfDeath || currentFullYear) -
      currentOldestPerson.yearOfBirth;
    const currentPersonsAge =
      (currentPerson.yearOfDeath || currentFullYear) -
      currentPerson.yearOfBirth;

    if (currentPersonsAge > currentOldestPersonsAge) {
      return currentPerson;
    } else {
      return currentOldestPerson;
    }
  }, people[0]);

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

// Function "findTheOldest" with paramater "people".
// Declare variable "oldestPerson" and assign the return value of "people.reduce".
// Iterate with reduce through the people array. Accumulator is "currentOldestPerson"
// and currentValue is "currentPerson".
// Declare variables "oldestPersonsAge" and "currentPersonsAge" and calculate the age
// with yearOfDeath (or if the person still lives, new Date().getFullYear()) - YearOfBirth.
// If currentPersonsAge > oldestPersonsAge return the current persons object, else the
// oldest persons object
// After the reduce is done return "oldestPerson
