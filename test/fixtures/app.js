'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {},
  config: {
    main: {
      spools: [
        require('@fabrix/spool-router').RouterSpool,
        require('@fabrix/spool-generics').GenericsSpool
      ]
    },
    generics: {
      render_service: {
        adapter: require('../../dist').RenderGeneric,
        config: {
          // Must always be set to true
          html: true
        },
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
}, smokesignals.FailsafeConfig)


