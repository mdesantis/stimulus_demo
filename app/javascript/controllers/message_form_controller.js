import BaseController from '../packs/base_controller'

export default class extends BaseController {
  connect() {
    this.addEventListener(this.element, 'ajax:success', this.ajaxSuccess)
  }

  ajaxSuccess(_event) {
    this.textarea().value = ''
  }

  textarea() {
    return this.element.querySelector('[name="message[text]"]')
  }
}
