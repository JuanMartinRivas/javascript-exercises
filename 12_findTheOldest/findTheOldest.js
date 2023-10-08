const findTheOldest = function(people) {
    const ordered = people.sort(function (first, second){
        const firstAge = first.yearOfDeath - first.yearOfBirth;
        const secondAge = second.yearOfDeath - second.yearOfBirth;

        if (firstAge > secondAge){
            return 1
        } else {
            return -1
        }
    })

};

// Do not edit below this line
module.exports = findTheOldest;
