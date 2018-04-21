import { Controller } from 'stimulus'
import Mixin from 'utils/class/mixin'
import EventListeners from 'controllers/mixins/event_listeners'
import GetControllerHelpers from 'controllers/mixins/get_controller_helpers'
import ControllerEvents from 'controllers/mixins/controller_events'

export default class extends Mixin(
  Controller,
  [
    EventListeners,
    GetControllerHelpers,
    ControllerEvents,
  ],
) {}
