let v = 10;
class Credentials{
    #username;
    #password;
    name;
    constructor(username, password, name){
        this.#username = username;
        this.#password = password;
        this.name = name;
    }

    getloggedInUser(){
        return this.name+" isLogged is as "+this.#username;
    }
}

const creds = new Credentials("Akshay","Password","Akshay");
console.log(creds.getloggedInUser());
console.log(creds.name);
console.log(creds.username); //undefined
console.log(creds.password); //undefined