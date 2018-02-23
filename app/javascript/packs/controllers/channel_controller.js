import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    document.addEventListener('cable:channel:messagecreated', this.constructor.createMessage)
  }

  static createMessage(event) {
    console.log('createMessage', event)
    const { message } = event.detail
    document.getElementById('channel-messages').insertAdjacentHTML('beforeend', message)
  }
}
