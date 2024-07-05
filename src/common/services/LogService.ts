class LogService {
  private debugMode: boolean;

  constructor() {
    // Set the debug mode based on an environment variable or a configuration setting.
    // Replace `process.env.DEBUG_MODE` with the actual method you use to determine the debug mode.
    this.debugMode = process.env.DEBUG_MODE === 'true';
  }

  log(message: string): void {
    if (this.debugMode) {
      console.log(message);
    }
  }

  error(message: string, error?: any): void {
    if (this.debugMode) {
      console.error(message, error);
    }
  }
}

export default new LogService();
