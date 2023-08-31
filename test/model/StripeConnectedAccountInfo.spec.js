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
    describe('StripeConnectedAccountInfo', function() {
      beforeEach(function() {
        instance = new Flipdish.StripeConnectedAccountInfo();
      });

      it('should create an instance of StripeConnectedAccountInfo', function() {
        // TODO: update the code to test StripeConnectedAccountInfo
        expect(instance).to.be.a(Flipdish.StripeConnectedAccountInfo);
      });

      it('should have the property AccountStatus (base name: "AccountStatus")', function() {
        // TODO: update the code to test the property AccountStatus
        expect(instance).to.have.property('AccountStatus');
        // expect(instance.AccountStatus).to.be(expectedValueLiteral);
      });

      it('should have the property StripeId (base name: "StripeId")', function() {
        // TODO: update the code to test the property StripeId
        expect(instance).to.have.property('StripeId');
        // expect(instance.StripeId).to.be(expectedValueLiteral);
      });

      it('should have the property CardPaymentStatus (base name: "CardPaymentStatus")', function() {
        // TODO: update the code to test the property CardPaymentStatus
        expect(instance).to.have.property('CardPaymentStatus');
        // expect(instance.CardPaymentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutScheduleInterval (base name: "PayoutScheduleInterval")', function() {
        // TODO: update the code to test the property PayoutScheduleInterval
        expect(instance).to.have.property('PayoutScheduleInterval');
        // expect(instance.PayoutScheduleInterval).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutsPaused (base name: "PayoutsPaused")', function() {
        // TODO: update the code to test the property PayoutsPaused
        expect(instance).to.have.property('PayoutsPaused');
        // expect(instance.PayoutsPaused).to.be(expectedValueLiteral);
      });

    });
  });

}));
