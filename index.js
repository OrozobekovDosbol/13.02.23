function sum(a, b, c) {
  console.log(a + b + c);
}

sum(23, 12, 10)


function treugol(a, b ,c) {
  return a * b * c;
}
console.log(treugol(2, 5, 8));

let number = 1;


// for (let i = 1; i <= days.length; i++) {
//   let day = days[i];
//   if (day === "Satuday" || day === "Sunday") {
//     weekends.push(days[i])
//   }
//   else {
//     workdays.push(days[i])
//   }
// }
// console.log(workdays, weekends)

let numss = [41, 242, 109, 351];
arrays(numss)
function arrays(numss) {
  let result = 0
  for (let i = 0; i < numss.length; i++) {
    result = result + numss[i];
  }
  console.log(result)
}

let nuum = [41, 242, 109, 351];



for (let i = 1; i < 45; i++) {
  if (i % 5 == 0 && i % 3 === 0) {
    console.log("Fizz buz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else {
    console.log(i)
  }
}