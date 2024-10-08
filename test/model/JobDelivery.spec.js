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
    instance = new Flipdish.JobDelivery();
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

  describe('JobDelivery', function() {
    it('should create an instance of JobDelivery', function() {
      // uncomment below and update the code to test JobDelivery
      //var instane = new Flipdish.JobDelivery();
      //expect(instance).to.be.a(Flipdish.JobDelivery);
    });

    it('should have the property Id (base name: "Id")', function() {
      // uncomment below and update the code to test the property Id
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property Status (base name: "Status")', function() {
      // uncomment below and update the code to test the property Status
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property PickedAt (base name: "PickedAt")', function() {
      // uncomment below and update the code to test the property PickedAt
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property DeliveredAt (base name: "DeliveredAt")', function() {
      // uncomment below and update the code to test the property DeliveredAt
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property TrackingUrl (base name: "TrackingUrl")', function() {
      // uncomment below and update the code to test the property TrackingUrl
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property ClientReference (base name: "ClientReference")', function() {
      // uncomment below and update the code to test the property ClientReference
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property PackageDescription (base name: "PackageDescription")', function() {
      // uncomment below and update the code to test the property PackageDescription
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property PackageType (base name: "PackageType")', function() {
      // uncomment below and update the code to test the property PackageType
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property Pickup (base name: "Pickup")', function() {
      // uncomment below and update the code to test the property Pickup
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property Dropoff (base name: "Dropoff")', function() {
      // uncomment below and update the code to test the property Dropoff
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property Eta (base name: "Eta")', function() {
      // uncomment below and update the code to test the property Eta
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property Cancellation (base name: "Cancellation")', function() {
      // uncomment below and update the code to test the property Cancellation
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

    it('should have the property Proof (base name: "Proof")', function() {
      // uncomment below and update the code to test the property Proof
      //var instance = new Flipdish.JobDelivery();
      //expect(instance).to.be();
    });

  });

}));
