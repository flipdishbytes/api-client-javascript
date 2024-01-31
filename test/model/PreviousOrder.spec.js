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
    describe('PreviousOrder', function() {
      beforeEach(function() {
        instance = new Flipdish.PreviousOrder();
      });

      it('should create an instance of PreviousOrder', function() {
        // TODO: update the code to test PreviousOrder
        expect(instance).to.be.a(Flipdish.PreviousOrder);
      });

      it('should have the property DeliveryType (base name: "DeliveryType")', function() {
        // TODO: update the code to test the property DeliveryType
        expect(instance).to.have.property('DeliveryType');
        // expect(instance.DeliveryType).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryLocationAddressString (base name: "DeliveryLocationAddressString")', function() {
        // TODO: update the code to test the property DeliveryLocationAddressString
        expect(instance).to.have.property('DeliveryLocationAddressString');
        // expect(instance.DeliveryLocationAddressString).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentAccountType (base name: "PaymentAccountType")', function() {
        // TODO: update the code to test the property PaymentAccountType
        expect(instance).to.have.property('PaymentAccountType');
        // expect(instance.PaymentAccountType).to.be(expectedValueLiteral);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property RestaurantName (base name: "RestaurantName")', function() {
        // TODO: update the code to test the property RestaurantName
        expect(instance).to.have.property('RestaurantName');
        // expect(instance.RestaurantName).to.be(expectedValueLiteral);
      });

      it('should have the property LocalOrderId (base name: "LocalOrderId")', function() {
        // TODO: update the code to test the property LocalOrderId
        expect(instance).to.have.property('LocalOrderId');
        // expect(instance.LocalOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property TableServiceCategory (base name: "TableServiceCategory")', function() {
        // TODO: update the code to test the property TableServiceCategory
        expect(instance).to.have.property('TableServiceCategory');
        // expect(instance.TableServiceCategory).to.be(expectedValueLiteral);
      });

      it('should have the property PickupLocationOptionValue (base name: "PickupLocationOptionValue")', function() {
        // TODO: update the code to test the property PickupLocationOptionValue
        expect(instance).to.have.property('PickupLocationOptionValue');
        // expect(instance.PickupLocationOptionValue).to.be(expectedValueLiteral);
      });

      it('should have the property CustomerName (base name: "CustomerName")', function() {
        // TODO: update the code to test the property CustomerName
        expect(instance).to.have.property('CustomerName');
        // expect(instance.CustomerName).to.be(expectedValueLiteral);
      });

      it('should have the property PhoneNumberInternationalFormatString (base name: "PhoneNumberInternationalFormatString")', function() {
        // TODO: update the code to test the property PhoneNumberInternationalFormatString
        expect(instance).to.have.property('PhoneNumberInternationalFormatString');
        // expect(instance.PhoneNumberInternationalFormatString).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryInstructions (base name: "DeliveryInstructions")', function() {
        // TODO: update the code to test the property DeliveryInstructions
        expect(instance).to.have.property('DeliveryInstructions');
        // expect(instance.DeliveryInstructions).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property ProcessingFee (base name: "ProcessingFee")', function() {
        // TODO: update the code to test the property ProcessingFee
        expect(instance).to.have.property('ProcessingFee');
        // expect(instance.ProcessingFee).to.be(expectedValueLiteral);
      });

      it('should have the property ServiceChargePercentage (base name: "ServiceChargePercentage")', function() {
        // TODO: update the code to test the property ServiceChargePercentage
        expect(instance).to.have.property('ServiceChargePercentage');
        // expect(instance.ServiceChargePercentage).to.be(expectedValueLiteral);
      });

      it('should have the property ServiceChargeAmount (base name: "ServiceChargeAmount")', function() {
        // TODO: update the code to test the property ServiceChargeAmount
        expect(instance).to.have.property('ServiceChargeAmount');
        // expect(instance.ServiceChargeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property TipAmount (base name: "TipAmount")', function() {
        // TODO: update the code to test the property TipAmount
        expect(instance).to.have.property('TipAmount');
        // expect(instance.TipAmount).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryAmount (base name: "DeliveryAmount")', function() {
        // TODO: update the code to test the property DeliveryAmount
        expect(instance).to.have.property('DeliveryAmount');
        // expect(instance.DeliveryAmount).to.be(expectedValueLiteral);
      });

      it('should have the property DepositReturnFeeAmount (base name: "DepositReturnFeeAmount")', function() {
        // TODO: update the code to test the property DepositReturnFeeAmount
        expect(instance).to.have.property('DepositReturnFeeAmount');
        // expect(instance.DepositReturnFeeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property TotalTax (base name: "TotalTax")', function() {
        // TODO: update the code to test the property TotalTax
        expect(instance).to.have.property('TotalTax');
        // expect(instance.TotalTax).to.be(expectedValueLiteral);
      });

      it('should have the property TotalAmount (base name: "TotalAmount")', function() {
        // TODO: update the code to test the property TotalAmount
        expect(instance).to.have.property('TotalAmount');
        // expect(instance.TotalAmount).to.be(expectedValueLiteral);
      });

      it('should have the property Items (base name: "Items")', function() {
        // TODO: update the code to test the property Items
        expect(instance).to.have.property('Items');
        // expect(instance.Items).to.be(expectedValueLiteral);
      });

      it('should have the property TaxRates (base name: "TaxRates")', function() {
        // TODO: update the code to test the property TaxRates
        expect(instance).to.have.property('TaxRates');
        // expect(instance.TaxRates).to.be(expectedValueLiteral);
      });

      it('should have the property WhiteLabelId (base name: "WhiteLabelId")', function() {
        // TODO: update the code to test the property WhiteLabelId
        expect(instance).to.have.property('WhiteLabelId');
        // expect(instance.WhiteLabelId).to.be(expectedValueLiteral);
      });

    });
  });

}));
