import { before } from "node:test";
import  {CalcService} from "./calc.service";
import {SharedService} from "./shared.service";

describe("CalcService", () => {

  let calc: CalcService;
  let shared: SharedService;

  beforeEach(() => {
    console.log("Before Each Test");
    shared = new SharedService();
    calc = new CalcService(shared);
  });

  it ("should multiply two numbers", () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  });

  it ("should add two numbers", () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.add(3,5);
    expect(result).toBe(8);
  });

  // it("should call mySharedFunction", () => {
  //   // const shared = new SharedService();
  //   const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
  //   // const spy = spyOn(shared, "mySharedFunction").and.callThrough();
    
  //   const calc = new CalcService(shared);
  //   // expect(spy).toHaveBeenCalled();
  //   // expect(shared.mySharedFunction).toHaveBeenCalled();

  //   const result = calc.multiply(3,5);
  //   expect(result).toBe(15);
  // });

})