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
    describe('PaymentTerminalTransactionDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.PaymentTerminalTransactionDetails();
      });

      it('should create an instance of PaymentTerminalTransactionDetails', function() {
        // TODO: update the code to test PaymentTerminalTransactionDetails
        expect(instance).to.be.a(Flipdish.PaymentTerminalTransactionDetails);
      });

      it('should have the property CardSchemeName (base name: "CardSchemeName")', function() {
        // TODO: update the code to test the property CardSchemeName
        expect(instance).to.have.property('CardSchemeName');
        // expect(instance.CardSchemeName).to.be(expectedValueLiteral);
      });

      it('should have the property DateOfExpiry (base name: "DateOfExpiry")', function() {
        // TODO: update the code to test the property DateOfExpiry
        expect(instance).to.have.property('DateOfExpiry');
        // expect(instance.DateOfExpiry).to.be(expectedValueLiteral);
      });

      it('should have the property AuthCode (base name: "AuthCode")', function() {
        // TODO: update the code to test the property AuthCode
        expect(instance).to.have.property('AuthCode');
        // expect(instance.AuthCode).to.be(expectedValueLiteral);
      });

      it('should have the property TransactionResult (base name: "TransactionResult")', function() {
        // TODO: update the code to test the property TransactionResult
        expect(instance).to.have.property('TransactionResult');
        // expect(instance.TransactionResult).to.be(expectedValueLiteral);
      });

      it('should have the property PrimaryAccountNumber (base name: "PrimaryAccountNumber")', function() {
        // TODO: update the code to test the property PrimaryAccountNumber
        expect(instance).to.have.property('PrimaryAccountNumber');
        // expect(instance.PrimaryAccountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property CardholderVerificationMethod (base name: "CardholderVerificationMethod")', function() {
        // TODO: update the code to test the property CardholderVerificationMethod
        expect(instance).to.have.property('CardholderVerificationMethod');
        // expect(instance.CardholderVerificationMethod).to.be(expectedValueLiteral);
      });

    });
  });

}));
