import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap'

const App = () => {

  const [toptracks, setToptracks] = useState();

  // constructor(){
  //   const params = this.getHashParams();
  //
  // }
  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  const tracks = [
    {name: "Skinny Suge", artist: "Freddie Gibbs"},
    {name: "Yeah Yeah", artist: "Young Nudy"},
    {name: "Let it Happen", artist: "Tame Impala"}
  ]
  const renderTrack = (track, index) => {
    return(
      <tr key={index}>
        <td>{(index+1)}</td>
        <td>{track.name}</td>
        <td>{track.artist}</td>
      </tr>
    )
  }

  return (
  <div className="App">
    <a href='http://localhost:8888'>
      <button>Log in with Spotify</button>
    </a>

    <Table responsive="lg" hover>
      <tbody>
       {tracks.map(renderTrack)}
      </tbody>
     </Table>
   </div> )
};

export default App;
