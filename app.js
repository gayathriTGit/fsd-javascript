let personName = "Chandler";
let personAge = 23;
let personStatus = "student" ;
const personCountry = "Portugal";

let colors = ['red', 'green', 'blue'];
console.log(colors);

colors.pop();
console.log(colors);

colors.push('violet');
console.log(colors);

colors.shift();
console.log(colors);

colors.unshift('orange');
console.log(colors);

let person = {
    firstName: "Madeline",
    middleName: null, 
    nickName: undefined,    
    age: 25,
    isStudent: true,
    country: 'Namibia',
    favoriteColors: ['orange', 'aqua marine', 'pink']
}

console.log(`${person.firstName} ${person.middleName}`);

let Soledad = {
        firstName: "Soledad", 
        middleName: "Paul", 
        nickName: "Paulie", 
        age: 21, 
        isStudent: true, 
        country: 'Sudan', 
        favoriteColors: ['blue', 'brown']
    };

    Soledad.lastName = "Chang";
console.log(`${Soledad.firstName} ${Soledad.middleName} ${Soledad.lastName}`);
console.log(Soledad);