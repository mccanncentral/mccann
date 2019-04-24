<center>
  <a href="https://mccanncentral.co.uk" target="_blank" style="display:block; max-width: 150px;">
    <img src="http://mccanncentral.co.uk/_nuxt/img/mccann_logo.9fe84a2.svg" alt="McCann Central Logo"/>
  </a>
</center>

# OpenSource@McCann
_One monorepo to rule them all_

## Note to contributors
This repository uses [Lerna](https://github.com/lerna/lerna) to manage its multiple packages, and [Commitizen]() to enforce orderly commits. Please ensure you use `npm run commit` when committing changes rather than your normal `git commit` to ensure we stay consistent with our commit messaging (which then pipes to our changelogs). This kind of discipline hasn’t been as important before but, in dealing with a monorepo containing a potentially large number of packages, consistency becomes necessary.

### To commit changes
```
git add [files to add]
npm run commit
git push origin
```
`npm run commit` invokes commitizen to enforce commit message formats. You will be asked to make a number of choices and enter some information. "Scope" should be the affected package. Everything else should be relatively self explanitory.

### To bootstrap all the packages in the repo
```
npm run bootstrap
```
This will install all the dependencies for all the packages in the repo and link any cross-dependencies. It allows you to use your package names in `require()` and `import` statements as if the dependencies were already available in the `node_modules` folder of the package you are working on.

### To create a new release for updated packages
```
npm run publish
```
This will find updated packages in the repo and publish a new release. It will prompt for a new version number and update packages on git and npm

#### Options
```
--npm-tag [tagname] — Publish to npm with the given npm dist-tag (defaults to latest)
--canary / -c — Create a new canary release
--skip-git — Don’t run any git commands
--force-publish [packages] — Force publish the specified packages (comma-separated), or all packages using * (skips git diff check to find changed packages)
```
