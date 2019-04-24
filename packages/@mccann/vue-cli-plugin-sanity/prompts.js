module.exports = [
  {
    type: 'input',
    name: 'projectId',
    message: 'Enter your Sanity projectId'
  },
  {
    type: 'input',
    name: 'dataset',
    message: 'Enter your dataset name (default: production)',
    default: 'production'
  },
  {
    type: 'confirm',
    name: 'useCDN',
    message: 'Use Sanity CDN? (Y/n)',
    default: true
  }
]
