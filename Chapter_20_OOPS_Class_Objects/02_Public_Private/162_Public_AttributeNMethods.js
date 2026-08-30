class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(this.name,"Browser Launched");
    }

    startBrowser(){
        console.log(this.name,"Browser is Started")
    }

    closeBrowser(){
        console.log(this.name,"Browser is Closed");
    }
}

let chrome = new Browser("chrome");
let firefox = new Browser("firefox");

chrome.startBrowser();
chrome.closeBrowser();
console.log(chrome.name);
console.log(chrome.isOpen)


firefox.startBrowser();
firefox.closeBrowser();
console.log(firefox.name);
console.log(firefox.isOpen)

