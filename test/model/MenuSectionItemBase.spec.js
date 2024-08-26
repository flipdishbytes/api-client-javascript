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
    describe('MenuSectionItemBase', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuSectionItemBase();
      });

      it('should create an instance of MenuSectionItemBase', function() {
        // TODO: update the code to test MenuSectionItemBase
        expect(instance).to.be.a(Flipdish.MenuSectionItemBase);
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

      it('should have the property SpicinessRating (base name: "SpicinessRating")', function() {
        // TODO: update the code to test the property SpicinessRating
        expect(instance).to.have.property('SpicinessRating');
        // expect(instance.SpicinessRating).to.be(expectedValueLiteral);
      });

      it('should have the property Price (base name: "Price")', function() {
        // TODO: update the code to test the property Price
        expect(instance).to.have.property('Price');
        // expect(instance.Price).to.be(expectedValueLiteral);
      });

      it('should have the property DepositReturnFee (base name: "DepositReturnFee")', function() {
        // TODO: update the code to test the property DepositReturnFee
        expect(instance).to.have.property('DepositReturnFee');
        // expect(instance.DepositReturnFee).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
        // TODO: update the code to test the property DisplayOrder
        expect(instance).to.have.property('DisplayOrder');
        // expect(instance.DisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property Alcohol (base name: "Alcohol")', function() {
        // TODO: update the code to test the property Alcohol
        expect(instance).to.have.property('Alcohol');
        // expect(instance.Alcohol).to.be(expectedValueLiteral);
      });

      it('should have the property IsAvailable (base name: "IsAvailable")', function() {
        // TODO: update the code to test the property IsAvailable
        expect(instance).to.have.property('IsAvailable');
        // expect(instance.IsAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property CellLayoutType (base name: "CellLayoutType")', function() {
        // TODO: update the code to test the property CellLayoutType
        expect(instance).to.have.property('CellLayoutType');
        // expect(instance.CellLayoutType).to.be(expectedValueLiteral);
      });

      it('should have the property DisableVouchers (base name: "DisableVouchers")', function() {
        // TODO: update the code to test the property DisableVouchers
        expect(instance).to.have.property('DisableVouchers');
        // expect(instance.DisableVouchers).to.be(expectedValueLiteral);
      });

      it('should have the property ImageName (base name: "ImageName")', function() {
        // TODO: update the code to test the property ImageName
        expect(instance).to.have.property('ImageName');
        // expect(instance.ImageName).to.be(expectedValueLiteral);
      });

      it('should have the property ImageUrl (base name: "ImageUrl")', function() {
        // TODO: update the code to test the property ImageUrl
        expect(instance).to.have.property('ImageUrl');
        // expect(instance.ImageUrl).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemId (base name: "MenuItemId")', function() {
        // TODO: update the code to test the property MenuItemId
        expect(instance).to.have.property('MenuItemId');
        // expect(instance.MenuItemId).to.be(expectedValueLiteral);
      });

      it('should have the property ExcludeFromVoucherDiscounting (base name: "ExcludeFromVoucherDiscounting")', function() {
        // TODO: update the code to test the property ExcludeFromVoucherDiscounting
        expect(instance).to.have.property('ExcludeFromVoucherDiscounting');
        // expect(instance.ExcludeFromVoucherDiscounting).to.be(expectedValueLiteral);
      });

    });
  });

}));
