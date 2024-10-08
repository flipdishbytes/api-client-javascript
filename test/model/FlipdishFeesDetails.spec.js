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
    instance = new Flipdish.FlipdishFeesDetails();
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

  describe('FlipdishFeesDetails', function() {
    it('should create an instance of FlipdishFeesDetails', function() {
      // uncomment below and update the code to test FlipdishFeesDetails
      //var instane = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be.a(Flipdish.FlipdishFeesDetails);
    });

    it('should have the property OnlineSalesFees (base name: "OnlineSalesFees")', function() {
      // uncomment below and update the code to test the property OnlineSalesFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property CashSalesFees (base name: "CashSalesFees")', function() {
      // uncomment below and update the code to test the property CashSalesFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property PosSalesFees (base name: "PosSalesFees")', function() {
      // uncomment below and update the code to test the property PosSalesFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property TotalSalesFees (base name: "TotalSalesFees")', function() {
      // uncomment below and update the code to test the property TotalSalesFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property OnlineSalesRefundedFees (base name: "OnlineSalesRefundedFees")', function() {
      // uncomment below and update the code to test the property OnlineSalesRefundedFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property CashSalesRefundedFees (base name: "CashSalesRefundedFees")', function() {
      // uncomment below and update the code to test the property CashSalesRefundedFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property PosSalesRefundedFees (base name: "PosSalesRefundedFees")', function() {
      // uncomment below and update the code to test the property PosSalesRefundedFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property SalesFeesVat (base name: "SalesFeesVat")', function() {
      // uncomment below and update the code to test the property SalesFeesVat
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

    it('should have the property TotalFees (base name: "TotalFees")', function() {
      // uncomment below and update the code to test the property TotalFees
      //var instance = new Flipdish.FlipdishFeesDetails();
      //expect(instance).to.be();
    });

  });

}));
