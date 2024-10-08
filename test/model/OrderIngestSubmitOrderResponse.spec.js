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
    instance = new Flipdish.OrderIngestSubmitOrderResponse();
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

  describe('OrderIngestSubmitOrderResponse', function() {
    it('should create an instance of OrderIngestSubmitOrderResponse', function() {
      // uncomment below and update the code to test OrderIngestSubmitOrderResponse
      //var instane = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be.a(Flipdish.OrderIngestSubmitOrderResponse);
    });

    it('should have the property OrderId (base name: "OrderId")', function() {
      // uncomment below and update the code to test the property OrderId
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property ReceiptUrl (base name: "ReceiptUrl")', function() {
      // uncomment below and update the code to test the property ReceiptUrl
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property CurrencyCode (base name: "CurrencyCode")', function() {
      // uncomment below and update the code to test the property CurrencyCode
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property TotalPrice (base name: "TotalPrice")', function() {
      // uncomment below and update the code to test the property TotalPrice
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryFee (base name: "DeliveryFee")', function() {
      // uncomment below and update the code to test the property DeliveryFee
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property EstimatedDeliveryTime (base name: "EstimatedDeliveryTime")', function() {
      // uncomment below and update the code to test the property EstimatedDeliveryTime
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property ChannelOrderId (base name: "ChannelOrderId")', function() {
      // uncomment below and update the code to test the property ChannelOrderId
      //var instance = new Flipdish.OrderIngestSubmitOrderResponse();
      //expect(instance).to.be();
    });

  });

}));
