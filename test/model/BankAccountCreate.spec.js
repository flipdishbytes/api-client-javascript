/**
 * Flipdish Open API v1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flipdish.BankAccountCreate();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BankAccountCreate', function() {
    it('should create an instance of BankAccountCreate', function() {
      // uncomment below and update the code to test BankAccountCreate
      //var instane = new Flipdish.BankAccountCreate();
      //expect(instance).to.be.a(Flipdish.BankAccountCreate);
    });

    it('should have the property BankAddress (base name: "BankAddress")', function() {
      // uncomment below and update the code to test the property BankAddress
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property BankCountryCode (base name: "BankCountryCode")', function() {
      // uncomment below and update the code to test the property BankCountryCode
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property AccountHolderAddress (base name: "AccountHolderAddress")', function() {
      // uncomment below and update the code to test the property AccountHolderAddress
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property AccountHolderCountryCode (base name: "AccountHolderCountryCode")', function() {
      // uncomment below and update the code to test the property AccountHolderCountryCode
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property VatNumber (base name: "VatNumber")', function() {
      // uncomment below and update the code to test the property VatNumber
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property CurrencyCode (base name: "CurrencyCode")', function() {
      // uncomment below and update the code to test the property CurrencyCode
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property StoreIds (base name: "StoreIds")', function() {
      // uncomment below and update the code to test the property StoreIds
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property BankName (base name: "BankName")', function() {
      // uncomment below and update the code to test the property BankName
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property AccountName (base name: "AccountName")', function() {
      // uncomment below and update the code to test the property AccountName
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property Iban (base name: "Iban")', function() {
      // uncomment below and update the code to test the property Iban
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property Swift (base name: "Swift")', function() {
      // uncomment below and update the code to test the property Swift
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property NationalClearingCode (base name: "NationalClearingCode")', function() {
      // uncomment below and update the code to test the property NationalClearingCode
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property PopulatedAccountFields (base name: "PopulatedAccountFields")', function() {
      // uncomment below and update the code to test the property PopulatedAccountFields
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property RejectionReason (base name: "RejectionReason")', function() {
      // uncomment below and update the code to test the property RejectionReason
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

    it('should have the property BusinessType (base name: "BusinessType")', function() {
      // uncomment below and update the code to test the property BusinessType
      //var instance = new Flipdish.BankAccountCreate();
      //expect(instance).to.be();
    });

  });

}));
