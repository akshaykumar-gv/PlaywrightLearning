//Inheritance is a mechanism in which one class acquires the property of another class. 
//In JavaScript, inheritance is achieved using the `extends` keyword.

class BaseClass{
    constructor(pagename){
        this.pagename = pagename;
    }

    open(){
        console.log(this.pagename,"page is open")
    }

    close(){
        console.log("Closing the page", this.pagename);
    }
}

class LoginPage extends BaseClass{
    constructor(){
        super("Login Page");
    }
}

const loginPage = new LoginPage();
loginPage.open();
loginPage.close();