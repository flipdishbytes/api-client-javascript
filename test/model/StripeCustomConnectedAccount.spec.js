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
    instance = new Flipdish.StripeCustomConnectedAccount();
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

  describe('StripeCustomConnectedAccount', function() {
    it('should create an instance of StripeCustomConnectedAccount', function() {
      // uncomment below and update the code to test StripeCustomConnectedAccount
      //var instane = new Flipdish.StripeCustomConnectedAccount();
      //expect(instance).to.be.a(Flipdish.StripeCustomConnectedAccount);
    });

    it('should have the property StoreId (base name: "StoreId")', function() {
      // uncomment below and update the code to test the property StoreId
      //var instance = new Flipdish.StripeCustomConnectedAccount();
      //expect(instance).to.be();
    });

    it('should have the property StripeId (base name: "StripeId")', function() {
      // uncomment below and update the code to test the property StripeId
      //var instance = new Flipdish.StripeCustomConnectedAccount();
      //expect(instance).to.be();
    });

    it('should have the property CardPaymentsStatus (base name: "CardPaymentsStatus")', function() {
      // uncomment below and update the code to test the property CardPaymentsStatus
      //var instance = new Flipdish.StripeCustomConnectedAccount();
      //expect(instance).to.be();
    });

    it('should have the property TransfersStatus (base name: "TransfersStatus")', function() {
      // uncomment below and update the code to test the property TransfersStatus
      //var instance = new Flipdish.StripeCustomConnectedAccount();
      //expect(instance).to.be();
    });

    it('should have the property AccountStatus (base name: "AccountStatus")', function() {
      // uncomment below and update the code to test the property AccountStatus
      //var instance = new Flipdish.StripeCustomConnectedAccount();
      //expect(instance).to.be();
    });

  });

}));
