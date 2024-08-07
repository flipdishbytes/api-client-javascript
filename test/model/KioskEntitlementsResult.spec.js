/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    describe('KioskEntitlementsResult', function() {
      beforeEach(function() {
        instance = new Flipdish.KioskEntitlementsResult();
      });

      it('should create an instance of KioskEntitlementsResult', function() {
        // TODO: update the code to test KioskEntitlementsResult
        expect(instance).to.be.a(Flipdish.KioskEntitlementsResult);
      });

      it('should have the property EntitledQuantity (base name: "EntitledQuantity")', function() {
        // TODO: update the code to test the property EntitledQuantity
        expect(instance).to.have.property('EntitledQuantity');
        // expect(instance.EntitledQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property UsedQuantity (base name: "UsedQuantity")', function() {
        // TODO: update the code to test the property UsedQuantity
        expect(instance).to.have.property('UsedQuantity');
        // expect(instance.UsedQuantity).to.be(expectedValueLiteral);
      });

    });
  });

}));
