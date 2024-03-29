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
    describe('StoreFeeConfig', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreFeeConfig();
      });

      it('should create an instance of StoreFeeConfig', function() {
        // TODO: update the code to test StoreFeeConfig
        expect(instance).to.be.a(Flipdish.StoreFeeConfig);
      });

      it('should have the property FeeConfigId (base name: "FeeConfigId")', function() {
        // TODO: update the code to test the property FeeConfigId
        expect(instance).to.have.property('FeeConfigId');
        // expect(instance.FeeConfigId).to.be(expectedValueLiteral);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property StartTime (base name: "StartTime")', function() {
        // TODO: update the code to test the property StartTime
        expect(instance).to.have.property('StartTime');
        // expect(instance.StartTime).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrders (base name: "PercentFeeCardOrders")', function() {
        // TODO: update the code to test the property PercentFeeCardOrders
        expect(instance).to.have.property('PercentFeeCardOrders');
        // expect(instance.PercentFeeCardOrders).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrders (base name: "PercentFeeCashOrders")', function() {
        // TODO: update the code to test the property PercentFeeCashOrders
        expect(instance).to.have.property('PercentFeeCashOrders');
        // expect(instance.PercentFeeCashOrders).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersWeb (base name: "PercentFeeCardOrdersWeb")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersWeb
        expect(instance).to.have.property('PercentFeeCardOrdersWeb');
        // expect(instance.PercentFeeCardOrdersWeb).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersWeb (base name: "PercentFeeCashOrdersWeb")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersWeb
        expect(instance).to.have.property('PercentFeeCashOrdersWeb');
        // expect(instance.PercentFeeCashOrdersWeb).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersKiosk (base name: "PercentFeeCardOrdersKiosk")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersKiosk
        expect(instance).to.have.property('PercentFeeCardOrdersKiosk');
        // expect(instance.PercentFeeCardOrdersKiosk).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersKiosk (base name: "PercentFeeCashOrdersKiosk")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersKiosk
        expect(instance).to.have.property('PercentFeeCashOrdersKiosk');
        // expect(instance.PercentFeeCashOrdersKiosk).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrdersKiosk (base name: "FixedFeeCardOrdersKiosk")', function() {
        // TODO: update the code to test the property FixedFeeCardOrdersKiosk
        expect(instance).to.have.property('FixedFeeCardOrdersKiosk');
        // expect(instance.FixedFeeCardOrdersKiosk).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrdersKiosk (base name: "FixedFeeCashOrdersKiosk")', function() {
        // TODO: update the code to test the property FixedFeeCashOrdersKiosk
        expect(instance).to.have.property('FixedFeeCashOrdersKiosk');
        // expect(instance.FixedFeeCashOrdersKiosk).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersKioskChargedToCustomerIncludingVat (base name: "PercentFeeCardOrdersKioskChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersKioskChargedToCustomerIncludingVat
        expect(instance).to.have.property('PercentFeeCardOrdersKioskChargedToCustomerIncludingVat');
        // expect(instance.PercentFeeCardOrdersKioskChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrdersKioskChargedToCustomerIncludingVat (base name: "FixedFeeCardOrdersKioskChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property FixedFeeCardOrdersKioskChargedToCustomerIncludingVat
        expect(instance).to.have.property('FixedFeeCardOrdersKioskChargedToCustomerIncludingVat');
        // expect(instance.FixedFeeCardOrdersKioskChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersKioskChargedToCustomerIncludingVat (base name: "PercentFeeCashOrdersKioskChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersKioskChargedToCustomerIncludingVat
        expect(instance).to.have.property('PercentFeeCashOrdersKioskChargedToCustomerIncludingVat');
        // expect(instance.PercentFeeCashOrdersKioskChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrdersKioskChargedToCustomerIncludingVat (base name: "FixedFeeCashOrdersKioskChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property FixedFeeCashOrdersKioskChargedToCustomerIncludingVat
        expect(instance).to.have.property('FixedFeeCashOrdersKioskChargedToCustomerIncludingVat');
        // expect(instance.FixedFeeCashOrdersKioskChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrders (base name: "FixedFeeCardOrders")', function() {
        // TODO: update the code to test the property FixedFeeCardOrders
        expect(instance).to.have.property('FixedFeeCardOrders');
        // expect(instance.FixedFeeCardOrders).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrders (base name: "FixedFeeCashOrders")', function() {
        // TODO: update the code to test the property FixedFeeCashOrders
        expect(instance).to.have.property('FixedFeeCashOrders');
        // expect(instance.FixedFeeCashOrders).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersChargedToCustomerIncludingVat (base name: "PercentFeeCardOrdersChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersChargedToCustomerIncludingVat
        expect(instance).to.have.property('PercentFeeCardOrdersChargedToCustomerIncludingVat');
        // expect(instance.PercentFeeCardOrdersChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrdersChargedToCustomerIncludingVat (base name: "FixedFeeCardOrdersChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property FixedFeeCardOrdersChargedToCustomerIncludingVat
        expect(instance).to.have.property('FixedFeeCardOrdersChargedToCustomerIncludingVat');
        // expect(instance.FixedFeeCardOrdersChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersChargedToCustomerIncludingVat (base name: "PercentFeeCashOrdersChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersChargedToCustomerIncludingVat
        expect(instance).to.have.property('PercentFeeCashOrdersChargedToCustomerIncludingVat');
        // expect(instance.PercentFeeCashOrdersChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrdersChargedToCustomerIncludingVat (base name: "FixedFeeCashOrdersChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property FixedFeeCashOrdersChargedToCustomerIncludingVat
        expect(instance).to.have.property('FixedFeeCashOrdersChargedToCustomerIncludingVat');
        // expect(instance.FixedFeeCashOrdersChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeTips (base name: "PercentFeeTips")', function() {
        // TODO: update the code to test the property PercentFeeTips
        expect(instance).to.have.property('PercentFeeTips');
        // expect(instance.PercentFeeTips).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeTipsCollection (base name: "PercentFeeTipsCollection")', function() {
        // TODO: update the code to test the property PercentFeeTipsCollection
        expect(instance).to.have.property('PercentFeeTipsCollection');
        // expect(instance.PercentFeeTipsCollection).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeTipsDelivery (base name: "PercentFeeTipsDelivery")', function() {
        // TODO: update the code to test the property PercentFeeTipsDelivery
        expect(instance).to.have.property('PercentFeeTipsDelivery');
        // expect(instance.PercentFeeTipsDelivery).to.be(expectedValueLiteral);
      });

      it('should have the property TaxRatePercent (base name: "TaxRatePercent")', function() {
        // TODO: update the code to test the property TaxRatePercent
        expect(instance).to.have.property('TaxRatePercent');
        // expect(instance.TaxRatePercent).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersLocationService (base name: "PercentFeeCardOrdersLocationService")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersLocationService
        expect(instance).to.have.property('PercentFeeCardOrdersLocationService');
        // expect(instance.PercentFeeCardOrdersLocationService).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersLocationService (base name: "PercentFeeCashOrdersLocationService")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersLocationService
        expect(instance).to.have.property('PercentFeeCashOrdersLocationService');
        // expect(instance.PercentFeeCashOrdersLocationService).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrdersLocationService (base name: "FixedFeeCardOrdersLocationService")', function() {
        // TODO: update the code to test the property FixedFeeCardOrdersLocationService
        expect(instance).to.have.property('FixedFeeCardOrdersLocationService');
        // expect(instance.FixedFeeCardOrdersLocationService).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrdersLocationService (base name: "FixedFeeCashOrdersLocationService")', function() {
        // TODO: update the code to test the property FixedFeeCashOrdersLocationService
        expect(instance).to.have.property('FixedFeeCashOrdersLocationService');
        // expect(instance.FixedFeeCashOrdersLocationService).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersLocationServiceChargedToCustomerIncludingVat (base name: "PercentFeeCardOrdersLocationServiceChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersLocationServiceChargedToCustomerIncludingVat
        expect(instance).to.have.property('PercentFeeCardOrdersLocationServiceChargedToCustomerIncludingVat');
        // expect(instance.PercentFeeCardOrdersLocationServiceChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersLocationServiceChargedToCustomerIncludingVat (base name: "PercentFeeCashOrdersLocationServiceChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersLocationServiceChargedToCustomerIncludingVat
        expect(instance).to.have.property('PercentFeeCashOrdersLocationServiceChargedToCustomerIncludingVat');
        // expect(instance.PercentFeeCashOrdersLocationServiceChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrdersLocationServiceChargedToCustomerIncludingVat (base name: "FixedFeeCardOrdersLocationServiceChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property FixedFeeCardOrdersLocationServiceChargedToCustomerIncludingVat
        expect(instance).to.have.property('FixedFeeCardOrdersLocationServiceChargedToCustomerIncludingVat');
        // expect(instance.FixedFeeCardOrdersLocationServiceChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrdersLocationServiceChargedToCustomerIncludingVat (base name: "FixedFeeCashOrdersLocationServiceChargedToCustomerIncludingVat")', function() {
        // TODO: update the code to test the property FixedFeeCashOrdersLocationServiceChargedToCustomerIncludingVat
        expect(instance).to.have.property('FixedFeeCashOrdersLocationServiceChargedToCustomerIncludingVat');
        // expect(instance.FixedFeeCashOrdersLocationServiceChargedToCustomerIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardOrdersIngest (base name: "PercentFeeCardOrdersIngest")', function() {
        // TODO: update the code to test the property PercentFeeCardOrdersIngest
        expect(instance).to.have.property('PercentFeeCardOrdersIngest');
        // expect(instance.PercentFeeCardOrdersIngest).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCashOrdersIngest (base name: "PercentFeeCashOrdersIngest")', function() {
        // TODO: update the code to test the property PercentFeeCashOrdersIngest
        expect(instance).to.have.property('PercentFeeCashOrdersIngest');
        // expect(instance.PercentFeeCashOrdersIngest).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardOrdersIngest (base name: "FixedFeeCardOrdersIngest")', function() {
        // TODO: update the code to test the property FixedFeeCardOrdersIngest
        expect(instance).to.have.property('FixedFeeCardOrdersIngest');
        // expect(instance.FixedFeeCardOrdersIngest).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCashOrdersIngest (base name: "FixedFeeCashOrdersIngest")', function() {
        // TODO: update the code to test the property FixedFeeCashOrdersIngest
        expect(instance).to.have.property('FixedFeeCashOrdersIngest');
        // expect(instance.FixedFeeCashOrdersIngest).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeDelivery (base name: "PercentFeeDelivery")', function() {
        // TODO: update the code to test the property PercentFeeDelivery
        expect(instance).to.have.property('PercentFeeDelivery');
        // expect(instance.PercentFeeDelivery).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeDelivery (base name: "FixedFeeDelivery")', function() {
        // TODO: update the code to test the property FixedFeeDelivery
        expect(instance).to.have.property('FixedFeeDelivery');
        // expect(instance.FixedFeeDelivery).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeCardPosTransaction (base name: "PercentFeeCardPosTransaction")', function() {
        // TODO: update the code to test the property PercentFeeCardPosTransaction
        expect(instance).to.have.property('PercentFeeCardPosTransaction');
        // expect(instance.PercentFeeCardPosTransaction).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeCardPosTransaction (base name: "FixedFeeCardPosTransaction")', function() {
        // TODO: update the code to test the property FixedFeeCardPosTransaction
        expect(instance).to.have.property('FixedFeeCardPosTransaction');
        // expect(instance.FixedFeeCardPosTransaction).to.be(expectedValueLiteral);
      });

      it('should have the property PercentFeeOrderWithGoogle (base name: "PercentFeeOrderWithGoogle")', function() {
        // TODO: update the code to test the property PercentFeeOrderWithGoogle
        expect(instance).to.have.property('PercentFeeOrderWithGoogle');
        // expect(instance.PercentFeeOrderWithGoogle).to.be(expectedValueLiteral);
      });

      it('should have the property FixedFeeOrderWithGoogle (base name: "FixedFeeOrderWithGoogle")', function() {
        // TODO: update the code to test the property FixedFeeOrderWithGoogle
        expect(instance).to.have.property('FixedFeeOrderWithGoogle');
        // expect(instance.FixedFeeOrderWithGoogle).to.be(expectedValueLiteral);
      });

    });
  });

}));
