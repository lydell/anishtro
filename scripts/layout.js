// By Simon Lydell 2014.
// This file is in the public domain.

// A “hand” is an array of strings representing the keys of the left hand of the
// keyboard. There may be any number of rows. Each string should be six
// characters long, which means two columns each for the pinky and the index
// finger, and one column each for the rest of the fingers. The keys of the
// right hand can be analysed by reversing it into a left hand. Example:
//
//     [ " qwert",
//       " asdfg",
//       " zxcvb" ]
//
// A “layout” is two hands “side by side” (the right hand being a right hand of
// course):
//
//     [ " qwert", "yiuop ",
//       " asdfg", "bjkl; ",
//       " zxcvb", "nm,./ " ]
//
// “rollOpportunities” is a hand where the character `>` means that you can roll
// from that key to the right. Example:
//
//     [ "  >>  ",
//       " >>>  ",
//       "   >  " ]
//
// “pairs” is an array of `[pair, frequency]` tuples, where `pair` is a string
// of two characters and `frequency` is a number representing its frequency.

var tools = require("text-frequencies-analysis")

// Returns data about same finger usage and roll for `layout`, using
// `rollOpportunities` and `pairs`.
function analyseLayout(rollOpportunities, pairs, layout) {
  var find = findPair.bind(null, pairs)

  var tmp   = partition(layout, function(item, index) { return index % 2 === 0 })
  var left  = tmp[0]
  var right = tmp[1].map(reverse)

  var sameFinger =
    findSameFinger(left).concat(findSameFinger(right))
    .map(find)
    .filter(nonZeroValue)

  var rolls =
    findRolls(left, rollOpportunities).concat(findRolls(right, rollOpportunities))
    .map(find)
    .filter(nonZeroValue)

  return {
    sameFinger:      tools.sortTuples(sameFinger),
    rolls:           tools.sortTuples(rolls),
    sameFingerTotal: tools.sumTuples(sameFinger),
    rollsTotal:      tools.sumTuples(rolls)
  }
}

// Returns the pair in `pairs` that contains both characters in `pair`, or
// such a pair with a value of `0` if there is none. Assumes that all pairs in
// `pairs` are in alphabetical order.
function findPair(pairs, pair) {
  pair = pair.split("").sort().join("")
  return pairs.reduce(function(value, tuple) {
    if (value[1]) {
      return value
    }
    return (tuple[0] === pair ? tuple : [pair, 0])
  }, [, 0])
}

function partition(array, fn) {
  var left = [], right = []
  array.forEach(function(item, index) {
    if (fn(item, index)) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  return [left, right]
}

function reverse(string) {
  return string.split("").reverse().join("")
}

function combinations(chars) {
  if (chars.length === 0) {
    return []
  }
  var first = chars[0]
  var tail  = chars.slice(1)
  return tail
    .map(function(char) {
      return first + char
    })
    .concat(combinations(tail))
}

function findSameFinger(hand) {
  var index = 0
  var nextColumn = function() { return column(hand, index++) }
  return flatten([
    nextColumn().concat(nextColumn()), // Two pinky colums.
    nextColumn(),                      // One ring finger column.
    nextColumn(),                      // One middle finger column.
    nextColumn().concat(nextColumn())  // Two index finger columns.
  ].map(combinations))
}

function column(array, num) {
  return array.map(function(item) {
    return item[num]
  })
}

function flatten(array) {
  var flattened = []
  array.forEach(function(item) {
    flattened = flattened.concat(item)
  })
  return flattened
}

function findRolls(hand, rollOpportunities) {
  var rolls = []
  rollOpportunities.forEach(function(rollOpportunity, row) {
    rollOpportunity.split("").forEach(function(char, column) {
      if (char === ">") {
        rolls.push(hand[row][column] + hand[row][column + 1])
      }
    })
  })
  return rolls
}

function nonZeroValue(tuple) {
  return tuple[1] > 0
}

// Returns the sum of all pairs found in `left` and `right` (using the ones
// available in `pairs`).
analyseLayout.homeRow = function homeRow(pairs, left, right) {
  return tools.sumTuples(
    adjacentRolls(pairs, left).concat(adjacentRolls(pairs, right))
  )
}

function adjacentRolls(pairs, chars) {
  var find = findPair.bind(undefined, pairs)
  return combinations(chars.split("")).map(find)
}

module.exports = analyseLayout
