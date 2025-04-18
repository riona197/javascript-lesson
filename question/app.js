let nickname = 'りおな';
let age = '23';
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(greet);

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let favoriteLanguage = languages[0];
let nextLanguage = languages[3];
let message = `私の好きな言語は${favoriteLanguage}です。次は${nextLanguage}を勉強してみたいです。`;
console.log(message);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

const ages = [26, 33, 22];
let sum = 0;
ages.forEach(ages => {
  sum += ages;
})
const average = sum /ages.length;
console.log(average);

function sayHello() {
  console.log('Hello');
}
sayHello();
let sayWorld = function() {
  console.log('World');
};
sayWorld();

user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！');
};
console.log(user);
user.sayHello();

let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
};
calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.divide = function(x, y) {
  console.log(x / y);
};
calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(5, 1);

function remainder(x, y) {
  return x % y;
}
const result = remainder(5, 3);
console.log('5 を 3 で割った余りは ' + result + ' です。');

//Q10
// 「function foo() {let x = 1;}」でxは関数foo内で定義されており、この関数のスコープ内でのみ参照できます。「console.log(x);」はxを参照しようとしていますが、foo関数のスコープ外にあるため「x is not defined」というエラーが発生します。
// スコープは変数（x）に対して設定されているものであり、スコープ外から参照した場合、変数xは定義されていない状態になります。

console.log(Math.floor(Math.random() * 10));

setTimeout(function() {
  console.log("Hello World!");
}, 3000);

let num = 1;
if (num > 0) {
  console.log("num is greater than 0");
}
else if (num < 0) {
  console.log("num is less than 0");
}
else {
  console.log("num is 0");
}

let numbers = [];
for (let i = 0; i < 100; i++){
  numbers.push(i);
}
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let item of mixed) {
  if (typeof item === "number") {
    console.log(item % 2 === 0 ? "even" : "odd");
  } else {
    console.log("not number");
  }
}