module.exports = api => {
  api.describeConfig({
    id: 'mccann.vue-cli-plugin-sanity.config',
    name: 'Sanity plugin configuration',
    description: 'Configure your project\'s connection to Sanity',

    files: {
      sanityConfig: {
        js: ['src/sanity/options.js']
      }
    },

    onRead: ({ data }) => ({
      prompts: [
        {
          type: 'input',
          name: 'projectId',
          message: 'Enter your Sanity projectId',
          value: data.sanityConfig && data.sanityConfig.projectId
        }, {
          type: 'input',
          name: 'dataset',
          message: 'Enter your dataset name (default: production)',
          value: data.sanityConfig && data.sanityConfig.dataset
        }, {
          type: 'confirm',
          name: 'useCDN',
          message: 'Use Sanity CDN? (Y/n)',
          value: data.sanityConfig && data.sanityConfig.useCDN
        }
      ]
    }),

    async onWrite({ prompts, api }) {
      const result = {}
      for (const prompt of prompts) {
        result[`${prompt.id}`] = await api.getAnswer(prompt.id)
      }
      api.setData('sanityConfig', result)
    }
  })
}
