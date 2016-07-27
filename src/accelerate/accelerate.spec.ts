/**
 * Created by Andy on 26/07/2016.
 */
import { Accelerate } from "./index";
import { Controller } from "./controller";

describe('Accelerate', () => {

    it('should set the root element and controller set', () => {
        const element = {};
        const controllers : Controller[] = [];

        const bootstrap = new Accelerate(element, controllers);

        bootstrap.appRoot.should.be.eq(element);
        bootstrap.controllers.should.be.eq(controllers);
    });
});
