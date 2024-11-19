import  {CalcService} from "./calc.service";
import {SharedService} from "./shared.service";

describe("CalcService", () => {

  it ("should multiply two numbers", () => {
    const shared = new SharedService();
    const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  });

  it("should call mySharedFunction", () => {
    const shared = new SharedService();
    const spy = spyOn(shared, "mySharedFunction");
    const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(spy).toHaveBeenCalled();
  });

})