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
    instance = new Flipdish.Subscription();
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

  describe('Subscription', function() {
    it('should create an instance of Subscription', function() {
      // uncomment below and update the code to test Subscription
      //var instane = new Flipdish.Subscription();
      //expect(instance).to.be.a(Flipdish.Subscription);
    });

    it('should have the property Products (base name: "Products")', function() {
      // uncomment below and update the code to test the property Products
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property NextInvoiceAmount (base name: "NextInvoiceAmount")', function() {
      // uncomment below and update the code to test the property NextInvoiceAmount
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property NextInvoiceBillingDate (base name: "NextInvoiceBillingDate")', function() {
      // uncomment below and update the code to test the property NextInvoiceBillingDate
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property UpcomingInvoiceItems (base name: "UpcomingInvoiceItems")', function() {
      // uncomment below and update the code to test the property UpcomingInvoiceItems
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property UpcomingInvoiceDiscounts (base name: "UpcomingInvoiceDiscounts")', function() {
      // uncomment below and update the code to test the property UpcomingInvoiceDiscounts
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property UpcomingInvoice (base name: "UpcomingInvoice")', function() {
      // uncomment below and update the code to test the property UpcomingInvoice
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property SubscriptionId (base name: "SubscriptionId")', function() {
      // uncomment below and update the code to test the property SubscriptionId
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property Name (base name: "Name")', function() {
      // uncomment below and update the code to test the property Name
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property Status (base name: "Status")', function() {
      // uncomment below and update the code to test the property Status
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property Currency (base name: "Currency")', function() {
      // uncomment below and update the code to test the property Currency
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property User (base name: "User")', function() {
      // uncomment below and update the code to test the property User
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property DefaultPaymentDescription (base name: "DefaultPaymentDescription")', function() {
      // uncomment below and update the code to test the property DefaultPaymentDescription
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property CancellationRequestDate (base name: "CancellationRequestDate")', function() {
      // uncomment below and update the code to test the property CancellationRequestDate
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property CancellationDate (base name: "CancellationDate")', function() {
      // uncomment below and update the code to test the property CancellationDate
      //var instance = new Flipdish.Subscription();
      //expect(instance).to.be();
    });

  });

}));
