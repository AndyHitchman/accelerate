(function (global) {

    // map tells the System loader where to look for things
    // packages tells the System loader how to load when no filename and/or no extension
    const config = {
        map: {
            app: 'app',
            accelerate: 'accelerate',
            handlebars: 'node_modules/handlebars/dist'
        },
        packages: {
            accelerate: {main: 'index.js', defaultExtension: 'js'},
            app: {main: 'main.js', defaultExtension: 'js'},
            handlebars: {main: 'handlebars.js', defaultExtension: 'js'}

        }
    };

    System.config(config);

})(this);
