'use strict'
/* global describe, it */
const assert = require('assert')
describe('Render Generic Negative Test', () => {
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

})
