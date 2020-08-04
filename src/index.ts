import * as ko from "knockout";
import { KnockoutObservable } from "knockout";
import HelloWorld from "./components/HelloWorld/HelloWorld";

class Test {
  language: KnockoutObservable<string>;
  framework: KnockoutObservable<string>;

  constructor(language: string, framework: string) {
    this.language = ko.observable(language);
    this.framework = ko.observable(framework);
  }
}
ko.components.register("hello-world", HelloWorld);

// ko.applyBindings(new Test("TypeScript", "Knockout"));
ko.applyBindings();
