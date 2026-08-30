export class Person{
    #name
    #age;
    #gender;
    constructor(name, age, gender){
        this.#name = name;
        this.#age = age;
        this.#gender = gender
    }
    eat(){
        console.log(this.#name," is Eating");
    }

    getGender(){
        console.log(this.#name,"gender is ",this.#gender);
    }
}

let p = new Person("Akshay",30,"male");
p.eat();
p.getGender();