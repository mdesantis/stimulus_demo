import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    console.log('ChannelsListLinkController connected', this.channelId)
  }

  disconnect() {
    console.log('ChannelsListLinkController disconnected', this.channelId)
  }

  get channelId() {
    return this.element.dataset.channelId
  }

  // get currentChannelId() {
  //
  // }

  switchChannel(event) {
    console.log('switchChannel', this, event)
  }
}
