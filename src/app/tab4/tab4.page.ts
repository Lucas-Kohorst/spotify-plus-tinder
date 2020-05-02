import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

declare var window: any;

interface Song {
  name: string,
  artist: string,
  url: string,
}

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  songs: Song[]

  constructor() {
    this.songs = []
  }

  ngOnInit() {
    // Get Billboard hot 100 from Last.fm 
    fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`, {
      "method": "GET",
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        data.tracks.track.forEach(song => {
          let songItem = {
            name: song.name,
            artist: song.artist.name,
            url: song.url
          }
          this.songs.push(songItem)
        });
      })
  }

  openSong(song) {
    window.open(song)
  }

}
