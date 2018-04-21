export default Base => class extends Base {
  dispatchControllerEvent(eventName, detail = {}) {
    const customEvent = new CustomEvent(`stimulus:${this.identifier}:${eventName}`, { detail })
    document.dispatchEvent(customEvent)
  }

  static controllerEventListener(controllerIdentifier, eventName, callback) {
    return [document, `stimulus:${controllerIdentifier}:${eventName}`, callback]
  }

  controllerEventListener(controllerIdentifier, eventName, callback) {
    return this.constructor.controllerEventListener(controllerIdentifier, eventName, callback)
  }
}
