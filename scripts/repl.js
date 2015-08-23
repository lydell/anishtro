// By Simon Lydell 2014.
// This file is in the public domain.

// `require` this file from the node REPL and pass it the path to a directory
// containing a chars.json, words.json and pairs.json file. Those data files
// will be available, as well as a bunch of functions, on the global object, or
// on a custom object passed as the second parameter.
//
//     $ node
//     > require("./")("data/en")
//     > require("./")("data/sv", sv={})
//
// See layout.js for information on the `layout` and `homeRow` functions
// provided below. Also see data.md for examples.

var tools   = require("text-frequencies-analysis")
var layout  = require("./layout")
var layouts = require("./layouts")
var fuzz    = require("./fuzz")

var rollOpportunities = [
  "  >>  ",
  " >>>  ",
  "   >  "
]

module.exports = function(dir, obj) {
  dir = path.resolve(dir)
  obj = obj || global

  obj.chars      = require(dir + "/chars")
  obj.words      = require(dir + "/words")
  obj.pairs      = require(dir + "/pairs")

  var words      = obj.words.map(function(tuple) { return tuple[0] })
  obj.pairWords  = tools.pairWords.bind(null, words)
  obj.sumTuples  = tools.sumTuples
  obj.sortTuples = tools.sortTuples
  obj.relative   = tools.relative
  obj.filter     = tools.filter

  var pairs      = tools.relative(obj.pairs)
  obj.layout     = layout.bind(null, rollOpportunities, pairs)
  obj.homeRow    = layout.homeRow.bind(null, pairs)
  obj.fuzz       = fuzz.bind(null, obj.layout)
  obj.layouts    = layouts

  return [
    "Created the following:",
    "  chars (tuples)",
    "  words (tuples)",
    "  pairs (tuples)",
    "  pairWords (function)",
    "  sumTuples (function)",
    "  sortTuples (function)",
    "  relative (function)",
    "  filter (function)",
    "  layout (function)",
    "  homeRow (function)",
    "  fuzz (function)",
    "  layouts (map)"
  ]
}
