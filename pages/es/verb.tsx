export default () => <>
  <h2>verb</h2>

  <h3>present</h3>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th>yo</th>
        <th>tú</th>
        <th>él</th>
        <th>nos</th>
        <th>vos</th>
        <th>ellos</th>
      </tr>
      <tr>
        <th>-ar</th>
        <td rowSpan={3}>-o</td>
        <td>-as</td>
        <td>-a</td>
        <td>-amos</td>
        <td>-áis</td>
        <td>-an</td>
      </tr>
      <tr>
        <th>-er</th>
        <td rowSpan={2}>-es</td>
        <td rowSpan={2}>-e</td>
        <td>-emos</td>
        <td>-éis</td>
        <td rowSpan={2}>-en</td>
      </tr>
      <tr>
        <th>-ir</th>
        <td>-imos</td>
        <td>-ís</td>
      </tr>
    </table>
  </div>

  <h3>past</h3>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th></th>
        <th>yo</th>
        <th>tú</th>
        <th>él</th>
        <th>nos</th>
        <th>vos</th>
        <th>ellos</th>
      </tr>
      <tr>
        <th>-ar</th>
        <td>-ába-</td>
        <td rowSpan={2}>-</td>
        <td rowSpan={2}>-s</td>
        <td rowSpan={2}>-</td>
        <td rowSpan={2}>-mos</td>
        <td rowSpan={2}>-is</td>
        <td rowSpan={2}>-n</td>
      </tr>
      <tr>
        <th>-{'{e, i}'}r</th>
        <td>-ía-</td>
      </tr>
    </table>
  </div>

  <h3>aorist</h3>
  <div className='tables'>
    <table>      <tr className='v-parent'>
      <th></th>
      <th>yo</th>
      <th>tú</th>
      <th>él</th>
      <th>nos</th>
      <th>vos</th>
      <th>ellos</th>
    </tr>
      <tr>
        <th>-ar</th>
        <td>-é</td>
        <td>-aste</td>
        <td>-ó</td>
        <td>-amos</td>
        <td>-asteis</td>
        <td>-aron</td>
      </tr>
      <tr>
        <th>-{'{e, i}'}r</th>
        <td>-í</td>
        <td>-iste</td>
        <td>-ió</td>
        <td>-imos</td>
        <td>-isteis</td>
        <td>-ieron</td>
      </tr>
    </table>
  </div>

  <h3>future past</h3>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th></th>
        <th>yo</th>
        <th>tú</th>
        <th>él</th>
        <th>nos</th>
        <th>vos</th>
        <th>ellos</th>
      </tr>
      <tr>
        <th>-</th>
        <td>-ía-</td>
        <td>-</td>
        <td>-s</td>
        <td>-</td>
        <td>-mos</td>
        <td>-is</td>
        <td>-n</td>
      </tr>
    </table>
  </div>

  <h3>Sub present</h3>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th></th>
        <th>yo</th>
        <th>tú</th>
        <th>él</th>
        <th>nos</th>
        <th>vos</th>
        <th>ellos</th>
      </tr>
      <tr>
        <th>-ar</th>
        <td>-e-</td>
        <td rowSpan={2}>-</td>
        <td rowSpan={2}>-s</td>
        <td rowSpan={2}>-</td>
        <td rowSpan={2}>-mos</td>
        <td rowSpan={2}>-ˊis</td>
        <td rowSpan={2}>-n</td>
      </tr>
      <tr>
        <th>-(e|i)r</th>
        <td>-a-</td>
      </tr>
    </table>
  </div>

  <h3>Sub past</h3>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th></th>
        <th>yo</th>
        <th>tú</th>
        <th>él</th>
        <th>nos</th>
        <th>vos</th>
        <th>ellos</th>
      </tr>
      <tr>
        <th>(ar)-</th>
        <td></td>
        <td rowSpan={2}>-a</td>
        <td rowSpan={2}>-as</td>
        <td rowSpan={2}>-a</td>
        <td rowSpan={2}>-ˊamos</td>
        <td rowSpan={2}>-ais</td>
        <td rowSpan={2}>-an</td>
      </tr>
      <tr>
        <th>-{'{e, i}'}r</th>
        <td>-ier-</td>
      </tr>
    </table>
  </div>
</>
