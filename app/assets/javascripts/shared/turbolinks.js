// Expose Turbolinks internal change location API. Reference:
// https://github.com/turbolinks/turbolinks/pull/61
Turbolinks.changeURL = function changeURL(location) {
  return this
    .controller
    .pushHistoryWithLocationAndRestorationIdentifier(location, this.uuid())
}
