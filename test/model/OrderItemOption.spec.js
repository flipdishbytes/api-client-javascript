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
    describe('OrderItemOption', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderItemOption();
      });

      it('should create an instance of OrderItemOption', function() {
        // TODO: update the code to test OrderItemOption
        expect(instance).to.be.a(Flipdish.OrderItemOption);
      });

      it('should have the property Metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property Metadata
        expect(instance).to.have.property('Metadata');
        // expect(instance.Metadata).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemOptionPublicId (base name: "MenuItemOptionPublicId")', function() {
        // TODO: update the code to test the property MenuItemOptionPublicId
        expect(instance).to.have.property('MenuItemOptionPublicId');
        // expect(instance.MenuItemOptionPublicId).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemOptionId (base name: "MenuItemOptionId")', function() {
        // TODO: update the code to test the property MenuItemOptionId
        expect(instance).to.have.property('MenuItemOptionId');
        // expect(instance.MenuItemOptionId).to.be(expectedValueLiteral);
      });

      it('should have the property IsMasterOptionSetItem (base name: "IsMasterOptionSetItem")', function() {
        // TODO: update the code to test the property IsMasterOptionSetItem
        expect(instance).to.have.property('IsMasterOptionSetItem');
        // expect(instance.IsMasterOptionSetItem).to.be(expectedValueLiteral);
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

      it('should have the property MenuItemOptionDisplayOrder (base name: "MenuItemOptionDisplayOrder")', function() {
        // TODO: update the code to test the property MenuItemOptionDisplayOrder
        expect(instance).to.have.property('MenuItemOptionDisplayOrder');
        // expect(instance.MenuItemOptionDisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemOptionSetDisplayOrder (base name: "MenuItemOptionSetDisplayOrder")', function() {
        // TODO: update the code to test the property MenuItemOptionSetDisplayOrder
        expect(instance).to.have.property('MenuItemOptionSetDisplayOrder');
        // expect(instance.MenuItemOptionSetDisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property DepositReturnFee (base name: "DepositReturnFee")', function() {
        // TODO: update the code to test the property DepositReturnFee
        expect(instance).to.have.property('DepositReturnFee');
        // expect(instance.DepositReturnFee).to.be(expectedValueLiteral);
      });

    });
  });

}));
