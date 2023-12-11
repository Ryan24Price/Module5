class Logger {
    constructor() {
      this.id = Math.floor(Math.random() * 100) + 1;
      // this.id = Date.now();
    }
  
    log = (value) => {
      console.log(`[Calculator: ID: ${this.id}] Result: ${value}`);
    };
  }
  
  module.exports = Logger;

  