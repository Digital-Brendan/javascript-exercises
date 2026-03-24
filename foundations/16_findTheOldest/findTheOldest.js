const getAge = function (person) {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    const sortedPeople = people.toSorted(
        (currentPerson, nextPerson) => getAge(nextPerson) - getAge(currentPerson)
    );

    const oldestPerson = sortedPeople[0];

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
