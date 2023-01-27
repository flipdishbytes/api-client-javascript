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
    describe('StripeCustomConnectedAccount', function() {
      beforeEach(function() {
        instance = new Flipdish.StripeCustomConnectedAccount();
      });

      it('should create an instance of StripeCustomConnectedAccount', function() {
        // TODO: update the code to test StripeCustomConnectedAccount
        expect(instance).to.be.a(Flipdish.StripeCustomConnectedAccount);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property StripeId (base name: "StripeId")', function() {
        // TODO: update the code to test the property StripeId
        expect(instance).to.have.property('StripeId');
        // expect(instance.StripeId).to.be(expectedValueLiteral);
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

    });
  });

}));
