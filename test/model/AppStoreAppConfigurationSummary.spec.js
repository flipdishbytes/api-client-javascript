/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    describe('AppStoreAppConfigurationSummary', function() {
      beforeEach(function() {
        instance = new Flipdish.AppStoreAppConfigurationSummary();
      });

      it('should create an instance of AppStoreAppConfigurationSummary', function() {
        // TODO: update the code to test AppStoreAppConfigurationSummary
        expect(instance).to.be.a(Flipdish.AppStoreAppConfigurationSummary);
      });

      it('should have the property Id (base name: "Id")', function() {
        // TODO: update the code to test the property Id
        expect(instance).to.have.property('Id');
        // expect(instance.Id).to.be(expectedValueLiteral);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property Stores (base name: "Stores")', function() {
        // TODO: update the code to test the property Stores
        expect(instance).to.have.property('Stores');
        // expect(instance.Stores).to.be(expectedValueLiteral);
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

      it('should have the property Internal (base name: "Internal")', function() {
        // TODO: update the code to test the property Internal
        expect(instance).to.have.property('Internal');
        // expect(instance.Internal).to.be(expectedValueLiteral);
      });

      it('should have the property AppStoreAppId (base name: "AppStoreAppId")', function() {
        // TODO: update the code to test the property AppStoreAppId
        expect(instance).to.have.property('AppStoreAppId');
        // expect(instance.AppStoreAppId).to.be(expectedValueLiteral);
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

      it('should have the property Logo (base name: "Logo")', function() {
        // TODO: update the code to test the property Logo
        expect(instance).to.have.property('Logo');
        // expect(instance.Logo).to.be(expectedValueLiteral);
      });

      it('should have the property DeveloperName (base name: "DeveloperName")', function() {
        // TODO: update the code to test the property DeveloperName
        expect(instance).to.have.property('DeveloperName');
        // expect(instance.DeveloperName).to.be(expectedValueLiteral);
      });

    });
  });

}));
