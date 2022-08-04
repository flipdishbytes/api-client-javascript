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
    describe('FulfillmentStatesConfiguration', function() {
      beforeEach(function() {
        instance = new Flipdish.FulfillmentStatesConfiguration();
      });

      it('should create an instance of FulfillmentStatesConfiguration', function() {
        // TODO: update the code to test FulfillmentStatesConfiguration
        expect(instance).to.be.a(Flipdish.FulfillmentStatesConfiguration);
      });

      it('should have the property States (base name: "States")', function() {
        // TODO: update the code to test the property States
        expect(instance).to.have.property('States');
        // expect(instance.States).to.be(expectedValueLiteral);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property ConfigurationUid (base name: "ConfigurationUid")', function() {
        // TODO: update the code to test the property ConfigurationUid
        expect(instance).to.have.property('ConfigurationUid');
        // expect(instance.ConfigurationUid).to.be(expectedValueLiteral);
      });

      it('should have the property StoreSelectorType (base name: "StoreSelectorType")', function() {
        // TODO: update the code to test the property StoreSelectorType
        expect(instance).to.have.property('StoreSelectorType');
        // expect(instance.StoreSelectorType).to.be(expectedValueLiteral);
      });

      it('should have the property StoreIds (base name: "StoreIds")', function() {
        // TODO: update the code to test the property StoreIds
        expect(instance).to.have.property('StoreIds');
        // expect(instance.StoreIds).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

    });
  });

}));
