/**
 * Created by Andy on 27/07/2016.
 */

import { HandlebarsRenderer } from "./handlebars";

describe('handlebars', () => {

    it('should compile templates so they render correctly', () => {
        const source = "<div>Testing {{foo}}</div>";
        const renderer = new HandlebarsRenderer();

        const expected = "<div>Testing bar</div>";

        const template = renderer.compile(source);
        template({foo: 'bar'}).should.eq(expected);
    })
});
