/**
 * Created by Andy on 26/07/2016.
 */
import { Bootstrapper } from "accelerate";

describe('Bootstrap', () => {

  it('should set the root element', () => {
    const bootstrap = new Bootstrapper();
    const element = {};

    bootstrap.atElement(element);

    bootstrap.appRoot.should.be.eq(element);
  });
});
