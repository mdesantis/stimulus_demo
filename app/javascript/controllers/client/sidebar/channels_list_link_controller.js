import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  initialize() {
    super.initialize()

    this.selected = this.selected
  }

  connect() {
    super.connect()

    this.addEventListeners(
      [this.element, 'ajax:before', this.visitChannel],
      [this.element, 'ajax:success', this.visitUncachedChannel],
    )
  }

  get selected() {
    return JSON.parse(this.data.get('selected'))
  }

  set selected(value) {
    if (value) {
      this.element.classList.add('selected')
    } else {
      this.element.classList.remove('selected')
    }

    this.data.set('selected', value)
  }

  visitUncachedChannel(event) {
    const newChannelElement = event.detail[0].querySelector('[data-controller="client--channel"]')
    this.clientController.visitUncachedChannel(this.channelId, newChannelElement)
  }

  get channelId() {
    return this.data.get('channel-id')
  }

  get clientController() {
    return this.getControllerForIdentifier('client')
  }

  resetSelected() {
    this.context.module.connectedContexts.forEach((value) => {
      const { controller } = value
      controller.selected = false
    })
  }

  visited() {
    this.resetSelected()
    this.selected = true
    Turbolinks.changeURL(this.element.href)
  }

  visitChannel(event) {
    if (this.clientController.isCurrentChannel(this.channelId)) {
      event.preventDefault()
      return
    }

    if (this.clientController.cachedChannelPresent(this.channelId)) {
      event.preventDefault()
      this.clientController.visitCachedChannel(this.channelId)
    }
  }
}
