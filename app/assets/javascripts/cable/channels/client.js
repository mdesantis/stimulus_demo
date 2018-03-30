App.channel = App.cable.subscriptions.create('ClientChannel', {
  // Called when the subscription is ready for use on the server
  connected() {
    console.log('ClientChannel connected')
  },

  // Called when the subscription has been terminated by the server
  disconnected() {
    console.log('ClientChannel disconnected')
  },

  // Called when there's incoming data on the websocket for this channel
  received(data) {
    console.log('ClientChannel received', data)
    const { event } = data
    const { detail } = data
    const customEvent = new CustomEvent(`cable:client:messages:${event}`, { detail })
    document.dispatchEvent(customEvent)
  },
})
