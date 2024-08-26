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
    instance = new Flipdish.RevenueAdjustmentsDetails();
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

  describe('RevenueAdjustmentsDetails', function() {
    it('should create an instance of RevenueAdjustmentsDetails', function() {
      // uncomment below and update the code to test RevenueAdjustmentsDetails
      //var instane = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be.a(Flipdish.RevenueAdjustmentsDetails);
    });

    it('should have the property OnlineSalesRefundedAmount (base name: "OnlineSalesRefundedAmount")', function() {
      // uncomment below and update the code to test the property OnlineSalesRefundedAmount
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property PosSalesRefundedAmount (base name: "PosSalesRefundedAmount")', function() {
      // uncomment below and update the code to test the property PosSalesRefundedAmount
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property CashSalesRefundedAmount (base name: "CashSalesRefundedAmount")', function() {
      // uncomment below and update the code to test the property CashSalesRefundedAmount
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property CustomerCashFees (base name: "CustomerCashFees")', function() {
      // uncomment below and update the code to test the property CustomerCashFees
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property RefundsCount (base name: "RefundsCount")', function() {
      // uncomment below and update the code to test the property RefundsCount
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property PayGreenSalesAmount (base name: "PayGreenSalesAmount")', function() {
      // uncomment below and update the code to test the property PayGreenSalesAmount
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property PayGreenProcessingFees (base name: "PayGreenProcessingFees")', function() {
      // uncomment below and update the code to test the property PayGreenProcessingFees
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

    it('should have the property TotalOnlineRevenueAdjustments (base name: "TotalOnlineRevenueAdjustments")', function() {
      // uncomment below and update the code to test the property TotalOnlineRevenueAdjustments
      //var instance = new Flipdish.RevenueAdjustmentsDetails();
      //expect(instance).to.be();
    });

  });

}));
