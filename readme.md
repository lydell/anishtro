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

- You like to type punctuation with your ring fingers and pinkies. The bad
  ratings for their keys above are mainly for typing _letters,_ which are part
  of a “flow”—as opposed to punctuation characters, which are typed more or less
  one by one.

- You like “rolling” (horizontally) between the keys marked with uppercase
  letters, in either direction. (Again, mirror it for the right hand.)

      qLUCj
      ANISv
      ··YGx

- You agree on that the single most important characteristic of a layout is to
  have all the most common letters on the home keys.

- You are looking for a layout that is “fully optimized,” not a compromise
  between comfort and QWERTY similarity. This also means that you are ready to
  re-learn your typing from scratch, since only two letters remain on their
  QWERTY positions: a and q. (You can swap g and v if you want yet two, though.)

- You don’t care about other metrics that some other keyboard analysers use,
  such as “finger travel distance,” “hand balancing” and “bottom row penalties.”

- You are looking for a more symmetrical keyboard layout; where both hands are
  used for punctuation, and the same fingers on both hands do that job.

The assumption that you can mirror the above diagrams for the right hand is the
reason that a symmetrical keyboard should be used.

I strongly recommend putting space on a thumb key, which is why at least one key
per thumb is needed.


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
  “aq” is more common than “oq” according to the data I used. However, that
  difference is so marginal that I saw no point in re-learing the position of q
  from the QWERTY one. I know that I claimed that this layout isn’t a compromise
  between comfort and QWERTY similarity, but hey, no rules without exceptions!


How does it compare to other layouts?
=====================================

Actually, that question is rather pointless. This project is not about creating
the “best” layout ever, that obsoletes all other. The reason it was made was
because I couldn’t find any layout that fulfilled the things mentioned in the
“Who should use it?” section. Comparing anishtro to other layouts from that
point of view obviously makes anishtro the winner. Using another analyser, with
different opinions, might make anishtro look really crappy.


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
