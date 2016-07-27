/**
 * Created by Andy on 27/07/2016.
 */

export interface ViewManager {
    // Register a view from a string
    inlineView(name: string, source: string, options?: any) : void;

    // Register a view from a remote URL
    remoteView(name: string, source: URL, options?: any) : void;

    // Register a precompiled view available as script
    scriptView(name: string, template: any, options?: any) : void;
}
