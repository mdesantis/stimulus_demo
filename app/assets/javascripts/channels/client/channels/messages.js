App.channels.client.channels.messages = App.cable.subscriptions.create('Client::Channels::MessagesChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(_data) {
    // Called when there's incoming data on the websocket for this channel
  },

  create() {
    return this.perform('create')
  },
})
