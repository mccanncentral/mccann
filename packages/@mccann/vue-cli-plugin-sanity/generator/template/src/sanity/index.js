import sanityClient from '@sanity/client'

import sanityOptions from './options'

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: sanityOptions.projectId,
  dataset: sanityOptions.dataset,
  useCDN: sanityOptions.useCDN
})
