import { log } from "./Logger/logger.js";
import { logFatal } from "./Logger/logger.js";

function useLog(){
    log("Hello");
    logFatal("Hello");
}

useLog();