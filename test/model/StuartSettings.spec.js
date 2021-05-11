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
    describe('StuartSettings', function() {
      beforeEach(function() {
        instance = new Flipdish.StuartSettings();
      });

      it('should create an instance of StuartSettings', function() {
        // TODO: update the code to test StuartSettings
        expect(instance).to.be.a(Flipdish.StuartSettings);
      });

      it('should have the property ClientId (base name: "ClientId")', function() {
        // TODO: update the code to test the property ClientId
        expect(instance).to.have.property('ClientId');
        // expect(instance.ClientId).to.be(expectedValueLiteral);
      });

      it('should have the property ClientSecret (base name: "ClientSecret")', function() {
        // TODO: update the code to test the property ClientSecret
        expect(instance).to.have.property('ClientSecret');
        // expect(instance.ClientSecret).to.be(expectedValueLiteral);
      });

      it('should have the property Enabled (base name: "Enabled")', function() {
        // TODO: update the code to test the property Enabled
        expect(instance).to.have.property('Enabled');
        // expect(instance.Enabled).to.be(expectedValueLiteral);
      });

      it('should have the property WebhookUrlBasicAuthentication (base name: "WebhookUrlBasicAuthentication")', function() {
        // TODO: update the code to test the property WebhookUrlBasicAuthentication
        expect(instance).to.have.property('WebhookUrlBasicAuthentication');
        // expect(instance.WebhookUrlBasicAuthentication).to.be(expectedValueLiteral);
      });

      it('should have the property MinutesToPickupBeforeThanDeliveryTime (base name: "MinutesToPickupBeforeThanDeliveryTime")', function() {
        // TODO: update the code to test the property MinutesToPickupBeforeThanDeliveryTime
        expect(instance).to.have.property('MinutesToPickupBeforeThanDeliveryTime');
        // expect(instance.MinutesToPickupBeforeThanDeliveryTime).to.be(expectedValueLiteral);
      });

      it('should have the property PackageType (base name: "PackageType")', function() {
        // TODO: update the code to test the property PackageType
        expect(instance).to.have.property('PackageType');
        // expect(instance.PackageType).to.be(expectedValueLiteral);
      });

      it('should have the property TransportType (base name: "TransportType")', function() {
        // TODO: update the code to test the property TransportType
        expect(instance).to.have.property('TransportType');
        // expect(instance.TransportType).to.be(expectedValueLiteral);
      });

      it('should have the property CancelOrderIfStuartCancelDelivery (base name: "CancelOrderIfStuartCancelDelivery")', function() {
        // TODO: update the code to test the property CancelOrderIfStuartCancelDelivery
        expect(instance).to.have.property('CancelOrderIfStuartCancelDelivery');
        // expect(instance.CancelOrderIfStuartCancelDelivery).to.be(expectedValueLiteral);
      });

      it('should have the property TransportPrices (base name: "TransportPrices")', function() {
        // TODO: update the code to test the property TransportPrices
        expect(instance).to.have.property('TransportPrices');
        // expect(instance.TransportPrices).to.be(expectedValueLiteral);
      });

    });
  });

}));
