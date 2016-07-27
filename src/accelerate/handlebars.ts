/**
 * Created by Andy on 27/07/2016.
 */

import * as handlebars from "handlebars";
import { ViewManager } from "./view-manager";

type Template = {
    name: string,
    template: HandlebarsTemplateDelegate,
}

export class HandlerbarsViewManager implements ViewManager {

    templates: Template[];
    private renderer : HandlebarsRenderer;

    constructor() {
        this.renderer = new HandlebarsRenderer();
    }

    inlineView(name: string, source: string, options?: any): void {
        this.templates.push({name, template: this.renderer.compile(source, options)});
    }

    remoteView(name: string, source: URL, options?: any): void {
    }

    scriptView(name: string, template: any, options?: any): void {
    }
}

export class HandlebarsRenderer {

    compile(source: string, options?: any): HandlebarsTemplateDelegate {
        return handlebars.compile(source, options)
    }
}
