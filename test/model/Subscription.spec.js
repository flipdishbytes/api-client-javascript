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
    describe('Subscription', function() {
      beforeEach(function() {
        instance = new Flipdish.Subscription();
      });

      it('should create an instance of Subscription', function() {
        // TODO: update the code to test Subscription
        expect(instance).to.be.a(Flipdish.Subscription);
      });

      it('should have the property Products (base name: "Products")', function() {
        // TODO: update the code to test the property Products
        expect(instance).to.have.property('Products');
        // expect(instance.Products).to.be(expectedValueLiteral);
      });

      it('should have the property UpcomingInvoiceItems (base name: "UpcomingInvoiceItems")', function() {
        // TODO: update the code to test the property UpcomingInvoiceItems
        expect(instance).to.have.property('UpcomingInvoiceItems');
        // expect(instance.UpcomingInvoiceItems).to.be(expectedValueLiteral);
      });

      it('should have the property UpcomingInvoiceDiscounts (base name: "UpcomingInvoiceDiscounts")', function() {
        // TODO: update the code to test the property UpcomingInvoiceDiscounts
        expect(instance).to.have.property('UpcomingInvoiceDiscounts');
        // expect(instance.UpcomingInvoiceDiscounts).to.be(expectedValueLiteral);
      });

      it('should have the property SubscriptionId (base name: "SubscriptionId")', function() {
        // TODO: update the code to test the property SubscriptionId
        expect(instance).to.have.property('SubscriptionId');
        // expect(instance.SubscriptionId).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property NextInvoiceAmount (base name: "NextInvoiceAmount")', function() {
        // TODO: update the code to test the property NextInvoiceAmount
        expect(instance).to.have.property('NextInvoiceAmount');
        // expect(instance.NextInvoiceAmount).to.be(expectedValueLiteral);
      });

      it('should have the property NextInvoiceBillingDate (base name: "NextInvoiceBillingDate")', function() {
        // TODO: update the code to test the property NextInvoiceBillingDate
        expect(instance).to.have.property('NextInvoiceBillingDate');
        // expect(instance.NextInvoiceBillingDate).to.be(expectedValueLiteral);
      });

      it('should have the property User (base name: "User")', function() {
        // TODO: update the code to test the property User
        expect(instance).to.have.property('User');
        // expect(instance.User).to.be(expectedValueLiteral);
      });

      it('should have the property DefaultPaymentDescription (base name: "DefaultPaymentDescription")', function() {
        // TODO: update the code to test the property DefaultPaymentDescription
        expect(instance).to.have.property('DefaultPaymentDescription');
        // expect(instance.DefaultPaymentDescription).to.be(expectedValueLiteral);
      });

      it('should have the property CancellationDate (base name: "CancellationDate")', function() {
        // TODO: update the code to test the property CancellationDate
        expect(instance).to.have.property('CancellationDate');
        // expect(instance.CancellationDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
