'use strict'
/* global describe, it */
const assert = require('assert')
describe('Render Generic', () => {
  let RenderGenericService
  let RenderService

  before((done) => {
    RenderGenericService = global.app.services.RenderGenericService
    RenderService = global.app.config.get('generics.render_service')
    done()
  })

  it('should exist', () => {
    assert(RenderGenericService)
    assert(RenderService)
  })
  it('should render html to document and metadata', (done) => {
    RenderGenericService.render('# Hello World', RenderService)
      .then(docObj => {
        assert.deepEqual(docObj.meta, {})
        assert.equal(docObj.document, '<h1>Hello World</h1>\n')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should render to document and meta', (done) => {
    const docObj = RenderGenericService.renderSync('# Hello World', RenderService)
    assert.deepEqual(docObj.meta, {})
    assert.equal(docObj.document, '<h1>Hello World</h1>\n')
    done()
  })

})
