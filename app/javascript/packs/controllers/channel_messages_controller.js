import { Controller } from 'stimulus'

export default class extends Controller {
  static MESSAGE_EVENTS = ['create', 'destroy']

  connect() {
    this.messageEventListeners = {}

    this.constructor.MESSAGE_EVENTS.forEach((eventName) => {
      const listener = this.messageEventListener(eventName)
      document.addEventListener(`cable:channel:messages:${eventName}`, listener)
      this.messageEventListeners[eventName] = listener
    })
  }

  disconnect() {
    Object.entries(this.messageEventListeners).forEach(([eventName, listener]) => {
      document.removeEventListener(`cable:channel:messages:${eventName}`, listener)
    })
  }

  messageEventListener(eventName) {
    return this[`${eventName}Message`].bind(this)
  }

  createMessage(event) {
    console.log('createMessage', event)
    const { message } = event.detail
    const channelMessagesEl = this.element
    channelMessagesEl.insertAdjacentHTML('beforeend', message)
    channelMessagesEl.scrollTop = channelMessagesEl.scrollHeight
  }

  destroyMessage(event) {
    console.log('destroyMessage', event)
    const { messageId } = event.detail
    const element = this.element.querySelector(`.channel-message[data-message-id="${messageId}"]`)
    element.parentNode.removeChild(element)
  }
}
