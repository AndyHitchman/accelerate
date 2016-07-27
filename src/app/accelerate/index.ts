
console.log("Accelerate loaded");

import { log } from "./logger";

export class Bootstrapper {
    appRoot : Element;

    atElement(element : any) {
        log.info(`Bootstrapping at ${element.toString()}`);
        this.appRoot = element;
    }
}
