webpackHotUpdate("index",{

/***/ "./ClientController.js":
/*!*****************************!*\
  !*** ./ClientController.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientController; });
/* harmony import */ var _services_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/EventEmitter */ "./services/EventEmitter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ClientController =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ClientController, _EventEmitter);

  function ClientController(clientConfig) {
    var _this;

    _classCallCheck(this, ClientController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClientController).call(this));
    _this.publicPath = "".concat(clientConfig.https ? 'https' : 'http', "://").concat(clientConfig.host, ":").concat(clientConfig.port, "/");
    console.log('ClientController: ', _this.publicPath);

    _this.init();

    return _this;
  }

  _createClass(ClientController, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      if (!window.hotClient) {
        window.hotClient = new _services_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }

      window.hotClient.on('open', function (e) {
        return _this2.emit('open', e);
      });
      window.hotClient.on('close', function (e) {
        return _this2.emit('close', e);
      });
      window.hotClient.on('message', function (e) {
        return _this2.emit('message', e);
      });
      window.hotClient.on('error', function (e) {
        return _this2.emit('error', e);
      });
    }
  }]);

  return ClientController;
}(_services_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNsaWVudENvbnRyb2xsZXIiLCJjbGllbnRDb25maWciLCJwdWJsaWNQYXRoIiwiaHR0cHMiLCJob3N0IiwicG9ydCIsImNvbnNvbGUiLCJsb2ciLCJpbml0Iiwid2luZG93IiwiaG90Q2xpZW50IiwiRXZlbnRFbWl0dGVyIiwib24iLCJlIiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsZ0I7Ozs7O0FBQ2pCLDRCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3RCO0FBRUEsVUFBS0MsVUFBTCxhQUFxQkQsWUFBWSxDQUFDRSxLQUFiLEdBQXFCLE9BQXJCLEdBQStCLE1BQXBELGdCQUFnRUYsWUFBWSxDQUFDRyxJQUE3RSxjQUFxRkgsWUFBWSxDQUFDSSxJQUFsRztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQyxNQUFLTCxVQUF2Qzs7QUFFQSxVQUFLTSxJQUFMOztBQU5zQjtBQU96Qjs7OzsyQkFFTTtBQUFBOztBQUNILFVBQUksQ0FBQ0MsTUFBTSxDQUFDQyxTQUFaLEVBQXVCO0FBQ25CRCxjQUFNLENBQUNDLFNBQVAsR0FBbUIsSUFBSUMsOERBQUosRUFBbkI7QUFDSDs7QUFFREYsWUFBTSxDQUFDQyxTQUFQLENBQWlCRSxFQUFqQixDQUFvQixNQUFwQixFQUE0QixVQUFBQyxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNDLElBQUwsQ0FBVSxNQUFWLEVBQWtCRCxDQUFsQixDQUFKO0FBQUEsT0FBN0I7QUFDQUosWUFBTSxDQUFDQyxTQUFQLENBQWlCRSxFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFBQyxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFWLEVBQW1CRCxDQUFuQixDQUFKO0FBQUEsT0FBOUI7QUFDQUosWUFBTSxDQUFDQyxTQUFQLENBQWlCRSxFQUFqQixDQUFvQixTQUFwQixFQUErQixVQUFBQyxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNDLElBQUwsQ0FBVSxTQUFWLEVBQXFCRCxDQUFyQixDQUFKO0FBQUEsT0FBaEM7QUFDQUosWUFBTSxDQUFDQyxTQUFQLENBQWlCRSxFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFBQyxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFWLEVBQW1CRCxDQUFuQixDQUFKO0FBQUEsT0FBOUI7QUFDSDs7OztFQW5CeUNGLDhEIiwiZmlsZSI6ImluZGV4LjBmNTE4ZjlmZjA1ZDFjYTAyY2U1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vc2VydmljZXMvRXZlbnRFbWl0dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRyb2xsZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50Q29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wdWJsaWNQYXRoID0gYCR7Y2xpZW50Q29uZmlnLmh0dHBzID8gJ2h0dHBzJyA6ICdodHRwJ306Ly8ke2NsaWVudENvbmZpZy5ob3N0fToke2NsaWVudENvbmZpZy5wb3J0fS9gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnRDb250cm9sbGVyOiAnLCB0aGlzLnB1YmxpY1BhdGgpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICghd2luZG93LmhvdENsaWVudCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaG90Q2xpZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmhvdENsaWVudC5vbignb3BlbicsIGUgPT4gdGhpcy5lbWl0KCdvcGVuJywgZSkpO1xyXG4gICAgICAgIHdpbmRvdy5ob3RDbGllbnQub24oJ2Nsb3NlJywgZSA9PiB0aGlzLmVtaXQoJ2Nsb3NlJywgZSkpO1xyXG4gICAgICAgIHdpbmRvdy5ob3RDbGllbnQub24oJ21lc3NhZ2UnLCBlID0+IHRoaXMuZW1pdCgnbWVzc2FnZScsIGUpKTtcclxuICAgICAgICB3aW5kb3cuaG90Q2xpZW50Lm9uKCdlcnJvcicsIGUgPT4gdGhpcy5lbWl0KCdlcnJvcicsIGUpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9