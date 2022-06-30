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
    <li><Link href='fa'>persian</Link></li>
    <li><Link href='tr'>turkish</Link></li>
    <li><Link href='id'>indonesian</Link></li>
    <li><Link href='ka'>georgian</Link></li>
  </ul>

  <div className='tables'>
    <table>
      <caption>basic scheme</caption>
      <tr className='v-parent'>
        <th></th>
        <th>uvular</th>
        <th>velar</th>
        <th>palatal</th>
        <th>dental</th>
        <th>labial</th>
      </tr>
      <tr>
        <th>vowel</th>
        <td>a</td>
        <td></td>
        <td>i</td>
        <td></td>
        <td>u</td>
      </tr>
      <tr>
        <th>approximant</th>
        <td></td>
        <td></td>
        <td>j</td>
        <td>l</td>
        <td>v</td>
      </tr>
      <tr>
        <th>voiced fricative</th>
        <td>o</td>
        <td>h</td>
        <td>ẓ</td>
        <td>z</td>
        <td>w</td>
      </tr>
      <tr>
        <th>fricative</th>
        <td>e</td>
        <td>x</td>
        <td>ṣ</td>
        <td>s</td>
        <td>f</td>
      </tr>
      <tr>
        <th>aspirated</th>
        <td>ꝗ</td>
        <td>ꝁ</td>
        <td>ṯ</td>
        <td>ŧ</td>
        <td>ꝑ</td>
      </tr>
      <tr>
        <th>plossive</th>
        <td>q</td>
        <td>k</td>
        <td>ṭ</td>
        <td>t</td>
        <td>p</td>
      </tr>
      <tr>
        <th>voiced plossive</th>
        <td></td>
        <td>c</td>
        <td>ḍ</td>
        <td>d</td>
        <td>b</td>
      </tr>
      <tr>
        <th>nasal</th>
        <td></td>
        <td>g</td>
        <td>ṇ</td>
        <td>n</td>
        <td>m</td>
      </tr>
    </table>
  </div>
</>
