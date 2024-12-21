import { ConsoleLogger } from '../utils/ConsoleLogger.js';
import { BookService } from '../services/BookService.js';

export class ServiceFactory {
  private static logger: (message: string) => void = new ConsoleLogger().log;

  static createBookService(): BookService {
    return new BookService(this.logger);
  }
}
