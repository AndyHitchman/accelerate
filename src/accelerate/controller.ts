export abstract class Controller {
    matchPath : string;
}

export function matchPath(path : string) {
    return function (controller : Function) {
        controller.prototype.matchPath = path;
    }
}
