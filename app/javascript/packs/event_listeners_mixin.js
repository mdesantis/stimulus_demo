export default Base => class extends Base {
  initialize() {
    this.listeners = []

    super.initialize()
  }

  disconnect() {
    this.removeEventListeners()

    super.disconnect()
  }

  addEventListener(element, eventName, listener) {
    const boundListener = listener.bind(this)

    element.addEventListener(eventName, boundListener)
    this.listeners.push([element, eventName, boundListener])
  }

  removeEventListeners() {
    const { listeners } = this

    while (listeners.length) {
      this.constructor.removeEventListener(...listeners.pop())
    }
  }

  static removeEventListener(element, eventName, listener) {
    element.removeEventListener(eventName, listener)
  }
}
