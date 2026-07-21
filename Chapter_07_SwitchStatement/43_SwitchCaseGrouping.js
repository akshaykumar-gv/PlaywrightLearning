let browser = "Brave";

switch (browser) {
  case "Chrome":
  case "Brave":
  case "Edge":
  case "Opera":
    console.log("Driver is Chromium");
    break;
  case "Firefox":
    console.log("Driver is Firefox");
    break;
  case "Safari":
    console.log("Driver is apple XCUITest");
    break;
  default:
    console.log("No driver matched");
    break;
}
