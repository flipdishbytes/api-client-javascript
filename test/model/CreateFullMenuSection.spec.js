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
    describe('CreateFullMenuSection', function() {
      beforeEach(function() {
        instance = new Flipdish.CreateFullMenuSection();
      });

      it('should create an instance of CreateFullMenuSection', function() {
        // TODO: update the code to test CreateFullMenuSection
        expect(instance).to.be.a(Flipdish.CreateFullMenuSection);
      });

      it('should have the property MenuSectionAvailability (base name: "MenuSectionAvailability")', function() {
        // TODO: update the code to test the property MenuSectionAvailability
        expect(instance).to.have.property('MenuSectionAvailability');
        // expect(instance.MenuSectionAvailability).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItems (base name: "MenuItems")', function() {
        // TODO: update the code to test the property MenuItems
        expect(instance).to.have.property('MenuItems');
        // expect(instance.MenuItems).to.be(expectedValueLiteral);
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

      it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
        // TODO: update the code to test the property DisplayOrder
        expect(instance).to.have.property('DisplayOrder');
        // expect(instance.DisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property IsAvailable (base name: "IsAvailable")', function() {
        // TODO: update the code to test the property IsAvailable
        expect(instance).to.have.property('IsAvailable');
        // expect(instance.IsAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property IsHiddenFromCustomers (base name: "IsHiddenFromCustomers")', function() {
        // TODO: update the code to test the property IsHiddenFromCustomers
        expect(instance).to.have.property('IsHiddenFromCustomers');
        // expect(instance.IsHiddenFromCustomers).to.be(expectedValueLiteral);
      });

      it('should have the property ImageUrl (base name: "ImageUrl")', function() {
        // TODO: update the code to test the property ImageUrl
        expect(instance).to.have.property('ImageUrl');
        // expect(instance.ImageUrl).to.be(expectedValueLiteral);
      });

      it('should have the property MenuSectionId (base name: "MenuSectionId")', function() {
        // TODO: update the code to test the property MenuSectionId
        expect(instance).to.have.property('MenuSectionId');
        // expect(instance.MenuSectionId).to.be(expectedValueLiteral);
      });

    });
  });

}));
