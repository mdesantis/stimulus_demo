App.channels.client_channels_messages = App.cable.subscriptions.create('Client::Channels::MessagesChannel', {
  connected() {
    console.log('Client::Channels::MessagesChannel connected')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log('Client::Channels::MessagesChannel disconnected')
    // Called when the subscription has been terminated by the server
  },

  received(_data) {
    console.log('Client::Channels::MessagesChannel received', _data)
    // Called when there's incoming data on the websocket for this channel
  },

  create() {
    const object = {}
    const formData = new FormData(document.getElementById('channel-message-form'))


    formData.forEach((value, key) => { object[key] = value })

    console.log(object)

    return this.perform('create', object)
  },
})
