# introduction of simplified japanese grammar

this document introduces the grammar of an artificial dialect created by the author based on both classical and modern japanese.

## phonology, orthography

- vowels: i, e, a, o, u
- consonants:
  - k, s, t, p
  - c, z, d, b
  - j, n, l, m, v

## nominative, conclusive, consonantal verb

```
neko aluk'.
    a cat walks.
```

| word | type          | meaning      |
| :--- | :------------ | :----------- |
| neko | noun          | cat          |
| aluk | verb          | walk         |
| '(l) | verbal suffix | (conclusive) |

- *nominative* (Nom)
  - is a case for subject.
  - has no postposition.
- *conclusive*
  - is a form of a verb used as a indicative predicate.
- in every sentence, the predicate is in the final position.
- for verbal suffixes,
  - let C, C0 and C1 be consonants. let V, V0 and V1 be vowels
  - C0'(C1)V becomes C0'V
  - V0'(V1)C becomes V0'C

## accusative

```
pito neko vo mi'l.
    a person sees a cat.
```

| word | type         | meaning      |
| :--- | :----------- | :----------- |
| pito | noun         | person       |
| mi   | verb         | look, see    |
| vo   | postposition | (accusative) |

- *accusative* (Acc)
  - is a case for direct object.
  - has a postposition `vo`.

## genitive

```
neko ca kove vo kik
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
ka va ca neko nal.
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
pito juk'az.
    a person does not go.
neko juk'am.
    a cat will go.
pito juk'in.
    a person has gone.
neko juk'ital.
    a cat is going.
```

| word    | type                 | meaning           |
| :------ | :------------------- | :---------------- |
| juk     | verb                 | go                |
| '(a)z   | verbal suffix & verb | not               |
| '(a)m   | verbal suffix & verb | will, may, let us |
| '(i)n   | verbal suffix & verb | did, have done    |
| '(i)tal | verbal suffix & verb | be doing          |

- `'am` can express various meaning. for example, `juk'am` can mean:
  - i will go (intention)
  - someone will go (inference)
  - let us go (suggestion)

## potential, obligative

```
pito sin'ubek-al.
    human must die.
pito tob'al'az.
    human can not fly.
```

| word       | type | meaning   |
| :--------- | :--- | :-------- |
| sin        | verb | die       |
| tob        | verb | fly, jump |
| '(u)bek-al | verb | must      |
| '(l)al     | verb | may, can  |

## dative, locative, ablative

```
neko pe esa vo jal.
    (someone) gives food to a cat.
ipe ni jok-al neko al.
    a good cat exists in a house.
ipe joli soto pe id.
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
miti ni juk'ital neko vo mi'n.
  i saw a cat going on a road.
```

| word | type | meaning |
| :--- | :--- | :------ |
| miti | noun | road    |

- to make a verb or a sentence qualify a noun, use a construction [conclusive × noun]

## conditional, rational, imperative

```
neko kul'aba pito vem.
    a person smiles if a cat comes.
neko kul'eba pito vem.
    a person smiles because a cat comes.
neko kul'ejo.
    o cat, come.
```

| word | type | meaning |
| :--- | :--- | :------ |
| kul  | verb | come    |
| vem  | verb | smile   |

| verbal suffix | meaning     |
| :------------ | :---------- |
| '(a)ba        | conditional |
| '(l)eba       | rational    |
| '(e)jo        | order, wish |

## compound, successive

```
neko tob'i kul.
    a cat comes jumping.
neko tob'ite kul
    a cat jumps then comes.
```

| verbal suffix | meaning    |
| :------------ | :--------- |
| '(i)          | compound   |
| '(i)te        | successive |

- *compound* is used to make a new meaning from two verbs.
  - `kup` eat
  - `vope` finish
  - `kup'i vope'l` finish eating
- *successive* is used to express a succession of multiple action.
  - `kup'ite kul` eat then come

## summary of verbal suffixes

|             | ip (say)   | mi (see)  |
| ----------: | :--------- | :-------- |
|  conclusive | ip         | mi'l      |
|    compound | ip'i       | mi        |
|  successive | ip'ite     | mi'te     |
|    negative | ip'az      | mi'z      |
|  volitional | ip'am      | mi'm      |
|  perfective | ip'in      | mi'n      |
| progressive | ip'ital    | mi'tal    |
|   potential | ip'al      | mi'lal    |
|  obligative | ip'ubek-al | mi'bek-al |
|    rational | ip'eba     | mi'leba   |
| conditional | ip'aba     | mi'ba     |
|  imperative | ip'ejo     | mi'jo     |

## translation

| en                      | SJa                        |
| :---------------------- | :------------------------- |
| i think, therefore i am | va omop'eba va al          |
| know yourself           | ono vo sil'ejo             |
| knowledge is power      | sil'in koto pa tikara nal  |
| remember that you die   | na sin'am koto vo oboj'ejo |