import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  initialize() {
    super.initialize()

    this.selected = this.selected
  }

  connect() {
    super.connect()

    this.addEventListeners(
      [this.element, 'ajax:before', this.selectChannel],
      [this.element, 'ajax:success', this.selectChannelUncached],
    )
  }

  get selected() {
    return JSON.parse(this.data.get('selected'))
  }

  set selected(value) {
    if (value) {
      this.resetSelected()
      this.element.classList.add('selected')
    } else {
      this.element.classList.remove('selected')
    }

    this.data.set('selected', value)
  }

  selectChannelUncached(event) {
    const channelElement = event.detail[0].querySelector('[data-controller="client--channel"]')
    this.changeSelected({ channelId: this.channelId, channelElement })
  }

  get channelId() {
    return this.data.get('channel-id')
  }

  resetSelected() {
    this.context.module.connectedContexts.forEach((value) => {
      const { controller } = value
      controller.selected = false
    })
  }

  get cachedChannelExists() {
    return this.getControllerForIdentifierAndData('client--channel', { id: this.channelId, current: false }) !== null
  }

  changeSelected(eventDetails) {
    this.selected = true
    Turbolinks.changeURL(this.element.href)
    this.dispatchControllerEvent('change:selected', eventDetails)
  }

  selectChannel(event) {
    if (this.selected) {
      event.preventDefault()
      return
    }

    if (this.cachedChannelExists) {
      event.preventDefault()
      this.changeSelected({ channelId: this.channelId })
    }
  }
}
