import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  connect() {
    super.connect()

    this.addEventListeners(
      [document, 'cable:client:messages:create', this.createMessage],
      [document, 'cable:client:messages:destroy', this.destroyMessage],
    )

    this.scrollToBottom()
  }

  scrollToBottom() {
    this.element.scrollTop = this.element.scrollHeight
  }

  createMessage(event) {
    const { channelId } = this.channelController
    const messageChannelId = event.detail.message.channel_id.toString()

    if (channelId !== messageChannelId) return

    const { views } = event.detail

    this.element.insertAdjacentHTML('beforeend', views.message)
    this.scrollToBottom()
  }

  destroyMessage(event) {
    const { message } = event.detail
    const element = this.element.querySelector(`.channel-message[data-message-id="${message.id}"]`)

    element.parentNode.removeChild(element)
  }

  get channelController() {
    return this.getControllerForElement(this.element.closest('[data-controller="client--channel"]'))
  }
}
