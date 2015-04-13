describe("FizzBuzz",function() {

  it("should display 'fizz' when a num is divisible by three", function() {
    fizzbuzz = new FizzBuzz();

    expect(fizzbuzz.result(3)).toBe("fizz");
    expect(fizzbuzz.result(6)).toBe("fizz");
    expect(fizzbuzz.result(2)).not.toBe("fizz");
  });
  it("should display 'buzz' whena num is divisible by five", function() {
    expect(fizzbuzz.result(5)).toBe("buzz");
    expect(fizzbuzz.result(25)).toBe("buzz");
    expect(fizzbuzz.result(19)).not.toBe("buzz");
  });
});

