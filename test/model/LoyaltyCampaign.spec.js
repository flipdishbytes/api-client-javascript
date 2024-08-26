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
    describe('LoyaltyCampaign', function() {
      beforeEach(function() {
        instance = new Flipdish.LoyaltyCampaign();
      });

      it('should create an instance of LoyaltyCampaign', function() {
        // TODO: update the code to test LoyaltyCampaign
        expect(instance).to.be.a(Flipdish.LoyaltyCampaign);
      });

      it('should have the property CampaignId (base name: "CampaignId")', function() {
        // TODO: update the code to test the property CampaignId
        expect(instance).to.have.property('CampaignId');
        // expect(instance.CampaignId).to.be(expectedValueLiteral);
      });

      it('should have the property Statistics (base name: "Statistics")', function() {
        // TODO: update the code to test the property Statistics
        expect(instance).to.have.property('Statistics');
        // expect(instance.Statistics).to.be(expectedValueLiteral);
      });

      it('should have the property Stores (base name: "Stores")', function() {
        // TODO: update the code to test the property Stores
        expect(instance).to.have.property('Stores');
        // expect(instance.Stores).to.be(expectedValueLiteral);
      });

      it('should have the property PublicId (base name: "PublicId")', function() {
        // TODO: update the code to test the property PublicId
        expect(instance).to.have.property('PublicId');
        // expect(instance.PublicId).to.be(expectedValueLiteral);
      });

      it('should have the property OrdersBeforeReceivingVoucher (base name: "OrdersBeforeReceivingVoucher")', function() {
        // TODO: update the code to test the property OrdersBeforeReceivingVoucher
        expect(instance).to.have.property('OrdersBeforeReceivingVoucher');
        // expect(instance.OrdersBeforeReceivingVoucher).to.be(expectedValueLiteral);
      });

      it('should have the property PercentDiscountAmount (base name: "PercentDiscountAmount")', function() {
        // TODO: update the code to test the property PercentDiscountAmount
        expect(instance).to.have.property('PercentDiscountAmount');
        // expect(instance.PercentDiscountAmount).to.be(expectedValueLiteral);
      });

      it('should have the property RoundingStrategy (base name: "RoundingStrategy")', function() {
        // TODO: update the code to test the property RoundingStrategy
        expect(instance).to.have.property('RoundingStrategy');
        // expect(instance.RoundingStrategy).to.be(expectedValueLiteral);
      });

      it('should have the property ShouldIncludeOrdersWithLoyaltyVoucher (base name: "ShouldIncludeOrdersWithLoyaltyVoucher")', function() {
        // TODO: update the code to test the property ShouldIncludeOrdersWithLoyaltyVoucher
        expect(instance).to.have.property('ShouldIncludeOrdersWithLoyaltyVoucher');
        // expect(instance.ShouldIncludeOrdersWithLoyaltyVoucher).to.be(expectedValueLiteral);
      });

      it('should have the property VoucherValidPeriodDays (base name: "VoucherValidPeriodDays")', function() {
        // TODO: update the code to test the property VoucherValidPeriodDays
        expect(instance).to.have.property('VoucherValidPeriodDays');
        // expect(instance.VoucherValidPeriodDays).to.be(expectedValueLiteral);
      });

      it('should have the property IncludeDeliveryFee (base name: "IncludeDeliveryFee")', function() {
        // TODO: update the code to test the property IncludeDeliveryFee
        expect(instance).to.have.property('IncludeDeliveryFee');
        // expect(instance.IncludeDeliveryFee).to.be(expectedValueLiteral);
      });

      it('should have the property AutoApplyResultingVouchers (base name: "AutoApplyResultingVouchers")', function() {
        // TODO: update the code to test the property AutoApplyResultingVouchers
        expect(instance).to.have.property('AutoApplyResultingVouchers');
        // expect(instance.AutoApplyResultingVouchers).to.be(expectedValueLiteral);
      });

      it('should have the property IncludeExistingOrders (base name: "IncludeExistingOrders")', function() {
        // TODO: update the code to test the property IncludeExistingOrders
        expect(instance).to.have.property('IncludeExistingOrders');
        // expect(instance.IncludeExistingOrders).to.be(expectedValueLiteral);
      });

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property StoreIds (base name: "StoreIds")', function() {
        // TODO: update the code to test the property StoreIds
        expect(instance).to.have.property('StoreIds');
        // expect(instance.StoreIds).to.be(expectedValueLiteral);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property ForceDiscount (base name: "ForceDiscount")', function() {
        // TODO: update the code to test the property ForceDiscount
        expect(instance).to.have.property('ForceDiscount');
        // expect(instance.ForceDiscount).to.be(expectedValueLiteral);
      });

    });
  });

}));
