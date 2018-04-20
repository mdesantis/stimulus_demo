import { Controller } from 'stimulus'
import Mixin from 'utils/class/mixin'
import EventListeners from 'controllers/mixins/event_listeners'
import GetController from 'controllers/mixins/get_controller_mixin'

export default class extends Mixin(
  Controller,
  [
    EventListeners,
    GetController,
  ],
) {}
