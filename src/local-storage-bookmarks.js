/**
 * Local Storage Bookmarks
 *
 * @brief Implements an interface object to the local storage, easy to use to save bookmarks/strings/values
 * @author Francesco Salamone <francesco.salamone@ssd.it>
 *
 */
class LocalStorageBookmarks {

  /**
   * Initialize the class, set the debug mode to false if not passed
   * create an empty bookmarks container if it not exists into the local storage
   * @param debug {boolean}
   */
  constructor(debug) {
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
  add(bookmark) {
    let currentBookmarks = this.getList();
    let bookmarkPos = currentBookmarks.indexOf(bookmark.toString());
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
  remove(bookmark) {
    let currentBookmarks = this.getList();
    let bookmarkPos = currentBookmarks.indexOf(bookmark.toString());
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
  getList() {
    let currentBookmarks = this.currentStorage.getItem('local-storage-bookmarks');
    return currentBookmarks.split(",");
  }

  /**
   * Check if a bookmark is already into the list
   * @param bookmark {string} Is the bookmark's content
   * @returns {boolean}
   */
  isBookmarked(bookmark) {
    let currentBookmarks = this.getList();
    return (currentBookmarks.indexOf(bookmark.toString()) != -1);
  }

  /**
   * Clear all bookmarks
   */
  reset() {
    this.log("Clearing all bookmarks");
    this.currentBookmarks = [];
    this.saveBookmarks();
  }

  /**
   * Save current bookmarks into local storage
   */
  saveBookmarks() {
    this.currentStorage.setItem('local-storage-bookmarks', this.currentBookmarks);
  }

  /**
   * Executes a console.log if "true" is passed enabling debug mode
   * @param string {string}
   */
  log(string) {
    if (this.debug) {
      console.log(string);
    }
  }
}