import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    document.addEventListener('cable:channel:messages:create', this.constructor.createMessage)
    document.addEventListener('cable:channel:messages:destroy', this.constructor.destroyMessage)
  }

  static createMessage(event) {
    console.log('createMessage', event)
    const { message } = event.detail
    document.getElementById('channel-messages').insertAdjacentHTML('beforeend', message)
  }

  static destroyMessage(event) {
    console.log('destroyMessage', event)
    const { messageId } = event.detail
    const element = document.querySelector(`.channel-message[data-message-id="${messageId}"]`)
    element.parentNode.removeChild(element)
  }
}
