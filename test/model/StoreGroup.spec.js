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
    instance = new Flipdish.StoreGroup();
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

  describe('StoreGroup', function() {
    it('should create an instance of StoreGroup', function() {
      // uncomment below and update the code to test StoreGroup
      //var instane = new Flipdish.StoreGroup();
      //expect(instance).to.be.a(Flipdish.StoreGroup);
    });

    it('should have the property StoreGroupId (base name: "StoreGroupId")', function() {
      // uncomment below and update the code to test the property StoreGroupId
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property GeneralRating (base name: "GeneralRating")', function() {
      // uncomment below and update the code to test the property GeneralRating
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property GeneralRatingCount (base name: "GeneralRatingCount")', function() {
      // uncomment below and update the code to test the property GeneralRatingCount
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryMenuMessage (base name: "DeliveryMenuMessage")', function() {
      // uncomment below and update the code to test the property DeliveryMenuMessage
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property PickupMenuMessage (base name: "PickupMenuMessage")', function() {
      // uncomment below and update the code to test the property PickupMenuMessage
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property BrandIds (base name: "BrandIds")', function() {
      // uncomment below and update the code to test the property BrandIds
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property Name (base name: "Name")', function() {
      // uncomment below and update the code to test the property Name
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

    it('should have the property Currency (base name: "Currency")', function() {
      // uncomment below and update the code to test the property Currency
      //var instance = new Flipdish.StoreGroup();
      //expect(instance).to.be();
    });

  });

}));
