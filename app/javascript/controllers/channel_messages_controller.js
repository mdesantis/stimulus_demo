import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static MESSAGE_EVENTS = ['create', 'destroy']

  connect() {
    this.constructor.MESSAGE_EVENTS.forEach((eventName) => {
      const listener = this[`${eventName}Message`]
      this.addEventListener(document, `cable:client:messages:${eventName}`, listener)
    })
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
