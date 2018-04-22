import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    super.connect()

    this.addEventListeners(
      // [window, 'popstate', this.popState],
      this.controllerEventListener(
        'client--sidebar--channels-list-link', 'change:selected', this.loadChannel,
      ),
    )
  }

  popState(event) {
    console.log('popState', this, event)
    event.preventDefault()
    return false
  }

  loadChannel(event) {
    const { channelElement } = event.detail
    if (!channelElement) return
    this.element.querySelector('.client-main').prepend(channelElement)
  }
}
