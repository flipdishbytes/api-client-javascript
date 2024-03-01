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
    describe('StripeConnectedAccount', function() {
      beforeEach(function() {
        instance = new Flipdish.StripeConnectedAccount();
      });

      it('should create an instance of StripeConnectedAccount', function() {
        // TODO: update the code to test StripeConnectedAccount
        expect(instance).to.be.a(Flipdish.StripeConnectedAccount);
      });

      it('should have the property FlipdishConnectedAccountId (base name: "FlipdishConnectedAccountId")', function() {
        // TODO: update the code to test the property FlipdishConnectedAccountId
        expect(instance).to.have.property('FlipdishConnectedAccountId');
        // expect(instance.FlipdishConnectedAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property StripeId (base name: "StripeId")', function() {
        // TODO: update the code to test the property StripeId
        expect(instance).to.have.property('StripeId');
        // expect(instance.StripeId).to.be(expectedValueLiteral);
      });

      it('should have the property WhitelabelConfigId (base name: "WhitelabelConfigId")', function() {
        // TODO: update the code to test the property WhitelabelConfigId
        expect(instance).to.have.property('WhitelabelConfigId');
        // expect(instance.WhitelabelConfigId).to.be(expectedValueLiteral);
      });

      it('should have the property CardPaymentsStatus (base name: "CardPaymentsStatus")', function() {
        // TODO: update the code to test the property CardPaymentsStatus
        expect(instance).to.have.property('CardPaymentsStatus');
        // expect(instance.CardPaymentsStatus).to.be(expectedValueLiteral);
      });

      it('should have the property TransfersStatus (base name: "TransfersStatus")', function() {
        // TODO: update the code to test the property TransfersStatus
        expect(instance).to.have.property('TransfersStatus');
        // expect(instance.TransfersStatus).to.be(expectedValueLiteral);
      });

      it('should have the property AccountStatus (base name: "AccountStatus")', function() {
        // TODO: update the code to test the property AccountStatus
        expect(instance).to.have.property('AccountStatus');
        // expect(instance.AccountStatus).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutsEnabled (base name: "PayoutsEnabled")', function() {
        // TODO: update the code to test the property PayoutsEnabled
        expect(instance).to.have.property('PayoutsEnabled');
        // expect(instance.PayoutsEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
