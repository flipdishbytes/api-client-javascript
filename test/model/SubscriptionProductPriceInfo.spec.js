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
    describe('SubscriptionProductPriceInfo', function() {
      beforeEach(function() {
        instance = new Flipdish.SubscriptionProductPriceInfo();
      });

      it('should create an instance of SubscriptionProductPriceInfo', function() {
        // TODO: update the code to test SubscriptionProductPriceInfo
        expect(instance).to.be.a(Flipdish.SubscriptionProductPriceInfo);
      });

      it('should have the property Amount (base name: "Amount")', function() {
        // TODO: update the code to test the property Amount
        expect(instance).to.have.property('Amount');
        // expect(instance.Amount).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property Scope (base name: "Scope")', function() {
        // TODO: update the code to test the property Scope
        expect(instance).to.have.property('Scope');
        // expect(instance.Scope).to.be(expectedValueLiteral);
      });

    });
  });

}));