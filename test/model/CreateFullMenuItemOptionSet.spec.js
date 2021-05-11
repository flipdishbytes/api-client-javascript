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
    describe('CreateFullMenuItemOptionSet', function() {
      beforeEach(function() {
        instance = new Flipdish.CreateFullMenuItemOptionSet();
      });

      it('should create an instance of CreateFullMenuItemOptionSet', function() {
        // TODO: update the code to test CreateFullMenuItemOptionSet
        expect(instance).to.be.a(Flipdish.CreateFullMenuItemOptionSet);
      });

      it('should have the property MenuItemOptionSetItems (base name: "MenuItemOptionSetItems")', function() {
        // TODO: update the code to test the property MenuItemOptionSetItems
        expect(instance).to.have.property('MenuItemOptionSetItems');
        // expect(instance.MenuItemOptionSetItems).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property IsMasterOptionSet (base name: "IsMasterOptionSet")', function() {
        // TODO: update the code to test the property IsMasterOptionSet
        expect(instance).to.have.property('IsMasterOptionSet');
        // expect(instance.IsMasterOptionSet).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
        // TODO: update the code to test the property DisplayOrder
        expect(instance).to.have.property('DisplayOrder');
        // expect(instance.DisplayOrder).to.be(expectedValueLiteral);
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

      it('should have the property CellLayoutType (base name: "CellLayoutType")', function() {
        // TODO: update the code to test the property CellLayoutType
        expect(instance).to.have.property('CellLayoutType');
        // expect(instance.CellLayoutType).to.be(expectedValueLiteral);
      });

    });
  });

}));