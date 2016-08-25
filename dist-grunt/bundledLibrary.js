(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MyFancyLibrary = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var nameService_1 = require("./nameService");
var MyLibrary = (function () {
    function MyLibrary() {
        this.nameService = new nameService_1.NameService();
    }
    MyLibrary.prototype.getName = function () {
        return this.nameService.getName();
    };
    return MyLibrary;
}());
exports.MyLibrary = MyLibrary;

},{"./nameService":2}],2:[function(require,module,exports){
"use strict";
var NameService = (function () {
    function NameService() {
        this.name = "Horst";
        this.name = "Sebastian";
    }
    NameService.prototype.getName = function () {
        return this.name;
    };
    return NameService;
}());
exports.NameService = NameService;

},{}]},{},[1])(1)
});