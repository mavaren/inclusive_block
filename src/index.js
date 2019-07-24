import $ from "jquery";

$( document ).ready(function() {
    purgeDocument();
});

const MULTIDOT_PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+[.·•]s)/g
const S_SINGLEDOT_PLURIAL_PATTERN = /(s[.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGLEDOT_PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGLEDOT_SINGULAR_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+)/g

function purgeDocument(pattern, string){
  Array.from(document.querySelectorAll("body, body *:not(script):not(noscript):not(style)"))
    .forEach(someNode => Array.from(someNode.childNodes)
      .filter(childNode => childNode.nodeType == 3)
      .forEach(textNode => textNode.textContent = purge(textNode.textContent)));
}

function purge(string) {
  return string
    .replace(MULTIDOT_PLURIAL_PATTERN, 's')
    .replace(S_SINGLEDOT_PLURIAL_PATTERN, 's')
    .replace(SINGLEDOT_PLURIAL_PATTERN, 's')
    .replace(SINGLEDOT_SINGULAR_PATTERN, '')
}
