import $ from 'jquery'
import purge from './purge.js'

$( document ).ready(function() {
  Array.from(document.querySelectorAll("body, body *:not(script):not(noscript):not(style)"))
    .forEach(someNode => Array.from(someNode.childNodes)
      .filter(childNode => childNode.nodeType == 3)
      .forEach(textNode => textNode.textContent = purge(textNode.textContent)));
});
