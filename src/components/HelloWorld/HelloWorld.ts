import * as ko from "knockout";
import { Observable } from "knockout";
import template from "./HelloWorld.html";

class HelloWorld {
  myMessage: Observable<string>;

  constructor() {
    this.myMessage = ko.observable("Hello WOrld111");
  }
}
export default {
  viewModel: HelloWorld,
  template: template,
};
