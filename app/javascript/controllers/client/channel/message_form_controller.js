import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  static targets = ['channelId', 'message']

  connect() {
    super.connect()

    this.addEventListeners(
      [this.messageTarget, 'keyup', this.submitFormOnEnter],
      [this.element, 'ajax:success', this.ajaxSuccess],
      this.controllerEventListener('client--channel', 'change:current', this.updateChannelId),
    )
  }

  updateChannelId(event) {
    this.channelIdTarget.value = event.detail.controller.channelId
  }

  ajaxSuccess(_event) {
    this.messageTarget.value = ''
  }

  submitFormOnEnter(event) {
    if (this.constructor.isEnter(event)) {
      Rails.fire(this.element, 'submit')
    }
  }

  static isEnter(event) {
    return event.keyCode === 13 && !event.shiftKey
  }
}
