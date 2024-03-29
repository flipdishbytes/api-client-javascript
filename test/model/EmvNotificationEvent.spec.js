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
    describe('EmvNotificationEvent', function() {
      beforeEach(function() {
        instance = new Flipdish.EmvNotificationEvent();
      });

      it('should create an instance of EmvNotificationEvent', function() {
        // TODO: update the code to test EmvNotificationEvent
        expect(instance).to.be.a(Flipdish.EmvNotificationEvent);
      });

      it('should have the property EventName (base name: "EventName")', function() {
        // TODO: update the code to test the property EventName
        expect(instance).to.have.property('EventName');
        // expect(instance.EventName).to.be(expectedValueLiteral);
      });

      it('should have the property Notification (base name: "Notification")', function() {
        // TODO: update the code to test the property Notification
        expect(instance).to.have.property('Notification');
        // expect(instance.Notification).to.be(expectedValueLiteral);
      });

      it('should have the property Order (base name: "Order")', function() {
        // TODO: update the code to test the property Order
        expect(instance).to.have.property('Order');
        // expect(instance.Order).to.be(expectedValueLiteral);
      });

      it('should have the property TerminalId (base name: "TerminalId")', function() {
        // TODO: update the code to test the property TerminalId
        expect(instance).to.have.property('TerminalId');
        // expect(instance.TerminalId).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "Description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property ExpDate (base name: "ExpDate")', function() {
        // TODO: update the code to test the property ExpDate
        expect(instance).to.have.property('ExpDate');
        // expect(instance.ExpDate).to.be(expectedValueLiteral);
      });

      it('should have the property CardType (base name: "CardType")', function() {
        // TODO: update the code to test the property CardType
        expect(instance).to.have.property('CardType');
        // expect(instance.CardType).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentMethod (base name: "PaymentMethod")', function() {
        // TODO: update the code to test the property PaymentMethod
        expect(instance).to.have.property('PaymentMethod');
        // expect(instance.PaymentMethod).to.be(expectedValueLiteral);
      });

      it('should have the property AccountNumber (base name: "AccountNumber")', function() {
        // TODO: update the code to test the property AccountNumber
        expect(instance).to.have.property('AccountNumber');
        // expect(instance.AccountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property AuthCode (base name: "AuthCode")', function() {
        // TODO: update the code to test the property AuthCode
        expect(instance).to.have.property('AuthCode');
        // expect(instance.AuthCode).to.be(expectedValueLiteral);
      });

      it('should have the property ProviderMessage (base name: "ProviderMessage")', function() {
        // TODO: update the code to test the property ProviderMessage
        expect(instance).to.have.property('ProviderMessage');
        // expect(instance.ProviderMessage).to.be(expectedValueLiteral);
      });

      it('should have the property FlipdishEventId (base name: "FlipdishEventId")', function() {
        // TODO: update the code to test the property FlipdishEventId
        expect(instance).to.have.property('FlipdishEventId');
        // expect(instance.FlipdishEventId).to.be(expectedValueLiteral);
      });

      it('should have the property CreateTime (base name: "CreateTime")', function() {
        // TODO: update the code to test the property CreateTime
        expect(instance).to.have.property('CreateTime');
        // expect(instance.CreateTime).to.be(expectedValueLiteral);
      });

      it('should have the property Position (base name: "Position")', function() {
        // TODO: update the code to test the property Position
        expect(instance).to.have.property('Position');
        // expect(instance.Position).to.be(expectedValueLiteral);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property IpAddress (base name: "IpAddress")', function() {
        // TODO: update the code to test the property IpAddress
        expect(instance).to.have.property('IpAddress');
        // expect(instance.IpAddress).to.be(expectedValueLiteral);
      });

    });
  });

}));
