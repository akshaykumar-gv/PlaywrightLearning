interface BasePage{
    url:string;
    title: string;
}

interface LoginPage extends BasePage{
    selector1: string;
    selector2: string;
    selector3: string;
}

interface HomePage extends BasePage{
    selector1: string;
    selector2: string;
}

interface RegPage extends BasePage{
    selector1: string;
    selector2: string;
}

const loginpage:LoginPage = {
    url: "url",
    title: "title",
    selector1: "selector1",
    selector2: "selector2",
    selector3: "selector3"
} 

console.log(loginpage.url);