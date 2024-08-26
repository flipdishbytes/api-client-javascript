/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PublishMenuChanges', function() {
      beforeEach(function() {
        instance = new Flipdish.PublishMenuChanges();
      });

      it('should create an instance of PublishMenuChanges', function() {
        // TODO: update the code to test PublishMenuChanges
        expect(instance).to.be.a(Flipdish.PublishMenuChanges);
      });

      it('should have the property CatalogItemId (base name: "CatalogItemId")', function() {
        // TODO: update the code to test the property CatalogItemId
        expect(instance).to.have.property('CatalogItemId');
        // expect(instance.CatalogItemId).to.be(expectedValueLiteral);
      });

      it('should have the property MenuIds (base name: "MenuIds")', function() {
        // TODO: update the code to test the property MenuIds
        expect(instance).to.have.property('MenuIds');
        // expect(instance.MenuIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
