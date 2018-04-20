export default Base => class extends Base {
  initialize() {
    this.eventListeners = []

    super.initialize()
  }

  disconnect() {
    this.removeEventListeners()

    super.disconnect()
  }

  addEventListener(element, eventName, listener, options) {
    const boundListener = listener.bind(this)

    element.addEventListener(eventName, boundListener, options)
    this.eventListeners.push([element, eventName, boundListener, options])
  }

  addEventListeners(...eventListeners) {
    eventListeners.forEach((eventListener) => { this.addEventListener(...eventListener) })
  }

  removeEventListeners() {
    const { eventListeners } = this

    while (eventListeners.length) {
      this.constructor.removeEventListener(...eventListeners.pop())
    }
  }

  static removeEventListener(element, eventName, listener) {
    element.removeEventListener(eventName, listener)
  }
}
