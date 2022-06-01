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
    describe('LightspeedSettings', function() {
      beforeEach(function() {
        instance = new Flipdish.LightspeedSettings();
      });

      it('should create an instance of LightspeedSettings', function() {
        // TODO: update the code to test LightspeedSettings
        expect(instance).to.be.a(Flipdish.LightspeedSettings);
      });

      it('should have the property CompanyId (base name: "CompanyId")', function() {
        // TODO: update the code to test the property CompanyId
        expect(instance).to.have.property('CompanyId');
        // expect(instance.CompanyId).to.be(expectedValueLiteral);
      });

      it('should have the property UseOAuth (base name: "UseOAuth")', function() {
        // TODO: update the code to test the property UseOAuth
        expect(instance).to.have.property('UseOAuth');
        // expect(instance.UseOAuth).to.be(expectedValueLiteral);
      });

      it('should have the property Enabled (base name: "Enabled")', function() {
        // TODO: update the code to test the property Enabled
        expect(instance).to.have.property('Enabled');
        // expect(instance.Enabled).to.be(expectedValueLiteral);
      });

      it('should have the property EstimatedMinutesForDelivery (base name: "EstimatedMinutesForDelivery")', function() {
        // TODO: update the code to test the property EstimatedMinutesForDelivery
        expect(instance).to.have.property('EstimatedMinutesForDelivery');
        // expect(instance.EstimatedMinutesForDelivery).to.be(expectedValueLiteral);
      });

      it('should have the property EstimatedMinutesForCollection (base name: "EstimatedMinutesForCollection")', function() {
        // TODO: update the code to test the property EstimatedMinutesForCollection
        expect(instance).to.have.property('EstimatedMinutesForCollection');
        // expect(instance.EstimatedMinutesForCollection).to.be(expectedValueLiteral);
      });

      it('should have the property GeographicLocation (base name: "GeographicLocation")', function() {
        // TODO: update the code to test the property GeographicLocation
        expect(instance).to.have.property('GeographicLocation');
        // expect(instance.GeographicLocation).to.be(expectedValueLiteral);
      });

      it('should have the property Establishment (base name: "Establishment")', function() {
        // TODO: update the code to test the property Establishment
        expect(instance).to.have.property('Establishment');
        // expect(instance.Establishment).to.be(expectedValueLiteral);
      });

      it('should have the property VoucherId (base name: "VoucherId")', function() {
        // TODO: update the code to test the property VoucherId
        expect(instance).to.have.property('VoucherId');
        // expect(instance.VoucherId).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryFeeId (base name: "DeliveryFeeId")', function() {
        // TODO: update the code to test the property DeliveryFeeId
        expect(instance).to.have.property('DeliveryFeeId');
        // expect(instance.DeliveryFeeId).to.be(expectedValueLiteral);
      });

      it('should have the property ProcessingFeeId (base name: "ProcessingFeeId")', function() {
        // TODO: update the code to test the property ProcessingFeeId
        expect(instance).to.have.property('ProcessingFeeId');
        // expect(instance.ProcessingFeeId).to.be(expectedValueLiteral);
      });

      it('should have the property PriceType (base name: "PriceType")', function() {
        // TODO: update the code to test the property PriceType
        expect(instance).to.have.property('PriceType');
        // expect(instance.PriceType).to.be(expectedValueLiteral);
      });

      it('should have the property MenuId (base name: "MenuId")', function() {
        // TODO: update the code to test the property MenuId
        expect(instance).to.have.property('MenuId');
        // expect(instance.MenuId).to.be(expectedValueLiteral);
      });

      it('should have the property CollectionTableId (base name: "CollectionTableId")', function() {
        // TODO: update the code to test the property CollectionTableId
        expect(instance).to.have.property('CollectionTableId');
        // expect(instance.CollectionTableId).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryTableId (base name: "DeliveryTableId")', function() {
        // TODO: update the code to test the property DeliveryTableId
        expect(instance).to.have.property('DeliveryTableId');
        // expect(instance.DeliveryTableId).to.be(expectedValueLiteral);
      });

      it('should have the property CollectionTableIds (base name: "CollectionTableIds")', function() {
        // TODO: update the code to test the property CollectionTableIds
        expect(instance).to.have.property('CollectionTableIds');
        // expect(instance.CollectionTableIds).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryTableIds (base name: "DeliveryTableIds")', function() {
        // TODO: update the code to test the property DeliveryTableIds
        expect(instance).to.have.property('DeliveryTableIds');
        // expect(instance.DeliveryTableIds).to.be(expectedValueLiteral);
      });

      it('should have the property UseTaxInclusivePrices (base name: "UseTaxInclusivePrices")', function() {
        // TODO: update the code to test the property UseTaxInclusivePrices
        expect(instance).to.have.property('UseTaxInclusivePrices');
        // expect(instance.UseTaxInclusivePrices).to.be(expectedValueLiteral);
      });

      it('should have the property SkipStatusCheckAndAcceptOrderAfterSending (base name: "SkipStatusCheckAndAcceptOrderAfterSending")', function() {
        // TODO: update the code to test the property SkipStatusCheckAndAcceptOrderAfterSending
        expect(instance).to.have.property('SkipStatusCheckAndAcceptOrderAfterSending');
        // expect(instance.SkipStatusCheckAndAcceptOrderAfterSending).to.be(expectedValueLiteral);
      });

      it('should have the property SendTableNumberToTableId (base name: "SendTableNumberToTableId")', function() {
        // TODO: update the code to test the property SendTableNumberToTableId
        expect(instance).to.have.property('SendTableNumberToTableId');
        // expect(instance.SendTableNumberToTableId).to.be(expectedValueLiteral);
      });

      it('should have the property AddChefNoteToProduct (base name: "AddChefNoteToProduct")', function() {
        // TODO: update the code to test the property AddChefNoteToProduct
        expect(instance).to.have.property('AddChefNoteToProduct');
        // expect(instance.AddChefNoteToProduct).to.be(expectedValueLiteral);
      });

      it('should have the property ChefNoteItemId (base name: "ChefNoteItemId")', function() {
        // TODO: update the code to test the property ChefNoteItemId
        expect(instance).to.have.property('ChefNoteItemId');
        // expect(instance.ChefNoteItemId).to.be(expectedValueLiteral);
      });

      it('should have the property ChefNoteModifierId (base name: "ChefNoteModifierId")', function() {
        // TODO: update the code to test the property ChefNoteModifierId
        expect(instance).to.have.property('ChefNoteModifierId');
        // expect(instance.ChefNoteModifierId).to.be(expectedValueLiteral);
      });

      it('should have the property ServiceChargeId (base name: "ServiceChargeId")', function() {
        // TODO: update the code to test the property ServiceChargeId
        expect(instance).to.have.property('ServiceChargeId');
        // expect(instance.ServiceChargeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
