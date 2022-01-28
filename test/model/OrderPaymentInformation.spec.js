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
    describe('OrderPaymentInformation', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderPaymentInformation();
      });

      it('should create an instance of OrderPaymentInformation', function() {
        // TODO: update the code to test OrderPaymentInformation
        expect(instance).to.be.a(Flipdish.OrderPaymentInformation);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentRefundable (base name: "PaymentRefundable")', function() {
        // TODO: update the code to test the property PaymentRefundable
        expect(instance).to.have.property('PaymentRefundable');
        // expect(instance.PaymentRefundable).to.be(expectedValueLiteral);
      });

    });
  });

}));
