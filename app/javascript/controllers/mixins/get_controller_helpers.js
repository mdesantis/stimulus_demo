// This file must not end with _controller, otherwise it gets confused for a Stimulus controller by webpack and raises
// a nasty exception: `TypeError: constructor.bless is not a function`

export default Base => class extends Base {
  getController(selector) {
    return this.getControllerForSelector(selector)
  }

  getControllerForSelector(selector) {
    const element = document.querySelector(selector)
    return element ? this.getControllerForElement(element) : null
  }

  getControllerForElement(element) {
    const identifier = element.dataset.controller
    return this.application.getControllerForElementAndIdentifier(element, identifier)
  }

  getControllerForIdentifierAndData(identifier, data = {}) {
    const selector = Object.entries(data).reduce(
      (accumulator, [key, value]) => `${accumulator}[data-${identifier}-${key}="${value}"]`,
      `[data-controller="${identifier}"]`,
    )

    return this.getControllerForSelector(selector)
  }

  getControllerForIdentifier(identifier) {
    return this.getControllerForIdentifierAndData(identifier)
  }
}
