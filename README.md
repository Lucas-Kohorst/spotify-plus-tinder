# Spotify + Tinder
### View Spotify playlists in a tinder like way

## Features
- Like/Dislike a playlist
- Open individual songs
- View Billboard Hot 100
- On like of a playlist post it to your Spotify account
- Play songs from url

## APIs
- [Spotify](https://developer.spotify.com/)
   - Generation of Playlists
   - "Open In"
   - Post Playlists to your profile
- [Last FM](https://www.last.fm/api/)
   - Billboard Hot 100

## Cordova Plugins
- [cordova-plugin-media](https://www.npmjs.com/package/cordova-plugin-media-audio)
   - Play a song from any url (ending in .mp3) in settings
- [cordova-plugin-inappbrowser](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/)
   - Open Spotify OAuth in the same window (needed for iOS)

## Local Storage
All playlists are stored in local storage with a unique uid using [UID](https://www.npmjs.com/search?q=uid&. csrftoken=pgDfxqvaPALmijNW0v4Vb5cFjUiufDv0QyqMCUZAfL-). When you like a playlist its uid is stored in an array for the "Liked Playlists" page to reference. 

![Local Storage Snapshot](https://github.com/Lucas-Kohorst/spotify-plus-tinder/blob/master/localStorage.png?raw=true)


## Limitations 
This app works best in the browser but is cross platform. When loading the app you will be automatically redirected to the Spotify OAuth login after logging in and verifying playlist recommendations will load for you. The Spotify bearer token is stored in local storage. Occasionally the automatic redirect does not load (mostly on iOS) if this is the case simply go to settings and click "Get new Token" and if that doesn't work head to [Spotify's API](https://api.spotify.com) get a bearer token with the following permissions: 

1. user-library-modify
2. playlist-modify-public
3. user-top-read
4. user-library-read

then enter the generated token in settings and refresh. 

## Running
```ionic serve``` does not load cordova plugins by itself and ``cordova run``` does not work properly with all ionic components (like ion-router). Literally took me forever to find how to run these together thanks to [nharrer](https://github.com/ionic-team/ionic-cli/issues/354#issuecomment-463851428). 

Before running you will need to head to [Spotify API Dashboard](https://developer.spotify.com/dashboard/applications) create an application and add the ClIENT_ID in the ```tab1.page.ts``` source file. Make sure to add the callback on Spotify as ```http://localhost:8100/tabs/tab1```. In addition go to [Last.fm API](https://www.last.fm/api/) create an account and generate an API key. Place this in the ```ngInit()``` function in ```tab4.page.ts```.

## Installing
```
npm i || yarn
```

### Browser
```
ionic cordova build browser
ionic serve --cordova --platform browser
```

### iOS
```
ionic cordova build ios
ionic cordova emulate ios
ionic serve --cordova --platform ios // emulate ios in browser
```

## Demo Video
[Demo Video](https://youtu.be/6Z31MT0MmxA)
