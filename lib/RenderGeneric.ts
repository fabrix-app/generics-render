import * as MarkdownIt from 'markdown-it'
import * as meta from 'markdown-it-meta'
import { each, defaults } from 'lodash'

export class RenderGeneric {
  public config: {
  }
  public plugins: {}

  constructor(config, plugins) {
    this.config = config
    this.plugins = plugins
  }

  /**
   * _init Initializes a new instance of Markdown-it with Plugins
   * @param options
   * @returns {Instance} markdown-it instance
   * @private
   */
  _init(options) {
    // Default the options
    if (!options) {
      options = {}
    }
    // Set options
    options = defaults(options, this.config)
    // console.log('RouterRenderService._init', options)

    // Make new instance
    const md = new MarkdownIt(options)
    // Add markdown-it-meta
    md.use(meta)
    // Set Plugins additional plugins
    each(this.plugins, (plugin) => {
      if (!plugin.options) {
        plugin.options = {}
      }
      md.use(plugin.plugin, plugin.options)
    })
    return md
  }

  /**
   * renders a document into html
   * @param {String} document
   * @param {Object} options (optional)
   * @returns {Object.<{meta: object, document: string}>} markdown-it meta and rendered document
   */
  render(document, options) {
    const md = this._init(options)
    const renderedDocument =  md.render(document)
    const res = {
      document: renderedDocument,
      meta: md.meta || {}
    }
    return Promise.resolve(res)
  }
  renderSync(document, options) {
    const md = this._init(options)
    const renderedDocument =  md.render(document)
    const res = {
      document: renderedDocument,
      meta: md.meta || {}
    }
    return res
  }
}
