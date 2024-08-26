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
    instance = new Flipdish.LightspeedSettings();
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

  describe('LightspeedSettings', function() {
    it('should create an instance of LightspeedSettings', function() {
      // uncomment below and update the code to test LightspeedSettings
      //var instane = new Flipdish.LightspeedSettings();
      //expect(instance).to.be.a(Flipdish.LightspeedSettings);
    });

    it('should have the property CompanyId (base name: "CompanyId")', function() {
      // uncomment below and update the code to test the property CompanyId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property UseOAuth (base name: "UseOAuth")', function() {
      // uncomment below and update the code to test the property UseOAuth
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property Enabled (base name: "Enabled")', function() {
      // uncomment below and update the code to test the property Enabled
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property EstimatedMinutesForDelivery (base name: "EstimatedMinutesForDelivery")', function() {
      // uncomment below and update the code to test the property EstimatedMinutesForDelivery
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property EstimatedMinutesForCollection (base name: "EstimatedMinutesForCollection")', function() {
      // uncomment below and update the code to test the property EstimatedMinutesForCollection
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property GeographicLocation (base name: "GeographicLocation")', function() {
      // uncomment below and update the code to test the property GeographicLocation
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property Establishment (base name: "Establishment")', function() {
      // uncomment below and update the code to test the property Establishment
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property VoucherId (base name: "VoucherId")', function() {
      // uncomment below and update the code to test the property VoucherId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryFeeId (base name: "DeliveryFeeId")', function() {
      // uncomment below and update the code to test the property DeliveryFeeId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property ProcessingFeeId (base name: "ProcessingFeeId")', function() {
      // uncomment below and update the code to test the property ProcessingFeeId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property PriceType (base name: "PriceType")', function() {
      // uncomment below and update the code to test the property PriceType
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property MenuId (base name: "MenuId")', function() {
      // uncomment below and update the code to test the property MenuId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property CollectionTableId (base name: "CollectionTableId")', function() {
      // uncomment below and update the code to test the property CollectionTableId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryTableId (base name: "DeliveryTableId")', function() {
      // uncomment below and update the code to test the property DeliveryTableId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property CollectionTableIds (base name: "CollectionTableIds")', function() {
      // uncomment below and update the code to test the property CollectionTableIds
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryTableIds (base name: "DeliveryTableIds")', function() {
      // uncomment below and update the code to test the property DeliveryTableIds
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property UseTaxInclusivePrices (base name: "UseTaxInclusivePrices")', function() {
      // uncomment below and update the code to test the property UseTaxInclusivePrices
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property SkipStatusCheckAndAcceptOrderAfterSending (base name: "SkipStatusCheckAndAcceptOrderAfterSending")', function() {
      // uncomment below and update the code to test the property SkipStatusCheckAndAcceptOrderAfterSending
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property SendTableNumberToTableId (base name: "SendTableNumberToTableId")', function() {
      // uncomment below and update the code to test the property SendTableNumberToTableId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property AddChefNoteToProduct (base name: "AddChefNoteToProduct")', function() {
      // uncomment below and update the code to test the property AddChefNoteToProduct
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property ChefNoteItemId (base name: "ChefNoteItemId")', function() {
      // uncomment below and update the code to test the property ChefNoteItemId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property ChefNoteModifierId (base name: "ChefNoteModifierId")', function() {
      // uncomment below and update the code to test the property ChefNoteModifierId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

    it('should have the property ServiceChargeId (base name: "ServiceChargeId")', function() {
      // uncomment below and update the code to test the property ServiceChargeId
      //var instance = new Flipdish.LightspeedSettings();
      //expect(instance).to.be();
    });

  });

}));
