window.jQuery = window.$ = require('jquery')
const FastClick = require('fastclick')

const sayHelloInHeader = require('../components/Header/index')

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    if (FastClick.attach) FastClick.attach(document.body)
  }, false)
}

sayHelloInHeader('hello!')
