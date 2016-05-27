import { Component } from 'preact'
import { connect } from 'react-redux'

export default function (obj, connectFn) {
  const container = createClass(obj)
  return connectFn ? connect(connectFn)(container) : container
}

/**
 * Allows component ES6 classes to be called with an object.
 * May be a better inheritance technique, but this works for now.
 */
function createClass (obj) {
  function F () {
    Component.call(this)
  }

  const p = F.prototype = Object.create(Component.prototype)

  for (var i in obj) {
    p[i] = obj[i]
  }

  return p.constructor = F
}
