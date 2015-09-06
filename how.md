How anishtro was made
=====================

By Simon Lydell 2014–2015.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">How anishtro was made</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Simon Lydell</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

Synopsis
--------

This document (or parts of it) might be interesting to people who:

- Need to choose between a regular and an ergonomic keyboard.
- Wonder if they should learn a new keyboard layout or not.
- Need to choose between existing keyboard layouts.
- Want to learn some general concepts on how to create a keyboard layout.
- Want to read about how a guy went from not at all interested to full-blown
  keyboard geek in a year.

There are several output samples from runnig the repl described in the [“Tools”]
section of the [readme]. You can re-run them all if you’d like.

[readme]: readme.md
[“Tools”]: readme.md#tools


Background
----------

Before making a keyboard layout, you need a keyboard. You need to know what that
keyboard looks like, and which keys of that keyboard to use. A layout is not a
one-size-fits-all. You also need to know your personal preferences. What people
like and dislike about keyboard layouts seems to be highly personal. _Then_ you
can start laying out the keys. Therefore, we must start from the very beginning.

It all started with me wanting to learn touch typing in the early 2013. I
already knew that there existed other keyboard layouts than QWERTY, so I started
by researching if I should invest in learning to touch type QWERTY or some other
layout. While I enjoyed reading about different keyboards and layouts, I
ultimately decided to learn QWERTY on a standard keyboard, because it felt like
a good thing to be able to touch type well anywhere. So I started practicing for
a few months.

It didn’t take long before I felt that even though I liked being able to touch
type, it felt really awkward for my hands—especially the left hand. Since typing
is what I do, I felt that I should do something about it.

I noticed that I found it a lot more comfortable to type with the right hand
than the left. That made me realize: “Why in the world aren’t keyboard
symmetrical, just like my hands?“

In the middle of 2013 got a symmetrical keyboard (the [TECK]), and I loved it.
Finally I could type comfortably.

However, after using the new keyboard for a few months, I discovered that I
couldn’t touch type on a regular keyboard anymore. Instead I regressed to using
my old method of sometimes looking at the keyboard, sometimes not, and using
just a few fingers, without any special rules about which fingers go where.
Still, that works. It’s not like I feel completely useless on a regular
keyboard.

That started a thought inside of me. If I couldn’t touch type on a regular
keyboard, the whole reason that I learned QWERTY was lost. So why not learn
another layout—a better one? Besides, it’d be fun.

All that was left was choosing one. And there’s quite a few to choose from.

Symmetry and aesthetics vs. ergonomics
--------------------------------------

Being so happy with my symmetrical keyboard, I thought that a symmetrical layout
would be the best. Symmetrical, symmetrical, symmetrical! I also find symmetric
things aesthetically pleasing. I figured that the following keys must be the
best to place the letters on (marked with “a”s):

    aaaa· ·aaaa
    aaaaa aaaaa
    aaaa· ·aaaa

I reasoned that every finger would share the burden equally, which should be an
optimal arrangement. Compared to QWERTY, the index fingers have less letters.
The fewer letters for those fingers should reduce same finger usage, I thought.

The problem was that I couldn’t find _any_ layout that looked like this.

In the end I decided to try [Colemak]. I don’t know exactly why, but that’s what
I did. I also looked at [Maltron], because their keyboards appealed to me (being
symmetrical and all) and seemed to be well researched. However, I foolishly
didn’t like that the Maltron layout put the letter E on a thumb key, breaking
the symmetry. Besides, I was already used to having Tab on that thumb key.

What I tried to do was to rearrange Colemak just a bit, to adjust it to my
desired keys as illustrated above. This made me discover that even changing an
existing layout “just a little, tiny bit” usually wrecks it totally.

Another discovery was that I dislike letter keys on the ring fingers in the
bottom row. For example, I tried put the letter V on such a key (for the left
hand):

    ·····
    A····
    ·V···

This proved to be a catastrophe. Typing “var” (which I do a lot when
programming) was awful. I felt this instantly, and I still feel it when I try it
today. (Trust your gut feeling when trying keyboard layouts! If something feels
uncofortable straight away, it is.) On the other hand (quite literally!) I had
never minded the position of the period on QWERTY (which is on the _right_ ring
finger in the bottom row). I concluded that I should put _punctuation
characters_ (not letters) on those keys.

I also learned that my arrangement of the letters did _not_ reduce same finger
usage, as I had thought. Think about it. Which letters are likely to cause same
finger usage? Vowels! Vowels may be followed by _any_ consonant (and sometimes
by other vowels), while some pairs of consonants are extremely rare. Having just
one or two letters on some fingers allows you to put a vowel there greatly
reduce the risk of same finger usage. That’s why I couldn’t find any pre-made
layouts that arranged the letters like I wanted. Layouts usually “protects” the
vowels by putting punctuation keys and/or really uncommon consonants on the same
finger. Even QWERTY does it to some degree: The letter A is protected by the
uncommon Q and Z; I is protected by the uncommon K and the comma; O is on the
same finger as the period; U and Y are on the same finger, but don’t form a
common combination.

This also taught me that QWERTY is not _that_ bad. It could be worse.

I updated my ideal arrangement according to my new experiences:

    aaaaa aaaaa
    aaaaa aaaaa
    ··aaa aaa··

The reason I put punctuation keys on the pinkies is that I’ve always liked
QWERTY’s placement of the slash (on the right pinky in the bottom row), but
never really liked typing anything with a Z in it (the _left_ pinky in the
bottom row).

I also realized that low same finger usage is the one of the most important
characteristics for a keyboard layout, since that’s what bothered me the most in
QWERTY. A really good way to lower it, is to do the Maltron thing and protect a
vowel by isolating it on a thumb key.

The greatest lesson I learned, was that it’s easy (at least for me) to start
positioning keys for the sake of symmetry and aesthetically pleasing patterns. I
needed to remind myself to design _ergonomically:_

> Designed so as to take into account the bodily needs of a worker in a given
> working environment.

The one single change to QWERTY
-------------------------------

I was still not sure if placing E on a thumb key, like Maltron, was a good idea,
though. The only way to find out was to try it. So I moved E to my left thumb
and kept the rest of QWERTY intact. (The TECK has two Delete keys by default,
for some reason, so I could just replace one of those with what was on the
thumb key before.) Wow, what a difference! I instantly liked it and it became
second nature.

If I only were allowed to do just one single thing to improve QWERTY, and had an
extra thumb key, I’d move E to the thumb key, without question!

Note that if you try this, make the old E key do nothing at all. If it too would
produce E, you wouldn’t learn to use the new key. Don’t be tempted to put
something else there (at least not in the beginning), because you’ll hit it by
mistake a lot initially.

E, the [most common letter](data.md#letters), is naturally part of many common
letter pairs, making it difficult to place on the keyboard without introducing
same finger usage. For example, the pair DE is one of the ten most common pairs
(think about it: most verbs in the past tense end with “ed”!), and that’s same
finger usage in QWERTY.

    > relative(pairs).slice(0,10)
    [ [ 'er', 3.781865233783989 ],
      [ 'ht', 3.1143912946997787 ],
      [ 'in', 3.0370736667978786 ],
      [ 'eh', 2.797348932553786 ],
      [ 'an', 2.7104361081469164 ],
      [ 'it', 2.242793128080614 ],
      [ 'or', 2.2012958429263745 ],
      [ 'no', 2.1511473630796494 ],
      [ 'de', 2.1164908581829955 ],
      [ 'ar', 2.099149674202991 ] ]

In fact, E is part of 24% of all letter pairs in English text, so it is a great
candidate for an isolated key!

    > sumTuples(filter(relative(pairs), /e/))
    24.10591389979305

I couldn’t believe I even considered not to use one of the thumb keys for a
letter before!

At this point I could revise my arrangement again. The capital P marks the spot
where there was a letter before, but now is a punctuation character. The
capital E means the actual letter E, while I’ve used ␣ for Space.

    aaaaa aaaaP
    aaaaa aaaaa
    ··aaa aaa··

       E   ␣

I’ve never liked the position of P in QWERTY (on the right pinky in the top
row), so that place was natural to fill with a punctuation character now that
I’d moved a letter to a thumb key.

Note how my layout isn’t _that_ symmetrical anymore, but still quite so. For
the better.

Rating the keys
---------------

To be able to take decisions on which letters to put where, I rated the keys.
The lower the number, the better the key. Mirror it for the right hand.

    64336
    22225
    66447

       1

I also took note of that I like “rolling” (horizontally) between the keys marked
with uppercase letters, in either direction. (Again, mirror it for the right
hand.)

    ·AAA·
    ·AAA·
    ··AA·


The home keys rock!
-------------------

About this time I found a really great article called [Most Ergonomic Keyboard ;
Most Efficient Keyboard][proword] by a guy called Joe or Proword. If you’ve come
this far and still are interested, I’d suggest you read it. I couldn’t agree
more on it.

One point of the article is that you can use the number of words that can by
typed using only the home keys to compare layouts. The more the better. I came
to the conclusion that having the most common letters on the home keys is the
single most important characteristic of a layout.

According to my data (although at the time I did not have it yet), as well as
the Maltron layout and Wikipedia, [the most common letters of the English
alphabet are A, E, H, I, N, O, R, S and T](data.md#letters). Those letters
(except H) is also what Colemak and [Arensito] use for their home rows. Knowing
that somebody else has drawn the same conclusions before always feels good.

Protecting the vowels
---------------------

I now knew which letters to put on the home keys. But in what order?

The second most important characteristic for my layout is to reduce same finger
usage. Therefore I started by “protecting the vowels” (just like I described
above that other layouts do). The vowels of the home keys are A, E, I, and O. I
had already placed E on the left thumb, which leaves A, I and O.

The best places to put two vowels are the pinkies. On the left side it will be
protected by one punctuation character and one uncommon letter (Q, it would turn
to be). On the right side there are _two_ punctuation characters protecting,
eliminating same finger sequences with that vowel completely.

That leaves yet one vowel. The next two best spots are the ring fingers, since
they’ve got one punctuation character each to protect a vowel with. So one of
those spots should be a good candidate.

However, there are yet two vowels: U and Y! Even though they won’t be on the
home row, they still need to be protected.

There are three ways of protecting vowels: With punctuation, with uncommon
consonants and—another vowel. _Some_ vowel combinations are uncommon. At the
same time, some other vowel combinations can be very common, such as in the word
“you.” Because of that, Y and O, or O and U, can’t be on the same finger. So O
had to be placed on a pinky. (Placing it on a ring finger would combine it with
either Y or U.)

I couldn’t think of any [word containing IY](data.md#iy) (that pair indeed
proved to be uncommon when I later got my data), so those seemed to be good
candidates for the same finger. A and U didn’t seem so bad either (but it later
[proved to be](data.md#au)). So at this point I decided to put A and U together
on one ring finger, and I and Y together on another ring finger. I put O on one
of the pinkies, and left the other pinky spot open. I liked this because I
thought it would reduce same finger usage the most, at the same time as it put
the vowels symmetrically (again I fell into the trap of thinking to much about
aesthetically pleasing symmetry). It also felt like a good idea to spread the
vowels equally between both hands, especially since my short time with Colemak
showed that I didn’t like its placement of almost all vowels on the right side
of the keyboard.

After lots of thinking, I came up with this partial layout:

    QUaaa aaaY·
    RANSa aHTIO
    ··aaa aaa··

       E   ␣

The home row reads “ranshtio,” which is what I called it.

Consonants
----------

Left to do was placing the (rest of) the consonants. I did this by trial and
error. When wondering how common a particular pair of letters was, I tried to
check Wikipedia, or simply tried to come up with words that contained them.
Common pairs were made sure not to end up on the same finger; uncommon ones did.

In the end I came up with a finished result, which I started trying out. I
didn’t take long at all, though, before I found a few really awkward same finger
usages. It turned out that when guessing how common some pairs of letters were,
I had completely missed even some very common words.

I realized that I needed data where I could look things up. “Guessing” obviously
didn’t work.

Getting data
------------

Some people use “Alice in Wonderland”, because it is a rather long text and
freely available. Any single work will bump some character frequencies in an
unnatural way, since names of characters of the story, for instance, are
repeated a lot. Anything written by a single person will affect the statistics
based on his or her word usage.

Some mean that you should analyze things you’ve written yourself, since that
will be optimized for you. I decided try that. After all, I started this effort
of creating my own keyboard layout for my own sake, so ther’s nothing wrong
optimizing it especially for _me._

I wrote a script that scraped most of the text I’d written so far in my life:
mostly school essays and READMEs for programming projects. However, this didn’t
turn out very well, because the amount of data was way to small. Removing a
single piece of text caused completely different results. For instance, I have
a project called “dual,” which obviously mentions the word “dual” lots of times.
Including that file caused my idea of putting A and U on the same finger to seem
really bad, while excluding it gave a completely different picture.

If you search the Internet you can find several different large text sources.
Many people have researched keyboard layouts before me, and some offer the text
they used as a large ZIP file to download. However, it didn’t feel right to just
take some random source from somewhere. I would have no idea where it came from,
or how representative it’d be.

(Note added afterwards: See the [“Other data”] section for comparisons between
my data and two other good data sources.)

I needed something written in _contemporary_ English, on a variety of different
topics (in order not to bump certain words more than “natural”) written by lots
of different people. That should probably give a good statistical average. I
needed _lots_ of it, and it should be freely available and easy to get.

Then it struck me: The above description fits Wikipedia perfectly! It is written
in contemporary English, covers almost every topic you can think of and is
written by lots of people. There are _lots_ of articles, licensed to be freely
used. Best of all, there’s a “random article” feature!

All I needed to do was to download lots of articles. I made a script called
[wikipedia-gather] to automate it.

[“Other data”]: #other-data

Analyzing the data and analyzing keyboard layouts
-------------------------------------------------

There are lots of different keyboard layout analyzers, for example [one by
Patrick Gillespie][patorjk]. This particular one lets you use your own text
corpus, which meant that I could use my Wikipedia text. However, that analyzer
(as well as many others) measures things I’m interested in. I want to focus on
same finger usage and rolls. So ultimately, I created my own tools:
[text-frequencies-analysis], as well as the scripts in this repository. See
the [readme] for details on how to use them.

[patorjk]: http://patorjk.com/keyboard-layout-analyzer/
[readme]: readme.md

Maltron rocks
-------------

With the help of my tools I finished two new variants of ranshtio, and I was
pretty happy with them.

Just for fun, I started to run other layouts as well though my analyzer. I was
shocked as I tried the Maltron layout. It was actually better than mine! Both
less same finger usage _and_ more rolls!

I realized that I can probably do better. Again, what I had done wrong was to be
tempted by aesthetically pleasing symmetry.

The most important adjustment needed was to get rid of the worst same finger
pair: AU.

    > layout(layouts.ranshtio2).sameFinger.slice(0, 5)
    [ [ 'au', 0.3039427205563248 ],
      [ 'cs', 0.23447453238288302 ],
      [ 'hp', 0.11070684269412427 ],
      [ 'nw', 0.11030596521211074 ],
      [ 'ln', 0.06022214302377488 ] ]

I also needed to get more rolls from the home row.

Backtracking
------------

I returned to this state:

    aaaaa aaaa·
    vaaaa aaaav
    ··aaa aaa··

       E   ␣

This time I’ve marked where I need to put vowels with “v”. One of them has to be
A; that’s the only way of getting rid of AU.

Logical data-backed choices
---------------------------

I started looking for the best possible home row. I already knew _which_ letters
to place there, but not _in what order_ (apart from some of the vowel-protecting
business). It might, at first, seem like you don’t need to think about same
finger usage (and can concentrate solely on rolls) when laying out keys on a
_row,_ but in fact you do, because the index fingers have twice as many keys to
operate due to the center columns. Therefore it is a good idea, if possible, to
choose less common letters for the index fingers. That’s S and H:

    > filter(relative(filter(chars, /[a-z]/)), /[ahinorst]/)
    [ [ 'a', 8.936668720347656 ],
      [ 't', 8.372263304218912 ],
      [ 'i', 7.662823579152817 ],
      [ 'n', 7.504821827844436 ],
      [ 'o', 7.320885191794002 ],
      [ 'r', 6.712008484929269 ],
      [ 's', 6.5945375302410305 ],
      [ 'h', 4.56730409185131 ] ]

One thing I noticed was that H only forms a good roll together with T:

    > filter(relative(pairs), /h/, /[ainorst]/)
    [ [ 'ht', 3.1143912946997787 ],
      [ 'ah', 0.7443648264407408 ],
      [ 'hi', 0.7014062782069035 ],
      [ 'ho', 0.4983682993328882 ],
      [ 'hs', 0.3962091990778266 ],
      [ 'hr', 0.11338366975144043 ],
      [ 'hn', 0.057972056511827956 ] ]

That’s yet a reason to put H on an index finger. The index fingers (as well as
the pinkies) can only be part of _one_ roll each, while the middle and ring
fingers can be part of _two_ rolls each (having other fingers on both sides).

Another thing I realized was that pairs consisting of two vowels are not as
common as pairs consisting of one vowel and one consonant. So avoiding having
two vowels beside each other would increase rolls.

From there I continued with trial and error. The top three results were:

    > homeRow("anis", "htor") // The best I could find.
    14.099003289264397
    > homeRow("anis", "htro") // anishtro
    13.661400257285752
    > homeRow("anis", "thor") // Maltron
    13.27476039164954

(As you can see, neither the finished anishtro nor Maltron chose the best
possible home row in terms of rolls. That’s because of same finger usage.)

(Another thing to notice is that mirroring the entire home row of course gives
the same results. I found it better to keep A in its QWERTY position and O on
the same hand as QWERTY.)

It might seem the easiest to just have gone with the Maltron layout at this
point, but Maltron does not follow my rating of the keys. Especially the
following keys are troublesome:

    ····· ···zl
    ····f d····
    ···j· ·k···

The less [common](data.md#letters) letters Z, J, and K have better rated
keys than the more [common](data.md#letters) F, D and L!

All of the three candidates has “anis” for the left side. Luckily, that means I
could place A on a pinky, to avoid AU. What should be done about I, though?
Until now, I had never considered putting a vowel on middle (or index) fingers,
since that would expose them to more letters, which would likely increase same
finger usage. In previous experiments I found that [IY is an uncommon
pair](data.md#iy), so placing Y either above or below I should be a good idea.
Then there was one key left in that IY column to fill.

There was also the question where to put U. Wherever I’d put it, I’d have to
combine it with one of the home row keys. A was not a candidate (because of AU)
and neither was O (because of OU in “you”). That leaves N, I, S, H, T and R.
Let’s see which one is the best to combine with:

    > filter(relative(pairs), /u/, /[nishtr]/)
    [ [ 'su', 0.7011735106367021 ],
      [ 'ru', 0.6638789732777657 ],
      [ 'nu', 0.6030361167334537 ],
      [ 'tu', 0.5794360714213668 ],
      [ 'iu', 0.13753977092567524 ],
      [ 'hu', 0.09840895606848332 ] ]

The best choice is obviously H, which is also what Maltron chose. However, I was
planning to put H on the right index finger (as opposed to Maltron which put it
on the right _middle_ finger). Putting U on the index finger would expose it to
the entire middle column as well, which would introduce bad same finger usages
with _those_ keys. That’s why it is very uncommon to place vowels on index
fingers in keyboard layouts (QWERTY being the exception, but how that layout
really was designed is a bit of a mystery).

The next best choice would be IU. Let’s see how that’d work:

    > filter(relative(pairs), /[iuy]{2}/)
    [ [ 'iu', 0.13753977092567524 ],
      [ 'iy', 0.032070198561082605 ],
      [ 'uy', 0.018233459665776802 ] ]

Splendid! Combining those three characters seems like a great option! It also
has the nice effect of getting rid of all vowels. It also feels good to see that
the Arensito combines those three as well.

It surprised me that UY is so uncommon, since I could instantly think of two
common words including that pair: “buy” and “guy.” They seem to be the _only_
common [words with UY](data.md#uy) in them, though. At the same time I was also
surprised that [IU was more common](data.md#iu), becuse in that case I had a
harder time thinking of words. This was yet an example of how you need data to
determine how common pairs of letters are.

The above meant that “anis” was a possible arrangement for the left hand side of
the home row. For the right side, only one of the candidates put O on a
pinky—“htro”. Being the second best choice in terms of rolls, that was an easy
choice. Getting a high roll count at the same time as putting the O where it is
protected by two punctuation characters is a great combination.

An updated layout diagram (uppercase indicating letters placed for sure, except
U and Y which might swap places with each other):

    aaUaa aaaa·
    ANISa aHTRO
    ··Yaa aaa··

       E   ␣

After some trial and error back and forth, I made an interesting find: C is
especially difficult to combine with the already positioned letters:

    > filter(relative(pairs), /c/, /[nshtr]/)
    [ [ 'ch', 0.6950568961530762 ],
      [ 'ct', 0.4325726661559574 ],
      [ 'cn', 0.389264966566818 ],
      [ 'cr', 0.31493452248250237 ],
      [ 'cs', 0.23447453238288302 ] ]

None of those are particularly good. I could either go back and try to change
the home row, or just accept that this would be the first compromise of the
layout. Looking at Maltron, Arensito and Colemak and seeing that they all had
both C and S on the same finger, it felt like the best way to go. C had to be
placed either above or below S.

I continued with the worst rated empty keys, marked with “b”s here (the C is
placed above S for now):

    baUCb baaa·
    ANISb bHTRO
    ··Yab baa··

       E   ␣

V, K, J, X, Z, and Q as well as either B or W were good candidates for those
seven keys:

    > filter(relative(filter(chars, /[a-z]/)), /[bdfgjklmpqvwxz]/)
    [ [ 'l', 4.2676556502714975 ],
      [ 'd', 3.8888756533856936 ],
      [ 'm', 2.6481929869055976 ],
      [ 'f', 2.2397487090609554 ],
      [ 'p', 2.0927240485038636 ],
      [ 'g', 2.005379779696222 ],
      [ 'b', 1.6412258515312288 ],
      [ 'w', 1.613250353764896 ],
      [ 'v', 1.06569256043758 ],
      [ 'k', 0.7641442377661982 ],
      [ 'j', 0.26543047736975234 ],
      [ 'x', 0.19713528088234097 ],
      [ 'z', 0.1722558856356022 ],
      [ 'q', 0.09768806586174034 ] ]

After some more fiddling around, I made another discovery: R is a bit
difficult to combine with the remaining letters:

    > filter(relative(pairs), /r/, /[bdfgjklmpqvwxz]/)
    [ [ 'pr', 0.4629746971305966 ],
      [ 'dr', 0.34318991919861747 ],
      [ 'gr', 0.33793971733740796 ],
      [ 'fr', 0.27553214546007543 ],
      [ 'br', 0.20448631042193519 ],
      [ 'mr', 0.1994430130675714 ],
      [ 'kr', 0.1459711295796373 ],
      [ 'lr', 0.12900496001829034 ],
      [ 'rv', 0.07643828374780617 ],
      [ 'rw', 0.054053802413437615 ],
      [ 'rz', 0.007901165855169949 ],
      [ 'jr', 0.004732940594095256 ],
      [ 'qr', 0.0019526612833562391 ],
      [ 'rx', 0.000827618027382777 ] ]

As opposed to the other letters in the home row, R can only be combined with one
of the uncommon letters in order not to introduce too much same finger usage. At
the same time I didn’t want to waste that pretty well-rated key above R on an
uncommon letter, so I chose the the most common of them: W. Besides, W had to be
combined with _some_ of the home keys anyway, and R is actually the best choice:

    > filter(relative(pairs), /w/, /[nshtr]/)
    [ [ 'hw', 0.25737627498436577 ],
      [ 'nw', 0.11030596521211074 ],
      [ 'tw', 0.09908139571573184 ],
      [ 'sw', 0.06526544037813868 ],
      [ 'rw', 0.054053802413437615 ] ]

A notable same finger usage is of WR is different forms of the word “write:”

    > pairWords('rw').split(' ').slice(0,25).join(' ')
    'WRitten WRote WRiting foRWard WRiter WRestling noRWay otheRWise WRite
    afteRWards noRWegian songWRiter WRiters WRong laWRence WRight WRites WRoc
    WRitings WRestler playWRight WRestlers aiRWays beRWick undeRWent'

Of the least common keys left to distribute, which one was the best to combine
with A?

    > filter(relative(pairs), /a/, /[bjkqvxz]/)
    [ [ 'ab', 0.45800898896629993 ],
      [ 'av', 0.32888764516290886 ],
      [ 'ak', 0.193197083267167 ],
      [ 'aj', 0.1016159759245916 ],
      [ 'az', 0.07249416658606013 ],
      [ 'ax', 0.03993256982121899 ],
      [ 'aq', 0.007797713601747101 ] ]

Definitely Q. Let’s update the layout again:

    QaUCb baaW·
    ANISb bHTRO
    ··Yab baa··

       E   ␣

That means six more common keys to distribute: D, F, G, L, M and P.

The next discovery that took me forward was that the column with C and S, could
only be combined with F or G.

    > filter(relative(pairs), /[cs]/, /[dfglmp]/)
    [ [ 'ls', 0.24232397211134152 ],
      [ 'ps', 0.23336242065858737 ],
      [ 'cl', 0.20177068876958545 ],
      [ 'ms', 0.1338542843974863 ],
      [ 'ds', 0.12394873113224872 ],
      [ 'gs', 0.059433319591425664 ],
      [ 'fs', 0.025125966050073993 ],
      [ 'cm', 0.019332639858394556 ],
      [ 'cd', 0.016448908294232692 ],
      [ 'cp', 0.006077819888592268 ],
      [ 'cf', 0.005263133392887347 ],
      [ 'cg', 0.005107955012753076 ] ]

Out of the remaining less common letters I wanted to place the most common of
those, B and V, in the best of the worse ranked spots: On the index fingers in
the middle column, in some order. The home row would either be “anisVBhtro” or
“anisBVhtro.”

From there on it was hard to find concrete ways to go forward. After lots of
trial and error I ended up with this arrangement:

    QLUCb bPMW·
    ANISV BHTRO
    ··YGb bFD··

       E   ␣

Remember how I wasn’t sure if C should go above or below S, and that I might
swap U and Y? It is possible swap to letters of the same column between the top
and bottom row without changing same finger usage, which let me freely choose
the order based on rolls:

    > filter(relative(pairs), /u/, /[cg]/)
    [ [ 'cu', 0.3046927493936405 ],
      [ 'gu', 0.2515570857293306 ] ]
    > filter(relative(pairs), /y/, /[cg]/)
    [ [ 'cy', 0.055450407834646054 ],
      [ 'gy', 0.030324441784572064 ] ]
    > filter(relative(pairs), /l/, /[uy]/)
    [ [ 'lu', 0.408015687499709 ],
      [ 'ly', 0.3773550258915127 ] ]

Not a huge difference, but CU plus GY is a tiny bit more common than GU plus CY.
LU is a little bit more common than LY, so putting CU on top was the best
decision. ([Both C and U are also more common than G and Y](data.md#letters),
which is nice as they got the higher rated keys):

For the right hand:

    > filter(relative(pairs), /p/, /[md]/)
    [ [ 'mp', 0.23307792696167454 ],
      [ 'dp', 0.007784782070069245 ] ]
    > filter(relative(pairs), /f/, /[md]/)
    [ [ 'df', 0.009621059568324783 ],
      [ 'fm', 0.007125273954498594 ] ]

Here it is obvious that the combinaton including MP should be used.

In retrospect I realize that I should have swapped P and M with F and D. The
latter two are together more common than the former two. DW is also more common
than MW:

    > sumTuples(filter(relative(filter(chars, /[a-z]/)), /[df]/))
    6.128624362446649
    > sumTuples(filter(relative(filter(chars, /[a-z]/)), /[mp]/))
    4.740917035409462
    > filter(relative(pairs), /w/, /[md]/)
    [ [ 'dw', 0.01842743264094464 ],
      [ 'mw', 0.0034527189579875227 ] ]

The only thing left to position was JKXZ, which was easy:

    > filter(relative(pairs), /[csgv]/, /[jkxz]/)
    [ [ 'ck', 0.169687558676825 ],
      [ 'ks', 0.118000226560435 ],
      [ 'cx', 0.017354115511682606 ],
      [ 'cz', 0.0061683406103372595 ],
      [ 'sz', 0.005741600064968016 ],
      [ 'gk', 0.005043297354363797 ],
      [ 'js', 0.0020302504734233747 ],
      [ 'kv', 0.0015647153330205627 ],
      [ 'gz', 0.0013190162311413007 ],
      [ 'cj', 0.00094400181248348 ],
      [ 'vx', 0.000827618027382777 ],
      [ 'gj', 0.0007241657739599298 ],
      [ 'sx', 0.000711234242282074 ],
      [ 'jv', 0.0005560558621478033 ],
      [ 'vz', 0.00046553514040281204 ],
      [ 'gx', 0.00034915135530210904 ] ]
    > filter(relative(pairs), /[phfb]/, /[jkxz]/)
    [ [ 'px', 0.036247083293030065 ],
      [ 'hk', 0.020393025455978736 ],
      [ 'bj', 0.010202978493828297 ],
      [ 'hz', 0.006595081155706504 ],
      [ 'hx', 0.004991571227652374 ],
      [ 'fx', 0.003504445084698946 ],
      [ 'fk', 0.003310472109531108 ],
      [ 'kp', 0.0031811567927525486 ],
      [ 'bk', 0.003038909944296134 ],
      [ 'bz', 0.001875072093289104 ],
      [ 'jp', 0.0013319477628191568 ],
      [ 'bx', 0.0009569333441613358 ],
      [ 'hj', 0.0008922756857720563 ],
      [ 'pz', 0.0008793441540942005 ],
      [ 'fj', 0.0006336450522149386 ],
      [ 'fz', 0.0001551783801342707 ] ]

K is a really bad combination with both S and C, so it had to go on the right
side. J works well on the left side. PX better be avoided, so X went on the left
side. That left Z to the right side, and that works really well, too.

Placing the last keys meant a finished layout:

    qlucj kpmw·
    anisv bhtro
    ··ygx zfd··

       e   ·

I’ve used that layout for one and a half years, and I’ve never looked back.

anishtro2
---------

After those one and a half years of using the layout, I finally finished writing
this document. When doing so, something caught my eye in this diagram, copied
from above:

    QaUCb baaW·
    ANISb bHTRO
    ··Yab baa··

       E   ␣

That diagram is from when I had worked out that either F or G had to be placed
below S, and that I wanted the home row to be either “anisBVhtro” or
“anisVBHTRO.” When thinking about it, I realized that then there are “only” 480
ways to distribute the letters G, F, M, P, L and D on the keys marked with “a”s,
as well as B and V in the menitioned positions. That’s few enough that you can
let the computer generate and test them all in no time at all.

I wrote a little program that does that, and here is the result:

    > fuzz()
    { leastSameFinger:
       [ { sameFingerTotal: 0.8139623299309612,
           rollsTotal: 14.664809526297303,
           layout: ' qluc   dgw-  |  anisv bhtro  |  /?yf   pm., ' },
         { sameFingerTotal: 0.8139623299309612,
           rollsTotal: 14.662210288430053,
           layout: ' qluc   pmw-  |  anisv bhtro  |  /?yf   dg., ' },
         { sameFingerTotal: 0.8139623299309612,
           rollsTotal: 14.416524118082469,
           layout: ' qluc   pgw-  |  anisv bhtro  |  /?yf   dm., ' },
         { sameFingerTotal: 0.8139623299309612,
           rollsTotal: 14.41392488021522,
           layout: ' qluc   dmw-  |  anisv bhtro  |  /?yf   pg., ' } ],
      mostRolls:
       [ { sameFingerTotal: 2.0484063438990834,
           rollsTotal: 14.731277599121482,
           layout: ' qguc   dlw-  |  anisv bhtro  |  /?yf   pm., ' },
         { sameFingerTotal: 2.116710694221519,
           rollsTotal: 14.731277599121482,
           layout: ' qguc   dlw-  |  anisb vhtro  |  /?yf   pm., ' },
         { sameFingerTotal: 2.309558626133384,
           rollsTotal: 14.731277599121482,
           layout: ' qguc   dlw-  |  anisb vhtro  |  /?yf   mp., ' },
         { sameFingerTotal: 2.3884151063049486,
           rollsTotal: 14.731277599121482,
           layout: ' qguc   dlw-  |  anisv bhtro  |  /?yf   mp., ' } ] }

The ones with the most rolls are clearly not worth it when it comes to same
finger usage. The one with the most rolls out of the layouts with least same
finger usage only has a _tiny_ bit fewer rolls, making it the obvious winner.

That one is a tiny bit better than what I came up with, but not enough to be
worth re-learning, I think. For completeness sake I decided to create anishtro2
from it: A fully optimized layout. While at it, I took the liberty to make
another little change.

I moved Q above O, since [AQ is more common than OQ](data.md#aq-oq). The reason
I hadn’t done that from the beginnig is that the difference is so marginal that
I saw no point in re-learning the position of Q from the QWERTY.

The new layout:

    ·lucj kdgwq
    anisv bhtro
    ··yfx zpm··

       e   ·

Apart from the movement of Q, the change is that the following keys have moved:

    G → M → D
    ↑       ↓
    F   ←   P

Let’s see how the old and new layout compare:

| Layout    | Same finger | Rolls  |
| --------- | ----------: | -----: |
| anishtro  |       0.89% | 14.65% |
| anishtro2 |       0.88% | 14.66% |

I don’t think I’ll bother re-learning—the difference is too little to be worth
it. Besides, anishtro might turn out as the better one if I download new text to
analyze. Who knows.

Other data
----------

A short time after discovering anishtro2, I came across two really good data
sources, and decided to run my analyzer with that data and see what the
differences would be. I didn’t feel like re-checking everything from scratch,
but I made _some_ comparisons.

Both of them `fuzz()`ed out the same layout, although a different one
than anishtro2:

    ·pucj kldwq
    anisb vhtro
    ··yfz xmg··

       e   ·

Unlike anishtro2 compared to anishtro, B and V have swapped places, as well as X
and Z. Apart from D, F, G, M and P, this time L has also moved.

You may read more about these data sources and see more comparisons in the
[“Numbers”] section of the [readme].

[“Numbers”]: readme.md#numbers
[TECK]: https://www.trulyergonomic.com/store/index.php
[Arensito]: http://www.pvv.org/~hakonhal/main.cgi/keyboard
[Colemak]: http://colemak.com/
[Maltron]: http://www.maltron.com/keyboard-info/the-maltron-letter-layout-advantage
[proword]: http://mostergonomickeyboard.blogspot.se/2011/02/most-ergonomic-and-efficient-keyboard.html
[wikipedia-gather]: https://github.com/lydell/wikipedia-gather
[text-frequencies-analysis]: https://github.com/lydell/text-frequencies-analysis/
