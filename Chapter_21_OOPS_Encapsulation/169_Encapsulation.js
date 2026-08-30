//Encapsulation is a concept of wrapping data and methods into a single unit. 
//It restricts direct access to some of the object's components, which can prevent the accidental modification of data. 
//In JavaScript, we can achieve encapsulation using closures or by using classes with private fields.
//Wrap the attributes as Private and provide public methods to access and modify them.

class Person {
    #name;
    #gender;
    
    constructor(name,gender){
        this.#name = name;
        this.#gender = gender;
    }

    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }

    getGender(){
        return this.#gender;
    }
    setGender(gender){
        this.#gender = gender;
    }
}

const p = new Person("Akshay","male");

console.log(p.name);
console.log(p.getGender());

p.name = "Akshayyyy";
p.setGender("maleeee");

console.log(p.name);
console.log(p.getGender());