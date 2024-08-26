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
    describe('GetReceiptByOrderIdQueryResponse', function() {
      beforeEach(function() {
        instance = new Flipdish.GetReceiptByOrderIdQueryResponse();
      });

      it('should create an instance of GetReceiptByOrderIdQueryResponse', function() {
        // TODO: update the code to test GetReceiptByOrderIdQueryResponse
        expect(instance).to.be.a(Flipdish.GetReceiptByOrderIdQueryResponse);
      });

      it('should have the property PreviousOrder (base name: "PreviousOrder")', function() {
        // TODO: update the code to test the property PreviousOrder
        expect(instance).to.have.property('PreviousOrder');
        // expect(instance.PreviousOrder).to.be(expectedValueLiteral);
      });

      it('should have the property DepositReturnFeesSummary (base name: "DepositReturnFeesSummary")', function() {
        // TODO: update the code to test the property DepositReturnFeesSummary
        expect(instance).to.have.property('DepositReturnFeesSummary');
        // expect(instance.DepositReturnFeesSummary).to.be(expectedValueLiteral);
      });

      it('should have the property TsRequestedForLocal (base name: "TsRequestedForLocal")', function() {
        // TODO: update the code to test the property TsRequestedForLocal
        expect(instance).to.have.property('TsRequestedForLocal');
        // expect(instance.TsRequestedForLocal).to.be(expectedValueLiteral);
      });

      it('should have the property TsOrderPlacedLocal (base name: "TsOrderPlacedLocal")', function() {
        // TODO: update the code to test the property TsOrderPlacedLocal
        expect(instance).to.have.property('TsOrderPlacedLocal');
        // expect(instance.TsOrderPlacedLocal).to.be(expectedValueLiteral);
      });

      it('should have the property LogoUrl (base name: "LogoUrl")', function() {
        // TODO: update the code to test the property LogoUrl
        expect(instance).to.have.property('LogoUrl');
        // expect(instance.LogoUrl).to.be(expectedValueLiteral);
      });

      it('should have the property Address (base name: "Address")', function() {
        // TODO: update the code to test the property Address
        expect(instance).to.have.property('Address');
        // expect(instance.Address).to.be(expectedValueLiteral);
      });

      it('should have the property VatNumber (base name: "VatNumber")', function() {
        // TODO: update the code to test the property VatNumber
        expect(instance).to.have.property('VatNumber');
        // expect(instance.VatNumber).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentMethodDescription (base name: "PaymentMethodDescription")', function() {
        // TODO: update the code to test the property PaymentMethodDescription
        expect(instance).to.have.property('PaymentMethodDescription');
        // expect(instance.PaymentMethodDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
