/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 374);
/******/ })
/************************************************************************/
/******/ ({

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(375);


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(376);

var _commentPage = __webpack_require__(377);

(0, _commentPage.commentPage)(document.querySelector('#commentPage'));

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentPage = commentPage;
function commentPage(userComments) {
  var URL = 'https://evening-dawn-11092.herokuapp.com/comments';
  var comments = [];
  var commentElements = [];
  var commentBlock = void 0;
  var form = void 0;
  var input = void 0;
  var btnSubmit = void 0;
  var author = void 0;

  function render() {
    form = document.createElement('form');
    author = document.createElement('input');
    input = document.createElement('textarea');
    btnSubmit = document.createElement('button');
    commentBlock = document.createElement('div');

    //styles
    form.style.width = "100%";
    author.style.width = "100%";
    author.style.borderRadius = "5px";
    author.style.border = "1px solid rgb(204, 204, 204)";
    input.style.width = "100%";
    input.style.marginTop = "10px";
    input.style.marginBottom = "9px";
    input.style.borderRadius = "4px";
    input.style.border = "1px solid rgb(204, 204, 204)";
    input.style.height = "100px";
    btnSubmit.style.width = "100%";
    btnSubmit.style.height = "35px";
    btnSubmit.style.backgroundColor = "blue";
    btnSubmit.style.color = "white";
    btnSubmit.style.border = "none";
    btnSubmit.style.marginBottom = "15px";
    btnSubmit.style.fontWeight = "600";

    commentBlock.classList.add('comment_block');

    btnSubmit.textContent = 'Add my Comment';
    form.onsubmit = function (event) {
      event.preventDefault();
      var data = {
        author: author.value,
        text: input.value
      };

      var xhr = new XMLHttpRequest();
      xhr.open('POST', URL);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.response);
            var responseData = JSON.parse(xhr.response);
            var authorName = document.createElement('div');
            var commentItem = document.createElement('div');
            authorName.textContent = responseData.author;
            commentItem.textContent = responseData.text;
            commentBlock.appendChild(authorName);
            commentBlock.appendChild(commentItem);
          } else {
            console.error(xhr.response);
          }
        }
      };
    };

    form.appendChild(author);
    form.appendChild(input);
    form.appendChild(btnSubmit);
    userComments.appendChild(form);
    userComments.appendChild(commentBlock);
  }

  function renderList() {
    commentElements = comments.map(function (comment) {
      var authorName = document.createElement('div');
      var commentItem = document.createElement('div');
      var commentDate = document.createElement('div');

      authorName.classList.add('author-item');
      commentItem.classList.add('text-item');

      authorName.style.fontWeight = "600";
      authorName.style.color = "brown";
      commentDate.style.fontSize = "12px";
      commentDate.style.textAlign = "right";
      commentDate.style.color = "gray";

      authorName.textContent = comment.author;
      commentItem.textContent = comment.text;
      commentDate.textContent = comment.date;
      commentBlock.appendChild(authorName);
      commentBlock.appendChild(commentItem);
      commentBlock.appendChild(commentDate);
    });
  }

  function fetchList() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          comments = JSON.parse(xhr.response);
          renderList();
        } else {
          console.error(xhr.response);
        }
      }
    };
  }

  render();
  fetchList();
}

/***/ })

/******/ });