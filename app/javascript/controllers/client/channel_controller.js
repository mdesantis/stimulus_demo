import ApplicationController from 'controllers/application_controller'

export default class extends ApplicationController {
  get channelId() {
    return this.element.dataset.channelId
  }
}
