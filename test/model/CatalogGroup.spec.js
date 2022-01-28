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
    describe('CatalogGroup', function() {
      beforeEach(function() {
        instance = new Flipdish.CatalogGroup();
      });

      it('should create an instance of CatalogGroup', function() {
        // TODO: update the code to test CatalogGroup
        expect(instance).to.be.a(Flipdish.CatalogGroup);
      });

      it('should have the property CatalogGroupId (base name: "CatalogGroupId")', function() {
        // TODO: update the code to test the property CatalogGroupId
        expect(instance).to.have.property('CatalogGroupId');
        // expect(instance.CatalogGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property IsArchived (base name: "IsArchived")', function() {
        // TODO: update the code to test the property IsArchived
        expect(instance).to.have.property('IsArchived');
        // expect(instance.IsArchived).to.be(expectedValueLiteral);
      });

      it('should have the property MinSelectCount (base name: "MinSelectCount")', function() {
        // TODO: update the code to test the property MinSelectCount
        expect(instance).to.have.property('MinSelectCount');
        // expect(instance.MinSelectCount).to.be(expectedValueLiteral);
      });

      it('should have the property MaxSelectCount (base name: "MaxSelectCount")', function() {
        // TODO: update the code to test the property MaxSelectCount
        expect(instance).to.have.property('MaxSelectCount');
        // expect(instance.MaxSelectCount).to.be(expectedValueLiteral);
      });

      it('should have the property Items (base name: "Items")', function() {
        // TODO: update the code to test the property Items
        expect(instance).to.have.property('Items');
        // expect(instance.Items).to.be(expectedValueLiteral);
      });

      it('should have the property GroupType (base name: "GroupType")', function() {
        // TODO: update the code to test the property GroupType
        expect(instance).to.have.property('GroupType');
        // expect(instance.GroupType).to.be(expectedValueLiteral);
      });

      it('should have the property Sku (base name: "Sku")', function() {
        // TODO: update the code to test the property Sku
        expect(instance).to.have.property('Sku');
        // expect(instance.Sku).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property ImageFileName (base name: "ImageFileName")', function() {
        // TODO: update the code to test the property ImageFileName
        expect(instance).to.have.property('ImageFileName');
        // expect(instance.ImageFileName).to.be(expectedValueLiteral);
      });

    });
  });

}));
