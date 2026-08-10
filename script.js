////Question
//  - 1

let prices= [100,250,500,150,700];
let premium = prices.filter(function(elem){return elem>=500});
console.log(premium)

////Question
//  - 2

let marks= [80,90,70,85,95];
var average = marks.reduce(function(acc,val){
    return acc+val;
},0)
console.log(average/marks.length);

//Question
//  - 3
let numbers= [1,2,3,2,4,2,5,1,1,1];
let frequecy = {}
let max = 0
let mostFrequent
for(var  i=0;i<numbers.length;i++){
    if(frequecy[i]){
        frequecy[number[i]]++
    }else{
        frequecy[number[i]]=1
    }
    if(frequecy[i]>max){
        max = frequecy[i]
        mostFrequent = frequecy[i]
    }
}
console.log(mostFrequent);

////Question
//  - 4 

letuser= {
  name:"Ritik",
  age:20
};
letuser.age=21
console.log(letuser);

//Question
//  - 5
letuser= {
name:"Ritik",
age:20,
city:"Bhopal"
};
for(let val in letuser){
    console.log(val+":"+letuser[val]);
}

////Question
//  - 6

let employees= {
aman:25000,
ritik:50000,
priya:45000
};
let max = 0
let display
for(let key in employees){
    if(employees[key]>max){
        max=employees[key]
        display=key
    }
}
console.log(display);

//Question - 7

function greet(name){
    console.log("Hello "+name);
}
greet("Ritik");

//Question - 8

function calculateprice(price,discount){
    console.log(price-price*discount/100);
}
calculateprice(9000,10)

//Question - 9

function sum(...numbers){
    let total=0
    for(var i=0;i<numbers.length;i++){
        total+=numbers[i]
    }
    console.log(total);
}
sum(12,23,34,342,12,5)

//Question - 10

letusers= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];
let user = letusers.filter(function(elem){return elem.age>18})
console.log(user);

//Question - 11

letcart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];
let total = letcart.reduce(function(acc,val){
    return acc+val.price*val.qty;
},0)
console.log(total);

//Question - 12

letstudents= [
{
name:"Ritik",marks: [80,90,85]
},
{
name:"Aman",
marks: [50,40,60]
}
];
let arr = [];
function generateReport(user){
    let grade = letstudents.map(function(elem){
        return elem.marks.reduce(function(acc,val){
            return acc+val;
        })
    }) 
    return grade
}

total = generateReport(letstudents)
let grade = total.map(function(elem){
    return elem/letstudents[0].marks.length
})
for(var i=0;i<grade.length;i++){
    if(grade[i]>=80){
        arr.push({
            name:letstudents[i].name,
            Average:grade[i],
            grade:"A"
        })
    }else if(grade[i]>=60 && grade[i]<80){
        arr.push({
            name:letstudents[i].name,
            Average:grade[i],
            grade:"B"
    })
}else{
    arr.push({
        name:letstudents[i].name,
        Average:grade[i],
        grade:"C"
})
}
}
console.log(arr)
//Question - 11(The boss Question)
let books = []
function addBook(title,author){
    if(books.length==0){
        books.push({
            id:1,
            title:title,
            author:author,
            borrowed:false
        })
    }else{
         books.push({
            id:books.length+1,
            title:title,
            author:author,
            borrowed:false
        })
    }
}
addBook("hello","hii")
addBook("helltto","hii")
addBook("hellreo","hii")
addBook("helerelo","hii")

function BorrowBook(id){
    books[id-1].borrowed = true;
}
function ReturnBook(id){
     books[id-1].borrowed = false;
}
function displayavilbook(){
    let book = (books.filter(function(elem){return elem.borrowed==false}))
    for(var i=0;i<book.length;i++){
    console.log(book[i].title);
    }

}
displayavilbook()