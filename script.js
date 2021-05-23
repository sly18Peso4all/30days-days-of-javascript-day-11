// Exercise 1
/*
1) Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
2) Destructure and assign the elements of countries array to fin, est, sw, den, nor
3) Destructure the rectangle object by its properties or keys.
*/

// Solution 1
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingPoint);

// Solution 2
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Solution 3
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

console.log("");
console.log("");
console.log("");
console.log("Exercise Solution 2 =============");
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//Exercises: Level 2
/*
1) Iterate through the users array and get all the keys of the object using destructuring
2) Find the persons who have less than two skills
*/

// Solution 1
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

// Solution 2
let arr = [];
function lowScore(user) {
  for (const { name, scores, skills } of user) {
    if (skills.length < 2) {
      console.log(name);
    }
  }
}

lowScore(users);

//Exercises: Level 3
/*
1) Destructure the countries object print name, capital, population and languages of all countries
2) A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, jsScore, reactScore)
David (4) ["HTM", "CSS", "JS", "React"] 90 95
3) Write a function called convertArrayToObject which can convert the array to a structure object.

4) Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/
console.log("");
console.log("");
console.log("");
console.log("Exercise Solution 3 =============");

// Solution 1
const countriesObj = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 78014,
    flag: "https://restcountries.eu/data/and.svg",
    currency: "Euro",
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 25868000,
    flag: "https://restcountries.eu/data/ago.svg",
    currency: "Angolan kwanza",
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://restcountries.eu/data/aia.svg",
    currency: "East Caribbean dollar",
  },
];

for (const { name, capital, population, languages } of countriesObj) {
  console.log(name, capital, population, languages);
}

// Solution 2
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [, , react, js]] = student;
console.log(name, skills, react, js);

// Solution 3 // Improve Solution
const convertArrayToObject = (users) => {
  //   let val = Object.fromEntries(users);
  //   console.log(val);

  let obj = {};
  users.forEach((name) => {
    console.log(name);
  });
};
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const obj = { ...students };
console.log(obj);
//convertArrayToObject(students);

// solution 4
const person = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let person2 = Object.assign({}, person);
person2.skills.frontEnd.push({ skill: "Bootstrap", level: 9 });
person2.skills.backEnd.push({ skill: "Express", level: 9 });
person2.skills.dataBase.push({ skill: "SQL", level: 8 });
person2.skills.dataScience.push({ skill: "SQL", level: null });

console.log(person2);
