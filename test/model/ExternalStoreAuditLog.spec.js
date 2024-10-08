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
    instance = new Flipdish.ExternalStoreAuditLog();
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

  describe('ExternalStoreAuditLog', function() {
    it('should create an instance of ExternalStoreAuditLog', function() {
      // uncomment below and update the code to test ExternalStoreAuditLog
      //var instane = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be.a(Flipdish.ExternalStoreAuditLog);
    });

    it('should have the property ExternalCreateTime (base name: "ExternalCreateTime")', function() {
      // uncomment below and update the code to test the property ExternalCreateTime
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property StoreId (base name: "StoreId")', function() {
      // uncomment below and update the code to test the property StoreId
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Description (base name: "Description")', function() {
      // uncomment below and update the code to test the property Description
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Source (base name: "Source")', function() {
      // uncomment below and update the code to test the property Source
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Version (base name: "Version")', function() {
      // uncomment below and update the code to test the property Version
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property DescriptionFormat (base name: "DescriptionFormat")', function() {
      // uncomment below and update the code to test the property DescriptionFormat
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property DescriptionFields (base name: "DescriptionFields")', function() {
      // uncomment below and update the code to test the property DescriptionFields
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property DescriptionId (base name: "DescriptionId")', function() {
      // uncomment below and update the code to test the property DescriptionId
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Ref1 (base name: "Ref1")', function() {
      // uncomment below and update the code to test the property Ref1
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Ref2 (base name: "Ref2")', function() {
      // uncomment below and update the code to test the property Ref2
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Ref3 (base name: "Ref3")', function() {
      // uncomment below and update the code to test the property Ref3
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Ref4 (base name: "Ref4")', function() {
      // uncomment below and update the code to test the property Ref4
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property OrderId (base name: "OrderId")', function() {
      // uncomment below and update the code to test the property OrderId
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property Tags (base name: "Tags")', function() {
      // uncomment below and update the code to test the property Tags
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

    it('should have the property FieldChanges (base name: "FieldChanges")', function() {
      // uncomment below and update the code to test the property FieldChanges
      //var instance = new Flipdish.ExternalStoreAuditLog();
      //expect(instance).to.be();
    });

  });

}));
