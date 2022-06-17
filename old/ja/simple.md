in þis document, i use no article.

# simplified japanese grammar

þis document introduceþ grammar of *simplified japanese* (SJa).
it is artificial dialect which auþor made, based on classical and modern japanese.

## orþography

- vowels: i, e, a, o, u
- consonants:
  - q
  - k, s, t, p
  - c, z, d, b
  - j, n, l, m, v

|      | い   | え   | あ   | お   | う   | ∅    | か   | が   | か゚  | さ   | ざ   | や   | た   | だ   | な   | ら   | は   | ば   | ま   | わ   |
| ---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| latn | I    | E    | A    | O    | U    | Q    | K    | C    | G    | S    | Z    | J    | T    | D    | N    | L    | P    | B    | M    | V    |

## nominative, accusative, conclusive, consonantal verb, vocalic verb

```
neko qajum.
    cat walks.
pito neko vo mi'l.
    person seeþ cat.
```

| word  | type         | meaning      |
| :---- | :----------- | :----------- |
| neko  | noun         | cat          |
| qajum | verb         | walk         |
| pito  | noun         | person       |
| miq   | verb         | look, see    |
| vo    | postposition | (accusative) |
| '(l)  | auxiliary    | (conclusive) |

- *nominative* (Nom)
  - is case for subject.
  - requireþ zero nominal suffix.
- *accusative* (Acc)
  - is case for direct object.
  - requireþ nominal suffix `vo`.
- every sentence haþ one predicate in its final position.
- every verb endeþ in consonant letter.
- *conlusive*
  - is verbal form used as predicate and nominal modifer.
  - coclusive of Q-terminated verb `{x}q` is `{x}'l`
- nominal modifer comeþ before noun which it modifieþ.

## genitive

```
neko ca kove vo kik
  (some one) heareþ voice of cat
```

| word | type           | meaning      |
| :--- | :------------- | :----------- |
| kove | noun           | voice        |
| kik  | verb           | listen, hear |
| ca   | nominal suffix | (genitive)   |

- *genitive* (Gen)
  - is nominal form for nominal modifier.
  - meaneþ various meaning but main one is posession.
  - requireþ nominal suffix `ca`

## pronoun, copula

```
ka va ca neko nal.
    it is cat of me.
```

| word | type                 | meaning |
| :--- | :------------------- | :------ |
| nal  | nominal sufiix, verb | be      |

| i    | þou  | he, she, it | who, what | self  |
| :--- | :--- | :---------- | :-------- | :---- |
| *va* | *na* | *ka*        | *ta*      | *ono* |

- `nal` changeþ noun to verb meaning ‹to be {noun}›.

## negative, volition, perfect, progress

```
pito juk az.
    person doþ not go.
neko juk am.
    cat will go.
pito juk in.
    person haþ gone.
neko juk itel.
    cat is going.
```

| word   | type                 | meaning           |
| :----- | :------------------- | :---------------- |
| juk    | verb                 | go                |
| (a)z   | verbal suffix & verb | not               |
| (a)m   | verbal suffix & verb | will, may, let us |
| (i)n   | verbal suffix & verb | did, have done    |
| (i)tel | verbal suffix & verb | be doing          |

- initial vowel of verbal suffix dropeþ after vocalic verb
  - `miq`+`(a)z`=`mi'z`
- `am` may express various meaning. for example, `juk am` can mean:
  - i shall go (intention)
  - someone shall go (inference)
  - let us go (suggestion)

## potential, obligative

```
pito tob al az.
    human can not fly.
pito sin az al az.
    human must die .
```

| word  | type | meaning   |
| :---- | :--- | :-------- |
| sin   | verb | die       |
| tob   | verb | fly, jump |
| (l)al | verb | may, can  |

- must = not may not
- initial consonant of verbal suffix dropeþ after consonantal verb

## dative, locative, ablative

```
neko pe esa vo jal.
    (someone) giveþ food to cat.
qipe ni jok-al neko qal.
    good cat is in house.
qipe joli soto pe qid.
    (someone) goþ out of house.
```

| word   | type | meaning    |
| :----- | :--- | :--------- |
| jal    | verb | give, send |
| qipe   | noun | house      |
| jok-al | verb | be good    |
| qid    | verb | exit       |

|           case | postposition | meaning             |
| -------------: | :----------- | :------------------ |
|   dative (Dat) | pe           | indirect object     |
| locative (Loc) | ni           | time-space position |
| ablative (Abl) | joli         | origin of action    |

## modify by clause

```
miti ni juk itel neko vo mi'n.
  i saw cat which was going on road.
```

| word | type | meaning |
| :--- | :--- | :------ |
| miti | noun | road    |

## conditional, rational, imperative

```
neko kul aba pito vem.
    person smileþ if cat comes.
neko kul eba pito vem.
    person smileþ because cat comes.
neko kul ejo.
    o cat, come.
```

| word | type | meaning |
| :--- | :--- | :------ |
| kul  | verb | come    |
| vem  | verb | smile   |

| verbal suffix | meaning     |
| :------------ | :---------- |
| (a)ba         | conditional |
| (l)eba        | rational    |
| (e)jo         | order, wish |

## compound, successive

```
neko tob i kul.
    cat comesþ jumping.
neko tob ite kul.
    cat jumpeþ þen comes.
```

| verbal suffix | meaning    |
| :------------ | :--------- |
| (i)           | compound   |
| (i)te         | successive |

- *compound* is used to make new meaning from two verbs.
  - `kup` eat
  - `vop` end
  - `kup i vop` end eating
- *successive* is used to express succession of multiple action.
  - `kup'ite kul` eat þen come

## summary of verbal suffixes

|             |        | qip (say) | miq (see) |
| ----------: | :----- | :-------- | :-------- |
|   conlusive | (l)u   | qip       | mi'l      |
|    negative | (a)z   | qip az    | mi'z      |
|  volitional | (a)m   | qip am    | mi'm      |
|  perfective | (i)n   | qip in    | mi'n      |
| progressive | (i)tel | qip itel  | mi'tel    |
|   potential | (l)al  | qip al    | mi'lal    |
|    compound | (i)    | qip i     | mi        |
|  successive | (i)te  | qip ite   | mi'te     |
|    rational | (l)eba | qip eba   | mi'leba   |
| conditional | (a)ba  | qip aba   | mi'ba     |
|  imperative | (e)jo  | qip ejo   | mi'jo     |
|      gerund | (l)aku | qip aku   | mi'laku   |

## translation

| en                   | SJa                         |
| :------------------- | :-------------------------- |
| i þink þerefore i am | va qomop eba va al          |
| know yourself        | qono vo sil ejo             |
| knowledge is power   | sil aku pa tikara nal       |
| remember þat you die | na sin am koto vo qoboj ejo |

## vocabulary

| word  | character | meaning         | synonym                   |
| :---- | :-------- | :-------------- | :------------------------ |
| s     | 爲        | do              |                           |
| qal   | 在        | exist           |                           |
| juk   | 往        | go              |                           |
| qajum | 步        | walk            | asi nite juk (go on foot) |
| qik   | 生        | live            |                           |
| sin   | 死        | die             | ik i vop (finish living)  |
| pazim | 始        | begin (oneself) |                           |
| vop   | 終        | end (oneself)   |                           |
| konom | 好        | like            |                           |
| kilap | 惡        | dislike         |                           |
| miq   | 見        | see, look       |                           |
| kik   | 聞        | hear, listen    |                           |
| pul   | 觸        | touch           |                           |
| qap   | 會        | meet, match     |                           |
| panal | 離        | leave           |                           |
| qos   | 押        | push            |                           |
| pik   | 引        | pull            | saka-qak (counter-open)   |
| qak   | 開        | open (oneself)  |                           |
| tod   | 閉        | close (oneself) |                           |
