import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    super.connect()

    this.current = this.current // LOL
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
    } else {
      this.element.classList.remove('current-channel')
      this.element.classList.add('cached-channel')
    }

    this.data.set('current', value)

    this.dispatchControllerEvent('change:current', { controller: this })
  }
}
