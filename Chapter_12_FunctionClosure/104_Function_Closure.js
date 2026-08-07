function startBrowser(){
    let browser="Hello";
    function startEdgeBrowser(){
        console.log("Started Edge Browser");
        browser = "Edge";
    }
    function startChromeBrowser(){
        console.log("Starting Chrome Browser");
        browser="Chrome";
    }
    function startFFBrowser(){
        console.log("Starting Firefox Browser");
        browser="Firefox";
    }
    function getBrowserName(){
        return browser;
    }
    // console.log(browser);
    return{startEdgeBrowser,startChromeBrowser,startFFBrowser,getBrowserName};
}

const strtBrowser = startBrowser();
strtBrowser.startChromeBrowser();
console.log(strtBrowser.getBrowserName());
strtBrowser.startEdgeBrowser();
console.log(strtBrowser.getBrowserName());
strtBrowser.startFFBrowser();
console.log(strtBrowser.getBrowserName());