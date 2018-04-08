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

    const { views } = event.detail
    const channelMessagesEl = this.element

    channelMessagesEl.insertAdjacentHTML('beforeend', views.message)
    channelMessagesEl.scrollTop = channelMessagesEl.scrollHeight
  }

  destroyMessage(event) {
    console.log('destroyMessage', event)

    const { message } = event.detail
    const element = this.element.querySelector(`.channel-message[data-message-id="${message.id}"]`)

    element.parentNode.removeChild(element)
  }
}
