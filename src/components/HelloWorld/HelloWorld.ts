import * as ko from "knockout";
import { KnockoutObservable } from "knockout";
import template from "./HelloWorld.html";

class HelloWorld {
  myMessage: KnockoutObservable<string>;

  constructor() {
    this.myMessage = ko.observable("Hello WOrld111");
  }
}
export default {
  viewModel: HelloWorld,
  template: template,
};
