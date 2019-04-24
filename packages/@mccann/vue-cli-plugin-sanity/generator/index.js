module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      '@sanity/block-content-to-html': '^1.3.8',
      '@sanity/client': '^0.140.11',
      '@sanity/image-url': '^0.140.9',
      'sanity-blocks-vue-component': '^0.1.0'
    }
  })

  api.injectImports(api.entryFile, `import BlockContent from 'sanity-blocks-vue-component'`)
  api.injectImports(api.entryFile, `import sanityClient from './sanity'`)

  api.onCreateComplete(() => {
    const { EOL } = require('os')
    const fs = require('fs')

    const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)

    const newVueIndex = lines.findIndex(line => line.match(/new Vue/)) - 1
    lines[newVueIndex] += `\nVue.use(sanityClient)`
    lines[newVueIndex] += `\nVue.component('block-content', BlockContent)\n`

    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
  })

  api.render('./template', {
    ...options
  })
}
