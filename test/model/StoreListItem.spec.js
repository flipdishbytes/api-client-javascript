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
    instance = new Flipdish.StoreListItem();
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

  describe('StoreListItem', function() {
    it('should create an instance of StoreListItem', function() {
      // uncomment below and update the code to test StoreListItem
      //var instane = new Flipdish.StoreListItem();
      //expect(instance).to.be.a(Flipdish.StoreListItem);
    });

    it('should have the property StoreId (base name: "StoreId")', function() {
      // uncomment below and update the code to test the property StoreId
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

    it('should have the property StoreName (base name: "StoreName")', function() {
      // uncomment below and update the code to test the property StoreName
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

    it('should have the property StoreGroupId (base name: "StoreGroupId")', function() {
      // uncomment below and update the code to test the property StoreGroupId
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

    it('should have the property StoreGroupName (base name: "StoreGroupName")', function() {
      // uncomment below and update the code to test the property StoreGroupName
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

    it('should have the property HasLoyaltyCampaign (base name: "HasLoyaltyCampaign")', function() {
      // uncomment below and update the code to test the property HasLoyaltyCampaign
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

    it('should have the property HasRetentionCampaign (base name: "HasRetentionCampaign")', function() {
      // uncomment below and update the code to test the property HasRetentionCampaign
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

    it('should have the property IsPublished (base name: "IsPublished")', function() {
      // uncomment below and update the code to test the property IsPublished
      //var instance = new Flipdish.StoreListItem();
      //expect(instance).to.be();
    });

  });

}));
