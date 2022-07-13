import Link from 'next/link'

export default () => <>
  <ul>
    <li><Link href='yue'>cantonese</Link></li>
    <li><Link href='cmn'>mandarin</Link></li>
    <li><Link href='el'>greek</Link></li>
    <li><Link href='pl'>polish</Link></li>
    <li><Link href='nl'>dutch</Link></li>
    <li><Link href='sa'>sanskrit</Link></li>
    <li><Link href='ar'>arabic</Link></li>
    <li><Link href='he'>hebrew</Link></li>
    <li><Link href='fa'>persian</Link></li>
    <li><Link href='tr'>turkish</Link></li>
    <li><Link href='id'>indonesian</Link></li>
    <li><Link href='ka'>georgian</Link></li>
    <li><Link href='kr'>korean</Link></li>
  </ul>

  <div className='tables'>
    <table>
      <caption>basic scheme</caption>
      <tr className='v-parent'>
        <th></th>
        <th>uvular</th>
        <th>velar</th>
        <th>palatal</th>
        <th>retroflex</th>
        <th>dental</th>
        <th>labial</th>
      </tr>
      <tr>
        <th>nasal</th>
        <td></td>
        <td>g</td>
        <td>ġ</td>
        <td>ṇ</td>
        <td>n</td>
        <td>m</td>
      </tr>
      <tr>
        <th>plossive</th>
        <td>q</td>
        <td>k c</td>
        <td>ǩ ċ</td>
        <td>ṭ ḍ</td>
        <td>t d</td>
        <td>p b</td>
      </tr>
      <tr>
        <th>aspirated</th>
        <td>ꝗ</td>
        <td>ꝁ ꞓ</td>
        <td></td>
        <td>ṯ ḏ</td>
        <td>ŧ đ</td>
        <td>ꝑ ƀ</td>
      </tr>
      <tr>
        <th>affricate</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>ţ ḑ</td>
        <td></td>
      </tr>
      <tr>
        <th>fricative</th>
        <td>e o</td>
        <td>x h</td>
        <td>ẋ ḣ</td>
        <td>ṣ ẓ</td>
        <td>s z</td>
        <td>f w</td>
      </tr>
      <tr>
        <th>approximant</th>
        <td></td>
        <td></td>
        <td>j</td>
        <td>r</td>
        <td>l</td>
        <td>v</td>
      </tr>
      <tr>
        <th>vowel</th>
        <td>a</td>
        <td></td>
        <td>i</td>
        <td></td>
        <td></td>
        <td>u</td>
      </tr>
    </table>
  </div>
</>
