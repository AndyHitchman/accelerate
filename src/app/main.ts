/**
 * Created by Andy on 25/07/2016.
 */
console.log("Main loaded");

import { Bootstrapper } from "./accelerate";

let bootstrap = new Bootstrapper();

bootstrap.atElement(window.document.getElementsByTagName('app')[0]);
