require("babel-polyfill");
import App from './app';

class Main{
  constructor(){
    this.init();
  }

  init(){
    this.app = new App();
    this.app.plus(1, 2);
  }
}
new Main();