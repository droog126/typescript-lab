import { VoidExpression } from "typescript";

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    console.log(person);
}

greeter({firstName:'xiao',lastName:'ming'});




class Student{

    fullName: string;

    constructor(public firstName: string, lastName: string) {
        
        this.fullName = this.firstName + '.' + lastName;
        
    }

}



var xiaoming = new Student('xiao', 'ming');
console.log(xiaoming);


enum Flag{
    success,
    error,
    overtime
}

var flag: Flag = Flag.success;


function getInfo(): string;
function getInfo(name: string);
function getInfo(name?: string) {
    if (name) {
        return name;   
    } else {
        return '没有名字'
    }
    
}

interface encrypt{
    (key: string, value: number): string;
}
var md5: encrypt = function (key: string, value: number): string{
    return 'number'
}


interface Animal{
    name: string;
    eat(str: string): void;
}

class Dog implements Animal{
    constructor(public name:string) {
        
    }
    eat(str: string) {
        
    }
}

class MinClass<T>{
    list: T[] = [];
    add(value: T) {
        this.list.push(value);
    }
    min(): T {
        var len:number = this.list.length;
        var min: T = this.list[0];
        for (var i = 0; i < len; i++){
            var target = this.list[i];
            if (target < min) {
                min = target;
            }
        }
        return min;
    }
}
var test = new MinClass<number>();
test.add(123);
test.add(1);
console.log(test.min())

var test1 = new MinClass<string>();
test1.add('a');
test1.add('b');
console.log(test1.min());


function getDate<T>(value: T): T {
    return value;
}

console.log(getDate<string>('hello'));

interface configFn<T>{
    (value:T):T
}

var my: configFn<number> = getDate;

console.log(my(1));

function get(params: any) {//params就是当前类传递进来的参数
    return function (target: any, methodName: any, desc: any) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl = params;
        target.run = function () {
            console.log("run");
        }
    }
}

// class HttpClient {
//     public url: any | undefined;
//     constructor() {
//     }

//     @get("http://www.baidu.com")
//     getData() {
//         console.log(this.url);
//     }
// }

// var http: any = new HttpClient();
// console.log(http.apiUrl);
// http.run();
