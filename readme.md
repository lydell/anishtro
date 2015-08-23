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
  above).

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

- You think it’d be fun!

The assumption that you can mirror the above diagrams for the right hand is the
reason that a symmetrical keyboard should be used.

I strongly recommend putting space on a thumb key, which is why at least one key
per thumb is needed.


Variations
==========

anishtro was made in the Spring of 2014. In the Summer of 2015, I found an even
more optimal layout, which I call anishtro2:

    ·lucj kdgwq
    anisv bhtro
    ··yfx zpm··

       e   ·

However, the differece is so small that I cannot even be certain that it
actually _is_ better. It exists mostly for the sake of completeness. Between the
Spring of 2014 and the Summer of 2015 I’ve used anishtro and never looked back.
I don’t think it’s worth re-learning.

Shortly after that, I used two different data sources and came up with yet a
variation (called anishtro3):

    ·pucj kldwq
    anisb vhtro
    ··yfz xmg··

       e   ·

It seems like you can create endless variations, all with the same base:

    ·     u  c  j    k        w  q
    a  n  i  s  bv   bv h  t  r  o
    ·  ·  y  fg xz   xz       ·  ·

       e   ·

The keys with two letters should have either of those two (depending on how the
others are placed). The empty keys should have one of D, F, G, L, M and P.

Which one of all of those variations is the best is difficult to say, perhaps
even impossible.


Customization
=============

There are a couple of changes that you could make without reducing the amount of
“rolls” or increasing same finger usage.

- Mirror the entire layout. (If you’re looking for as much QWERTY difference as
  possible, this is the way to go!)
- Swap E and Space. If you’re used to typing space with your left thumb since
  before, why re-learn?
- Swap G and V, as mentioned in the previous section.
- Swap J and X, as well as K and Z, if you don’t agree on the relative rating of
  those keys.
- Swap the top and bottom row.
- Move Q to above O. That’s actually what the layout should be by default, since
  [AQ is more common than OQ](data.md#aq-oq). However, that difference is so
  marginal that I saw no point in re-learing the position of q from the QWERTY
  one. I know that I claimed that this layout isn’t a compromise between comfort
  and QWERTY similarity, but hey, no rules without exceptions! (Note that
  anishtro2 includes this change.)


How does it compare to other layouts?
=====================================

Actually, that question is rather pointless. This project is not about creating
the “best” layout ever, that obsoletes all other. The reason it was made was
because I couldn’t find any layout that fulfilled the things mentioned in the
“Who should use it?” section. Comparing anishtro to other layouts from that
point of view obviously makes anishtro the winner. Using another analyser, with
different opinions, might make anishtro look really crappy.

Numbers
-------

If you like numbers, though, here is a table that compares a few well-known
layout using _my_ analyzer (see the [“Tools”] section below, and [Analyzing a
full layout](data.md#analyzing-a-full-layout)).

[English Letter Frequency Counts: Mayzner Revisited or ETAOIN SRHLDCU][norvig]
by Peter Norvig is an analysis of English letter frequencies using the Google
Corpus Data.

[Michael Dickens] has a [repository that contains a program to optimize keyboard
layouts][typing], as well as some English letter frequency data.

For comparison with my own data, I also used their calculated bigram
frequencies. Having three different data sets made by three different people in
different ways all giving about the same results makes me confident that the
numbers are reliable.

| Layout     | Same finger | Rolls  | S.f. Norvig | R. Norvig | S.f. Dickens | R. Dickens |
| ---------- | ----------: | -----: | ----------: | --------: | -----------: | ---------: |
|  QWERTY    |       7.78% |  6.67% |       6.94% |     6.68% |        6.87% |      6.54% |
| [QGMLWB]   |       5.42% |  4.04% |       4.62% |     3.94% |        4.86% |      4.16% |
| [Dvorak]   |       2.85% |  5.30% |       2.50% |     5.88% |        2.61% |      5.63% |
| [Workman]  |       2.86% |  8.54% |       2.82% |     8.97% |        2.94% |      8.75% |
| [Colemak]  |       1.35% |  7.99% |       1.07% |     7.68% |        1.25% |      7.44% |
| [Arensito] |       1.28% | 13.64% |       0.95% |    13.85% |        1.05% |     13.27% |
| [Maltron]  |       1.04% | 13.67% |       0.73% |    13.33% |        0.85% |     12.83% |
|  anishtro  |       0.89% | 14.65% |       0.70% |    14.38% |        0.80% |     13.73% |
|  anishtro2 |       0.88% | 14.66% |       0.69% |    14.39% |        0.76% |     13.74% |
|  anishtro3 |       0.94% | 14.50% |       0.68% |    14.17% |        0.74% |     13.66% |

“Same finger” (abbreviated “S.f.” in some columns above) is the percentage of
all your keypresses that will be performed by the same finger (excluding typing
the _same_ letter twice in a row), which tells how _bad_ a layout is.

“Rolls” (abbreviated “R.” in some columns above) is the percentage of all your
keypresses that will be part of a _roll,_ as described in the [“Who should use
it?”] section. This is not essential, but a big bonus. (When creating anishtro,
I expected having to choose between less same finger usage and more rolls, but
it turned out that anishtro _both_ got the least same finger usage _and_ the
most rolls. How convenient.)

Remember that the above table is made from _my_ ananlyzer, with _my_ opinions
(as detailed in the [“Who should use it?”] section). For example, QGMLWB takes
loads of other things into account, Dvorak favours hand alternation (which some
like and some don’t) and Colemak is an optimization between optimal layout and
QWERTY similarity. The table is only useful if you agree with my opinions and
wonder how well one of the above layouts would fit you.

Also note that Arensito seems to be almost as good as Maltron and anishtro, but
it does not put a letter on a thumb key, making it have one less home key. In
the above list, only Maltron and anishtro do. That’s their big advantage.

[norvig]: http://norvig.com/mayzner.html
[Michael Dickens]: http://mdickens.me/
[typing]: https://github.com/michaeldickens/Typing
[Arensito]: http://www.pvv.org/~hakonhal/main.cgi/keyboard
[Dvorak]: https://en.wikipedia.org/wiki/Dvorak_Simplified_Keyboard
[Colemak]: http://colemak.com/
[Maltron]: http://www.maltron.com/keyboard-info/the-maltron-letter-layout-advantage
[QGMLWB]: http://mkweb.bcgsc.ca/carpalx/?full_optimization
[Workman]: http://www.workmanlayout.com/


Tools
=====

First off, you need [Node.js].

See [scripts/repl.js] for how to interactively play with data to analyse layouts.

Before using that file you need to run `npm install` to get all dependencies.

You also need some data to work with. You may download [the data I
used][my-data], or see [./create-data] for how to create your own. [Norvig’s
data][norvig-gist] and [Dickens’ data][dickens-gist] are also available. Or do
something entirely different.

It might be a good idea to have a look at the two dependencies as well:
[wikipedia-gather] and [text-frequencies-analysis].

[scripts/layout.js] is the file that does the actual analysis of layouts. Have a
look at it for more information, and run `npm test` to test it.

[Node.js]: http://nodejs.org/
[my-data]: https://gist.github.com/lydell/e807977107e041c147ab
[norvig-gist]: https://gist.github.com/lydell/c439049abac2c9226e53
[dickens-gist]: https://gist.github.com/lydell/259ab9f2ddaa1a64e6bd
[wikipedia-gather]: https://github.com/lydell/wikipedia-gather
[text-frequencies-analysis]: https://github.com/lydell/text-frequencies-analysis


How was anishtro made?
======================

If you have the time and interest, you may read a very long explaination in [How
anishtro was made].

I also recommend reading the [Most Ergonomic Keyboard ; Most Efficient
Keyboard][proword] article by “Joe,” since it was a big inpiration.

[How anishtro was made]: how.md
[proword]: http://mostergonomickeyboard.blogspot.se/2011/02/most-ergonomic-and-efficient-keyboard.html


License
=======

The layout and all files used to build it is in the public domain (unless
otherwise stated).

[“Who should use it?”]: #who-should-use-it
[“Tools”]: #tools
[scripts/repl.js]: scripts/repl.js
[./create-data]: ./create-data
[scripts/layout.js]: scripts/layout.js
