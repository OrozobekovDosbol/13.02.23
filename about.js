// let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let example2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < example1.length; i++) {
//   let item = example1[i];
//   for (let i = 0; i < item.length; i++) {
//     console.log(item[i])
//   }
// }
// for (let i = example2.length - 1; i >= 0; i--) {
//   for (let j = example2.length - 1; j >= 0; j--) {
//     console.log(example2[i][j])
//   }
// }

// let total = 0;
// for (let i = 0; i < example2.length; i++) {
//   let item = example2[i];
//   for (let j = 0; j < item.length; j++) {
//     console.log(total = total + item[j])
//   }
// }






let joldosh = {
  name: "Joldosh",
  age: 22,
  employed: true, 
  favouriteBooks: ["Gunslinger", "Harry Potter"],
  surname: "Orozobekov",
}

joldosh.age = 23;
joldosh.employed = false;

delete joldosh.favouriteBooks;

console.log(joldosh.surname);
console.log(joldosh["name"]);
console.log(joldosh.age);
console.log(joldosh.employed);

console.log(joldosh.favouriteBooks)


let emptyObject = {};

let Dosbol = {
  name: "Dosbol",
  surname: "Orozobekov",
  age: 15,
  placeOfResidence: "Karakol",
  favouriteBooks: ["Gunslinger", "Harry Potter"],
  bye: function() {
    console.log("bye World");
  },
  old: function() {
    console.log("My age " + this.age)
  }
}



Dosbol.employed = true;

console.log(Dosbol.name);
console.log(Dosbol.age);
console.log(Dosbol.surname);
console.log(Dosbol.placeOfResidence);
console.log(Dosbol.favouriteBooks);
console.log(Dosbol.employed)

Dosbol.bye();
Dosbol.old();

