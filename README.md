<center>
  <a href="https://mccanncentral.co.uk" target="_blank" style="display:block; max-width: 150px;">
    <svg data-name="Layer 1" data-v-4ef0a45b="" viewBox="0 0 121.23 33.54" xmlns="http://www.w3.org/2000/svg" style="display: block; width: 100%;"><title data-v-4ef0a45b="">mccann-central-logo</title><g class="cls-2" data-v-4ef0a45b=""><path class="cls-3" d="M38.36 11.67V8.3a7 7 0 0 0-3.48-.82c-4.33 0-7.28 2.83-7.28 7.05a6.7 6.7 0 0 0 7 7.05 7.54 7.54 0 0 0 3.8-.93v-3.46a4.17 4.17 0 0 1-3.46 1.64c-2.61 0-4.19-1.64-4.19-4.39s1.61-4.33 4-4.33a4.77 4.77 0 0 1 3.6 1.56M26.77 21.2L18.95.2l-4.53 11.5c-.37.93-.68 1.9-1 2.89-.26-.88-.6-1.84-1-2.83L7.8.21l-7.85 21h3.28l3.8-10.31a27.8 27.8 0 0 0 1-3.14c.34 1.19.71 2.26 1.08 3.23l4.28 11 4.08-10.82c.11-.34.51-1.44 1.11-3.4.31 1.08.68 2.12 1.08 3.2l3.82 10.22h3.26zm76.37-.16h3V6.96a16.1 16.1 0 0 0 2 2.27l13.1 12.6v-21h-3v14a25.55 25.55 0 0 0-2.21-2.46L103.17-.01v21zm-22.16 0h3V6.96a16.24 16.24 0 0 0 2 2.27l13.07 12.6v-21h-3v14a25.4 25.4 0 0 0-2.21-2.46L80.98 0v21zM58.12 5.72l.17-3.31a11 11 0 0 0-6.54-2.1 10.64 10.64 0 0 0-7.68 3 11 11 0 0 0 0 15.24 10.75 10.75 0 0 0 7.76 3 10.46 10.46 0 0 0 6.29-1.9v-3.71a9.78 9.78 0 0 1-6.54 2.55c-4.05 0-7.14-3.09-7.14-7.53s3-7.65 7.48-7.65a9.38 9.38 0 0 1 6.23 2.38m8.33 7.39l2.07-4.62a15.77 15.77 0 0 0 .74-2.29 19.13 19.13 0 0 0 .76 2.29l2.07 4.62h-5.64zM69.26 0l-9.8 21h3.45l2.35-5.21h8L75.55 21h3.49zm-29.6 27.53a2.34 2.34 0 0 0-2.43 2.48 2.31 2.31 0 0 0 2.32 2.45 3.17 3.17 0 0 0 2.12-.83v1.2a3.4 3.4 0 0 1-2 .62 3.49 3.49 0 0 1-2.52-1 3.46 3.46 0 0 1 2.5-5.93 3.59 3.59 0 0 1 2.13.68l-.06 1.08a3 3 0 0 0-2-.77m5.16-.8h3.67v.91h-2.6v1.65h2.6v.93h-2.6v2.13h2.6v.95h-3.67v-6.57zm6.77-.26l4.17 4a8.21 8.21 0 0 1 .72.8v-4.56h1v6.83l-4.26-4.09a5.2 5.2 0 0 1-.64-.74v4.57h-1v-6.83zm11.38 6.83h-1.06v-5.66h-1.75v-.91h4.55v.91h-1.74v5.66zm5.44 0h-1V26.7h1.51a2.57 2.57 0 0 1 1.64.37 1.8 1.8 0 0 1 .63 1.44 1.58 1.58 0 0 1-1.51 1.78l2.26 3h-1.2l-2.19-2.94h-.12v2.94zm.26-3.77c.94 0 1.41-.11 1.41-.9s-.45-1-1.41-1h-.19v1.88h.19zm9.36 2.08h-2.6l-.76 1.69h-1.12l3.18-6.83 3.18 6.83h-1.13zm-.38-.89l-.67-1.5a6.44 6.44 0 0 1-.25-.74 5.12 5.12 0 0 1-.24.74l-.67 1.5h1.83zm4.75-3.99h1.07v5.62h2.39v.95h-3.46v-6.57z" data-v-4ef0a45b=""></path></g></svg>
  </a>
</center>

# OpenSource@McCann
_One monorepo to rule them all_

## Note to contributors
This repository uses [Lerna](https://github.com/lerna/lerna) to manage its multiple packages, and [Commitizen]() to enforce orderly commits. Please ensure you use `npm run commit` when committing changes rather than your normal `git commit` to ensure we stay consistent with our commit messaging (which then pipes to our changelogs). This kind of discipline hasn’t been as important before but, in dealing with a monorepo containing a potentially large number of packages, consistency becomes necessary.

### To commit changes
```
npm run commit
```
You will be asked to make a number of choices and enter some information. "Scope" should be the affected package. Everything else should be relatively self explanitory.

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
