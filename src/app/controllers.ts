import { Controller } from "../accelerate/controller";
import { HomeController } from "./home";

export const controllers : Controller[] = [
  new HomeController()
];
