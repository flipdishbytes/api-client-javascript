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
    describe('MenuSectionItem', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuSectionItem();
      });

      it('should create an instance of MenuSectionItem', function() {
        // TODO: update the code to test MenuSectionItem
        expect(instance).to.be.a(Flipdish.MenuSectionItem);
      });

      it('should have the property ActualPrice (base name: "ActualPrice")', function() {
        // TODO: update the code to test the property ActualPrice
        expect(instance).to.have.property('ActualPrice');
        // expect(instance.ActualPrice).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemOptionSets (base name: "MenuItemOptionSets")', function() {
        // TODO: update the code to test the property MenuItemOptionSets
        expect(instance).to.have.property('MenuItemOptionSets');
        // expect(instance.MenuItemOptionSets).to.be(expectedValueLiteral);
      });

      it('should have the property DailySpecialHours (base name: "DailySpecialHours")', function() {
        // TODO: update the code to test the property DailySpecialHours
        expect(instance).to.have.property('DailySpecialHours');
        // expect(instance.DailySpecialHours).to.be(expectedValueLiteral);
      });

      it('should have the property PublicId (base name: "PublicId")', function() {
        // TODO: update the code to test the property PublicId
        expect(instance).to.have.property('PublicId');
        // expect(instance.PublicId).to.be(expectedValueLiteral);
      });

      it('should have the property TaxRateName (base name: "TaxRateName")', function() {
        // TODO: update the code to test the property TaxRateName
        expect(instance).to.have.property('TaxRateName');
        // expect(instance.TaxRateName).to.be(expectedValueLiteral);
      });

      it('should have the property TaxRateId (base name: "TaxRateId")', function() {
        // TODO: update the code to test the property TaxRateId
        expect(instance).to.have.property('TaxRateId');
        // expect(instance.TaxRateId).to.be(expectedValueLiteral);
      });

      it('should have the property TaxValue (base name: "TaxValue")', function() {
        // TODO: update the code to test the property TaxValue
        expect(instance).to.have.property('TaxValue');
        // expect(instance.TaxValue).to.be(expectedValueLiteral);
      });

      it('should have the property Metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property Metadata
        expect(instance).to.have.property('Metadata');
        // expect(instance.Metadata).to.be(expectedValueLiteral);
      });

      it('should have the property CatalogItemId (base name: "CatalogItemId")', function() {
        // TODO: update the code to test the property CatalogItemId
        expect(instance).to.have.property('CatalogItemId');
        // expect(instance.CatalogItemId).to.be(expectedValueLiteral);
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

    });
  });

}));
