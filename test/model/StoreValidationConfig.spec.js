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
    describe('StoreValidationConfig', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreValidationConfig();
      });

      it('should create an instance of StoreValidationConfig', function() {
        // TODO: update the code to test StoreValidationConfig
        expect(instance).to.be.a(Flipdish.StoreValidationConfig);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property IsValid (base name: "IsValid")', function() {
        // TODO: update the code to test the property IsValid
        expect(instance).to.have.property('IsValid');
        // expect(instance.IsValid).to.be(expectedValueLiteral);
      });

      it('should have the property StoreGroupId (base name: "StoreGroupId")', function() {
        // TODO: update the code to test the property StoreGroupId
        expect(instance).to.have.property('StoreGroupId');
        // expect(instance.StoreGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property ConfigValidation (base name: "ConfigValidation")', function() {
        // TODO: update the code to test the property ConfigValidation
        expect(instance).to.have.property('ConfigValidation');
        // expect(instance.ConfigValidation).to.be(expectedValueLiteral);
      });

    });
  });

}));
