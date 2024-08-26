/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CreateAppStoreApp', function() {
      beforeEach(function() {
        instance = new Flipdish.CreateAppStoreApp();
      });

      it('should create an instance of CreateAppStoreApp', function() {
        // TODO: update the code to test CreateAppStoreApp
        expect(instance).to.be.a(Flipdish.CreateAppStoreApp);
      });

      it('should have the property Details (base name: "Details")', function() {
        // TODO: update the code to test the property Details
        expect(instance).to.have.property('Details');
        // expect(instance.Details).to.be(expectedValueLiteral);
      });

      it('should have the property ConfigurationType (base name: "ConfigurationType")', function() {
        // TODO: update the code to test the property ConfigurationType
        expect(instance).to.have.property('ConfigurationType');
        // expect(instance.ConfigurationType).to.be(expectedValueLiteral);
      });

      it('should have the property StoreSelectorType (base name: "StoreSelectorType")', function() {
        // TODO: update the code to test the property StoreSelectorType
        expect(instance).to.have.property('StoreSelectorType');
        // expect(instance.StoreSelectorType).to.be(expectedValueLiteral);
      });

      it('should have the property FieldGroups (base name: "FieldGroups")', function() {
        // TODO: update the code to test the property FieldGroups
        expect(instance).to.have.property('FieldGroups');
        // expect(instance.FieldGroups).to.be(expectedValueLiteral);
      });

      it('should have the property SetupInstructions (base name: "SetupInstructions")', function() {
        // TODO: update the code to test the property SetupInstructions
        expect(instance).to.have.property('SetupInstructions');
        // expect(instance.SetupInstructions).to.be(expectedValueLiteral);
      });

      it('should have the property ExternalSetupLink (base name: "ExternalSetupLink")', function() {
        // TODO: update the code to test the property ExternalSetupLink
        expect(instance).to.have.property('ExternalSetupLink');
        // expect(instance.ExternalSetupLink).to.be(expectedValueLiteral);
      });

      it('should have the property TeammateAppAccessLevel (base name: "TeammateAppAccessLevel")', function() {
        // TODO: update the code to test the property TeammateAppAccessLevel
        expect(instance).to.have.property('TeammateAppAccessLevel');
        // expect(instance.TeammateAppAccessLevel).to.be(expectedValueLiteral);
      });

      it('should have the property PermissionsType (base name: "PermissionsType")', function() {
        // TODO: update the code to test the property PermissionsType
        expect(instance).to.have.property('PermissionsType');
        // expect(instance.PermissionsType).to.be(expectedValueLiteral);
      });

      it('should have the property Support (base name: "Support")', function() {
        // TODO: update the code to test the property Support
        expect(instance).to.have.property('Support');
        // expect(instance.Support).to.be(expectedValueLiteral);
      });

      it('should have the property ExternalFunctionActionUrl (base name: "ExternalFunctionActionUrl")', function() {
        // TODO: update the code to test the property ExternalFunctionActionUrl
        expect(instance).to.have.property('ExternalFunctionActionUrl');
        // expect(instance.ExternalFunctionActionUrl).to.be(expectedValueLiteral);
      });

      it('should have the property ExternalFunctionSignatureKey (base name: "ExternalFunctionSignatureKey")', function() {
        // TODO: update the code to test the property ExternalFunctionSignatureKey
        expect(instance).to.have.property('ExternalFunctionSignatureKey');
        // expect(instance.ExternalFunctionSignatureKey).to.be(expectedValueLiteral);
      });

      it('should have the property IsPaid (base name: "IsPaid")', function() {
        // TODO: update the code to test the property IsPaid
        expect(instance).to.have.property('IsPaid');
        // expect(instance.IsPaid).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "Description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property Categories (base name: "Categories")', function() {
        // TODO: update the code to test the property Categories
        expect(instance).to.have.property('Categories');
        // expect(instance.Categories).to.be(expectedValueLiteral);
      });

      it('should have the property Countries (base name: "Countries")', function() {
        // TODO: update the code to test the property Countries
        expect(instance).to.have.property('Countries');
        // expect(instance.Countries).to.be(expectedValueLiteral);
      });

      it('should have the property DeveloperName (base name: "DeveloperName")', function() {
        // TODO: update the code to test the property DeveloperName
        expect(instance).to.have.property('DeveloperName');
        // expect(instance.DeveloperName).to.be(expectedValueLiteral);
      });

    });
  });

}));
