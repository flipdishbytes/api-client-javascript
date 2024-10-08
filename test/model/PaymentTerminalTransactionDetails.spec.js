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
    instance = new Flipdish.PaymentTerminalTransactionDetails();
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

  describe('PaymentTerminalTransactionDetails', function() {
    it('should create an instance of PaymentTerminalTransactionDetails', function() {
      // uncomment below and update the code to test PaymentTerminalTransactionDetails
      //var instane = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be.a(Flipdish.PaymentTerminalTransactionDetails);
    });

    it('should have the property CardSchemeName (base name: "CardSchemeName")', function() {
      // uncomment below and update the code to test the property CardSchemeName
      //var instance = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property DateOfExpiry (base name: "DateOfExpiry")', function() {
      // uncomment below and update the code to test the property DateOfExpiry
      //var instance = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property AuthCode (base name: "AuthCode")', function() {
      // uncomment below and update the code to test the property AuthCode
      //var instance = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property TransactionResult (base name: "TransactionResult")', function() {
      // uncomment below and update the code to test the property TransactionResult
      //var instance = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property PrimaryAccountNumber (base name: "PrimaryAccountNumber")', function() {
      // uncomment below and update the code to test the property PrimaryAccountNumber
      //var instance = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property CardholderVerificationMethod (base name: "CardholderVerificationMethod")', function() {
      // uncomment below and update the code to test the property CardholderVerificationMethod
      //var instance = new Flipdish.PaymentTerminalTransactionDetails();
      //expect(instance).to.be();
    });

  });

}));
