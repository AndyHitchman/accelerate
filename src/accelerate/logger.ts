/**
 * Created by Andy on 25/07/2016.
 */

export type LogWriter = (m: string) => void;

export type LogConfig = {
    debugWriter: LogWriter,
    infoWriter: LogWriter
};


export class Logger {
    private debugLogger: LogWriter;
    private infoLogger: LogWriter;

    constructor(config: LogConfig) {
        this.debugLogger = config.debugWriter;
        this.infoLogger = config.infoWriter;
    }

    debug(message: string) {
        this.debugLogger(message);
    }

    info(message: string) {
        this.infoLogger(message);
    }
}

export let log = new Logger({
    debugWriter: (m : string) => console.log(m),
    infoWriter: (m: string) => console.log(m)
});
