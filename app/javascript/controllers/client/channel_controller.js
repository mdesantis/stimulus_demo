import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    console.log('ClientChannelController connected', this.element)
  }

  initialize() {
    super.initialize()

    this.current = this.current // LOL
  }

  disconnect() {
    console.log('ClientChannelController disconnected', this)
  }

  get channelId() {
    return this.data.get('id')
  }

  get current() {
    return JSON.parse(this.data.get('current'))
  }

  set current(value) {
    if (value) {
      this.element.classList.add('current-channel')
      this.element.classList.remove('cached-channel')
      this.getControllerForIdentifier('client--channel--message-form').channelIdTarget.value = this.channelId
    } else {
      this.element.classList.remove('current-channel')
      this.element.classList.add('cached-channel')
    }

    this.data.set('current', value)
  }
}
