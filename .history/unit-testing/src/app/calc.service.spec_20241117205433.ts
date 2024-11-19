describe("CalcService", () => {

  it ("should multiply two numbers", () => {
    const calc = new CalcSer();
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  })

})