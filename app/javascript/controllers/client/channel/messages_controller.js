import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    this.addEventListeners(
      [document, 'cable:client:messages:create', this.createMessage],
      [document, 'cable:client:messages:destroy', this.destroyMessage],
    )
  }

  createMessage(event) {
    // console.log('createMessage', event)

    const { channelId } = this.channelController
    const messageChannelId = event.detail.message.channel_id.toString()

    if (channelId !== messageChannelId) return

    const { views } = event.detail
    const channelMessagesEl = this.element

    channelMessagesEl.insertAdjacentHTML('beforeend', views.message)
    channelMessagesEl.scrollTop = channelMessagesEl.scrollHeight
  }

  destroyMessage(event) {
    // console.log('destroyMessage', event)

    const { message } = event.detail
    const element = this.element.querySelector(`.channel-message[data-message-id="${message.id}"]`)

    element.parentNode.removeChild(element)
  }

  get channelController() {
    return this.getControllerForElement(this.element.closest('[data-controller="client--channel"]'))
  }
}
