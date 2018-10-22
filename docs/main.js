(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo></app-todo>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo-item/todo-item.component */ "./src/app/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo-add/todo-add.component */ "./src/app/todo/todo-add/todo-add.component.ts");
/* harmony import */ var _todo_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/footer/footer.component */ "./src/app/todo/footer/footer.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/app.reducers */ "./src/store/app.reducers.ts");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter/filter.pipe */ "./src/app/filter/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"],
                _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
                _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
                _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_7__["TodoAddComponent"],
                _todo_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["TodoFooterComponent"],
                _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_13__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production,
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (todos, filterType) {
        switch (filterType) {
            case 'complete':
                return todos.filter(function (data) { return data.complete; });
            case 'pending':
                return todos.filter(function (data) { return !data.complete; });
            default:
                return todos;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterTodo'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"info\">\n  <p>Double-click to edit a todo</p>\n  <!-- Remove the below line ↓ -->\n  <p>Template by <a href=\"http://sindresorhus.com\">Sindre Sorhus</a></p>\n  <!-- Change this out with your name and url ↓ -->\n  <p>Created by <a href=\"http://todomvc.com\">you</a></p>\n  <p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/todo/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/todo/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/todo/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <span class=\"todo-count\" *ngIf=\"hasItems$ | async\"><strong>{{pendingItems$ | async}}</strong> item left</span>\n  <ul class=\"filters\">\n    <li *ngFor=\"let filter of validFiltes\">\n      <a [ngClass]=\"{'selected': selectFilter(filter)}\" (click)=\"applyFilter(filter)\">{{filter}}</a>\n    </li>\n  </ul>\n  <button class=\"clear-completed\" (click)=\"deleteComplete()\">Clear completed</button>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/todo/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/todo/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_filter_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/actions/filter.action */ "./src/store/actions/filter.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/todo.action */ "./src/store/actions/todo.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoFooterComponent = /** @class */ (function () {
    function TodoFooterComponent(store) {
        var _this = this;
        this.store = store;
        this.validFiltes = ['all', 'complete', 'pending'];
        this.store
            .subscribe(function (data) {
            _this.activeFilter = data.filter;
        });
    }
    TodoFooterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TodoFooterComponent.prototype, "hasItems$", {
        get: function () {
            return this.store.select('todos')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.length > 0; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoFooterComponent.prototype, "pendingItems$", {
        get: function () {
            return this.store.select('todos')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (item) { return !item.complete; }).length;
            }));
        },
        enumerable: true,
        configurable: true
    });
    TodoFooterComponent.prototype.applyFilter = function (nameFilter) {
        var action = new _store_actions_filter_action__WEBPACK_IMPORTED_MODULE_1__["SetfilterAction"](nameFilter);
        this.store.dispatch(action);
    };
    TodoFooterComponent.prototype.selectFilter = function (nameFilter) {
        return this.activeFilter === nameFilter;
    };
    TodoFooterComponent.prototype.deleteComplete = function () {
        this.store.dispatch(new _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["ClearCompleteTodoAction"]());
    };
    TodoFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/todo/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/todo/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoFooterComponent);
    return TodoFooterComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>todos</h1>\n  <input class=\"new-todo\"\n         placeholder=\"What needs to be done?\"\n         [formControl]=\"textInput\"\n         (keyup.enter)=\"addTodo()\"\n         autofocus>\n</header>\n"

/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/todo.action */ "./src/store/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoAddComponent = /** @class */ (function () {
    function TodoAddComponent(store) {
        this.store = store;
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.textInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    };
    TodoAddComponent.prototype.addTodo = function () {
        if (this.textInput.valid) {
            var action = new _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["AddTodoAction"](this.textInput.value);
            this.store.dispatch(action);
            this.textInput.setValue('');
        }
    };
    TodoAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-add',
            template: __webpack_require__(/*! ./todo-add.component.html */ "./src/app/todo/todo-add/todo-add.component.html"),
            styles: [__webpack_require__(/*! ./todo-add.component.css */ "./src/app/todo/todo-add/todo-add.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.css":
/*!********************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{'completed': item.complete, 'editing': edit }\">\n  <div class=\"view\">\n    <input class=\"toggle\"\n           type=\"checkbox\"\n           [checked]=\"item.complete\"\n           [formControl]=\"checkField\">\n    <label (dblclick)=\"editText()\">{{item.text}}</label>\n    <button class=\"destroy\" (click)=\"deleteItem()\"></button>\n  </div>\n  <input class=\"edit\"\n         [value]=\"item.text\"\n         [formControl]=\"txtInput\"\n         (blur)=\"editFinish()\"\n         (keyup.enter)=\"editFinish()\"\n         #textInput\n    >\n</li>\n"

/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/todo.action */ "./src/store/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(store) {
        this.store = store;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.complete);
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.text, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.checkField.valueChanges.subscribe(function () {
            var action = new _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["ToggleTodoAction"](_this.item.id);
            _this.store.dispatch(action);
        });
    };
    TodoItemComponent.prototype.editText = function () {
        var _this = this;
        this.edit = true;
        setTimeout(function () {
            _this.textInput.nativeElement.focus();
        }, 1);
    };
    TodoItemComponent.prototype.editFinish = function () {
        this.edit = false;
        if (this.txtInput.valid && this.txtInput.value !== this.item.text) {
            var action = new _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["EditTodoAction"](this.item.id, this.txtInput.value);
            this.store.dispatch(action);
        }
    };
    TodoItemComponent.prototype.deleteItem = function () {
        var action = new _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["DeleteTodoAction"](this.item.id);
        this.store.dispatch(action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodoItemComponent.prototype, "textInput", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todo/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todo/todo-item/todo-item.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n  <app-todo-item *ngFor=\"let item of todos | filterTodo:typeFilter\" [item]=\"item\"></app-todo-item>\n</ul>\n"

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store) {
        var _this = this;
        this.store = store;
        this.store.subscribe(function (data) {
            _this.todos = data.todos;
            _this.typeFilter = data.filter;
        });
    }
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n\n\n  <app-todo-add></app-todo-add>\n\n  <section class=\"main\">\n    <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n    <label for=\"toggle-all\" (click)=\"toggleAll()\">Mark all as complete</label>\n    <app-todo-list></app-todo-list>\n  </section>\n  <app-todo-footer></app-todo-footer>\n</section>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/todo.action */ "./src/store/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        this.store = store;
        this.complete = false;
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.toggleAll = function () {
        this.complete = !this.complete;
        var action = new _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["ToggleAllTodoAction"](this.complete);
        this.store.dispatch(action);
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/store/actions/filter.action.ts":
/*!********************************************!*\
  !*** ./src/store/actions/filter.action.ts ***!
  \********************************************/
/*! exports provided: FILTER, SetfilterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER", function() { return FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetfilterAction", function() { return SetfilterAction; });
var FILTER = 'FILTER';
var SetfilterAction = /** @class */ (function () {
    function SetfilterAction(filter) {
        this.filter = filter;
        this.type = FILTER;
    }
    return SetfilterAction;
}());



/***/ }),

/***/ "./src/store/actions/todo.action.ts":
/*!******************************************!*\
  !*** ./src/store/actions/todo.action.ts ***!
  \******************************************/
/*! exports provided: ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL, CLEAR_COMPLETE, AddTodoAction, ToggleTodoAction, EditTodoAction, DeleteTodoAction, ToggleAllTodoAction, ClearCompleteTodoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return EDIT_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL", function() { return TOGGLE_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COMPLETE", function() { return CLEAR_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return AddTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return ToggleTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoAction", function() { return EditTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoAction", function() { return DeleteTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodoAction", function() { return ToggleAllTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCompleteTodoAction", function() { return ClearCompleteTodoAction; });
var ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = 'TOGGLE_TODO';
var EDIT_TODO = 'EDIT_TODO';
var DELETE_TODO = 'DELETE_TODO';
var TOGGLE_ALL = 'TOGGLE_ALL';
var CLEAR_COMPLETE = 'CLEAR_COMPLETE';
var AddTodoAction = /** @class */ (function () {
    function AddTodoAction(text) {
        this.text = text;
        this.type = ADD_TODO;
    }
    return AddTodoAction;
}());

var ToggleTodoAction = /** @class */ (function () {
    function ToggleTodoAction(id) {
        this.id = id;
        this.type = TOGGLE_TODO;
    }
    return ToggleTodoAction;
}());

var EditTodoAction = /** @class */ (function () {
    function EditTodoAction(id, text) {
        this.id = id;
        this.text = text;
        this.type = EDIT_TODO;
    }
    return EditTodoAction;
}());

var DeleteTodoAction = /** @class */ (function () {
    function DeleteTodoAction(id) {
        this.id = id;
        this.type = DELETE_TODO;
    }
    return DeleteTodoAction;
}());

var ToggleAllTodoAction = /** @class */ (function () {
    function ToggleAllTodoAction(complete) {
        this.complete = complete;
        this.type = TOGGLE_ALL;
    }
    return ToggleAllTodoAction;
}());

var ClearCompleteTodoAction = /** @class */ (function () {
    function ClearCompleteTodoAction() {
        this.type = CLEAR_COMPLETE;
    }
    return ClearCompleteTodoAction;
}());



/***/ }),

/***/ "./src/store/app.reducers.ts":
/*!***********************************!*\
  !*** ./src/store/app.reducers.ts ***!
  \***********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/reducers/todo.reducer */ "./src/store/reducers/todo.reducer.ts");
/* harmony import */ var _store_reducers_filter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducers/filter.reducer */ "./src/store/reducers/filter.reducer.ts");


var appReducers = {
    todos: _store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filter: _store_reducers_filter_reducer__WEBPACK_IMPORTED_MODULE_1__["filterReducer"]
};


/***/ }),

/***/ "./src/store/reducers/filter.reducer.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/filter.reducer.ts ***!
  \**********************************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _actions_filter_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/filter.action */ "./src/store/actions/filter.action.ts");

var statusInit = 'all';
function filterReducer(state, action) {
    if (state === void 0) { state = statusInit; }
    switch (action.type) {
        case _actions_filter_action__WEBPACK_IMPORTED_MODULE_0__["FILTER"]:
            return action.filter;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/store/reducers/todo.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/todo.reducer.ts ***!
  \********************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/todo.action */ "./src/store/actions/todo.action.ts");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../todo.model */ "./src/store/todo.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var statusInit = [];
function todoReducer(state, action) {
    if (state === void 0) { state = statusInit; }
    switch (action.type) {
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]:
            var todo = new _todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](action.text);
            return state.concat([todo]);
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]:
            return state.map(function (item) {
                if (item.id === action.id) {
                    return __assign({}, item, { complete: !item.complete });
                }
                else {
                    return item;
                }
            });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["EDIT_TODO"]:
            return state.map(function (item) {
                if (item.id === action.id) {
                    return __assign({}, item, { text: action.text });
                }
                else {
                    return item;
                }
            });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ALL"]:
            return state.map(function (item) {
                return __assign({}, item, { complete: action.complete });
            });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_TODO"]:
            return state.filter(function (item) { return item.id !== action.id; });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["CLEAR_COMPLETE"]:
            return state.filter(function (data) { return !data.complete; });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/store/todo.model.ts":
/*!*********************************!*\
  !*** ./src/store/todo.model.ts ***!
  \*********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(text) {
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.complete = false;
        this.id = Math.random();
    }
    return Todo;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Esteban pc/projects/redux/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map