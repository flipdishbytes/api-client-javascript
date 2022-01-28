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
    describe('OrderIngestSubmitOrderResponse', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderIngestSubmitOrderResponse();
      });

      it('should create an instance of OrderIngestSubmitOrderResponse', function() {
        // TODO: update the code to test OrderIngestSubmitOrderResponse
        expect(instance).to.be.a(Flipdish.OrderIngestSubmitOrderResponse);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property ReceiptUrl (base name: "ReceiptUrl")', function() {
        // TODO: update the code to test the property ReceiptUrl
        expect(instance).to.have.property('ReceiptUrl');
        // expect(instance.ReceiptUrl).to.be(expectedValueLiteral);
      });

      it('should have the property CurrencyCode (base name: "CurrencyCode")', function() {
        // TODO: update the code to test the property CurrencyCode
        expect(instance).to.have.property('CurrencyCode');
        // expect(instance.CurrencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property TotalPrice (base name: "TotalPrice")', function() {
        // TODO: update the code to test the property TotalPrice
        expect(instance).to.have.property('TotalPrice');
        // expect(instance.TotalPrice).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryFee (base name: "DeliveryFee")', function() {
        // TODO: update the code to test the property DeliveryFee
        expect(instance).to.have.property('DeliveryFee');
        // expect(instance.DeliveryFee).to.be(expectedValueLiteral);
      });

      it('should have the property EstimatedDeliveryTime (base name: "EstimatedDeliveryTime")', function() {
        // TODO: update the code to test the property EstimatedDeliveryTime
        expect(instance).to.have.property('EstimatedDeliveryTime');
        // expect(instance.EstimatedDeliveryTime).to.be(expectedValueLiteral);
      });

      it('should have the property ChannelOrderId (base name: "ChannelOrderId")', function() {
        // TODO: update the code to test the property ChannelOrderId
        expect(instance).to.have.property('ChannelOrderId');
        // expect(instance.ChannelOrderId).to.be(expectedValueLiteral);
      });

    });
  });

}));
