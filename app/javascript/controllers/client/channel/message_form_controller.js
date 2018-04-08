import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    this.addEventListeners(
      [this.element, 'ajax:success', this.ajaxSuccess],
      [this.textarea(), 'keyup', this.submitFormOnEnter],
    )
  }

  ajaxSuccess(_event) {
    this.textarea().value = ''
  }

  textarea() {
    return this.element.querySelector('.channel-message-form-textarea')
  }

  submitFormOnEnter(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      Rails.fire(this.element, 'submit')
    }
  }
}
