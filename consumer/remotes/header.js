module.exports = {
  name: 'header',
  urlGlobalVariable: 'headerModuleUrl',
  get url() {
    return `${process.env.REACT_APP_MF_HEADER}/remoteEntry.js?${this.randomString}`
  },
  get federationConfig() {
    return `${this.name}@[window.${this.urlGlobalVariable}]`
  },
}
