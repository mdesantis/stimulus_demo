import { Controller } from 'stimulus'

export default class extends Controller {
  // connect() {
  //   console.log('Hello, Stimulus!', this.element);
  // }

  createMessage(message) {
    console.log('createMessage', message, this.element)
    document.getElementById('channel__messages').insertAdjacentHTML('beforeend', message)
  }
}
