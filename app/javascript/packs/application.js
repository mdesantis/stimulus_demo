// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

window.addEventListener('DOMContentLoaded', () => {
  const application = Application.start()
  const context = require.context('./controllers', true, /\.js$/)
  application.load(definitionsFromContext(context))

  window.App.stimulus = application

  const channelEl = document.getElementById('channel')
  console.log(window.App.stimulus.getControllerForElementAndIdentifier(channelEl, 'channel'))
})
