// By Simon Lydell 2015.
// This file is in the public domain.

// In how.md you can read about how I had managed to place many of the letters,
// but then had to resort to trial and error. This program generates all 480
// possible layouts from that point on, analyses them all and returns the ones
// with the lowest same finger usage and the ones with the most rolls.

module.exports = function fuzz(layout) {
  var possibilities = []

  var fCombinations = combinations("gmpld".split(""))
  fCombinations.forEach(function(combination) {
    possibilities.push(["f", "b", "v"].concat(combination))
    possibilities.push(["f", "v", "b"].concat(combination))
  })

  var gCombinations = combinations("fmpld".split(""))
  gCombinations.forEach(function(combination) {
    possibilities.push(["g", "b", "v"].concat(combination))
    possibilities.push(["g", "v", "b"].concat(combination))
  })

  var results = possibilities
    .map(function(p) {
      var template = [
        " q" + p[3] + "u" + "c"  + " " ,   " "  + p[4] + p[5] + "w- ",
        " a" + "n"  + "i" + "s"  + p[1],   p[2] + "h"  + "t"  + "ro ",
        " /" + "?"  + "y" + p[0] + " " ,   " "  + p[6] + p[7] + "., "
      ]
      var analysis = layout(template)
      delete analysis.sameFinger
      delete analysis.rolls
      analysis.layout = [
        template[0] + " " + template[1],
        template[2] + " " + template[3],
        template[4] + " " + template[5]
      ].join(" | ")
      return analysis
    })
  return {
    leastSameFinger: find(results, compareSameFinger, compareRolls     ),
    mostRolls:       find(results, compareRolls,      compareSameFinger)
  }
}

function combinations(letters) {
  if (letters.length === 1) {
    return [letters]
  } else {
    var results = []
    letters.forEach(function(letter, index) {
      var others = letters.slice(0, index).concat(letters.slice(index + 1))
      combinations(others).forEach(function(combination) {
        results.push([letter].concat(combination))
      })
    })
    return results
  }
}

function find(array, compareFn, sortFn) {
  var results = [array[0]]
  array.slice(1).forEach(function(item) {
    var comparison = compareFn(item, results[0])
    if (comparison === 0) {
      results.push(item)
    } else if (comparison < 0) {
      results = [item]
    }
  })
  return results.sort(sortFn)
}

function compareSameFinger(a, b) {
  return a.sameFingerTotal - b.sameFingerTotal
}

function compareRolls(a, b) {
  return b.rollsTotal - a.rollsTotal
}
