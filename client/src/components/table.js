import React from 'react';
import { Button, Table, Image } from 'react-bootstrap'

const TopTable = ({ array }) => {

  const renderTrack = (track, index) => {
    return(
      <tr key={index}>
        <td className="align-middle"><span>{(index+1)}</span></td>
        <td><Image src={track.album.images[0].url} /></td>
        <td className="align-middle"><span>{track.name}</span></td>
        <td className="align-middle"><span>{track.artists[0].name}</span></td>
      </tr>
    )
  }

  if(array) {
    return(<Table
      size="sm" hover>
      <tbody className="w-50 p3 z-depth-5">
       {array.map(renderTrack)}
      </tbody>
     </Table>
    )
  }
  else {
    alert('You gotta log in!');
    return null;
  }
};


export default TopTable;
