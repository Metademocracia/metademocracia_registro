export const APP_NAMES = {
  camelcase: 'metDemocracia',
  kedabcase: 'meta-democracia',
  snakecase: 'meta_democracia',
  capitalize: 'Meta Democracia',
  values: () => Object.values(APP_NAMES),
}

export const ALERT_TYPE = {
  success: "success",
  error: "error",
  values: () => Object.values(ALERT_TYPE),
}

export const SCROLL_TO = {
  top: Symbol,
  bottom: Symbol,
  values: () => Object.values(SCROLL_TO),
}
