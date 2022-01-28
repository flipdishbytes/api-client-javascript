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
    describe('AppSummary', function() {
      beforeEach(function() {
        instance = new Flipdish.AppSummary();
      });

      it('should create an instance of AppSummary', function() {
        // TODO: update the code to test AppSummary
        expect(instance).to.be.a(Flipdish.AppSummary);
      });

      it('should have the property Id (base name: "Id")', function() {
        // TODO: update the code to test the property Id
        expect(instance).to.have.property('Id');
        // expect(instance.Id).to.be(expectedValueLiteral);
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

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property VerificationStatus (base name: "VerificationStatus")', function() {
        // TODO: update the code to test the property VerificationStatus
        expect(instance).to.have.property('VerificationStatus');
        // expect(instance.VerificationStatus).to.be(expectedValueLiteral);
      });

      it('should have the property Tags (base name: "Tags")', function() {
        // TODO: update the code to test the property Tags
        expect(instance).to.have.property('Tags');
        // expect(instance.Tags).to.be(expectedValueLiteral);
      });

      it('should have the property Regions (base name: "Regions")', function() {
        // TODO: update the code to test the property Regions
        expect(instance).to.have.property('Regions');
        // expect(instance.Regions).to.be(expectedValueLiteral);
      });

      it('should have the property DeveloperName (base name: "DeveloperName")', function() {
        // TODO: update the code to test the property DeveloperName
        expect(instance).to.have.property('DeveloperName');
        // expect(instance.DeveloperName).to.be(expectedValueLiteral);
      });

    });
  });

}));
