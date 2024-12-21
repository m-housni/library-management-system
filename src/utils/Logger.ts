export abstract class Logger {
  abstract log(message: string): void;

  info(message: string): void {
    this.log(`[INFO]: ${message}`);
  }
}



  