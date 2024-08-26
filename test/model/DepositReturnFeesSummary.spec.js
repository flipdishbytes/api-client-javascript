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
    instance = new Flipdish.DepositReturnFeesSummary();
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

  describe('DepositReturnFeesSummary', function() {
    it('should create an instance of DepositReturnFeesSummary', function() {
      // uncomment below and update the code to test DepositReturnFeesSummary
      //var instane = new Flipdish.DepositReturnFeesSummary();
      //expect(instance).to.be.a(Flipdish.DepositReturnFeesSummary);
    });

    it('should have the property Count (base name: "Count")', function() {
      // uncomment below and update the code to test the property Count
      //var instance = new Flipdish.DepositReturnFeesSummary();
      //expect(instance).to.be();
    });

    it('should have the property Fee (base name: "Fee")', function() {
      // uncomment below and update the code to test the property Fee
      //var instance = new Flipdish.DepositReturnFeesSummary();
      //expect(instance).to.be();
    });

    it('should have the property Total (base name: "Total")', function() {
      // uncomment below and update the code to test the property Total
      //var instance = new Flipdish.DepositReturnFeesSummary();
      //expect(instance).to.be();
    });

  });

}));
