import { Controller, matchPath } from "./controller";


describe('Controllers', () => {

    it('should set the match path from the decorator', () => {
        @matchPath('test')
        class TestController extends Controller {}

        const actual = new TestController();

        actual.matchPath.should.eq('test');
    })
})
