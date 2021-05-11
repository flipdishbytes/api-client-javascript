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
    describe('Refund', function() {
      beforeEach(function() {
        instance = new Flipdish.Refund();
      });

      it('should create an instance of Refund', function() {
        // TODO: update the code to test Refund
        expect(instance).to.be.a(Flipdish.Refund);
      });

      it('should have the property RefundReason (base name: "RefundReason")', function() {
        // TODO: update the code to test the property RefundReason
        expect(instance).to.have.property('RefundReason');
        // expect(instance.RefundReason).to.be(expectedValueLiteral);
      });

      it('should have the property RefundAmount (base name: "RefundAmount")', function() {
        // TODO: update the code to test the property RefundAmount
        expect(instance).to.have.property('RefundAmount');
        // expect(instance.RefundAmount).to.be(expectedValueLiteral);
      });

      it('should have the property NotifyCustomer (base name: "NotifyCustomer")', function() {
        // TODO: update the code to test the property NotifyCustomer
        expect(instance).to.have.property('NotifyCustomer');
        // expect(instance.NotifyCustomer).to.be(expectedValueLiteral);
      });

    });
  });

}));
