interface Users {
    name:string,
    age:number,
    email:string
};

const user1:Users = {
    name: "Akshay",
    age: 30,
    email: "Hello@mail.com",
}

const user2:Users = {
    name: "babitha",
    age: 27,
    email: "hello@mail.com"
}

//Error 
// const user3:Users = {
//     name: "Hello",
//     age: 30
// }

//Error Object literal may only specify known properties, and 'address' does not exist in type 'Users'.
// const user2:Users={
//     name: "Hello",
//     age: 61,
//     email: "sadadss",
//     address: "sadadwedeae"
// }


