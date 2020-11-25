import React from 'react'
import './Trip.css'

export default function Trip() {
    return (
        <div>
            <h1 id="pack">Package Details</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">SLNo:</th>
      <th scope="col">Package Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Goa</td>
      <td>13600/-</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Kerala</td>
      <td>10999/-</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Madya Pradesh</td>
      <td>15599/-</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Agra</td>
      <td>13999/-</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Delhi</td>
      <td>12350/-</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Bangalore</td>
      <td>16000/-</td>
    </tr>
    
  </tbody>
</table>
        </div>
    )
}
