import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import TopTable from './components/table.js';
var SpotifyWebApi = require('spotify-web-api-js');

var spotifyWebApi = new SpotifyWebApi();

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


  //
  // const getTopTracks = async (
  //   url = 'https://api.spotify.com/v1/me/top/tracks',
  //   data = {}) => {
  //     // Default options are marked with *
  //     const response = await fetch(url, {
  //       method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + params.access_token
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       redirect: 'follow', // manual, *follow, error
  //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     });
  //     return response.json(); // parses JSON response into native JavaScript objects
  //   }

    // const getTopTracks = () => {
    //   return $.ajax({
    //     url: 'https://api.spotify.com/v1/me/top/tracks',
    //     headers: {
    //       'Authorization': 'Bearer ' + params.access_token
    //     }
    //   });
    // }

  spotifyWebApi.setAccessToken(params.access_token);
  console.log("access token set successfully " + params.access_token);
  const toptracks = [];

  const getTopTracks = () => spotifyWebApi.getMyTopTracks(
    {}, (error, results) => {

      if(error) {
        console.error(error);
      }
      else {
        console.log(results);
        // for(let x=0; x<results.length; ++x) {
        //   toptracks = toptracks.push({
        //       name: results[x].items.name,
        //       image: results[x].items.images[0].url
        //     });
        }
      });
    // });

  // const getTopTracks = async () => {
  //   const response = await spotifyWebApi.getMyTopTracks();
  //   if (!response.ok) throw response;
  //   const json = await response.json();
  //   if(!json.ok) throw json;
  //
  //   let tt = toptracks;
  //
  //   for(let x=0; x<json.length; ++x) {
  //     setTopTracks(
  //       tt.push({
  //         name: json[x].item.name,
  //         image: json[x].item.album.images[0].url
  //       })
  //     )
  // }};

  // console.log(toptracks);

  const tracks = [
    {name: "Skinny Suge", artist: "Freddie Gibbs"},
    {name: "Yeah Yeah", artist: "Young Nudy"},
    {name: "Let it Happen", artist: "Tame Impala"}
  ]
  return (
  <div className="App">
    <Button href='http://localhost:8888'
            variant="success">Log in with Spotify</Button>

    <Button onClick={() => getTopTracks()}
            variant="success">Get Top Tracks</Button>

    <TopTable array={ toptracks }/>
   </div> )
};

export default App;
