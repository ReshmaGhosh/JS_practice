const today = new Date();
//console.log("today is:", today);

const day = today.getDay();
//console.log(day);

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedday",
  "Thrusday",
  "Friday",
  "Satday",
];
console.log(`Today is: ${dayList[day]}`);

let hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();

let prepand = hour >= 12 ? " PM " : " AM ";
//console.log(prepand);

hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
if (hour === 0 && prepand === "AM") {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = "Midnight";
  }
} else {
  hour = 12;
  prepand = "AM";
}

console.log(`Current Time : ${hour} ${prepand} : ${min} : ${sec} `);
