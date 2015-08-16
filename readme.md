Overview
========

anishtro is a layout for the letters of the English alphabet, made for
symmetrical keyboards with at least one main key per thumb.

    qlucj kpmw·
    anisv bhtro
    ··ygx zfd··

       e   ·

The dots above represent keys that anishtro doesn’t say anything about. Here’s a
suggestion, though (␣ means space):

    qlucj kpmw-
    anisv bhtro
    /;ygx zfd.,

       e   ␣


Who should use it?
==================

The layout is suitable if:

- You agree on the following rating of the keys. The lower the number, the
  better the key. Mirror it for the right hand.

      64336
      22225
      66447

         1

  In other words, the thumb keys are the absolute best, closely followed by the
  home keys. The index fingers’ and middle fingers’ keys are quite good in
  general, while the ring fingers’ and pinkies’ are worse. Worst of all are the
  center colums operated by the index fingers by reaching towards the middle of
  the keyboard.

- You want a letter on a thumb key (one of the absolute best keys, as seen
  above). Read more about it in the “One single change to QWERTY” section.

- You like to type punctuation with your ring fingers and pinkies. The bad
  ratings for their keys above are mainly for typing _letters,_ which are part
  of a “flow”—as opposed to punctuation characters, which are typed more or less
  one by one.

- You agree on that the single most important characteristic of a layout is to
  have all the most common letters on the home keys.

- You agree on that the second most important characteristic of a layout is to
  avoid using the same finger twice in a row.

- You are looking for a layout that is “fully optimized,” not a compromise
  between comfort and QWERTY similarity. This also means that you are ready to
  re-learn your typing from scratch, since only two letters remain on their
  QWERTY positions: a and q. (You can swap g and v if you want yet two, though.)

- You like “rolling” (horizontally) between the keys marked with uppercase
  letters, in either direction. (Again, mirror it for the right hand.)

      qLUCj
      ANISv
      ··YGx

- You don’t care about other metrics that some other keyboard analysers use,
  such as “finger travel distance,” “hand balancing” and “bottom row penalties.”
  (“Hand balancing” is especially unimportant, in my opinion, since to compare
  the workload between the hands also requires taking all non-letter keys and
  keyboard shortcuts into account. The only way to measure that is to use a key
  logger for a long period of time. It is better to adjust other keys than
  letter keys if needed, that are not part of “typing flow”.)

- You are looking for a more symmetrical keyboard layout; where both hands are
  used for punctuation, and the same fingers on both hands do that job.

The assumption that you can mirror the above diagrams for the right hand is the
reason that a symmetrical keyboard should be used.

I strongly recommend putting space on a thumb key, which is why at least one key
per thumb is needed.

I recommend reading the [Most Ergonomic Keyboard ; Most Efficient Keyboard][proword]
article by “Joe”, since it was a big inpiration for this layout.

[proword]: http://mostergonomickeyboard.blogspot.se/2011/02/most-ergonomic-and-efficient-keyboard.html

Customization
=============

There are a couple of changes that you could make without reducing the amount of
“rolls” or increasing same finger usage.

- Mirror the entire layout. (If you’re looking for as much QWERTY difference as
  possible, this is the way to go!)
- Swap e and space. If you’re used to typing space with your left thumb since
  before, why re-learn?
- Swap g and v, as mentioned in the previous section.
- Swap j and x, as well as k and z, if you don’t agree on the relative rating of
  those keys.
- Swap the top and bottom row.
- Move q to above o. That’s actually what the layout should be by default, since
  [“aq” is more common than “oq”](data.md#aq-oq). However, that difference is so
  marginal that I saw no point in re-learing the position of q from the QWERTY
  one. I know that I claimed that this layout isn’t a compromise between comfort
  and QWERTY similarity, but hey, no rules without exceptions!


How does it compare to other layouts?
=====================================

Actually, that question is rather pointless. This project is not about creating
the “best” layout ever, that obsoletes all other. The reason it was made was
because I couldn’t find any layout that fulfilled the things mentioned in the
“Who should use it?” section. Comparing anishtro to other layouts from that
point of view obviously makes anishtro the winner. Using another analyser, with
different opinions (such as [this one by Patrick Gillespie][patorjk], might make
anishtro look really crappy.

[patorjk]: http://patorjk.com/keyboard-layout-analyzer/#/main

Numbers
-------

If you like numbers, though, here is a table that compares a few well-known
layout using _my_ analyzer (see the “Tools” section below, and [Analyzing a full
layout](data.md#analyzing-a-full-layout.)).

| Layout     | Same finger | Rolls  |
| ---------- | ----------: | -----: |
|  QWERTY    |       7.78% |  6.67% |
| [QGMLWB]   |       5.42% |  4.04% |
| [Dvorak]   |       2.85% |  5.30% |
| [Workman]  |       2.86% |  8.54% |
| [Colemak]  |       1.35% |  7.99% |
| [Arensito] |       1.28% | 13.64% |
| [Maltron]  |       1.04% | 13.67% |
|  anishtro  |       0.89% | 14.65% |

“Same finger” is the percentage of all your keypresses that will be performed by
the same finger (excluding typing the _same_ letter twice in a row), which tells
how _bad_ a layout is.

“Rolls” is the percentage of all your keypresses that will be part of a _roll,_
as described in the . This is not essential, but a big bonus. (When creating
anishtro, I expected having to choose between less “same finger” and more rolls,
but it turned out that anishtro _both_ got the least “same finger” _and_ the
most rolls. How convenient.)

Remember that the above table is made from _my_ ananlyzer, with _my_ opinions
(as detailed in the “Who should use it?” section). For example, QGMLWB takes
loads of other things into account, Dvorak favours hand alternation (which some
like and some don’t) and Colemak is an optimization between optimal layout and
QWERTY similarity. The table is only useful if you agree with my opinions and
wonder how well one of the above layouts would fit you.

Also note that Arensito seems to be almost as good as Maltron and anishtro, but
it does not put a letter on a thumb key, making it have one less home key. In
the above list, only Maltron and anishtro do, which is their big advantage.

[Arensito]: http://www.pvv.org/~hakonhal/main.cgi/keyboard
[Dvorak]:   https://en.wikipedia.org/wiki/Dvorak_Simplified_Keyboard
[Colemak]:  http://colemak.com/
[Maltron]:  http://www.maltron.com/keyboard-info/the-maltron-letter-layout-advantage
[QGMLWB]:   http://mkweb.bcgsc.ca/carpalx/?full_optimization
[Workman]:  http://www.workmanlayout.com/

Other comparisons
-----------------

According my data, as well as the Maltron layout and Wikipedia, [the most common
letters of the English alphabet are “aehinorst”](data.md#most-common-letters).
Those letters (except H) is also what Colemak and Arensito use for their home
rows.


The one single change to QWERTY
===============================

If you were allowed to do one single thing to improve QWERTY, and you have an
extra thumb key—move the letter E ([the most common letter of the English
alphabet](data.md#most-common-letters)) to the thumb key! That’s what I did
before designing anishtro, to try it out. Wow, what a difference! I instantly
liked it and it became second nature.

Note that if you try this, make sure that you make the old E key a no-op. If it
too would produce E, you wouldn’t learn to use the new key. Also don’t be
tempted to put something else there (at least not in the beginning), because
you’ll hit it by mistake a lot initially.

The benefits are:

- The most common letter gets one of the best keys.
- The most common letter naturally is part of many common letter pairs, making
  it difficult to place on the keyboard without introducing “same finger.” For
  example, the pair [“de” is one of the ten most common
  pairs](data.md#most-common-pairs) (think about it: most verbs in the past
  tense ends with “ed”!), and that’s a “same finger” in QWERTY. In fact, [the
  letter E is part of 24% of all letter pairs](data.md#e-pairs) in English text!


Tools
=====

First off, you need [Node.js].

See scripts/repl.js for how to interactively play with data to analyse layouts.

Before using that file you need to run `npm install` to get all dependencies.

You also need some data to work with. Either download [the data I used][gist],
or see ./create-data for how to create your own. Or do something entirely
different.

It might be a good idea to have a look at the two dependencies as well:
[wikipedia-gather] and [text-frequencies-analysis].

Finally, scripts/layout.js is the file that does the actual analysis of layouts.
Have a look at it for more information, and run `npm test` to test it.

[Node.js]: http://nodejs.org/
[gist]: https://gist.github.com/lydell/e807977107e041c147ab
[wikipedia-gather]: https://github.com/lydell/wikipedia-gather
[text-frequencies-analysis]: https://github.com/lydell/text-frequencies-analysis


License
=======

The layout and all files used to build it is in the public domain (unless
otherwise stated).
