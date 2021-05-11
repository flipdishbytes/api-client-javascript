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
    describe('MenuItemOptionSetItemBase', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuItemOptionSetItemBase();
      });

      it('should create an instance of MenuItemOptionSetItemBase', function() {
        // TODO: update the code to test MenuItemOptionSetItemBase
        expect(instance).to.be.a(Flipdish.MenuItemOptionSetItemBase);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Price (base name: "Price")', function() {
        // TODO: update the code to test the property Price
        expect(instance).to.have.property('Price');
        // expect(instance.Price).to.be(expectedValueLiteral);
      });

      it('should have the property IsAvailable (base name: "IsAvailable")', function() {
        // TODO: update the code to test the property IsAvailable
        expect(instance).to.have.property('IsAvailable');
        // expect(instance.IsAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
        // TODO: update the code to test the property DisplayOrder
        expect(instance).to.have.property('DisplayOrder');
        // expect(instance.DisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property CellLayoutType (base name: "CellLayoutType")', function() {
        // TODO: update the code to test the property CellLayoutType
        expect(instance).to.have.property('CellLayoutType');
        // expect(instance.CellLayoutType).to.be(expectedValueLiteral);
      });

      it('should have the property ImageUrl (base name: "ImageUrl")', function() {
        // TODO: update the code to test the property ImageUrl
        expect(instance).to.have.property('ImageUrl');
        // expect(instance.ImageUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
