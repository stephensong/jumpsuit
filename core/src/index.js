import { h } from 'preact'
import { Link } from 'preact-router'
import ReactCompatability from 'preact-compat'
import { Router } from './router'
import Component from './component'
import State from './state'
import Render from './render'

window.h = h
window.React = ReactCompatability

module.exports = {
  Link,
  Router,
  Component,
  State,
  Render,
}
