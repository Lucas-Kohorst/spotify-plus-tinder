(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Playlists\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"playlists.length > 0\">\n        <div class=\"custom-card-deck\">\n            <ion-list>\n                <ion-item *ngFor=\"let playlist of playlists; let i = index\">\n                    <ion-card class=\"custom-card\" *ngIf=\"i == currentPlaylist\" style=\"width:100%; margin: 0 auto;\">\n                        <ion-card-header>\n                            <ion-card-title>Playlist #{{playlists.length - i}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ul>\n                                <div *ngFor=\" let song of playlist.songs \" style=\"list-style-type: none; \">\n                                    <li>\n                                        <ion-card>\n                                            <ion-item>\n                                                <ion-thumbnail style=\"padding: 0.75em; \">\n                                                    <img src=\"{{song.songImg}} \" />\n                                                </ion-thumbnail>\n                                                <ion-label>{{ song.songName }}</ion-label>\n                                                <ion-button fill=\"outline\" slot=\"end\" (click)=\"openSong(song.audio) \">Listen</ion-button>\n                                            </ion-item>\n                                        </ion-card>\n                                    </li>\n                                </div>\n                                <ion-card>\n                                    <ion-button expand=\"block \" (click)=\"dislike() \" color=\"danger \">Dislike</ion-button>\n                                    <ion-button expand=\"block \" (click)=\"like(i) \" color=\"success \">Like</ion-button>\n                                </ion-card>\n                            </ul>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n    <div *ngIf=\"playlists.length==0\" style=\"margin-top: 2em;\" class=\"center\">\n        <h3 class=\"center \">The app will redirect you automatically, but if it doesn't head to settings</h3>\n        <p class=\"center \">If that doesn't work head to api.spotify.com get a bearer token from the playground, enter it in settings, and refresh</p>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/uid/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/uid/dist/index.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IDX=36, HEX='';
while (IDX--) HEX += IDX.toString(36);

/* harmony default export */ __webpack_exports__["default"] = (function (len) {
	var str='', num = len || 11;
	while (num--) str += HEX[Math.random() * 36 | 0];
	return str;
});


/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.custom-card-deck {\n  margin: 1em 0;\n}\n\n.custom-card-deck .mbsc-lv-sl-c {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.custom-card-deck .mbsc-lv-v {\n  padding-top: 88%;\n  min-height: 390px;\n}\n\n.custom-card-deck .mbsc-lv-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.custom-card-deck .mbsc-lv-item.mbsc-lv-item-swiping {\n  z-index: 10;\n}\n\n.custom-card-deck .custom-card-rotate-right {\n  transform: rotate(1deg);\n}\n\n.custom-card-deck .custom-card-rotate-left {\n  transform: rotate(-2deg);\n}\n\n.custom-card-deck .mbsc-card.custom-card {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.center {\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2tvaG9yc3QvRGVza3RvcC9GaWxlcy9TcHJpbmcyMDIwL0ZvdW5kYXRpb25zT2ZNb2JpbGVEZXNpZ24vUHJvamVjdDQvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksK0dBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtc2wtYyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtdiB7XG4gICAgcGFkZGluZy10b3A6IDg4JTtcbiAgICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtaXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1pdGVtLm1ic2MtbHYtaXRlbS1zd2lwaW5nIHtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLmN1c3RvbS1jYXJkLXJvdGF0ZS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5jdXN0b20tY2FyZC1yb3RhdGUtbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1jYXJkLmN1c3RvbS1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2VudGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sge1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1zbC1jIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5tYnNjLWx2LXYge1xuICBwYWRkaW5nLXRvcDogODglO1xuICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtaXRlbS5tYnNjLWx2LWl0ZW0tc3dpcGluZyB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAuY3VzdG9tLWNhcmQtcm90YXRlLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5jdXN0b20tY2FyZC1yb3RhdGUtbGVmdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtY2FyZC5jdXN0b20tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid */ "./node_modules/uid/dist/index.mjs");

/* Import Mobiscroll from the package */


let Tab1Page = class Tab1Page {
    constructor() {
        this.title = 'Playlist';
        this.numberOf = 5;
        localStorage.setItem('numberOf', this.numberOf.toString());
        // If there is no token spotify has not been authorized see
        // https://developer.spotify.com/documentation/general/guides/authorization-guide/
        let client_id = '09c3de4367db49458cb1791f6187ef34';
        console.log(location.href);
        if (location.href.split('access_token=')[1] != undefined) {
            localStorage.setItem('token', location.href.split('access_token=')[1].split('&')[0]);
        }
        if (!localStorage.getItem('token')) {
            // window.cordova.InAppBrowser.open('https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http://localhost:8100/tabs/tab1&scope=user-library-modify%20playlist-modify-public%20user-top-read%20user-library-read&response_type=token', '_blank', 'location=yes')
            var win = window.open("https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http://localhost:8100/tabs/tab1&scope=user-library-modify%20playlist-modify-public%20user-top-read%20user-library-read&response_type=token", "_blank", "EnableViewPortScale=yes");
            win.addEventListener("loadstop", function () {
                setTimeout(function () {
                    win.close();
                }, 2500);
            });
            win.addEventListener("loadstop", function () {
                win.executeScript({ code: "localStorage.setItem('token', location.href.split('access_token=')[1].split('&')[0]);" });
            });
        }
        this.playlists = [];
        // Used to only show current playlist
        this.currentPlaylist = 0;
    }
    dislike() {
        // If the user dislikes the playlist go to the next
        this.currentPlaylist += 1;
        window.scrollTo(0, 0);
    }
    like(counter) {
        // Setting which playlist numbers are liked
        if (localStorage.getItem('likedPlaylists')) {
            let list = JSON.parse(localStorage.getItem('likedPlaylists')).list;
            // Get id for number
            let id = localStorage.getItem('id-' + counter);
            list.push(id);
            let numberOf = {
                list: list
            };
            localStorage.setItem('likedPlaylists', JSON.stringify(numberOf));
        }
        else {
            var list = [];
            // Get id for number
            let id = localStorage.getItem('id-' + counter);
            list.push(id);
            let numberOf = {
                list: list
            };
            localStorage.setItem('likedPlaylists', JSON.stringify(numberOf));
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
            let user_id = data.id;
            let endpoint_url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
            let request_body = JSON.stringify({
                "name": "Generated Playlist",
                "description": "Playlist generated by Spotify Playlist Generator at https://github.com/Lucas-Kohorst/spotify-generator",
                "public": true
            });
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
                console.log("Posted adding songs");
                let url = data["external_urls"]["spotify"];
                let playlist_id = data["id"];
                let endpoint_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
                let request_body = JSON.stringify({
                    uris: localStorage.getItem('uris-' + counter).split(","),
                });
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
                    window.cordova.InAppBrowser(url, '_blank', 'location=yes');
                });
            });
        });
    }
    ngOnInit() {
        function getPlaylist(token) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(token);
                return new Promise((res, err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let endpoint_url = "https://api.spotify.com/v1/recommendations?";
                    let user_id = "lucaskohorst25";
                    let limit = 50;
                    let market = "US";
                    let target_danceability = 0.9;
                    let uris = [];
                    // Getting a completely random genre
                    let randomGenres = yield fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    randomGenres = yield randomGenres.json();
                    let seed_genres = randomGenres["genres"][Math.floor(Math.random() *
                        randomGenres["genres"].length)];
                    // Getting one of your top artists randomly
                    let topArtists = yield fetch("https://api.spotify.com/v1/me/top/artists", {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    topArtists = yield topArtists.json();
                    let seed_artists = topArtists["items"][Math.floor(Math.random() *
                        topArtists["items"].length)].id;
                    // Getting one of your top songs randomly
                    let topSongs = yield fetch("https://api.spotify.com/v1/me/top/tracks", {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    topSongs = yield topSongs.json();
                    let seed_tracks = topSongs["items"][Math.floor(Math.random() *
                        topSongs["items"].length)].id;
                    let query = `${endpoint_url}limit=${limit}&market=${market}&seed_genres=${seed_genres}&target_danceability=${target_danceability}`;
                    // Optional Add seed seed_artists and seed_tracks
                    query =
                        query +
                            `&seed_artists=${seed_artists}`;
                    query =
                        query +
                            `&seed_tracks=${seed_tracks}`;
                    console.log(query);
                    let songs = yield fetch(query, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    songs = yield songs.json();
                    let tracks = [];
                    songs["tracks"].forEach((song) => {
                        tracks.push({
                            songName: song.name + " - " + song.album.artists[0].name,
                            songImg: song.album.images[0].url,
                            audio: song.external_urls.spotify
                        });
                        uris.push(song.uri);
                    });
                    // Return Songs to display as cards
                    res([{
                            title: "Playlist",
                            songs: tracks,
                            uris: uris
                        },]);
                }));
            });
        }
        ;
        for (let i = 0; i < Number(localStorage.getItem('numberOf')); i++) {
            getPlaylist(localStorage.getItem('token')).then((response) => {
                response.forEach((playlist) => {
                    let id = Object(uid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                    this.playlists.push(playlist);
                    localStorage.setItem('uris-' + i, playlist.uris.toString());
                    localStorage.setItem('id-' + i, id);
                    localStorage.setItem('playlist-' + id, JSON.stringify(playlist));
                });
            });
        }
    }
    openSong(song) {
        window.cordova.InAppBrowser(song, '_blank');
    }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map