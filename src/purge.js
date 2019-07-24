const MULTIDOT_PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+[.·•]s)/g
const S_SINGLEDOT_PLURIAL_PATTERN = /(s[.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGLEDOT_PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGLEDOT_SINGULAR_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+)/g

export default (string) => {
  return string
    .replace(MULTIDOT_PLURIAL_PATTERN, 's')
    .replace(S_SINGLEDOT_PLURIAL_PATTERN, 's')
    .replace(SINGLEDOT_PLURIAL_PATTERN, 's')
    .replace(SINGLEDOT_SINGULAR_PATTERN, '')
}
