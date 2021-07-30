//Question 1

String.prototype.filter = function(input){
    var pattern;
    if(input instanceof Array){
        pattern = new RegExp(input.join("|"),"gi");
    }
    else{
        pattern=new RegExp(input,"gi");
    }
    return (this.replaceAll(pattern,''));
};
console.log("This house is not nice!".filter('not'));



//Question 2

Array.prototype.bubbleSort= function(){
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};
console.log([6,4,0,3,-2,1].bubbleSort());



//Question 3

var Person = function(){};
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.describe = function(){
    return `${this.name}, ${this.age} years old.`;
}

var Teacher = function(){};
Teacher.prototype= new Person();
Teacher.prototype.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}

var teacherwap = new Teacher();
teacherwap.initialize("Prof. Michael Zijlstra",40);
console.log(teacherwap.teach("Web Application Programming"));
