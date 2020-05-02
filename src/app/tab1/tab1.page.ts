/* Import Mobiscroll from the package */
import { Component } from '@angular/core';
import uid from 'uid';

declare var window: any;

interface Playlist {
  title: string,
  songs: string[],
  uris: string[]
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title: string;
  playlists: Playlist[];
  token: string;
  currentPlaylist: number;
  numberOf: number;

  constructor() {
    this.title = 'Playlist';
    if (!localStorage.getItem('numberOf')) {
      this.numberOf = 5;
      localStorage.setItem('numberOf', this.numberOf.toString())
    }
    this.numberOf = Number(localStorage.getItem('numberOf'))
    // If there is no token spotify has not been authorized see
    // https://developer.spotify.com/documentation/general/guides/authorization-guide/
    let client_id = '09c3de4367db49458cb1791f6187ef34'
    console.log(location.href)
    if (location.href.split('access_token=')[1] != undefined) {
      localStorage.setItem('token', location.href.split('access_token=')[1].split('&')[0]);
    }
    if (!localStorage.getItem('token')) {
      var win = window.cordova.InAppBrowser.open('https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http://localhost:8100/tabs/tab1&scope=user-library-modify%20playlist-modify-public%20user-top-read%20user-library-read&response_type=token', '_blank', 'location=yes')
      win.addEventListener("loadstop", function () {
        setTimeout(function () {
          window.location.reload();
        }, 5000);
      });
      win.addEventListener("loadstop", function () {
        win.executeScript(
          { code: "localStorage.setItem('token', location.href.split('access_token=')[1].split('&')[0]);" },
        );
      });
    }
    this.playlists = []
    // Used to only show current playlist
    this.currentPlaylist = 0;
  }

  dislike() {
    // If the user dislikes the playlist go to the next
    this.currentPlaylist += 1
    window.scrollTo(0, 0)
  }

  like(counter) {
    // Setting which playlist numbers are liked
    if (localStorage.getItem('likedPlaylists')) {
      let list = JSON.parse(localStorage.getItem('likedPlaylists')).list
      // Get id for number
      let id = localStorage.getItem('id-' + counter)
      list.push(id)
      let numberOf = {
        list: list
      }
      localStorage.setItem('likedPlaylists', JSON.stringify(numberOf))
    } else {
      var list = []
      // Get id for number
      let id = localStorage.getItem('id-' + counter)
      list.push(id)
      let numberOf = {
        list: list
      }
      localStorage.setItem('likedPlaylists', JSON.stringify(numberOf))
    }
    // If the user likes the playlist post it and go to success screen
    // POSTING
    // Get username
    fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(data => {
        let user_id = data.id
        let endpoint_url = `https://api.spotify.com/v1/users/${user_id}/playlists`
        let request_body = JSON.stringify({
          "name": "Generated Playlist",
          "description": "Playlist generated by Spotify Playlist Generator at https://github.com/Lucas-Kohorst/spotify-generator",
          "public": true
        })
        fetch(endpoint_url, {
          method: "POST",
          body: request_body,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("Posted adding songs")
            let url = data["external_urls"]["spotify"];
            let playlist_id = data["id"];

            let endpoint_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

            let request_body = JSON.stringify({
              uris: localStorage.getItem('uris-' + counter).split(","),
            });

            // Posting the Spotify playlist to the user's account
            fetch(endpoint_url, {
              method: "POST",
              body: request_body,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
                console.log(`Your playlist is ready at ${url}`);
                window.open(url)
              });
          });
      })
  }

  ngOnInit() {
    // Generating the playlists from user's recomendations and a radom seed
    async function getPlaylist(token) {
      console.log(token)
      return new Promise(async (res, err) => {
        let endpoint_url =
          "https://api.spotify.com/v1/recommendations?";

        let limit = 50; // how many songs in each playlist
        let market = "US";
        let target_danceability = 0.9;
        let uris = [];

        // Getting a completely random genre
        let randomGenres = await fetch(
          "https://api.spotify.com/v1/recommendations/available-genre-seeds", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        );
        randomGenres = await randomGenres.json();
        let seed_genres =
          randomGenres["genres"][
          Math.floor(
            Math.random() *
            randomGenres["genres"].length
          )
          ];

        // Getting one of your top artists randomly
        let topArtists = await fetch(
          "https://api.spotify.com/v1/me/top/artists", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        );
        topArtists = await topArtists.json();
        let seed_artists =
          topArtists["items"][
            Math.floor(
              Math.random() *
              topArtists["items"].length
            )
          ].id;

        // Getting one of your top songs randomly
        let topSongs = await fetch(
          "https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        );

        // Getting top songs
        topSongs = await topSongs.json();
        let seed_tracks =
          topSongs["items"][
            Math.floor(
              Math.random() *
              topSongs["items"].length
            )
          ].id;

        let query = `${endpoint_url}limit=${limit}&market=${market}&seed_genres=${seed_genres}&target_danceability=${target_danceability}`;
        // Optional Add seed seed_artists and seed_tracks
        query =
          query +
          `&seed_artists=${seed_artists}`;
        query =
          query +
          `&seed_tracks=${seed_tracks}`;
        console.log(query);

        let songs = await fetch(query, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        songs = await songs.json();

        let tracks = [];
        songs["tracks"].forEach((song) => {
          tracks.push({
            songName: song.name + " - " + song.album.artists[0].name,
            songImg: song.album.images[0].url,
            audio: song.external_urls.spotify
          });
          uris.push(song.uri)
        });

        // Return Songs to display as cards
        res([{
          title: "Playlist",
          songs: tracks,
          uris: uris
        },]);
      });
    };

    // Adding playlists to local storage for view
    for (let i = 0; i < Number(localStorage.getItem('numberOf')); i++) {
      getPlaylist(localStorage.getItem('token')).then((response: Playlist[]) => {
        response.forEach((playlist: Playlist) => {
          let id = uid();
          this.playlists.push(playlist)
          localStorage.setItem('uris-' + i, playlist.uris.toString())
          localStorage.setItem('id-' + i, id)
          localStorage.setItem('playlist-' + id, JSON.stringify(playlist))
        })
      })
    }
  }

  openSong(song) {
    window.open(song)
  }
}