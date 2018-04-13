// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel`
// command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function createActionCableConsumer() {
  this.App.cable = ActionCable.createConsumer()
  this.App.channels = {}
}).call(this)
