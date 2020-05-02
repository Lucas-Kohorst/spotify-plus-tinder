import { Component } from '@angular/core';
interface Playlist {
  title: string,
  songs: string[],
  uris: string[]
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  playlists: Playlist[];
  display: boolean;

  constructor() {
    this.playlists = []
    this.display = false;
    // Get playlists from session storage and display them
    if (JSON.parse(localStorage.getItem('likedPlaylists')) != null) {
    let i = JSON.parse(localStorage.getItem('likedPlaylists')).list
    for (var j = 0; j < i.length; j++) {
      // Getting playlist by id
      var list: Playlist = JSON.parse(localStorage.getItem('playlist-' + i[j]))
      this.playlists.push(list)
      this.display = true;
    }
    } else {
      this.playlists = null
    }
  }

  clearPlaylists() {
    localStorage.setItem('likedPlaylists', null)
    location.reload()
  }
}