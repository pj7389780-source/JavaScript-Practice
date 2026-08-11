const user = {
    name:"Paras",
    greet(){
        console.log("Hello "+this.name);
    }
}
user.greet()

function introduce(city,country){
    console.log(`${this.name} is from ${city} ${country}`)
}
const person = {
    name:"Paras"
}
introduce.apply(person,["Delhi","India"])

const user = {
    name:"Paras",
    greet(){
        console.log("Hello "+this.name);
    }
}

const fn = user.greet.bind(user)
fn()

const animal = {
    eats:true
}
const dog = Object.create(animal)
console.log(dog.eats)

function Person(name){
    this.name = name;
}


Person.prototype.greet = function(){
    console.log("Hello "+this.name);
}
var Person1 = new Person("paras")
Person1.greet()

class student {
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    getGrade(){
        if(this.marks>=90){
            return `${this.name} got grade A`
        }else if(this.marks>=75){
            return `${this.name} got grade B`
        }else if(this.marks>=60){
            return `${this.name} got grade C`
        }else{
            return `${this.name} Fail ho gye bhoudnu`
        }
    }
}

const student1 = new student("Ritik",30)
const student2 = new student("Sarthak",70)
const student3 = new student("Ali",80)
const student4 = new student("Harsh",90)
console.log(student1.getGrade())
console.log(student2.getGrade())
console.log(student3.getGrade())
console.log(student4.getGrade())

class employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    work(){
        return `${this.name} is working`
    }
}
class Developer extends employee{
    constructor(name,salary,language){
        super(name,salary)
        this.language = language
    }
    code(){
        console.log(`${this.name} is writing code in ${this.language} at ${this.salary}`);
    }
}


const paras = new Developer("paras",2340000000,"C++")
paras.code()
console.log(paras.work());


class BankAccount{
    #balance = 10000;
    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        if(this.#balance>=amount){
            this.#balance -= amount;
        }else{
            console.log("Insufficient Balance");
        }
    }
    getbalance(){
        console.log(`Current bank balance is ${this.#balance}`)
    }
}
var user1 = new BankAccount;
user1.deposit(120000)
user1.getbalance()
user1.withdraw(120)
user1.getbalance()
