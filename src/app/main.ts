/**
 * Created by Andy on 25/07/2016.
 */
console.log("Main loaded");

import { Accelerate } from "../accelerate";
import { controllers } from "./controllers";

new Accelerate(window.document.getElementById('app'), controllers);
