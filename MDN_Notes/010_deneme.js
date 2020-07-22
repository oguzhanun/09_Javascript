class Employee {
    constructor() {
      this.name = '';
      this.dept = 'general';
    }
}

function Employeee(){
    // Manager.call(this) -----------> this causes an infinite loop.....
    this.name = "ahmet"
    this.dept = "general"
}



function Manager(){
    Employeee.call(this)
    this.dept = "Administration"

}

Manager.prototype = Object.create(Employeee.prototype)
Manager.prototype.constructor = Manager

manager = Object.create(new Manager())

console.log(manager.dept )

function* process() {
    console.log('Start process 1');
    console.log('Pause process2 until call next()');

    let val = yield [1,2];

    console.log(val)
    console.log('Resumed process2');
    console.log('Pause process3 until call next()');

    let parms = yield {age: 12};
    console.log("Passed by final process next(90): " + parms);

    console.log('Resumed process3');
    console.log('End of the process function');
}

process = process()

next1 = process.next(10)

console.log(next1)
next2 = process.next(22)
console.log(next2)

process.next(33)