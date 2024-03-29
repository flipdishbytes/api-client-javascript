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
    describe('PayoutOrder', function() {
      beforeEach(function() {
        instance = new Flipdish.PayoutOrder();
      });

      it('should create an instance of PayoutOrder', function() {
        // TODO: update the code to test PayoutOrder
        expect(instance).to.be.a(Flipdish.PayoutOrder);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutId (base name: "PayoutId")', function() {
        // TODO: update the code to test the property PayoutId
        expect(instance).to.have.property('PayoutId');
        // expect(instance.PayoutId).to.be(expectedValueLiteral);
      });

      it('should have the property OrderDate (base name: "OrderDate")', function() {
        // TODO: update the code to test the property OrderDate
        expect(instance).to.have.property('OrderDate');
        // expect(instance.OrderDate).to.be(expectedValueLiteral);
      });

      it('should have the property OrderType (base name: "OrderType")', function() {
        // TODO: update the code to test the property OrderType
        expect(instance).to.have.property('OrderType');
        // expect(instance.OrderType).to.be(expectedValueLiteral);
      });

      it('should have the property OrderCurrency (base name: "OrderCurrency")', function() {
        // TODO: update the code to test the property OrderCurrency
        expect(instance).to.have.property('OrderCurrency');
        // expect(instance.OrderCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property Sales (base name: "Sales")', function() {
        // TODO: update the code to test the property Sales
        expect(instance).to.have.property('Sales');
        // expect(instance.Sales).to.be(expectedValueLiteral);
      });

      it('should have the property SalesTax (base name: "SalesTax")', function() {
        // TODO: update the code to test the property SalesTax
        expect(instance).to.have.property('SalesTax');
        // expect(instance.SalesTax).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryCharges (base name: "DeliveryCharges")', function() {
        // TODO: update the code to test the property DeliveryCharges
        expect(instance).to.have.property('DeliveryCharges');
        // expect(instance.DeliveryCharges).to.be(expectedValueLiteral);
      });

      it('should have the property Tips (base name: "Tips")', function() {
        // TODO: update the code to test the property Tips
        expect(instance).to.have.property('Tips');
        // expect(instance.Tips).to.be(expectedValueLiteral);
      });

      it('should have the property Voucher (base name: "Voucher")', function() {
        // TODO: update the code to test the property Voucher
        expect(instance).to.have.property('Voucher');
        // expect(instance.Voucher).to.be(expectedValueLiteral);
      });

      it('should have the property FlatFeeExcludingVat (base name: "FlatFeeExcludingVat")', function() {
        // TODO: update the code to test the property FlatFeeExcludingVat
        expect(instance).to.have.property('FlatFeeExcludingVat');
        // expect(instance.FlatFeeExcludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property FlatFeeExcludingVAT (base name: "FlatFeeExcludingVAT")', function() {
        // TODO: update the code to test the property FlatFeeExcludingVAT
        expect(instance).to.have.property('FlatFeeExcludingVAT');
        // expect(instance.FlatFeeExcludingVAT).to.be(expectedValueLiteral);
      });

      it('should have the property FlatFeeIncludingVat (base name: "FlatFeeIncludingVat")', function() {
        // TODO: update the code to test the property FlatFeeIncludingVat
        expect(instance).to.have.property('FlatFeeIncludingVat');
        // expect(instance.FlatFeeIncludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentageFeeExcludingVat (base name: "PercentageFeeExcludingVat")', function() {
        // TODO: update the code to test the property PercentageFeeExcludingVat
        expect(instance).to.have.property('PercentageFeeExcludingVat');
        // expect(instance.PercentageFeeExcludingVat).to.be(expectedValueLiteral);
      });

      it('should have the property PercentageFeeExcludingVAT (base name: "PercentageFeeExcludingVAT")', function() {
        // TODO: update the code to test the property PercentageFeeExcludingVAT
        expect(instance).to.have.property('PercentageFeeExcludingVAT');
        // expect(instance.PercentageFeeExcludingVAT).to.be(expectedValueLiteral);
      });

      it('should have the property Vat (base name: "Vat")', function() {
        // TODO: update the code to test the property Vat
        expect(instance).to.have.property('Vat');
        // expect(instance.Vat).to.be(expectedValueLiteral);
      });

      it('should have the property TotalFees (base name: "TotalFees")', function() {
        // TODO: update the code to test the property TotalFees
        expect(instance).to.have.property('TotalFees');
        // expect(instance.TotalFees).to.be(expectedValueLiteral);
      });

      it('should have the property CashFeeChargedToCustomer (base name: "CashFeeChargedToCustomer")', function() {
        // TODO: update the code to test the property CashFeeChargedToCustomer
        expect(instance).to.have.property('CashFeeChargedToCustomer');
        // expect(instance.CashFeeChargedToCustomer).to.be(expectedValueLiteral);
      });

      it('should have the property NetSales (base name: "NetSales")', function() {
        // TODO: update the code to test the property NetSales
        expect(instance).to.have.property('NetSales');
        // expect(instance.NetSales).to.be(expectedValueLiteral);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property ServiceChargeAmount (base name: "ServiceChargeAmount")', function() {
        // TODO: update the code to test the property ServiceChargeAmount
        expect(instance).to.have.property('ServiceChargeAmount');
        // expect(instance.ServiceChargeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property ServiceChargePercentage (base name: "ServiceChargePercentage")', function() {
        // TODO: update the code to test the property ServiceChargePercentage
        expect(instance).to.have.property('ServiceChargePercentage');
        // expect(instance.ServiceChargePercentage).to.be(expectedValueLiteral);
      });

    });
  });

}));
