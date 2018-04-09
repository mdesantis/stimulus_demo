import { Controller } from 'stimulus'
import Mixins from 'utils/class/mixins'
import EventListenersMixin from 'controllers/mixins/event_listeners_mixin'
import GetControllerMixin from 'controllers/mixins/get_controller_mixin'

export default class extends Mixins(
  Controller,
  EventListenersMixin,
  GetControllerMixin,
) {}
