const myfunction = require("./index")

test("Checks to see if myfunction is a function", () => {
  expect(typeof myfunction).toEqual("function")
})

test("myfunction will return a certain data type if input meets criteria", () => {
  const input = ["1, 4, 7", "1, 3, 8"]
  const stringoutput = myfunction(input)

  expect(stringoutput).toEqual("1")
})

test("myfunction ", () => {
  const input = ["1, 2, 3", "4, 5, 6"]
  const stringoutput = myfunction(input)

  expect(stringoutput).toEqual(false)
})
