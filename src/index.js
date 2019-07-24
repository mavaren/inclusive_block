import $ from 'jquery'
import purge from './purge.js'

$( document ).ready(function() {
  $('body, body *:not(script):not(noscript):not(style)').contents().filter(function() {
    return this.nodeType == 3;
  }).replaceWith(function() {
      return purge(this.nodeValue)
  });
});
