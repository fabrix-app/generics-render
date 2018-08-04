# generics-render

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

Generic Render Service with Markdown-It.
Converts markdown document with YAML to object with HTML and Metadata.

Looking for [Generics?](https://github.com/fabrix-app/spool-generics)

## Install

```sh
$ npm install --save @fabrix/generics-render
```

## Configure

```js
// config/generics.js
export const generics = {
  // make the key render, alternatively make the key render_service to be the default render service
  render_service: {
    adapter: require('@fabrix/generic-render').RenderGeneric,
    config: {
       // Must always be set to true
       html: true,
       plugins: [
        // Example Plugin (markdown-it-meta is required and already installed)
        // {
        //   plugin: require('markdown-it-meta'),
        //   options: {}
        // }
       ]
    }
  }
}
```

## Use
Create a markdown document

document.md
```
---
title: Hello World!
keywords: render service
runs: 0
score: 0.0
demographics:
 - {name: 'unknown'}
---
# Hello world!
```

```js
 const document = fs.readFileSync('document.md', 'utf8')
 
 RenderGenericService.render(document)
  .then(doc => {
    // do something with doc
  })
  .catch(err => {
    // do something with error
  })
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/generics-render.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/generics-render
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/generics-render/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/generics-render/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/generics-render.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/generics-render
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/generics-render.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/generics-render/coverage
