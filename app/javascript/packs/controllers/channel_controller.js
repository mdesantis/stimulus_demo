import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    // console.log('Hello, Stimulus!', this.element);
    // const channelEl = document.getElementById('channel')
    // App.stimulus.getControllerForElementAndIdentifier(channelEl, 'channel').createMessage(data.message)
    document.addEventListener('cable:channel:messagecreated', this.constructor.createMessage)
  }

  static createMessage(event) {
    console.log('createMessage', event)
    // const message = event.detail.message
    const { message } = event.detail
    document.getElementById('channel__messages').insertAdjacentHTML('beforeend', message)
  }
}
