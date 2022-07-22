import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
## ヘボン式を滅ぼす會 (society for abolishing hepburn-romanisation)

ヘボン式を滅ぼす會 (society for abolishing hepburn-romanisation) とは, 非合理的で不規則なヘボン式ローマ字を廢しより良いローマ字の普及するを願ふ會である.

### 會員
- sumi (2022-07-21)

### ヘボン式の缺陷

#### サ行やタ行の例外表記

ヘボン式には規則の例外であり暗記せざるを得ないを強いる綴りが有る (以下太字).

- さ し す せ そ: sa **shi** su se so
- しゃ しゅ しょ: **sha shu sho**
- じゃ じゅ じょ: **ja ju jo**
- た ち つ て と: ta **chi tsu** te to
- ちゃ ちゅ ちょ: **cha chu cho**
- は ひ ふ へ ほ: ha hi **fu** he ho
  - c は他に一度も登場しないのに何故か ch と綴る.

訓令式ならばこれらは規則通りに綴らる.

- sa si su se so
- sya syu syo
- zya zyu zyo
- ta ti tu te to
- tya tyu tyo
- ha hi hu he ho

#### 同綴異音

異なる音または現在は同じ音だが歷史的には區別される表記がヘボン式では同一となる場合が有る.

- あ ああ: a ā
  - 但し 長母音のマクロンは省く事が多く, 以下それを前提とす
- い いい: i
- う うう: u
- え ええ: e
  - 但し何故か えい: ei
- お おお おう: o
- じ ぢ: ji
  - 訓令式も同樣の缺陷を持つ
- ず づ: zu
  - 訓令式も同樣の缺陷を持つ

日本式ならばこれらは區別できる.

- あ ああ: a aa
- い いい: i ii
- う うう: u uu
- え ええ: e ee
- お おお おう: o oo ou
- じ ぢ: zi di
- ず づ: zu du

#### 反論
- 訓令式は音素を, ヘボン式は音聲を表してゐるのでそれぞれの良さが有る
  - 音聲を, 例へば [s] と [ʃ] を區別するとしても, sy を sh にする理由が無い
  - 長母音と短母音が同綴なので音聲をも正しく表さない
- 日本語學習者に易しい (↔ 訓令式は易しくない)
  - ts, ch, j などに親しんでゐるのは主として英語話者なので過度な一般化である
    - 例へば ch, j はドイツ語なら [x], [j] である
  - タ行の動詞活用の規則が見え難くなる
  - 例へばポーランド語も [ʃi] を si と綴るがそれが學習者に難しいとは聞かない

#### 初夏式

##### 基本

<center>

|      | い i         | え e     | あ a     | お o     | う u         |
| ---: | :----------- | :------- | :------- | :------- | :----------- |
|    k | き ki        | け ke    | か ka    | こ ko    | く ku        |
|   kj |              |          | きや kja | きよ kjo | きゆ kju     |
|   kv | くゐ kvi     | くゑ kve | くわ kva |          |              |
|    c | ぎ ci        | げ ce    | が ca    | ご co    | ぐ cu        |
|   cj |              |          | ぎゃ cja | ぎょ cjo | ぎゅ cju     |
|   cv |              |          | ぐゐ cvi | ぐゑ cve | ぐわ cva     |
|   sj |              |          | しゃ sja | しょ sjo | しゅ sju     |
|    z | じ zi        | ぜ ze    | ざ za    | ぞ zo    | ず zu        |
|   zj |              |          | じゃ zja | じょ zjo | じゅ zju     |
|    t | ち ti        | て te    | た ta    | と to    | つ tu        |
|   tj |              |          | ちゃ tja | ちょ tjo | ちゅ tju     |
|    d | ぢ di        | で de    | だ da    | ど do    | づ du        |
|    n | に ni        | ね ne    | な na    | の no    | ぬ nu        |
|   nj |              |          | にゃ nja | にょ njo | にゅ nju     |
|    h | ひ hi        | へ he    | は ha    | ほ ho    | ふ hu        |
|   hj |              |          | ひゃ hja | ひょ hjo | ひゅ hju     |
|    p | ぴ pi        | ぺ pe    | ぱ pa    | ぽ po    | ぷ pu        |
|   pj |              |          | ぴゃ pja | ぴょ pjo | ぴゅ pju     |
|    b | び bi        | べ be    | ば ba    | ぼ bo    | ぶ bu        |
|   bj |              |          | びゃ bja | びょ bjo | びゅ bju     |
|    m | み mi        | め me    | ま ma    | も mo    | む mu        |
|    j | &#x1B006; ji | 𛀁 je     | や ja    | よ jo    | ゆ ju        |
|    l | り li        | れ le    | ら la    | ろ lo    | る lu        |
|   lj |              |          | りゃ lja | りょ ljo | りゅ lju     |
|    v | ゐ vi        | ゑ ve    | わ va    | を vo    | &#x1B122; vu |


<small>

- 環境に依っては ji, vi を表示しない
- j, v はラテン語本來の用途に從った
- c はラテン語以前の本來の用途 (ギリシア語 Γ に對應) に從った
- ‘や’ は ‘いぁ’, は ‘きゃ’ は ‘きぁ’ であるべきと考へるが, 本題ではない

</small>

##### 發展

- 入聲尾の母音を省略
- [ŋ] 由來のc, i, e→g
- [m] 由來の n→m
- jou→eu
- juu→iu

##### 例

| kana     | roman          |
| :------- | :------------- |
| 職務質問 | sjokmu-sitmon  |
| 地質調査 | disit-teusa    |
| 三角関係 | samkak-kvankei |
| 方法序説 | haghap-zjoset  |
| 少將     | seusjag        |
| 男教師   | votoko-keusi   |
| 縫ふ     | nuhu           |
| 植う     | vuvu           |
| ニア     | nia            |
| 二夜     | nija           |
| にゃあ   | njaa           |
| んや     | nqja           |

##### 世界人權宣言

https://unicode.org/udhr/d/udhr_jpn.html

> 世界人權宣言
>
> 第1條
>
> すべての人間は、生まれながらにして自由であり、かつ、 尊嚴と權利とについて平等である。${'  '}
> 人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。
>

sekai-ninkven-sengen

dai 1 (it) deu

subete no ninken ha, umale nacala ni site ziiu deali, katu, songen to kvenli to ni tuite bjautau dealu.${'  '}
ninken ha liseg to ljagsim to vo saduke lalete voli, tacahi ni dovhau no sejsin vo motte kagdou si nakeleba nalanai.

(ここでは分かち書きについては指定しない. ‘授けられ’ は saduk elale とも書けよう.)
`
export default () => <>
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
</>