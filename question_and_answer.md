:MCQ ANSWER
1. let greeting;
greetign = {};
console.log(greetign);

Ans: A:{}
description: The answer is A. Because, we created a variable called greetign which is an empty object and after creating or defining the object we just print it and that's why the output is an empty object.

2. function sum(a, b) {
  return a + b;
}
sum(1, "2");

Ans: A: NaN 
description: In this case the result will be nothing or NaN. The reason for this is, we created a funtion which will return the sum of two variables but we didn't console.log the result. If we want to see the output we must have to console.log the return value from a funtion. 

3. const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);

Ans: A:["🍕", "🍫", "🥑", "🍔"]
Description: The answer will be A. Because, we created an array named food which containes 4 foods and at the end of the code we just console.log that array and that is why the array will just print. 

4. function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());

Ans: B: Hi there, undefined
Description: We created a function which contain a perameter. But when we call the function we didn't give any perameter there and that's why we got that answer. 

5. let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);

Ans: c: 3
Description: For the forEach it will loop through the all of the elements in the array and check if any thing is there in the array. We checked if by the 'if (num)' condition. So, the first element of the array is 0 which also means false. So, when the if condition check this value it will took it as a false condition and the value of count will not increase. But for the other values the count value will increase and that's why the result is 3. 
