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
    describe('ServiceCharge', function() {
      beforeEach(function() {
        instance = new Flipdish.ServiceCharge();
      });

      it('should create an instance of ServiceCharge', function() {
        // TODO: update the code to test ServiceCharge
        expect(instance).to.be.a(Flipdish.ServiceCharge);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property PercentageValue (base name: "PercentageValue")', function() {
        // TODO: update the code to test the property PercentageValue
        expect(instance).to.have.property('PercentageValue');
        // expect(instance.PercentageValue).to.be(expectedValueLiteral);
      });

      it('should have the property Enabled (base name: "Enabled")', function() {
        // TODO: update the code to test the property Enabled
        expect(instance).to.have.property('Enabled');
        // expect(instance.Enabled).to.be(expectedValueLiteral);
      });

    });
  });

}));