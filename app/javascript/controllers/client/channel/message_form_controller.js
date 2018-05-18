import Quill from 'quill'

import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  static targets = ['channelId', 'text']

  connect() {
    super.connect()

    this.addEventListeners(
      // [this.textTarget, 'keyup', this.submitFormOnEnter],
      // [this.element, 'ajax:success', this.ajaxSuccess],
      this.controllerEventListener('client--channel', 'change:current', this.updateChannelId),
    )

    this.initQuill()
  }

  initQuill() {
    this.quill = new Quill(this.textTarget, { placeholder: 'Jot something down' })
    console.log(this.quill)
    this.quill.on('selection-change', (range, _oldRange, _source) => {
      if (range) {
        console.log(this, 'focus')
        this.textEditorFocus()
      } else {
        console.log(this, 'blur')
        this.textEditorBlur()
      }
    })
  }

  textEditorFocus() {
    this.textTarget.classList.add('focus')
  }

  textEditorBlur() {
    this.textTarget.classList.remove('focus')
  }

  updateChannelId(event) {
    if (!event.detail.current) return
    this.channelIdTarget.value = event.detail.controller.channelId
  }

  // ajaxSuccess(_event) {
  //   this.textTarget.value = ''
  // }

  // submitFormOnEnter(event) {
  //   if (this.constructor.isEnter(event)) {
  //     Rails.fire(this.element, 'submit')
  //   }
  // }
  //
  // static isEnter(event) {
  //   return event.keyCode === 13 && !event.shiftKey
  // }
}
