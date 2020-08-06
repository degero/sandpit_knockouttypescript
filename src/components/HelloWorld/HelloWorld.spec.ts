import * as ko from "knockout";
import HelloWorldComp from "./HelloWorld";

describe("test", () => {
  it("should default mymessage to Hello WOrld111", () => {
    let comp = new HelloWorldComp.viewModel();

    expect(comp.myMessage()).toEqual("Hello WOrld111");
  });
});
