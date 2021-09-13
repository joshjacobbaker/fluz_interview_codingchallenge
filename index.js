function myfunction(input) {
  // 1 Iterate through array elements, parse the strings on commas, return array of arrays
  let sdata = input.map((i) => i.split(", "))
  // 2 Select 1st array element
  let sdata0 = sdata[0]
  // 3 Select 2nd array element
  let sdata1 = sdata[1]
  // 4 Combining both array elements
  let sdatacombined = sdata0.concat(sdata1)
  // 5 Filtering through combined array and returning matched value
  let sdatacombinedmatched = sdatacombined.filter((value, index, array) => {
    return !(array.indexOf(value) === index)
  })
  // 6 Stringifying filtered array
  let output = sdatacombinedmatched.join("")
  // 7 Condition for returning value
  if (output.length > 0) {
    return output
  } else {
    return false
  }
}

module.exports = myfunction
