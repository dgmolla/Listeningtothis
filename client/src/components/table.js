import React from 'react';
import { Button, Table, Image } from 'react-bootstrap'

const TopTable = ({ array }) => {

  const renderTrack = (track, index) => {
    return(
      <tr key={index}>
        <td>{(index+1)}</td>
        <td><Image src={track.album.images[0].url} /></td>
        <td>{track.name}</td>
        <td>{track.artists[0].name}</td>
      </tr>
    )
  }

  return(<Table size="small" hover>
    <tbody>
     {array.map(renderTrack)}
    </tbody>
   </Table>
  )
};


export default TopTable;
