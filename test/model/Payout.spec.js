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
    describe('Payout', function() {
      beforeEach(function() {
        instance = new Flipdish.Payout();
      });

      it('should create an instance of Payout', function() {
        // TODO: update the code to test Payout
        expect(instance).to.be.a(Flipdish.Payout);
      });

      it('should have the property PayoutId (base name: "PayoutId")', function() {
        // TODO: update the code to test the property PayoutId
        expect(instance).to.have.property('PayoutId');
        // expect(instance.PayoutId).to.be(expectedValueLiteral);
      });

      it('should have the property PayeeBankAccountId (base name: "PayeeBankAccountId")', function() {
        // TODO: update the code to test the property PayeeBankAccountId
        expect(instance).to.have.property('PayeeBankAccountId');
        // expect(instance.PayeeBankAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property AccountName (base name: "AccountName")', function() {
        // TODO: update the code to test the property AccountName
        expect(instance).to.have.property('AccountName');
        // expect(instance.AccountName).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutStatus (base name: "PayoutStatus")', function() {
        // TODO: update the code to test the property PayoutStatus
        expect(instance).to.have.property('PayoutStatus');
        // expect(instance.PayoutStatus).to.be(expectedValueLiteral);
      });

      it('should have the property CreatedDate (base name: "CreatedDate")', function() {
        // TODO: update the code to test the property CreatedDate
        expect(instance).to.have.property('CreatedDate');
        // expect(instance.CreatedDate).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodStartTime (base name: "PeriodStartTime")', function() {
        // TODO: update the code to test the property PeriodStartTime
        expect(instance).to.have.property('PeriodStartTime');
        // expect(instance.PeriodStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodEndTime (base name: "PeriodEndTime")', function() {
        // TODO: update the code to test the property PeriodEndTime
        expect(instance).to.have.property('PeriodEndTime');
        // expect(instance.PeriodEndTime).to.be(expectedValueLiteral);
      });

      it('should have the property DestinationBank (base name: "DestinationBank")', function() {
        // TODO: update the code to test the property DestinationBank
        expect(instance).to.have.property('DestinationBank');
        // expect(instance.DestinationBank).to.be(expectedValueLiteral);
      });

      it('should have the property DestinationAccount (base name: "DestinationAccount")', function() {
        // TODO: update the code to test the property DestinationAccount
        expect(instance).to.have.property('DestinationAccount');
        // expect(instance.DestinationAccount).to.be(expectedValueLiteral);
      });

      it('should have the property Amount (base name: "Amount")', function() {
        // TODO: update the code to test the property Amount
        expect(instance).to.have.property('Amount');
        // expect(instance.Amount).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutType (base name: "PayoutType")', function() {
        // TODO: update the code to test the property PayoutType
        expect(instance).to.have.property('PayoutType');
        // expect(instance.PayoutType).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property CutoffDate (base name: "CutoffDate")', function() {
        // TODO: update the code to test the property CutoffDate
        expect(instance).to.have.property('CutoffDate');
        // expect(instance.CutoffDate).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesAmount (base name: "OnlineSalesAmount")', function() {
        // TODO: update the code to test the property OnlineSalesAmount
        expect(instance).to.have.property('OnlineSalesAmount');
        // expect(instance.OnlineSalesAmount).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesDeliveryCharges (base name: "OnlineSalesDeliveryCharges")', function() {
        // TODO: update the code to test the property OnlineSalesDeliveryCharges
        expect(instance).to.have.property('OnlineSalesDeliveryCharges');
        // expect(instance.OnlineSalesDeliveryCharges).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesTips (base name: "OnlineSalesTips")', function() {
        // TODO: update the code to test the property OnlineSalesTips
        expect(instance).to.have.property('OnlineSalesTips');
        // expect(instance.OnlineSalesTips).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesRefundedFees (base name: "OnlineSalesRefundedFees")', function() {
        // TODO: update the code to test the property OnlineSalesRefundedFees
        expect(instance).to.have.property('OnlineSalesRefundedFees');
        // expect(instance.OnlineSalesRefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesFees (base name: "OnlineSalesFees")', function() {
        // TODO: update the code to test the property OnlineSalesFees
        expect(instance).to.have.property('OnlineSalesFees');
        // expect(instance.OnlineSalesFees).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesRefundedAmount (base name: "OnlineSalesRefundedAmount")', function() {
        // TODO: update the code to test the property OnlineSalesRefundedAmount
        expect(instance).to.have.property('OnlineSalesRefundedAmount');
        // expect(instance.OnlineSalesRefundedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesTax (base name: "OnlineSalesTax")', function() {
        // TODO: update the code to test the property OnlineSalesTax
        expect(instance).to.have.property('OnlineSalesTax');
        // expect(instance.OnlineSalesTax).to.be(expectedValueLiteral);
      });

      it('should have the property TotalOnlineRevenue (base name: "TotalOnlineRevenue")', function() {
        // TODO: update the code to test the property TotalOnlineRevenue
        expect(instance).to.have.property('TotalOnlineRevenue');
        // expect(instance.TotalOnlineRevenue).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesFees (base name: "CashSalesFees")', function() {
        // TODO: update the code to test the property CashSalesFees
        expect(instance).to.have.property('CashSalesFees');
        // expect(instance.CashSalesFees).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesRefundedFees (base name: "CashSalesRefundedFees")', function() {
        // TODO: update the code to test the property CashSalesRefundedFees
        expect(instance).to.have.property('CashSalesRefundedFees');
        // expect(instance.CashSalesRefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property CustomerCashFees (base name: "CustomerCashFees")', function() {
        // TODO: update the code to test the property CustomerCashFees
        expect(instance).to.have.property('CustomerCashFees');
        // expect(instance.CustomerCashFees).to.be(expectedValueLiteral);
      });

      it('should have the property SalesFeesVat (base name: "SalesFeesVat")', function() {
        // TODO: update the code to test the property SalesFeesVat
        expect(instance).to.have.property('SalesFeesVat');
        // expect(instance.SalesFeesVat).to.be(expectedValueLiteral);
      });

      it('should have the property TotalFees (base name: "TotalFees")', function() {
        // TODO: update the code to test the property TotalFees
        expect(instance).to.have.property('TotalFees');
        // expect(instance.TotalFees).to.be(expectedValueLiteral);
      });

      it('should have the property TotalOnlineRevenueAdjustments (base name: "TotalOnlineRevenueAdjustments")', function() {
        // TODO: update the code to test the property TotalOnlineRevenueAdjustments
        expect(instance).to.have.property('TotalOnlineRevenueAdjustments');
        // expect(instance.TotalOnlineRevenueAdjustments).to.be(expectedValueLiteral);
      });

      it('should have the property ChargebackAmount (base name: "ChargebackAmount")', function() {
        // TODO: update the code to test the property ChargebackAmount
        expect(instance).to.have.property('ChargebackAmount');
        // expect(instance.ChargebackAmount).to.be(expectedValueLiteral);
      });

      it('should have the property ChargebackRefundedFees (base name: "ChargebackRefundedFees")', function() {
        // TODO: update the code to test the property ChargebackRefundedFees
        expect(instance).to.have.property('ChargebackRefundedFees');
        // expect(instance.ChargebackRefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property TotalChargebackCost (base name: "TotalChargebackCost")', function() {
        // TODO: update the code to test the property TotalChargebackCost
        expect(instance).to.have.property('TotalChargebackCost');
        // expect(instance.TotalChargebackCost).to.be(expectedValueLiteral);
      });

      it('should have the property TotalOtherCharges (base name: "TotalOtherCharges")', function() {
        // TODO: update the code to test the property TotalOtherCharges
        expect(instance).to.have.property('TotalOtherCharges');
        // expect(instance.TotalOtherCharges).to.be(expectedValueLiteral);
      });

      it('should have the property OpeningBalance (base name: "OpeningBalance")', function() {
        // TODO: update the code to test the property OpeningBalance
        expect(instance).to.have.property('OpeningBalance');
        // expect(instance.OpeningBalance).to.be(expectedValueLiteral);
      });

      it('should have the property ClosingBalance (base name: "ClosingBalance")', function() {
        // TODO: update the code to test the property ClosingBalance
        expect(instance).to.have.property('ClosingBalance');
        // expect(instance.ClosingBalance).to.be(expectedValueLiteral);
      });

    });
  });

}));
