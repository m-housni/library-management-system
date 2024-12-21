export class Database {
    private static instance: Database | null = null;
  
    private constructor() {
      console.log('Database connection established.');
    }
  
    static getInstance(): Database {
      if (!this.instance) {
        this.instance = new Database();
      }
      return this.instance;
    }
  
    query(sql: string): void {
      console.log(`Executing query: ${sql}`);
    }
  }
  