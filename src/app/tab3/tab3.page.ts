import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  token = localStorage.getItem('token')
  numberOf = localStorage.getItem('numberOf')
  localSong = localStorage.getItem('localsong')

  constructor() {
    if (!localStorage.getItem('localSong')) {
      // If there is no mp3 file to play set it to this drake song
      // the local audio can play any .mp3 file from a url
      // but it may take a little to load
      localStorage.setItem('localsong', "https://live.50hiphop.com/upload/mp3/Drake%20%E2%80%93%20Toosie%20Slide%20Mp3-%2050hiphop.com.mp3")
    }
    this.localSong = localStorage.getItem('localsong')
  }

  // When bearer token is updated
  onToken(event: any) {
    this.token = event.target.value
    localStorage.setItem("token", this.token);
  }

  // When number of playlists to generate is updated
  onNumberOf(event: any) {
    this.numberOf = event.target.value
    console.log(this.numberOf)
    localStorage.setItem("numberOf", this.numberOf);
  }

  // When local song to play ist updated
  onLocalSong(event: any) {
    this.localSong = event.target.value
    localStorage.setItem("localsong", this.localSong);
  }

  // Get new bearer token from Spotify
  getNewToken() {
    let client_id = '09c3de4367db49458cb1791f6187ef34'
    window.cordova.InAppBrowser.open('https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http://localhost:8100/tabs/tab1&scope=user-library-modify%20playlist-modify-public%20user-top-read%20user-library-read&response_type=token', '_blank', 'location=yes')
  }

  // Play local songs
  play() {
    // Play the audio file at url
    window.songPlay = new window.Media(localStorage.getItem('localsong'));
    // Play audio
    window.songPlay.play();
  }

}
