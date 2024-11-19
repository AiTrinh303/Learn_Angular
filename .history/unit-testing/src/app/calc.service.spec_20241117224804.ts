import  {CalcService} from "./calc.service";
import {SharedService} from "./shared.service";

describe("CalcService", () => {

  it ("should multiply two numbers", () => {
    const shared = new SharedService();
    const calc = new CalcService();
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  })

})