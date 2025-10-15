// lesson No O1
// // Q1
// let name = "Abdul Muqeet";
// let age = 22;
// let student = true;
// console.log(name , age , student);

// // Q2
// const country = "Pakistan";
// country="India";
// console.log(country);

// // Q3
// let hobbies = ["sleeping", "watching movies" , "Eating"];
// console.log(hobbies[1]);


// lesson No O2
// Q1
// let num1 = 15;
// let num2 = 4;
// console.log("Addition" , num1+num2);
// console.log("Subtraction" , num1-num2);
// console.log("Multiplication" , num1*num2);
// console.log("Divide" , num1/num2);
// console.log("Modulus" , num1%num2);

// // Q2
// lesson No O2
// let score = 45;
// if (score>=50){
//     console.log("Pass");
// }
// else{
//     console.log("fail")
// }

// // Q3
// let isMember = true;
// let hasCoupon = false;
// if (isMember || hasCoupon){
//     console.log("Discount mill gaya")
// }
// else{
//     console.log("no Discount")
// }

// // Q4
// let name = 'Abdul Muqeet';
// let city = 'Karachi';
// console.log(`hello, my name is ${name} and I live in ${city}.`)


// lesson No O3
// // Q1
// let count=0;
// for(let i=1;i<=10;i++){
//     count=count+i;
// }
// console.log(count);

// // Q2
// let arr = ["Ali", "Ahmed", "Sara", "Ayesha"];
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// // Q3
// let num=5;
// while (num>=1){
//     console.log(num);
//     num--
// }



// // lesson No O4
// // Q1
// function calculateSquare(num){
//     num=num**2
//     return num    
// }
// console.log(calculateSquare(5));

// // Q2
// function isEven(num1){
//     if (num1%2==0){
//         return "Even";
//     }    
//     else{
//         return "Odd";
//     }
// }
// console.log(isEven(96));

// // Q3
// function findMax(a,b){
//     if (a>b){
//         return `${a} is Greater`;
//     }
//     else if (a==b){
//         return `both are equal`
//     }
//     else{
//         return `${b} is Greater`;
//     }
// }
// console.log(findMax(10,20));

// // Q4
// let arr = [10,20,30];
// function average(x){
//     let sum=0;
//     for (let i=0; i<x.length ; i++){
//         sum=sum+x[i];
//     }
//     sum=sum/x.length;
//     return sum;
// }
// console.log(average(arr));

// // Q5
// function reverseString(value){
//     let inverse="";
//     for (let i=value.length-1;i>=0;i--){        
//         inverse=inverse+value[i];        
//     }
//     return inverse;
// }
// console.log(reverseString("hello"));

// // Q6
// function factorial(num){
//     let ans=num;
//     for (let i=num-1;i>=1;i--){
//         ans *= i;

//             }
//     return ans;
// }
// console.log(factorial(5))

// Q7
// let add=(x="sorry") => {
//     for (let i=0;i<x.length;i++){
//         console.log(x[i])
//     }
//     return x;
// };

// let arr=[2,5,4,8,7,8,5,4,87];
// console.log(add());


// lesson No O5
// let std = {
//     name : "Muqeet",
//     age : 22,
//     city: "Karachi",
//     Food : ["biryani","nehari", "haleem"]
// }

// for (let key in std){
// console.log(`${key} : ${std[key]}`);
// }


// let book = {
//     title : "Harry Potter",
//     author: "J.K Rowling",
//     year : 2000,
//     summary : function(){
//         return `${this.title} by ${this.author} , published in ${this.year}`
//     }
// }
// console.log(book.summary())


// let arr_obj = [
//         book1 = {
//         title : "Harry Potter",
//         author: "J.K Rowling",
//         year : 2000,
//         summary : function(){
//             return `${this.title} by ${this.author} , published in ${this.year}`
//         }
//     },
//     book2 = {
//         title : "Marvels",
//         author: "J.K Rowling",
//         year : 2000,
//         summary : function(){
//             return `${this.title} by ${this.author} , published in ${this.year}`
//         }
//     }
// ];
// // console.log(arr_obj[1].title);

// let showroom=[
//     {
//         id : 1,
//         car : "Honda",
//         location : "Karachi"
//     },
//     {
//         id : 2,
//         car : "Tesla",
//         location : "Bahawalpur"
//     },
//     {

//         id : 3,
//         car : "Toyota",
//         location : "Multan"
//     },
//     {

//         id : 4,
//         car : "Suzuki",
//         location : "Karachi"
//     }
// ]
// for (let i in showroom){
//     if (showroom[i].location == "Karachi"){
//         console.log(showroom[i].car);
//         }
// }


// lesson No O4
// Practice_01

// let temp = -1;
// if (temp >=30){
//     console.log(`Today is Hot.`);
// }
// else if (temp >=20){
//     console.log(`Today is Mild Weather.`);
// }

// else if (temp >=10 ){
//     console.log(`Today is Cold Weather.`);
// }
// else{
//     console.log(`Its Freezing.`);
// }

// Practice_02

// let score=33;

// if (score >= 90 && score <=100 ){
//     console.log(`A+`)
// }
// else if (score >=75 && score <= 89){
//     console.log(`A`)
// }
// else if (score >=60 && score <= 74){
//     console.log(`B`)
// }
// else if (score >=50 && score <= 59){
//     console.log(`C`)
// }
// else if (score >=33 && score <= 49){
//     console.log(`D`)
// }
// else{
//     console.log(`F`)
// }

// Paractice_03

// let score = 34;

// switch (true) {
//     case (score >= 90 && score <= 100):
//         console.log(`A+`);
//         break;
//     case (score >= 75 && score <= 89):
//         console.log(`A`);
//         break;

//     case (score >= 60 && score <= 74):
//         console.log(`B`)
//         break;
//     case (score >= 50 && score <= 59):
//         console.log(`C`);
//         break;

//     case (score >= 33 && score <= 49):
//         console.log(`D`);
//         break;

//     default:
//         console.log(`F`);
//         break;

// }

// Practice_04

// let day = 7;
// let days = ['Monday', "Tuesday", "Wednesday", "Thrusday", "Friday", "Satarday", "Sunday"]
// switch (day) {
//     case 1:
//         console.log(`${days[0]}`);
//         break;
//     case 2:
//         console.log(`${days[1]}`);
//         break;
//     case 3:
//         console.log(`${days[2]}`);
//         break;
//     case 4:
//         console.log(`${days[3]}`);
//         break;
//     case 5:
//         console.log(`${days[4]}`);
//         break;
//     case 6:
//         console.log(`${days[5]}`);
//         break;
//     case 7:
//         console.log(`${days[6]}`);
//         break;
//     default:
//         console.log(`Invlaid day number! Please enter 1-7.`);
//         break;

// }

//Next Lesson "Array Advanced"

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let arry = num.map(num1 => num1 * 2
// );
// // console.log(num.length)
// // console.log(arry.length)

// // Q1

// let array = [2, 4, 6, 8];
// let array2 = [];
// array.forEach(sqr => {
//     array2.push(sqr ** 2);
// })
// console.log(array2)

// let array3 = array.map(sqr => sqr ** 2)
// console.log(array3)

// // Q2

// let frnd = ["Ali", "Sara", "Ahmed"];
// let frnd1 = [];
// frnd.forEach(name => {
//     frnd1.push(name.toUpperCase());
// })
// console.log(frnd1)

// let frnd2 = frnd.map(name => name.toUpperCase());
// console.log(frnd2)

// // Q3

// let ary = [5, 10, 15, 20];
// let updated_ary = [];
// ary.forEach(sqr => {
//     updated_ary.push(((sqr * 2) + 1));
// })
// console.log(updated_ary)

// let ary_2 = ary.map(sqr => ((sqr * 2) + 1))
// console.log(ary_2)

// // Q4

// let smp_ary = [1, 2, 3, 4, 5];
// odd1 = [];
// smp_ary.forEach(odd => {
//     if (odd % 2 !== 0) {
//         odd1.push(odd);
//     }
// })
// console.log(odd1)

// let odd2 = smp_ary.filter(odd =>
//     odd % 2 !== 0
// )
// console.log(odd2)

// filter practice

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_num = num.filter(evan => evan % 2 == 0 )
// // console.log(new_num)

// let names = ["Ali", "Ahmed", "Sara", "Ayesha"];
// let new_names = names.filter( a_names => a_names[0]==="A");
// // console.log(new_names);

// let stu = [
//     {
//         name:"Ali" , marks : 45
//     },
//     {
//         name:"Sara" , marks : 80
//     },
//     {
//         name:"Ahmed" , marks : 30
//     }
// ];
// let pass_stu = stu.filter(pass => pass.marks <= 50)

// console.log(pass_stu)
// // console.log(stu.marks)

// reduce method 

// // Q1

// let num = [5, 10, 15, 20];
// let sum_num = num.reduce((acc, curr) => acc + curr, 0);
// // console.log(sum_num)

// // Q2

// let num2 = [3, 7, 2, 9, 5];
// let max = num2.reduce((acc,curr)=>{
// if(acc > curr){
//     return acc;
// }else{
//     return curr;
// }
// } , 0);

// // console.log(max)

// // Q3

// let food = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let quantity = food.reduce((acc , curr)=>{
//     if (acc[curr]){
//         acc[curr]++;
//     }
//     else{
//         acc[curr]=1;
//     }
//     return acc;
// },{});

// // console.log(quantity)


// // Q4


// let num3 = [ [1,2], [3,4], [5,6] ];
// let merge_num = num3.reduce((acc, curr) => acc.concat(curr), []);
// // console.log(merge_num);

// // Q5

// let cart = [
//   { item: "Book", price: 200 },
//   { item: "Pen", price: 50 },
//   { item: "Bag", price: 500 }
// ];

// let total = cart.reduce((acc , curr) => {
//     return acc+curr.price
// },0)
// console.log(total)

// some()

// let numbers = [100, 58, 57, 70, 80];

// let fail = numbers.some(num => num <= 50 );
// // console.log(`is any fail ?...........${fail}`)

// // let numbers = [100, 58, 57, 70, 80];

// let pass = numbers.every(num => num >= 50 );
// // console.log(`all pass ?...........${pass}`)

// let students = [
//     { name: "Ali", marks: 90 },
//     { name: "Sara", marks: 75 },
//     { name: "Ahmed", marks: 45 },
//     { name: "Ayesha", marks: 60 }
// ];

// let fail_stu = students.some(num => num.marks <= 50 );
// console.log(`any student fail ?...........${fail_stu}`)


// let pass_stu = students.every(num => num.marks >= 50 );
// console.log(`all student passed  ?...........${pass_stu}`)

// let numbers = [2, 8, 15, 30, 45];
// let new_num = numbers.find(num => num>10);
// console.log(new_num)

// let fruits = ["apple", "banana", "mango", "orange"];
// let fruit_index = fruits.findIndex(num => num=="mango");
// console.log(fruit_index)

// let students = [
//     { name: "Ali", marks: 40 },
//     { name: "Sara", marks: 85 },
//     { name: "Ahmed", marks: 55 }
// ];
// let topper = students.find(num => num.marks>50);
// // console.log(topper)

// practice

// let letters = ["a", "b", "c", "d", "e"];
// letters.reverse();
// console.log(letters);

// let nums = [10, 20, 30, 40, 50];
// let newarray = [...nums];
// nums.reverse()
// console.log(nums)

// let str = "I love JavaScript";
// let splitarray = str.split(" ")
// splitarray.reverse();
// let final = splitarray.join(" ")
// console.log(final)

// let boys = ["Ali", "Ahmed"]
// let girls = ["Sara", "Ayesha"]
// let gernal = boys.concat(girls)
// let newgernal = gernal.map(cap => (cap.toLowerCase()))
// console.log(newgernal)
// let check = newgernal.includes("sara")
// console.log(check)
// console.log(gernal)


// // slice / splice

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Peach"];
// let slicefruit = fruits.slice(1,4)
// console.log(slicefruit)
// console.log(fruits)

// fruits.splice(2,3)
// console.log(fruits)

// fruits.splice(2,2,"cherry")
// console.log(fruits)

// let neg = fruits.slice(-2)
// console.log(neg)

// console.log(fruits)
// fruits.splice(-1,1,"kiwi")

// console.log(fruits)

// let colors = ["red", "blue", "green", "blue", "yellow", "blue"];
// console.log(colors.indexOf("blue"))
// console.log(colors.lastIndexOf("blue"))
// let checkcolore=colors.some(pur => pur == "purple")

// console.log(checkcolore)

// String practice

// let str = "I love JavaScript";
// console.log(str.length)
// console.log(`First Character ${str[0]}`)
// console.log(`Last Character ${str[str.length-1]}`)

// let str1 = "Hello World";
// console.log(str1.toUpperCase())
// console.log(str1.includes("World"))


// let str = "JavaScript is fun";
// console.log(str.slice(0,10))

// let str1 = "I hate bugs";
// console.log(str1.replace("hate","love"))

// let str2 = "Clean me ";
// console.log(str2.trim())

// let str_array = str.split(" ")
// console.log(str_array)

// let x = "hello";
// let y = "world";
// console.log(x.concat(y))
// console.log(x.slice(0,2).repeat(5))

// function

// let name = n => console.log(`Abdul Muqeet`);
// name()

// let age = (a) => a*2 ;
// console.log(age(25))

// let add = (a,b)=> a+b ;
// console.log(add(20,25))


let sum = (...num)=>{ 
    return num.reduce((acc , curr)=> acc+curr ,0)
}

console.log (sum(25,22,23,1,0,4,56,5))