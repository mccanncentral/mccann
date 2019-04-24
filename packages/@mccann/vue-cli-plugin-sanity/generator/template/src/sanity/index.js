import sanityClient from '@sanity/client'

import sanityOptions from './options'

const sanity = sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: sanityOptions.projectId,
  dataset: sanityOptions.dataset,
  useCDN: sanityOptions.useCDN
})

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
