import { log1 } from '../utils/Logger.js';
import { BookService } from '../services/BookService.js';

export class ServiceFactory {
  private static logger: (message: string) => void = log1;

  static createBookService(): BookService {
    return new BookService(this.logger);
  }
}
