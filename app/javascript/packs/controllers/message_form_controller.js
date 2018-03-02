import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.listeners = []

    this.addEventListener(this.element, 'ajax:success', this.ajaxSuccess)
  }

  disconnect() {
    this.removeEventListeners()
  }

  ajaxSuccess(_event) {
    this.textarea().value = ''
  }

  textarea() {
    return this.element.querySelector('[name="message[text]"]')
  }

  addEventListener(element, eventName, listener) {
    element.addEventListener(eventName, listener.bind(this))
    this.listeners.push([element, eventName, listener])
  }

  removeEventListeners() {
    this.listeners.forEach(([element, eventName, listener]) => {
      element.removeEventListener(eventName, listener)
    })
  }
}
