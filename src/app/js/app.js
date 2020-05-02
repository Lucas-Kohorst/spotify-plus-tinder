async function getPlaylist(token) {
    console.log(token)
    return new Promise(async(res, err) => {
        let endpoint_url =
            "https://api.spotify.com/v1/recommendations?";
        let user_id = "lucaskohorst25";

        let limit = 50;
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
            randomGenres.genres[
                Math.floor(
                    Math.random() *
                    randomGenres.genres.length
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
            topArtists.items[
                Math.floor(
                    Math.random() *
                    topArtists.items.length
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
        topSongs = await topSongs.json();
        let seed_tracks =
            topSongs.items[
                Math.floor(
                    Math.random() *
                    topSongs.items.length
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
        // .then((response) => {
        //     return response.json();
        // })
        // .then((data) => {
        //     console.log(data);
        //     console.log("Recommended Songs:");
        //     for (let k in data.tracks) {
        //         uris.push(data.tracks[k]["uri"]);
        //     }
        //     console.log(uris);

        //     endpoint_url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

        //     let request_body = JSON.stringify({
        //         name: "Indie bands like Franz Ferdinand and Foals but using Python",
        //         description: "My first programmatic playlist, yooo!",
        //         public: true,
        //     });

        //     console.log(uris);

        //     res([{
        //             title: "works",
        //             image: "http://c4.staticflickr.com/4/3924/18886530069_840bc7d2a5_n.jpg",
        //             songs: ["Song", "Song", "Song"],
        //         },
        //         {
        //             title: "ys",
        //             image: "http://c4.staticflickr.com/4/3924/18886530069_840bc7d2a5_n.jpg",
        //             songs: ["Song", "Song", "Song"],
        //         },
        //     ]);

        let tracks = [];
        songs.tracks.forEach((song) => {
            tracks.push(song.name);
        });

        // Return Songs to display as cards
        res([{
            title: "Playlist",
            songs: tracks,
        }, ]);

        // Methods for Posting as a playlist if right swiped
        //         fetch(endpoint_url, {
        //                 method: "POST",
        //                 body: request_body,
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                     Authorization: `Bearer ${token}`,
        //                 },
        //             })
        //             .then((response) => {
        //                 return response.json();
        //             })
        //             .then((data) => {
        //                 let url = data["external_urls"]["spotify"];
        //                 let playlist_id = data["id"];

        //                 endpoint_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

        //                 request_body = JSON.stringify({
        //                     uris: uris,
        //                 });

        //                 console.log(token);

        //                 fetch(endpoint_url, {
        //                         method: "POST",
        //                         body: request_body,
        //                         headers: {
        //                             "Content-Type": "application/json",
        //                             Authorization: `Bearer ${token}`,
        //                         },
        //                     })
        //                     .then((response) => {
        //                         return response.json();
        //                     })
        //                     .then((data) => {
        //                         console.log(data);
        //                         console.log(`Your playlist is ready at ${url}`);
        //                     });
        //             });
    });
};

var app = angular.module("starter", [
    "ionic",
    "ionic.contrib.ui.tinderCards2",
]);

app.directive("noScroll", function($document) {
    return {
        restrict: "A",
        link: function($scope, $element, $attr) {
            $document.on("touchmove", function(e) {
                e.preventDefault();
            });
        },
    };
});

app.controller("CardsCtrl", async function($scope, TDCardDelegate, $timeout) {
    let cardTypes = [];

    $scope.cards = {
        master: Array.prototype.slice.call(cardTypes, 0),
        active: Array.prototype.slice.call(cardTypes, 0),
        discards: [],
        liked: [],
        disliked: [],
    };

    for (let i = 0; i < 3; i++) {
        console.log($scope.playlistData)
        getPlaylist(
            localStorage.getItem('token')
        ).then((response) => {
            console.log(response);
            response.forEach((card) => {
                cardTypes.push(card);
            });
            console.log(cardTypes);
            $scope.cards = {
                master: Array.prototype.slice.call(cardTypes, 0),
                active: Array.prototype.slice.call(cardTypes, 0),
                discards: [],
                liked: [],
                disliked: [],
            };
        });
    }

    $scope.addPlaylistCards = function(playlistData) {
        $scope.playlistData = angular.copy(playlistData);
        console.log($scope.playlistData);
        // Getting the playlist songs and adding them to the cards
        for (let i = 0; i < 1; i++) {
            getPlaylist($scope.playlistData.bearer).then(response => {
                console.log(response)
                response.forEach(card => {
                    cardTypes.push(card)
                })
                console.log(cardTypes)
                $scope.cards = {
                    master: Array.prototype.slice.call(cardTypes, 0),
                    active: Array.prototype.slice.call(cardTypes, 0),
                    discards: [],
                    liked: [],
                    disliked: [],
                };
                $scope.cards.active = null;
                $timeout(function() {
                    $scope.cards.active = Array.prototype.slice.call(
                        $scope.cards.master,
                        0
                    );
                });
            })
        }
    }

    $scope.cardDestroyed = function(index) {
        $scope.cards.active.splice(index, 1);
    };

    $scope.addCard = function() {
        var newCard = $scope.cardTypes[0];
        $scope.cards.active.push(angular.extend({}, newCard));
    };

    $scope.refreshCards = function() {
        // Set $scope.cards to null so that directive reloads
        $scope.cards.active = null;
        $timeout(function() {
            $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
        });
    };

    $scope.$on("removeCard", function(event, element, card) {
        var discarded = $scope.cards.master.splice(
            $scope.cards.master.indexOf(card),
            1
        );
        $scope.cards.discards.push(discarded);
    });

    $scope.cardSwipedLeft = function(index) {
        console.log("LEFT SWIPE");
        var card = $scope.cards.active[index];
        $scope.cards.disliked.push(card);
    };
    $scope.cardSwipedRight = function(index) {
        console.log("RIGHT SWIPE");
        var card = $scope.cards.active[index];
        $scope.cards.liked.push(card);
    };
});