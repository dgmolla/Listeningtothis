import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import TopTable from './components/table.js';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

const App = () => {

  const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  const params = getHashParams();

  if(params.access_token){
    spotifyWebApi.setAccessToken(params.acces_token);
  }
  const [toptracks, setTopTracks] = useState( [
    {
      name: 'Not Checked',
      image: ''
    }
  ]);


  const getTopTracks = () => {
    spotifyWebApi.getMyTopTracks().then((response) => {
          for(x of response.JSON) {
            setTopTracks(
              toptracks.push({
                name: response[x].item.name,
                image: response[x].item.album.images[0].url
            })
          )}
      })
  };
  console.log(toptracks);

  const tracks = [
    {name: "Skinny Suge", artist: "Freddie Gibbs"},
    {name: "Yeah Yeah", artist: "Young Nudy"},
    {name: "Let it Happen", artist: "Tame Impala"}
  ]
  return (
  <div className="App">
    <Button href='http://localhost:8888'>
      <button>Log in with Spotify</button>
    </Button>

    <TopTable array={ tracks }/>
   </div> )
};

export default App;
