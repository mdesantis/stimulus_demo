import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    console.log('ClientController connected', this.element)
  }

  disconnect() {
    console.log('ClientController disconnected', this)
  }

  channelElement(options) {
    const controller = this.channelController(options)
    return controller ? controller.element : null
  }

  channelController(options) {
    return this.getControllerForIdentifierAndData('client--channel', options)
  }

  get currentChannelController() {
    return this.channelController({ current: true })
  }

  cachedChannelElement(channelId) {
    return this.channelElement({ id: channelId, current: false })
  }

  cachedChannelController(channelId) {
    return this.channelController({ id: channelId, current: false })
  }

  get currentChannelId() {
    return this.currentChannelController.channelId
  }

  isCurrentChannel(channelId) {
    return channelId === this.currentChannelId
  }

  cachedChannelPresent(channelId) {
    return this.cachedChannelElement(channelId) !== null
  }

  channelsListLinkController(channelId) {
    return this.getControllerForIdentifierAndData('client--sidebar--channels-list-link', { 'channel-id': channelId })
  }

  visitCachedChannel(channelId) {
    this.currentChannelController.current = false
    this.cachedChannelController(channelId).current = true
    this.channelsListLinkController(channelId).visited()
  }

  visitUncachedChannel(channelId, channelElement) {
    this.currentChannelController.current = false
    document.querySelector('.client-main').prepend(channelElement)
    this.channelsListLinkController(channelId).visited()
  }
}
