// By Simon Lydell 2014.
// This file is in the public domain.

var assert = require("assert")

var analyseLayout = require("./layout")


suite("layout functions", function() {

  test("analyseLayout", function() {
    var pairs = [
      ["ew",10],
      ["er",20],
      ["de",15],
      ["sw",5],
      ["ce",5],
      ["tv",5],
      ["sx",15],
      ["as",20],
      ["cv",1],
      ["xz",1],
      ["kl",1],
      ["op",1],
      ["io",15],
      ["iu",15],
      ["på",10],
      ["qä",1]
    ]

    var layout = [
      " qwert", "yuiopå",
      " asdfg", "hjkl; ",
      "äzxcvb", "nm,./ö"
    ]

    var rollOpportunities = [
      "  >>  ",
      " >>>  ",
      "   >  "
    ]

    assert.deepEqual(analyseLayout(rollOpportunities, pairs, layout), {
      sameFinger: [
        ["de",15],
        ["sx",15],
        ["på",10],
        ["ce",5],
        ["sw",5],
        ["tv",5],
        ["qä",1]
      ],
      rolls: [
        ["as",20],
        ["er",20],
        ["io",15],
        ["iu",15],
        ["ew",10],
        ["cv",1],
        ["kl",1]
      ],
      sameFingerTotal: 56,
      rollsTotal: 82
    })
  })


  test("homeRow", function() {
    var pairs = [
      ["ab", 5],
      ["cd", 20],
      ["de", 10],
      ["ef", 1],
      ["fg", 14]
    ]
    assert.equal(analyseLayout.homeRow(pairs, "abcd", "efgh"), 40)
  })

})
