"use strict";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var LocalStorageBookmarks = function () {
  function LocalStorageBookmarks() {
    _classCallCheck(this, LocalStorageBookmarks);this.currentStorage = localStorage;this.currentBookmarks = this.currentStorage.getItem("local-storage-bookmarks");if (this.currentBookmarks) {
      console.log(this.currentStorage);console.log(this.currentBookmarks);
    }
  }_createClass(LocalStorageBookmarks, [{ key: "add", value: function add() {} }, { key: "remove", value: function remove() {} }, { key: "getList", value: function getList() {} }, { key: "isBookmarked", value: function isBookmarked() {} }]);return LocalStorageBookmarks;
}();

//# sourceMappingURL=local-storage-bookmarks.min-compiled.js.map