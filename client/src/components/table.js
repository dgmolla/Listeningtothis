import React from 'react';
import { Button, Table } from 'react-bootstrap'

const TopTable = ({ array }) => {

  const renderTrack = (track, index) => {
    return(
      <tr key={index}>
        <td>{(index+1)}</td>
        <td>{track.name}</td>
        <td>{track.artist}</td>
      </tr>
    )
  }

  return(<Table responsive="lg" hover>
    <tbody>
     {array.map(renderTrack)}
    </tbody>
   </Table>
  )
};


export default TopTable;
