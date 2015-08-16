Data
====

This file contains data to back claims in [readme.md]. See the [“Tools”] section
in that file, as well as [scripts/repl.js] for how to re-run the samples below.

[readme.md]: readme.md
[scripts/repl.js]: scripts/repl.js
[“Tools”]: readme.md#tools

<h3 id="aq-oq">
  AQ is a _tiny_ bit more common than OQ
</h3>

    > filter(relative(pairs), /aq|oq/)
    [ [ 'aq', 0.007797713601747101 ],
      [ 'oq', 0.002043182005101231 ] ]

<h3 id="analyzing-a-full-layout">
  Analyzing a full layout
</h3>

The layouts are defined in [scripts/layouts.js]. To analyze, for example, the
anishtro layout:

[scripts/layouts.js]: scripts/layouts.js

    > layout(layouts.anishtro)
    { sameFinger:
       [ [ 'cs', 0.23447453238288302 ],
         [ 'iu', 0.13753977092567524 ],
         [ 'hp', 0.11070684269412427 ],
         [ 'ln', 0.06022214302377488 ],
         [ 'gs', 0.059433319591425664 ],
         [ 'rw', 0.054053802413437615 ],
         [ 'iy', 0.032070198561082605 ],
         [ 'mt', 0.030789976924974875 ],
         [ 'dm', 0.024091443515845523 ],
         [ 'hk', 0.020393025455978736 ],
         [ 'uy', 0.018233459665776802 ],
         [ 'cx', 0.017354115511682606 ],
         [ 'bh', 0.014547973137587876 ],
         [ 'dt', 0.011405610939868895 ],
         [ 'sv', 0.01047454065906327 ],
         [ 'aq', 0.007797713601747101 ],
         [ 'hz', 0.006595081155706504 ],
         [ 'cg', 0.005107955012753076 ],
         [ 'bp', 0.004254473922014588 ],
         [ 'fk', 0.003310472109531108 ],
         [ 'kp', 0.0031811567927525486 ],
         [ 'fh', 0.0030518414759739903 ],
         [ 'bk', 0.003038909944296134 ],
         [ 'bf', 0.0028578685008061517 ],
         [ 'kz', 0.0024052648920811956 ],
         [ 'fp', 0.0021724973218797895 ],
         [ 'js', 0.0020302504734233747 ],
         [ 'cv', 0.0019655928150340953 ],
         [ 'bz', 0.001875072093289104 ],
         [ 'gv', 0.0013448792944970125 ],
         [ 'cj', 0.00094400181248348 ],
         [ 'pz', 0.0008793441540942005 ],
         [ 'vx', 0.000827618027382777 ],
         [ 'gj', 0.0007241657739599298 ],
         [ 'sx', 0.000711234242282074 ],
         [ 'jv', 0.0005560558621478033 ],
         [ 'jx', 0.0003620828869799649 ],
         [ 'gx', 0.00034915135530210904 ],
         [ 'fz', 0.0001551783801342707 ] ],
      rolls:
       [ [ 'ht', 3.1143912946997787 ],
         [ 'in', 3.0370736667978786 ],
         [ 'an', 2.7104361081469164 ],
         [ 'or', 2.2012958429263745 ],
         [ 'is', 1.7131951797457041 ],
         [ 'rt', 0.8850081649691014 ],
         [ 'lu', 0.408015687499709 ],
         [ 'cu', 0.3046927493936405 ],
         [ 'mp', 0.23307792696167454 ],
         [ 'gy', 0.030324441784572064 ],
         [ 'df', 0.009621059568324783 ],
         [ 'mw', 0.0034527189579875227 ] ],
      sameFingerTotal: 0.892288617303734,
      rollsTotal: 14.65058484145166 }

<h3 id="letters">
  The letters of the English alphabet, ordered by how common they are
</h3>

    > relative(filter(chars, /[a-z]/))
    [ [ 'e', 11.687867429715206 ],
      [ 'a', 8.936668720347656 ],
      [ 't', 8.372263304218912 ],
      [ 'i', 7.662823579152817 ],
      [ 'n', 7.504821827844436 ],
      [ 'o', 7.320885191794002 ],
      [ 'r', 6.712008484929269 ],
      [ 's', 6.5945375302410305 ],
      [ 'h', 4.56730409185131 ],
      [ 'l', 4.2676556502714975 ],
      [ 'd', 3.8888756533856936 ],
      [ 'c', 3.457311129453173 ],
      [ 'u', 2.6714640172070925 ],
      [ 'm', 2.6481929869055976 ],
      [ 'f', 2.2397487090609554 ],
      [ 'p', 2.0927240485038636 ],
      [ 'g', 2.005379779696222 ],
      [ 'b', 1.6412258515312288 ],
      [ 'w', 1.613250353764896 ],
      [ 'y', 1.552645152171931 ],
      [ 'v', 1.06569256043758 ],
      [ 'k', 0.7641442377661982 ],
      [ 'j', 0.26543047736975234 ],
      [ 'x', 0.19713528088234097 ],
      [ 'z', 0.1722558856356022 ],
      [ 'q', 0.09768806586174034 ] ]

<h3 id="iy">
  IY is uncommon
</h3>

    > filter(relative(pairs), /i/, /y/)
    [ [ 'iy', 0.032070198561082605 ] ]

Words containing YI are mostly verbs ending with “y” plus the “ing” suffix,
such as “saying:”

    > pairWords('iy').split(' ').filter(function(word){return /ing$/i.test(word)}).join(' ')
    'plaYIng saYIng flYIng trYIng qualifYIng studYIng carrYIng buYIng paYIng
    lYIng applYIng identifYIng varYIng bullYIng dYIng accompanYIng destroYIng
    displaYIng occupYIng staYIng underlYIng drYIng laYIng marrYIng emploYIng
    lobbYIng crYIng portraYIng denYIng YIelding satisfYIng tYIng enjoYIng
    praYIng relYIng supplYIng copYIng defYIng deploYIng outlYIng roleplaYIng
    YIng conveYIng implYIng vYIng certifYIng classifYIng decaYIng horrifYIng
    modifYIng overlaYIng parrYIng preYIng rallYIng straYIng unifYIng burYIng
    complYIng downplaYIng intensifYIng justifYIng quarrYIng relaYIng specifYIng
    spraYIng surveYIng testifYIng worrYIng betraYIng clarifYIng delaYIng
    dizzYIng embodYIng emptYIng ferrYIng glorifYIng jianYIng levYIng quantifYIng
    replYIng signifYIng spYIng acidifYIng anYIng beatbullYIng beixiaoYIng
    belYIng dairYIng disobeYIng falsifYIng fructifYIng frYIng gaolIYIng glorYIng
    holidaYIng magnifYIng multiplYIng notifYIng ogcbuYIng overlYIng parodYIng
    partYIng purifYIng putrefYIng simplifYIng solidifYIng splaYIng swaYIng
    tallYIng terrifYIng testilYIng unsatisfYIng unwearYIng unYIelding xiheYIng
    zhaoquanYIng'


There are also a bunch of really unusual words containing the pair:

    > pairWords('iy').split(' ').filter(function(word){return !/ing$/i.test(word)}).join(' ')
    'pinYIn shunYI mIYu YIeld YIu prIYa YIelded YIn bIYa YIddish ramataYIm rIYu
    YIelds YIg YI hasYIm izumIYa greYIsh IYan kamIYa lobbYIst maYI navoIY
    qadIYani rangrasIYa saYIngs YImou arzuIYeh essaYIst halilIYe mIYa mIYake
    mIYan dIY graYIsh muhammadIYah obarIYon rIYadh thanlYIn YItzhak abIYari
    aIYyaa chirupulIYur copYIst hintlIYan jabraYIl jadhuYIh krIYa kuangYIn kYI
    puthIYa puYI rehalIYa taIY YIteng yulIYa aalIYah adIYIah amamIYa amIYumi
    ashIYa asYIk ataYIm aYIa babYIsh baranYI chiaYI chIYoda chonglIYImti crYIn
    dIYa dmitrIY ercIYesspor geomYIdae gongYI ichinomIYa jayasurIYa kIYoshi
    kurIYama malvIYa mccarthYIsm mIYauchi mIYazaki nadaanIYaan novorossIYsk
    nurIYe nYI olimpIYskIY orIYa panaYIotis perIYanayaki pIYashiri prIYamani
    quoYIi ridanIYa rIYashi rIYaz rkIYe saYIt sergIYevo sirupulIYur sIYa sofIYa
    suprIYa therIYale tomboYIsh trotskYIst verkhnIY YIgal YIvo yorIYasu yuanYI
    yurIY aamaruvIYappan adhinIYam aganYIn ahmadIYya aIYegbeni akIYama akIYo
    alIYah alIYev alophomYIa aponaptrIYa arabIYum arIYasu armyanskIY avihaYIl
    aYIokambos azizIYe badzheyskIYe baileYI baiomYIni baIYun balIYe bamIYan
    baYIlvan beIYzid bharathIYa bharatIYa bIYogh bIYori blepharomYIa boYIsh
    boYIta callawaYIn caluromYInae canendIY capromYIdae chaIYo chaoYIn chenYI
    cherukallaYI chettIYar chongYI chouYIn congYI ctenomYIdae davetIYe davYI
    deviprIYathird dinomYIdae dIYana dIYarbak dYIn echimYId echimYIdae eizarIYa
    elIYahu erinnYIs erquprIYa fujIYama fujIYoshida gennadIY geoffroYI
    gratifYIngly graYI graYIa greenshunYI gunaprIYadharmapatni haaYIn haIY
    haIYong hajIYev harbIYei harbIYya hertzlIYah herzlIYa hibIYa hIYama hIYe
    hobbYIsts hoseynIYeh hsanIYe ilIYan ilYIch imtIYaz islamIYah islamIYat IYapd
    IYer IYua jatIYo jIY jIYao jnanakIYa junYI kaavIYa kaliuzhnIY kalIYa kalIYur
    kanYIragwa kasIYIl kaspIYsk katsIYannis katsIYIannis keffIYeh kerenYI keYId
    kilIYana kilIYe kIYohime kIYoku kIYomi kIYomoto krIYananda ksahtrIYa kubinYI
    kulIYat kYIv ladanYI lavrentIY lIYakat mandIY marIYa marutvatIYa maskelIYa
    mIYahira mIYako mIYamotois mIYamura mIYata mIYazak mIYazawa mIYori mIYota
    mnYIka mwIYawamatende mYInt mYIophobus nafYIsh naharIYa nahIYa nandIYa
    naraYIv naYIri nedorazumenIYe nemunuIYeh newshunYI nishIYatsushiro nIY
    nIYodo nizhnYI norIYasu norIYo novgorodskIY nurgalIYevich nzeYI omIYa
    organizatsIYa orithYIa owshIYan partYIsntover pawiIY pcIYra peIYan perIYa
    pIYarangsit pIYush plaYInginfog podozranIYami polemicheskIYe premaYIl
    prIYadharshini prIYamvadha prIYananda prIYank prIYanka prokofIYevich
    qadisIYyah qadIYanis rashtrIYa ratIYa rezvanIYeh rhegYI rowdYIsm ruqaIYa
    russkIY sadIYa sagdIYev sanaYI saYIgh sayYId seIYuu seYIn shahanshahIYe
    shaoYI shIYuan sIY sIYahu sIYum somaIYa sorIYa spipIYus strYI suYIn
    szechenYI taIYo tamIYa tanfidzIYah tenYImia tenYImias territorIY
    thryonomYIdae thuraIYur tIYl tolkappIYam toshIYa troitskIY trotskYIsts
    tsubakIYama tughIYa tylomYInae uchIYama umumIYe upravlenIYe vazhkaIYIl
    venIYan venkitanarayanaIYer viharIYa vserossIYskaya weIYue weldIYa wenYI
    yeghiaYIan YIbin YIdukou YIed YIfat YIngcai YInskoye YInxu YIooken YIrs
    YIshuv YIsrael YIt YItzchak YIwu YIYang YIzhuang YIzong ymIYmah yukIYa
    zakarIYa zhaoYI'

<h3 id="au">
  AU is a bit more common than IY
</h3>

    > filter(relative(pairs), /a/, /u/)
    [ [ 'au', 0.3039427205563248 ] ]
    > pairWords('au').split(' ').slice(0, 100).join(' ')
    'janUAry AUgust becAUse febrUAry langUAge AUstralia AUstralian pAUl
    eventUAlly usUAlly dAUghter sqUAre individUAl AUthor annUAl AUthority
    sqUAdron cAUsed lAUnched qUAlity langUAges AUdio individUAls sitUAted
    gradUAted actUAlly cAUse AUstria gradUAte sitUAtion qUArter AUthorities
    gUArd headqUArters tAUght AUdience visUAl AUstrian jUAn beAUtiful actUAl
    bureAU eqUAl cAUght cAUses sqUAd AUstin cAUsing lAUnch dAUghters qUAlified
    qUArterback disambigUAtion beAUty AUtonomous AUdit AUthors annUAlly sexUAl
    sAUdi dUAl qUAlifying unusUAl spiritUAl pAUlo intellectUAl hanAU lithUAnia
    renAUlt gradUAting restAUrant gradUAlly headqUArtered valUAble assAUlt
    AUtomobile manUAl usUAl gUArdian mAUrice sAUk yUAn AUtomatic ecUAdor
    lithUAnian AU evalUAtion qUArterly drAUghts qUArtet sitUAtions AUdiences
    AUtomatically obitUAry vanUAtu gUArds qUAlify AUckland eqUAlity gAUge'

<h3 id="uy">
  UY is uncommon
</h3>

This only common words seem to be “buy” and “guy”.

    > filter(relative(pairs), /u/, /y/)
    [ [ 'uy', 0.018233459665776802 ] ]
    > pairWords('uy')
    'gUYver gUY bUY YUgoslavia YUan YUuichi YU bUYing YUgoslav miYU rUYs lapUYan
    gUYs YUhuan dupUY gUYot chanYU gUYana ngUY YUkino tetsUYa masYUmi riYU
    hYUndai kazUYa schUYler UYl YUkon YUri bUYers litUYa nYUngar rYUichi YUme
    YUng brUYning bUYer kikUYU kUYavian rYU YUji YUuki geldenhUYs saYUri shUYU
    tokYU wenYUan YUki YUn YUnnan YUsuf gUYenne gUYvers kakYUusei katYUsha
    pantYUkhov shibUYa tatsUYa YUcat YUeyang YUh YUk YUke YUkihiro YUko YUle
    YUnus aYUntamiento bUYout bUYs bYU cheqUY chirupuliYUr elhUYar fYUmancho
    harguindegUY hUYgen jadhUYih kohgilUYeh kozlukUYU lusagYUgh orYUr pUYi
    schUYlkill takaYUki torYU UYezd YUanxin YUbeshi YUe YUen YUkariko YUkikazu
    YUkio YUliya YUma YUrzinov YUshi YUzuki amiYUmi aYUrvedic azurdUY birYUkov
    boUYgues brachYUra caYUse cUYUna dUY dUYshebaev fayYUm grUYs grUYter
    guangYUn gUYanese hiroYUki houshaYU hUYck hUYnen jonghYUn kenYU koduvaYUr
    koUYoumdjian kYUn kYUshu mUY mUYbridge nanYUki nYU otUYo oUYang praYUrasakdi
    rYUkYU rYUn rYUtsu salambUYan shanYU sirupuliYUr taoYUan trYUmf tUY UYesaka
    vaYU velikoustYUgsky wisegUY YUans YUanyi YUcatan YUeyanglou YUfu YUga YUi
    YUichi YUkana YUletide YUlman YUmi YUnzhong YUrcak YUriy YUsra YUuchi
    YUuwaku YUxian zongYU akYUrt anusUYa arabiYUm aYU aYUb aYUmi baiYUn benYUs
    boUYer bUYouts bUYUng bYUng camUY caYUa caYUcas chengYUn chikYUu choUYin
    chUY crUYwagen cUYahoga derinkUYU dmanYUrdu dupUYtren dUYUng dUYvil eikYUu
    faYUn frelinghUYsen fukUYama fUYang fUYU fUYUan fUYUshiba goUYen guangYUan
    gUYancourt gUYotat gUYots gUYra gUYton gyadYUk gYU gYUla gYUrgich haklUYt
    hanYU harerUYa hengYUan hUY hUYn hYUk hYUn hYUndae inUYasha iYUa jaYUYa
    jYUtping kagUYa kagYU kalapUYa kaliYUr kashUYana katsUYama kazUYoshi
    kazUYUki kelYUdvarhely kinrYU kirYUu kitakYUshu kokUYou krYUkov kUYavia
    kUYtun kUYUbi kUYvashev kyorYU kyourYUujidai kYU kYUnghyang kYUstendil
    labrUYere lepUYan liangYU lusaghYUgh lusagYUkh lYUbertsy lYUbov
    maguindanaolapUYan magUY manaYUnk marYU matsUYama maYUmi maYUranathar
    meeraYUde meYUhas mitsUYa mUYe mUYejebo mUYo naoYUki naUYoma neznaYUshchihk
    ngUYen ngUYens nobUYoshi nobUYUki nYUngars ogcbUYing okUYama patsYUkov paUY
    pavlYUchenkova piYUsh polYUrethane praYUrsak pUY qayYUm rangsitpraYUrasak
    rUY rUYsplantsoen rYUhaku rYUnosuke rYUroh rYUta rYUuketsu seiYUu semyoYU
    shenYU shiYUan shUY siYUm slUYs slUYter spipiYUs spUYten suraYUd sUYa sUYama
    sUYin sYUnik sYUriah takUYa thuraiYUr trYUmph tsUYoshi tsUYUri tUYa tYUmen
    tYUnina UYarsky UYs velaYUdham vidYU vUYk wangYUn weiYUe xiduoYU yacUY
    yanYUan yongYUe YUanhong YUanYUan YUba YUcatanensis YUcatanica YUcca YUchi
    YUddham YUdhoyono YUdoko YUfuin YUg YUgendren YUggera YUgo YUgoslavian YUgur
    YUjing YUkari YUkawa YUkie YUkiko YUkiya YUl YUlong YUlung YUmiko YUnan
    YUnchuan YUnesabad YUngas YUngay YUngping YUnis YUny YUppie YUr YUrchenko
    YUriev YUrii YUrman YUrYUzan YUsa YUsai YUsefabad YUshu YUsif YUsri YUssof
    YUsupov YUtang YUubae YUuka YUvarlak YUxi YUzhin YUzhou YUzhouzhen YUzu
    zhanYUan zYUranger'

<h3 id="iu">
  IU is uncommon a _bit_ more common than UY
</h3>

    > filter(relative(pairs), /i/, /u/)
    [ [ 'iu', 0.13753977092567524 ] ]
    > pairWords('iu').split(' ').slice(0,100).join(' ')
    'bUIlt bUIlding stadIUm gUItar loUIs reqUIred bUIldings gUIde acqUIred
    qUIckly circUIt eqUIpment qUIte bUIld loUIsiana distingUIshed reqUIrements
    eqUIvalent medIUm reqUIres lUIs sUIcide frUIt gUItarist trIUmph qUIntilian
    continUIng crUIser loUIse belgIUm reqUIre eqUIpped gUItars gUIlty
    battlecrUIsers cUIsine qUIck rebUIlt sportatorIUm sUIt pursUIt sUIte gUInea
    yuUIchi crUIsers rUIns qUIto acqUIsition reqUIring sUItable tUItion IUcn
    circUIts gUIdance eqUIty gUIded mcgUInn pengUIn acqUIre liqUId lIU julIUs
    lingUIstic loUIsville lawsUIt recrUIted argUIng flUId inqUIry qUIt
    shipbUIlding cIUdad crUIse gUIdelines hUI nlIU qUIet distingUIsh frUIts
    issUIng uranIUm gIUseppe millennIUm symposIUm bUIlder continUIty gUIld
    lingUIstics reqUIrement sUIted ensUIng pIUs pursUIng qUIncy gUIllermo qUInn
    acqUIring consortIUm cUIsines gUIdes'
