(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Saved Playlists\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf=\"display\">\n        <div class=\"custom-card-deck\">\n            <ion-list>\n                <ion-item *ngFor=\"let playlist of playlists; let i = index\">\n                    <ion-card class=\"custom-card\" style=\"width:100%; margin: 0 auto;\">\n                        <ion-card-header>\n                            <ion-card-title>Playlist #{{playlists.length - i}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ul>\n                                <div *ngFor=\"let song of playlist.songs \" style=\"list-style-type: none; \">\n                                    <li>\n                                        <ion-card>\n                                            <ion-item>\n                                                <ion-thumbnail style=\"padding: 0.75em; \">\n                                                    <img src=\"{{song.songImg}} \" />\n                                                </ion-thumbnail>\n                                                <ion-label>{{ song.songName }}</ion-label>\n                                                <ion-button fill=\"outline\" slot=\"end\" (click)=\"openSong(song.audio) \">Listen</ion-button>\n                                            </ion-item>\n                                        </ion-card>\n                                    </li>\n                                </div>\n                            </ul>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-item>\n            </ion-list>\n            <ion-button expand=\"block \" (click)=\"clearPlaylists() \" color=\"danger \">Clear Playlists</ion-button>\n        </div>\n    </div>\n    <div *ngIf=\"!display\" style=\"margin-top: 2em\">\n        <h3 class=\"center \">Your saved playlists will appear here</h3>\n        <p class=\"center \">To save a playlist simply like it on the bottom of the Playlists page</p>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.custom-card-deck {\n  margin: 1em 0;\n}\n\n.custom-card-deck .mbsc-lv-sl-c {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.custom-card-deck .mbsc-lv-v {\n  padding-top: 88%;\n  min-height: 390px;\n}\n\n.custom-card-deck .mbsc-lv-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.custom-card-deck .mbsc-lv-item.mbsc-lv-item-swiping {\n  z-index: 10;\n}\n\n.custom-card-deck .custom-card-rotate-right {\n  transform: rotate(1deg);\n}\n\n.custom-card-deck .custom-card-rotate-left {\n  transform: rotate(-2deg);\n}\n\n.custom-card-deck .mbsc-card.custom-card {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.center {\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2tvaG9yc3QvRGVza3RvcC9HaXRIdWIvc3BvdGlmeS1wbHVzLXRpbmRlci9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSwrR0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1zbC1jIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi12IHtcbiAgICBwYWRkaW5nLXRvcDogODglO1xuICAgIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1pdGVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5tYnNjLWx2LWl0ZW0ubWJzYy1sdi1pdGVtLXN3aXBpbmcge1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAuY3VzdG9tLWNhcmQtcm90YXRlLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLmN1c3RvbS1jYXJkLXJvdGF0ZS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5tYnNjLWNhcmQuY3VzdG9tLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jZW50ZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayB7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5tYnNjLWx2LXNsLWMge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtdiB7XG4gIHBhZGRpbmctdG9wOiA4OCU7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1pdGVtLm1ic2MtbHYtaXRlbS1zd2lwaW5nIHtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5jdXN0b20tY2FyZC1yb3RhdGUtcmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLmN1c3RvbS1jYXJkLXJvdGF0ZS1sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1jYXJkLmN1c3RvbS1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jZW50ZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab2Page = class Tab2Page {
    constructor() {
        this.playlists = [];
        this.display = false;
        // Get playlists from session storage and display them
        if (JSON.parse(localStorage.getItem('likedPlaylists')) != null) {
            let i = JSON.parse(localStorage.getItem('likedPlaylists')).list;
            for (var j = 0; j < i.length; j++) {
                // Getting playlist by id
                var list = JSON.parse(localStorage.getItem('playlist-' + i[j]));
                this.playlists.push(list);
                this.display = true;
            }
        }
        else {
            this.playlists = null;
        }
    }
    clearPlaylists() {
        localStorage.setItem('likedPlaylists', null);
        location.reload();
    }
};
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map