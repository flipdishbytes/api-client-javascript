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
    describe('OrderItem', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderItem();
      });

      it('should create an instance of OrderItem', function() {
        // TODO: update the code to test OrderItem
        expect(instance).to.be.a(Flipdish.OrderItem);
      });

      it('should have the property OrderItemOptions (base name: "OrderItemOptions")', function() {
        // TODO: update the code to test the property OrderItemOptions
        expect(instance).to.have.property('OrderItemOptions');
        // expect(instance.OrderItemOptions).to.be(expectedValueLiteral);
      });

      it('should have the property Metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property Metadata
        expect(instance).to.have.property('Metadata');
        // expect(instance.Metadata).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemPublicId (base name: "MenuItemPublicId")', function() {
        // TODO: update the code to test the property MenuItemPublicId
        expect(instance).to.have.property('MenuItemPublicId');
        // expect(instance.MenuItemPublicId).to.be(expectedValueLiteral);
      });

      it('should have the property MenuSectionName (base name: "MenuSectionName")', function() {
        // TODO: update the code to test the property MenuSectionName
        expect(instance).to.have.property('MenuSectionName');
        // expect(instance.MenuSectionName).to.be(expectedValueLiteral);
      });

      it('should have the property MenuSectionDisplayOrder (base name: "MenuSectionDisplayOrder")', function() {
        // TODO: update the code to test the property MenuSectionDisplayOrder
        expect(instance).to.have.property('MenuSectionDisplayOrder');
        // expect(instance.MenuSectionDisplayOrder).to.be(expectedValueLiteral);
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

      it('should have the property Price (base name: "Price")', function() {
        // TODO: update the code to test the property Price
        expect(instance).to.have.property('Price');
        // expect(instance.Price).to.be(expectedValueLiteral);
      });

      it('should have the property PriceIncludingOptionSetItems (base name: "PriceIncludingOptionSetItems")', function() {
        // TODO: update the code to test the property PriceIncludingOptionSetItems
        expect(instance).to.have.property('PriceIncludingOptionSetItems');
        // expect(instance.PriceIncludingOptionSetItems).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemId (base name: "MenuItemId")', function() {
        // TODO: update the code to test the property MenuItemId
        expect(instance).to.have.property('MenuItemId');
        // expect(instance.MenuItemId).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemDisplayOrder (base name: "MenuItemDisplayOrder")', function() {
        // TODO: update the code to test the property MenuItemDisplayOrder
        expect(instance).to.have.property('MenuItemDisplayOrder');
        // expect(instance.MenuItemDisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property IsAvailable (base name: "IsAvailable")', function() {
        // TODO: update the code to test the property IsAvailable
        expect(instance).to.have.property('IsAvailable');
        // expect(instance.IsAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property DepositReturnFee (base name: "DepositReturnFee")', function() {
        // TODO: update the code to test the property DepositReturnFee
        expect(instance).to.have.property('DepositReturnFee');
        // expect(instance.DepositReturnFee).to.be(expectedValueLiteral);
      });

    });
  });

}));
