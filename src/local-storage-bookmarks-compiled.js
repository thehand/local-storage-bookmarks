"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Local Storage Bookmarks
 *
 * @brief Implements an interface object to the local storage, easy to use to save bookmarks/strings/values
 * @author Francesco Salamone <francesco.salamone@ssd.it>
 *
 */
var LocalStorageBookmarks = function () {

  /**
   * Initialize the class, set the debug mode to false if not passed
   * create an empty bookmarks container if it not exists into the local storage
   * @param debug {boolean}
   */
  function LocalStorageBookmarks(debug) {
    _classCallCheck(this, LocalStorageBookmarks);

    this.debug = debug;
    this.currentStorage = localStorage;
    this.currentBookmarks = this.getList();

    if (this.currentBookmarks === null) {
      this.log("No bookmarks container found");
      this.currentBookmarks = [];
      this.saveBookmarks();
      this.log("Empty bookmarks container created into the local storage");
    } else {
      this.log("Found bookmarks container");
      this.log(this.currentBookmarks);
    }
  }

  /**
   * Add a bookmark into the list if it's new
   * @param bookmark Is the bookmark's content, generally a string
   */


  _createClass(LocalStorageBookmarks, [{
    key: "add",
    value: function add(bookmark) {
      var currentBookmarks = this.getList();
      var bookmarkPos = currentBookmarks.indexOf(bookmark.toString());
      if (bookmarkPos == -1) {
        this.currentBookmarks.push(bookmark);
        this.saveBookmarks();
        this.log("Bookmark successfully saved: " + bookmark);
      } else {
        this.log("Bookmark already exists");
      }
    }

    /**
     * Removes a bookmark if it is already into the list
     * @param bookmark {string} Is the bookmark's content
     */

  }, {
    key: "remove",
    value: function remove(bookmark) {
      var currentBookmarks = this.getList();
      var bookmarkPos = currentBookmarks.indexOf(bookmark.toString());
      if (bookmarkPos != -1) {
        this.currentBookmarks.splice(bookmarkPos, 1);
        this.saveBookmarks();
        this.log("Bookmark successfully removed: " + bookmark);
      } else {
        this.log("Bookmark not exists");
      }
    }

    /**
     * Returns an array with all current saved bookmarks
     * @returns {Array|*}
     */

  }, {
    key: "getList",
    value: function getList() {
      var currentBookmarks = this.currentStorage.getItem('local-storage-bookmarks');
      if (typeof currentBookmarks === 'string') return currentBookmarks.split(",");
      return null;
    }

    /**
     * Check if a bookmark is already into the list
     * @param bookmark {string} Is the bookmark's content
     * @returns {boolean}
     */

  }, {
    key: "isBookmarked",
    value: function isBookmarked(bookmark) {
      var currentBookmarks = this.getList();
      return currentBookmarks.indexOf(bookmark.toString()) != -1;
    }

    /**
     * Clear all bookmarks
     */

  }, {
    key: "reset",
    value: function reset() {
      this.log("Clearing all bookmarks");
      this.currentBookmarks = [];
      this.saveBookmarks();
    }

    /**
     * Save current bookmarks into local storage
     */

  }, {
    key: "saveBookmarks",
    value: function saveBookmarks() {
      this.currentStorage.setItem('local-storage-bookmarks', this.currentBookmarks);
    }

    /**
     * Executes a console.log if "true" is passed enabling debug mode
     * @param string {string}
     */

  }, {
    key: "log",
    value: function log(string) {
      if (this.debug) {
        console.log(string);
      }
    }
  }]);

  return LocalStorageBookmarks;
}();

//# sourceMappingURL=local-storage-bookmarks-compiled.js.map