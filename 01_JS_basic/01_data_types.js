/* Strings */
string = "Hello World";
console.log(`String ${string} - Type ${typeof string}`);

// scape
string = 'Hello "World"';
console.log(`String ${string} - Type ${typeof string}`);

/* Numbers */
numberInt = 10;
numberFloat = 10.5;
console.log(`Int ${numberInt} - Type ${typeof numberInt}`);
console.log(`Float ${numberFloat} - Type ${typeof numberFloat}`);

/* Boolean */
booleanTrue = true;
booleanFalse = false;
console.log(`Boolean ${booleanTrue} - Type ${typeof booleanTrue}`);
console.log(`Boolean ${booleanFalse} - Type ${typeof booleanFalse}`);

/* Infinity */
infinity = 10 / 0;
console.log(`Infinity ${infinity} - Type ${typeof infinity}`);

/* NaN */
nan = "Hello" * 10;
console.log(`NaN ${nan} - Type ${typeof nan}`);

/* Null */
nullValue = null;
console.log(`Null ${nullValue} - Type ${typeof nullValue}`);

/* Undefined */
undefinedValue = undefined;
console.log(`Undefined ${undefinedValue} - Type ${typeof undefinedValue}`);

/* Object */
object = {
  name: "John",
  age: 20,
  isStudent: true,
};
console.log(`Object ${object} - Type ${typeof object}`);

/* Array */
array = ["John", 20, true];
console.log(`Array ${array} - Type ${typeof array}`);

/* Date */
date = new Date();
console.log(`Date ${date} - Type ${typeof date}`);