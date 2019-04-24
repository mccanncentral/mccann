module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      '@sanity/block-content-to-html': '^1.3.8',
      '@sanity/client': '^0.140.11',
      '@sanity/image-url': '^0.140.9',
      'sanity-blocks-vue-component': '^0.1.0'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/blockContent'`)
  api.injectImports(api.entryFile, `import './plugins/sanity'`)

  api.render('./template', {
    ...options
  })
}
