App.channel = App.cable.subscriptions.create('ChannelChannel', {
  // Called when the subscription is ready for use on the server
  connected() {},

  // Called when the subscription has been terminated by the server
  disconnected() {},

  // Called when there's incoming data on the websocket for this channel
  received(_data) {},
})
