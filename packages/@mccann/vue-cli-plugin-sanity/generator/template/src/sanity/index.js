import sanityClient from '@sanity/client'

import sanityOptions from './options'

const sanity = sanityClient(sanityOptions)

export function install(Vue) {
  Object.defineProperty(Vue.prototype, '$sanity', {
    get() {
      return sanity
    }
  })
}

export default {
  install
}
