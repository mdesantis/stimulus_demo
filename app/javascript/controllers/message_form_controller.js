import ApplicationController from './application_controller'

export default class extends ApplicationController {
  connect() {
    this.addEventListener(this.element, 'ajax:success', this.ajaxSuccess)
    this.addEventListener(this.textarea(), 'keyup', this.submitFormOnEnter)
  }

  ajaxSuccess(_event) {
    this.textarea().value = ''
  }

  textarea() {
    return this.element.querySelector('[name="message[text]"]')
  }

  submitFormOnEnter(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      Rails.fire(this.element, 'submit')
    }
  }
}
