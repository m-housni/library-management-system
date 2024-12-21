import { Logger } from './Logger.js';

export class ConsoleLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }
}
