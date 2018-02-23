App.channel = App.cable.subscriptions.create('ChannelChannel', {
  // Called when the subscription is ready for use on the server
  connected() {
    console.log('ChannelChannel connected')
  },

  // Called when the subscription has been terminated by the server
  disconnected() {
    console.log('ChannelChannel disconnected')
  },

  // Called when there's incoming data on the websocket for this channel
  received(data) {
    console.log('ChannelChannel received', data)
    const { event } = data
    const { detail } = data
    const customEvent = new CustomEvent(`cable:channel:messages:${event}`, { detail })
    document.dispatchEvent(customEvent)
  },
})
