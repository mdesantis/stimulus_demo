export default Base => class extends Base {
  getController(querySelector, controllerIdentifier) {
    return this.application.getControllerForElementAndIdentifier(
      document.querySelector(querySelector),
      controllerIdentifier,
    )
  }
}
