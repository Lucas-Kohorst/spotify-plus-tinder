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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.custom-card-deck {\n  margin: 1em 0;\n}\n\n.custom-card-deck .mbsc-lv-sl-c {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.custom-card-deck .mbsc-lv-v {\n  padding-top: 88%;\n  min-height: 390px;\n}\n\n.custom-card-deck .mbsc-lv-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.custom-card-deck .mbsc-lv-item.mbsc-lv-item-swiping {\n  z-index: 10;\n}\n\n.custom-card-deck .custom-card-rotate-right {\n  transform: rotate(1deg);\n}\n\n.custom-card-deck .custom-card-rotate-left {\n  transform: rotate(-2deg);\n}\n\n.custom-card-deck .mbsc-card.custom-card {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.center {\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2tvaG9yc3QvRGVza3RvcC9GaWxlcy9TcHJpbmcyMDIwL0ZvdW5kYXRpb25zT2ZNb2JpbGVEZXNpZ24vUHJvamVjdDQvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksK0dBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtc2wtYyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtdiB7XG4gICAgcGFkZGluZy10b3A6IDg4JTtcbiAgICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtaXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1pdGVtLm1ic2MtbHYtaXRlbS1zd2lwaW5nIHtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLmN1c3RvbS1jYXJkLXJvdGF0ZS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5jdXN0b20tY2FyZC1yb3RhdGUtbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1jYXJkLmN1c3RvbS1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2VudGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sge1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAubWJzYy1sdi1zbC1jIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5tYnNjLWx2LXYge1xuICBwYWRkaW5nLXRvcDogODglO1xuICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtbHYtaXRlbS5tYnNjLWx2LWl0ZW0tc3dpcGluZyB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY3VzdG9tLWNhcmQtZGVjayAuY3VzdG9tLWNhcmQtcm90YXRlLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XG59XG5cbi5jdXN0b20tY2FyZC1kZWNrIC5jdXN0b20tY2FyZC1yb3RhdGUtbGVmdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbn1cblxuLmN1c3RvbS1jYXJkLWRlY2sgLm1ic2MtY2FyZC5jdXN0b20tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

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