const x: number = 1
console.log(x)

// string
const greet = (Firstname: string): void => {
    console.log(`Hello ${Firstname}`)
}

greet("mridul")

// number
const sumof2 = (a: number, b: number): number => {
    return a + b;
}

console.log(sumof2(1, 2))

// boolean
const islegal = (a: number): boolean => {
    console.log(a)
    if (a >= 18) return true;
    else return false
}
console.log(islegal(19))
console.log(islegal(17))

// function 
const runafter1s = (fn: () => void) => {
    setTimeout(fn, (1000));
}

runafter1s(function () {
    console.log('hi therer')
})


// interfaces
// to pass object we use user
interface User {
    firstName: string,
    lastName: string,
    email?: string, //it is an optional argument
    age: number
}

const user = {
    firstName: "mridul",
    lastName: "pandey",
    email: "pandey@gmail.com",
    age: 21
}

const islegal2 = (user: User): boolean => {
    if (user.age > 18) {
        return true
    }
    return false
}

const a = islegal2(user)
console.log(a)


// Types 
type Userinfo = {
    firstname: string,
    lastname: string,
    age: number
}

interface user2 {
    firstname: string,
    lastname: string,
    age: number
}

// Difference between types and interface is we can implement class using a interface but not using type.
// Types can have union but interface cannot have

const user2 = {
    firstName: "mridul",
    lastName: "pandey",
    email: "pandey@gmail.com",
    age: 21
}
function details(user: Userinfo) {

}

// Union 

type id = string | number

function greets(id: id) {
    console.log("ID :" + id)
}
greets("1");
greets(2)


// Intersection in types 

type Employee = {
    name: string,
    startDate: Date
}

interface Manager {
    name: string,
    department: string
}

type TechLead = Employee & Manager


// Arrays in Ts 
type NumberArray = number[]
function zeroelem(arr: NumberArray) {
    console.log(" the element is ", arr[0]);
}

zeroelem([6, 1, 2, 3, 4])


// enums = are used when we have certain const values 

enum Direction {
    up, //0 by default this is the values of up and to give it a value we will wirte as Up = "up"
    down, //1
    left, //2
    right //3
}
function keyPresses(keyPressed: Direction) {
    if (keyPressed == Direction.down) {
        console.log("Down key pressed")
    }
}

keyPresses(Direction.up)
keyPresses(Direction.down)
console.log(Direction.up)

// Genreics 
// ques 1 = return first element of the array 

type Input = number | string

function firstEl(arr: Input[]) {
    return arr[0];
}

// with generics 
function firstElem<T>(arr: T[]): T {
    return arr[0];
}
firstElem<number>([1, 2, 3, 4, 5])