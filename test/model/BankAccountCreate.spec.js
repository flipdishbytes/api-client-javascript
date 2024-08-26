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
    describe('BankAccountCreate', function() {
      beforeEach(function() {
        instance = new Flipdish.BankAccountCreate();
      });

      it('should create an instance of BankAccountCreate', function() {
        // TODO: update the code to test BankAccountCreate
        expect(instance).to.be.a(Flipdish.BankAccountCreate);
      });

      it('should have the property BankAddress (base name: "BankAddress")', function() {
        // TODO: update the code to test the property BankAddress
        expect(instance).to.have.property('BankAddress');
        // expect(instance.BankAddress).to.be(expectedValueLiteral);
      });

      it('should have the property BankCountryCode (base name: "BankCountryCode")', function() {
        // TODO: update the code to test the property BankCountryCode
        expect(instance).to.have.property('BankCountryCode');
        // expect(instance.BankCountryCode).to.be(expectedValueLiteral);
      });

      it('should have the property AccountHolderAddress (base name: "AccountHolderAddress")', function() {
        // TODO: update the code to test the property AccountHolderAddress
        expect(instance).to.have.property('AccountHolderAddress');
        // expect(instance.AccountHolderAddress).to.be(expectedValueLiteral);
      });

      it('should have the property AccountHolderCountryCode (base name: "AccountHolderCountryCode")', function() {
        // TODO: update the code to test the property AccountHolderCountryCode
        expect(instance).to.have.property('AccountHolderCountryCode');
        // expect(instance.AccountHolderCountryCode).to.be(expectedValueLiteral);
      });

      it('should have the property VatNumber (base name: "VatNumber")', function() {
        // TODO: update the code to test the property VatNumber
        expect(instance).to.have.property('VatNumber');
        // expect(instance.VatNumber).to.be(expectedValueLiteral);
      });

      it('should have the property CurrencyCode (base name: "CurrencyCode")', function() {
        // TODO: update the code to test the property CurrencyCode
        expect(instance).to.have.property('CurrencyCode');
        // expect(instance.CurrencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property StoreIds (base name: "StoreIds")', function() {
        // TODO: update the code to test the property StoreIds
        expect(instance).to.have.property('StoreIds');
        // expect(instance.StoreIds).to.be(expectedValueLiteral);
      });

      it('should have the property BankName (base name: "BankName")', function() {
        // TODO: update the code to test the property BankName
        expect(instance).to.have.property('BankName');
        // expect(instance.BankName).to.be(expectedValueLiteral);
      });

      it('should have the property AccountName (base name: "AccountName")', function() {
        // TODO: update the code to test the property AccountName
        expect(instance).to.have.property('AccountName');
        // expect(instance.AccountName).to.be(expectedValueLiteral);
      });

      it('should have the property Iban (base name: "Iban")', function() {
        // TODO: update the code to test the property Iban
        expect(instance).to.have.property('Iban');
        // expect(instance.Iban).to.be(expectedValueLiteral);
      });

      it('should have the property Swift (base name: "Swift")', function() {
        // TODO: update the code to test the property Swift
        expect(instance).to.have.property('Swift');
        // expect(instance.Swift).to.be(expectedValueLiteral);
      });

      it('should have the property NationalClearingCode (base name: "NationalClearingCode")', function() {
        // TODO: update the code to test the property NationalClearingCode
        expect(instance).to.have.property('NationalClearingCode');
        // expect(instance.NationalClearingCode).to.be(expectedValueLiteral);
      });

      it('should have the property PopulatedAccountFields (base name: "PopulatedAccountFields")', function() {
        // TODO: update the code to test the property PopulatedAccountFields
        expect(instance).to.have.property('PopulatedAccountFields');
        // expect(instance.PopulatedAccountFields).to.be(expectedValueLiteral);
      });

      it('should have the property RejectionReason (base name: "RejectionReason")', function() {
        // TODO: update the code to test the property RejectionReason
        expect(instance).to.have.property('RejectionReason');
        // expect(instance.RejectionReason).to.be(expectedValueLiteral);
      });

      it('should have the property BusinessType (base name: "BusinessType")', function() {
        // TODO: update the code to test the property BusinessType
        expect(instance).to.have.property('BusinessType');
        // expect(instance.BusinessType).to.be(expectedValueLiteral);
      });

    });
  });

}));
