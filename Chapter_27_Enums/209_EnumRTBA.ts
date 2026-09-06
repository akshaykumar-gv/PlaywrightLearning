enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}


function launchBrowser(browser:Browser){
    switch (browser){
        case Browser.Chrome:{
            console.log("Launching "+Browser.Chrome+" Browser");
            break;
        }

        case Browser.Edge:{
            console.log("Launching "+Browser.Edge+" Browser");
            break;
        }
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox v115)");
            break;
        case Browser.Safari:
            console.log("Launching WebKit (Safari v17)");
            break;
    }
}

launchBrowser(Browser.Chrome);