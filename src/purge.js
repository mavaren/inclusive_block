const PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+[.·•]s)|(s[.·•][a-zA-Z\u00C0-\u017F]+s)|([.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGULAR_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+)/g

export default (string) => {
  return string
    .replace(PLURIAL_PATTERN, 's')
    .replace(SINGULAR_PATTERN, '')
}
