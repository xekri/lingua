# simplified japanese grammar

this document introduces the grammar of an artificial dialect made by the author based on classical and modern japanese.

## phonology, orthography

- vowels: i, e, a, o, u
- consonants:
  - k, s, t, p
  - c, z, d, b
  - j, n, l, m, v

|      | い    | え    | あ       | お    | う    | あ   | か   | が   | か゚  | さ   | ざ   | や   | た   | だ   | な   | ら   | は   | ば   | ま   | わ   |
| ---: | :---- | :---- | :------- | :---- | :---- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| latn | I     | E     | A        | O     | U     | Q    | K    | C    | G    | S    | Z    | J    | T    | D    | N    | L    | P    | B    | M    | V    |
| cyrl | И     | Є     | А        | О     | У     | Ҁ    | К    | Г    | Ӈ    | С    | З    | Й    | Т    | Д    | Н    | Л    | П    | Б    | М    | Ў    |
| hang | ㅣ ㅟ | ㅓ ㅝ | ㅑ ㅏ ㅘ | ㅛ ㅗ | ㅠ ㅜ |      | ㄱ   | ㄲ   | ㅇ   | ㅅ   | ㅆ   | ㅿ   | ㄷ   | ㄸ   | ㄴ   | ㄹ   | ㅂ   | ㅃ   | ㅁ   | ㅱ   |

## nominative, conclusive, consonantal verb

```
neko aluk u.
    a cat walks.
```

| word | type          | meaning      |
| :--- | :------------ | :----------- |
| neko | noun          | cat          |
| aluk | verb          | walk         |
| (l)u | verbal suffix | (conclusive) |

- *nominative* (Nom)
  - is a case for subject.
  - has no postposition.
- *conclusive*
  - is a form of a verb used as a indicative predicate.
- in every sentence, the predicate is in the final position.
- for verbal suffixes,
  - let C, C0 and C1 be consonants. let V, V0 and V1 be vowels
  - C0 (C1)V becomes C0 V
  - V0' (V1)C becomes V0'C

## accusative

```
pito neko vo mi'lu.
    a person sees a cat.
```

| word | type         | meaning      |
| :--- | :----------- | :----------- |
| pito | noun         | person       |
| mi'  | verb         | look, see    |
| vo   | postposition | (accusative) |

- *accusative* (Acc)
  - is a case for direct object.
  - has a postposition `vo`.

## genitive

```
neko ca kove vo kik u
  (some one) hears voice of a cat
```

| word | type         | meaning      |
| :--- | :----------- | :----------- |
| kove | noun         | voice        |
| kik  | verb         | listen, hear |
| ca   | postposition | (genitive)   |

- *genitive* (Gen)
  - is a form of a noun used to qualify another noun
  - means various meaning but the main one is posession.
  - has a postposition `ca`
- to make a noun qualify another, use a construction [Gen of qualifying × qualified].

## pronoun, copula

```
ka va ca neko nal u.
    it is my cat.
```

| word | type               | meaning |
| :--- | :----------------- | :------ |
| nal  | postposition, verb | be      |

| i    | thou | he, she, it | who, what | self  |
| :--- | :--- | :---------- | :-------- | :---- |
| *va* | *na* | *ka*        | *ta*      | *ono* |

- to link two nouns, use a construction [Nom × Nom × `nal`]

## negative, volition, perfect, progress

```
pito juk az u.
    a person does not go.
neko juk am u.
    a cat will go.
pito juk in u.
    a person has gone.
neko juk itel u.
    a cat is going.
```

| word   | type                 | meaning           |
| :----- | :------------------- | :---------------- |
| juk    | verb                 | go                |
| (a)z   | verbal suffix & verb | not               |
| (a)m   | verbal suffix & verb | will, may, let us |
| (i)n   | verbal suffix & verb | did, have done    |
| (i)tel | verbal suffix & verb | be doing          |

- `am` can express various meaning. for example, `juk am` can mean:
  - i will go (intention)
  - someone will go (inference)
  - let us go (suggestion)

## potential, obligative

```
pito tob al az u.
    human can not fly.
pito sin az al az.
    human must die.
```

| word  | type | meaning   |
| :---- | :--- | :-------- |
| sin   | verb | die       |
| tob   | verb | fly, jump |
| (l)al | verb | may, can  |

must = not may not

## dative, locative, ablative

```
neko pe esa vo jal u.
    (someone) gives food to a cat.
ipe ni jok-al neko al u.
    a good cat exists in a house.
ipe joli soto pe id u.
    (someone) goes out of a house.
```

| word   | type | meaning    |
| :----- | :--- | :--------- |
| jal    | verb | give, send |
| ipe    | noun | house      |
| jok-al | verb | be good    |
| id     | verb | exit       |

|           case | postposition | meaning             |
| -------------: | :----------- | :------------------ |
|   dative (Dat) | pe           | indirect object     |
| locative (Loc) | ni           | time-space position |
| ablative (Abl) | joli         | origin of action    |

## adjective

```
miti ni juk ital u neko vo mi'n u.
  i saw a cat going on a road.
```

| word | type | meaning |
| :--- | :--- | :------ |
| miti | noun | road    |

- to make a verb or a sentence qualify a noun, use a construction [conclusive × noun]

## conditional, rational, imperative

```
neko kul aba pito vem u.
    a person smiles if a cat comes.
neko kul eba pito vem u.
    a person smiles because a cat comes.
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
neko tob i kul u.
    a cat comes jumping.
neko tob ite kul u.
    a cat jumps then comes.
```

| verbal suffix | meaning    |
| :------------ | :--------- |
| (i)           | compound   |
| (i)te         | successive |

- *compound* is used to make a new meaning from two verbs.
  - `kup` eat
  - `vop` end
  - `kup i vop u` end eating
- *successive* is used to express a succession of multiple action.
  - `kup'ite kul` eat then come

## summary of verbal suffixes

|             |        | ip (say) | mi (see) |
| ----------: | :----- | :------- | :------- |
|    negative | (a)z   | ip az    | mi'z     |
|  volitional | (a)m   | ip am    | mi'm     |
|  perfective | (i)n   | ip in    | mi'n     |
| progressive | (i)tel | ip itel  | mi'tel   |
|   potential | (l)al  | ip al    | mi'lal   |
|   conlusive | (l)u   | ip u     | mi'lu    |
|    compound | (i)    | ip i     | mi       |
|  successive | (i)te  | ip ite   | mi'te    |
|    rational | (l)eba | ip eba   | mi'leba  |
| conditional | (a)ba  | ip aba   | mi'ba    |
|  imperative | (e)jo  | ip ejo   | mi'jo    |
|      gerund | (l)aku | ip aku   | mi'laku  |

## translation

| en                     | SJa                          |
| :--------------------- | :--------------------------- |
| i think therefore i am | va omop eba va al u          |
| know yourself          | ono vo sil ejo               |
| knowledge is power     | sil aku pa tikara nal u      |
| remember that you die  | na sin am u koto vo oboj ejo |
