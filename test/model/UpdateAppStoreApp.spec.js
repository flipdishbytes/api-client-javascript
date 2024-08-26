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
    instance = new Flipdish.UpdateAppStoreApp();
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

  describe('UpdateAppStoreApp', function() {
    it('should create an instance of UpdateAppStoreApp', function() {
      // uncomment below and update the code to test UpdateAppStoreApp
      //var instane = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be.a(Flipdish.UpdateAppStoreApp);
    });

    it('should have the property Details (base name: "Details")', function() {
      // uncomment below and update the code to test the property Details
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property ConfigurationType (base name: "ConfigurationType")', function() {
      // uncomment below and update the code to test the property ConfigurationType
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property StoreSelectorType (base name: "StoreSelectorType")', function() {
      // uncomment below and update the code to test the property StoreSelectorType
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property FieldGroups (base name: "FieldGroups")', function() {
      // uncomment below and update the code to test the property FieldGroups
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property SetupInstructions (base name: "SetupInstructions")', function() {
      // uncomment below and update the code to test the property SetupInstructions
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property ExternalSetupLink (base name: "ExternalSetupLink")', function() {
      // uncomment below and update the code to test the property ExternalSetupLink
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property TeammateAppAccessLevel (base name: "TeammateAppAccessLevel")', function() {
      // uncomment below and update the code to test the property TeammateAppAccessLevel
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property PermissionsType (base name: "PermissionsType")', function() {
      // uncomment below and update the code to test the property PermissionsType
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property Support (base name: "Support")', function() {
      // uncomment below and update the code to test the property Support
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property ExternalFunctionActionUrl (base name: "ExternalFunctionActionUrl")', function() {
      // uncomment below and update the code to test the property ExternalFunctionActionUrl
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property ExternalFunctionSignatureKey (base name: "ExternalFunctionSignatureKey")', function() {
      // uncomment below and update the code to test the property ExternalFunctionSignatureKey
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property IsPaid (base name: "IsPaid")', function() {
      // uncomment below and update the code to test the property IsPaid
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property Name (base name: "Name")', function() {
      // uncomment below and update the code to test the property Name
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property Description (base name: "Description")', function() {
      // uncomment below and update the code to test the property Description
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property IsEnabled (base name: "IsEnabled")', function() {
      // uncomment below and update the code to test the property IsEnabled
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property Categories (base name: "Categories")', function() {
      // uncomment below and update the code to test the property Categories
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property Countries (base name: "Countries")', function() {
      // uncomment below and update the code to test the property Countries
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

    it('should have the property DeveloperName (base name: "DeveloperName")', function() {
      // uncomment below and update the code to test the property DeveloperName
      //var instance = new Flipdish.UpdateAppStoreApp();
      //expect(instance).to.be();
    });

  });

}));
