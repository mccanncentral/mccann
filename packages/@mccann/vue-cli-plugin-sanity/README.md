# `@mccann/vue-cli-plugin-sanity`

Easily integrate [Sanity](https://sanity.io) as a datasource within your vue-cli project

## Installation / Setup

To add this plugin to your `vue-cli` powered project, run the following command from inside your project folder:
```
vue add @mccann/vue-cli-plugin-sanity
```

You will be prompted for 3 configuration settings during setup:
```
Enter your Sanity projectId
Enter your dataset name (default: production)
Use Sanity CDN? (Y/n)
```

You can find your projectId and dataset name from your [Sanity management console](https://manage.sanity.io), but these should all be settings you are familiar with if you have worked with Sanity before.

## Files

The plugin will add some files to your project:

* `src/sanity/index.js` is the main point of entry for Sanity calls within your project
* `src/sanity/options.js` is the configuration file where your configuration is stored

## Usage

At the moment, you need to import the Sanity point of entry each time you want to use it. (TODO: Make this global - Possibly via mixin?)

```
import sanity from `@/sanity`
```

Once imported, you can use the `sanity.fetch()` method with a GROQ query of your own design:

```
const query = `*[_type == 'page']{
  ...
}`
const data = await sanity.fetch(query)
this.data = data
```
