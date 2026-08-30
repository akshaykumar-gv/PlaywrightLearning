class Student {
    static #collegeName = "PW AT Batch"; //College name is Smae for all the students

    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name + " are part of the", Student.#collegeName)
    }
    static getCollegeName(){
        console.log(this.#collegeName);
    }
}
let amit = new Student("amit");
let miti_jha = new Student("miti_jha");
let sumu = new Student("sumu");
let padmini = new Student("padmini");
// console.log(Student.collegeName);
console.log(amit.name);
console.log(miti_jha.name);

miti_jha.display();
Student.getCollegeName();