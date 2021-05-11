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
    describe('BankAccount', function() {
      beforeEach(function() {
        instance = new Flipdish.BankAccount();
      });

      it('should create an instance of BankAccount', function() {
        // TODO: update the code to test BankAccount
        expect(instance).to.be.a(Flipdish.BankAccount);
      });

      it('should have the property Id (base name: "Id")', function() {
        // TODO: update the code to test the property Id
        expect(instance).to.have.property('Id');
        // expect(instance.Id).to.be(expectedValueLiteral);
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

      it('should have the property PopulatedAccountFields (base name: "PopulatedAccountFields")', function() {
        // TODO: update the code to test the property PopulatedAccountFields
        expect(instance).to.have.property('PopulatedAccountFields');
        // expect(instance.PopulatedAccountFields).to.be(expectedValueLiteral);
      });

      it('should have the property AccountState (base name: "AccountState")', function() {
        // TODO: update the code to test the property AccountState
        expect(instance).to.have.property('AccountState');
        // expect(instance.AccountState).to.be(expectedValueLiteral);
      });

      it('should have the property StoreNames (base name: "StoreNames")', function() {
        // TODO: update the code to test the property StoreNames
        expect(instance).to.have.property('StoreNames');
        // expect(instance.StoreNames).to.be(expectedValueLiteral);
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

    });
  });

}));