describe("FizzBuzz",function() {

  var fizzbuzz = new FizzBuzz();

  it("should display 'fizz' when a num is divisible by three", function() {

    expect(fizzbuzz.result(3)).toBe("fizz");
    expect(fizzbuzz.result(6)).toBe("fizz");
    expect(fizzbuzz.result(2)).not.toBe("fizz");
  });
  it("should display 'buzz' when a num is divisible by five", function() {

    expect(fizzbuzz.result(5)).toBe("buzz");
    expect(fizzbuzz.result(25)).toBe("buzz");
    expect(fizzbuzz.result(19)).not.toBe("buzz");
  });

  it("should display a num when not divisible by 3, 5 or 15", function() {
    expect(fizzbuzz.result(2)).toBe(2)
    expect(fizzbuzz.result(5)).not.toBe(5)
    expect(fizzbuzz.result(3)).not.toBe(3)
    expect(fizzbuzz.result(15)).not.toBe(15)
  });
  it("returns fizzbuzz if num is divisble by 15", function() {
    expect(fizzbuzz.result(15)).toBe("fizzbuzz")
    expect(fizzbuzz.result(75)).toBe("fizzbuzz")
    expect(fizzbuzz.result(76)).not.toBe("fizzbuzz")
  });
});

