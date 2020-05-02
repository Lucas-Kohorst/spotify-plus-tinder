function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["tab3-tab3-module"], {
        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
          \**********************************************************************************************************/

        /*! exports provided: default */

        /***/
            function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */


            __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";
            /***/
        },

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
          \***************************************************************************/

        /*! exports provided: default */

        /***/
            function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */


            __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Settings\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Settings</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <div class=\"center\" style=\"margin-top: 2em; display: flex; flex-direction: column; margin: 0 auto; align-content: center; width: 60%;\">\n        <p>Spotify Bearer Token:</p>\n        <input style=\"color: black;\" (keyup)=\"onToken($event)\" placeholder=\"{{token}}\" />\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"getNewToken() \">Get new token</ion-button>\n        <p>Number of Playlists to Generate:</p>\n        <input style=\"color: black;\" (keyup)=\"onNumberOf($event)\" placeholder=\"{{numberOf}}\" />\n        <p>Play MP3 file (local or through link):</p>\n        <input style=\"color: black;\" (keyup)=\"onLocalSong($event)\" placeholder=\"{{localSong}}\" />\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"play() \">Play</ion-button>\n    </div>\n</ion-content>";
            /***/
        },

        /***/
        "./src/app/explore-container/explore-container.component.scss":
        /*!********************************************************************!*\
          !*** ./src/app/explore-container/explore-container.component.scss ***!
          \********************************************************************/

        /*! exports provided: default */

        /***/
            function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */


            __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2tvaG9yc3QvRGVza3RvcC9HaXRIdWIvc3BvdGlmeS1wbHVzLXRpbmRlci9zcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
            /***/
        },

        /***/
        "./src/app/explore-container/explore-container.component.ts":
        /*!******************************************************************!*\
          !*** ./src/app/explore-container/explore-container.component.ts ***!
          \******************************************************************/

        /*! exports provided: ExploreContainerComponent */

        /***/
            function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */


            __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() {
                return ExploreContainerComponent;
            });
            /* harmony import */


            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */
                "./node_modules/tslib/tslib.es6.js");
            /* harmony import */


            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */
                "./node_modules/@angular/core/fesm2015/core.js");

            var ExploreContainerComponent = /*#__PURE__*/ function() {
                function ExploreContainerComponent() {
                    _classCallCheck(this, ExploreContainerComponent);
                }

                _createClass(ExploreContainerComponent, [{
                    key: "ngOnInit",
                    value: function ngOnInit() {}
                }]);

                return ExploreContainerComponent;
            }();

            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ExploreContainerComponent.prototype, "name", void 0);
            ExploreContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-explore-container',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
                    /*! raw-loader!./explore-container.component.html */
                    "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
                    /*! ./explore-container.component.scss */
                    "./src/app/explore-container/explore-container.component.scss"))["default"]]
            }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExploreContainerComponent);
            /***/
        },

        /***/
        "./src/app/explore-container/explore-container.module.ts":
        /*!***************************************************************!*\
          !*** ./src/app/explore-container/explore-container.module.ts ***!
          \***************************************************************/

        /*! exports provided: ExploreContainerComponentModule */

        /***/
            function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */


            __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() {
                return ExploreContainerComponentModule;
            });
            /* harmony import */


            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */
                "./node_modules/tslib/tslib.es6.js");
            /* harmony import */


            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */
                "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */


            var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common */
                "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */


            var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/forms */
                "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */


            var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @ionic/angular */
                "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */


            var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./explore-container.component */
                "./src/app/explore-container/explore-container.component.ts");

            var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
                _classCallCheck(this, ExploreContainerComponentModule);
            };

            ExploreContainerComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
                declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
                exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
            })], ExploreContainerComponentModule);
            /***/
        },

        /***/
        "./src/app/tab3/tab3.module.ts":
        /*!*************************************!*\
          !*** ./src/app/tab3/tab3.module.ts ***!
          \*************************************/

        /*! exports provided: Tab3PageModule */

        /***/
            function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */


            __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() {
                return Tab3PageModule;
            });
            /* harmony import */


            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */
                "./node_modules/tslib/tslib.es6.js");
            /* harmony import */


            var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @ionic/angular */
                "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */


            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/router */
                "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */


            var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/core */
                "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */


            var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @angular/common */
                "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */


            var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @angular/forms */
                "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */


            var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./tab3.page */
                "./src/app/tab3/tab3.page.ts");
            /* harmony import */


            var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ../explore-container/explore-container.module */
                "./src/app/explore-container/explore-container.module.ts");

            var Tab3PageModule = function Tab3PageModule() {
                _classCallCheck(this, Tab3PageModule);
            };

            Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                    path: '',
                    component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
                }])],
                declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
            })], Tab3PageModule);
            /***/
        },

        /***/
        "./src/app/tab3/tab3.page.scss":
        /*!*************************************!*\
          !*** ./src/app/tab3/tab3.page.scss ***!
          \*************************************/

        /*! exports provided: default */

        /***/
            function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */


            __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2tvaG9yc3QvRGVza3RvcC9HaXRIdWIvc3BvdGlmeS1wbHVzLXRpbmRlci9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
            /***/
        },

        /***/
        "./src/app/tab3/tab3.page.ts":
        /*!***********************************!*\
          !*** ./src/app/tab3/tab3.page.ts ***!
          \***********************************/

        /*! exports provided: Tab3Page */

        /***/
            function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */


            __webpack_require__.d(__webpack_exports__, "Tab3Page", function() {
                return Tab3Page;
            });
            /* harmony import */


            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */
                "./node_modules/tslib/tslib.es6.js");
            /* harmony import */


            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */
                "./node_modules/@angular/core/fesm2015/core.js");

            var Tab3Page = /*#__PURE__*/ function() {
                function Tab3Page() {
                    _classCallCheck(this, Tab3Page);

                    this.token = localStorage.getItem('token');
                    this.numberOf = localStorage.getItem('numberOf');
                    this.localSong = localStorage.getItem('localsong');

                    if (!localStorage.getItem('localSong')) {
                        // If there is no mp3 file to play set it to this drake song
                        // the local audio can play any .mp3 file from a url
                        // but it may take a little to load
                        localStorage.setItem('localsong', "https://live.50hiphop.com/upload/mp3/Drake%20%E2%80%93%20Toosie%20Slide%20Mp3-%2050hiphop.com.mp3");
                    }

                    this.localSong = localStorage.getItem('localsong');
                }

                _createClass(Tab3Page, [{
                    key: "onToken",
                    value: function onToken(event) {
                        this.token = event.target.value;
                        localStorage.setItem("token", this.token);
                    }
                }, {
                    key: "onNumberOf",
                    value: function onNumberOf(event) {
                        this.numberOf = event.target.value;
                        console.log(this.numberOf);
                        localStorage.setItem("numberOf", this.numberOf);
                    }
                }, {
                    key: "onLocalSong",
                    value: function onLocalSong(event) {
                        this.localSong = event.target.value;
                        localStorage.setItem("localsong", this.localSong);
                    }
                }, {
                    key: "getNewToken",
                    value: function getNewToken() {
                        var client_id = CLIENT_ID;
                        window.cordova.InAppBrowser.open('https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http://localhost:8100/tabs/tab1&scope=user-library-modify%20playlist-modify-public%20user-top-read%20user-library-read&response_type=token', '_blank', 'location=yes');
                    }
                }, {
                    key: "play",
                    value: function play() {
                        // Play the audio file at url
                        window.songPlay = new window.Media(localStorage.getItem('localsong')); // Play audio

                        window.songPlay.play();
                    }
                }]);

                return Tab3Page;
            }();

            Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-tab3',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
                    /*! raw-loader!./tab3.page.html */
                    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
                    /*! ./tab3.page.scss */
                    "./src/app/tab3/tab3.page.scss"))["default"]]
            }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tab3Page);
            /***/
        }
    }
]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map