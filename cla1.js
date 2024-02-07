const accId = 1234
let accEmail = "re@gmail.com"
let accCity = "Asansol"
let accState;

console.table([accId, accEmail, accCity, accState]);

const name = "Jolly"
const age = 35

console.log(`My name is ${name} and age is ${age}`);

const newName = new String ("Reshma")

console.log(typeof(newName))

const todayDate = new Date()
console.log(todayDate.toDateString())

const obj1 = {
    id: "1" ,
    name1: "a"
}
const obj2 = {
  id: "2",
  name: "b"
};
// const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = { obj1, obj2 };
// console.log(obj3);

const {name1 } = obj1
console.log(name1)


const greetings = "Hello"
for(const greet of greetings){
console.log(greet)
}
