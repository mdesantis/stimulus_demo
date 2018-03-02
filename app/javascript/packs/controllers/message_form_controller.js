import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.element.addEventListener('ajax:success', this.constructor.ajaxSuccess)
  }

  disconnect() {
    this.element.removeEventListener('ajax:success', this.constructor.ajaxSuccess)
  }

  static ajaxSuccess(_event) {
    document.getElementById('message_text').value = ''
  }
}
