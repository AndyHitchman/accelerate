
console.log("Accelerate loaded");

import { log } from "./logger";
import { Controller } from "./controller";

export class Accelerate {
    appRoot : Element;
    controllers: Controller[];

    constructor(appRoot : any, controllers : Controller[]) {
        log.info(`Bootstrapping at ${appRoot.toString()}`);
        this.appRoot = appRoot;
        this.controllers = controllers;
    }
}
