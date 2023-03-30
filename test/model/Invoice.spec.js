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
    describe('Invoice', function() {
      beforeEach(function() {
        instance = new Flipdish.Invoice();
      });

      it('should create an instance of Invoice', function() {
        // TODO: update the code to test Invoice
        expect(instance).to.be.a(Flipdish.Invoice);
      });

      it('should have the property InvoiceId (base name: "InvoiceId")', function() {
        // TODO: update the code to test the property InvoiceId
        expect(instance).to.have.property('InvoiceId');
        // expect(instance.InvoiceId).to.be(expectedValueLiteral);
      });

      it('should have the property _Number (base name: "Number")', function() {
        // TODO: update the code to test the property _Number
        expect(instance).to.have.property('_Number');
        // expect(instance._Number).to.be(expectedValueLiteral);
      });

      it('should have the property Total (base name: "Total")', function() {
        // TODO: update the code to test the property Total
        expect(instance).to.have.property('Total');
        // expect(instance.Total).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property SubscriptionId (base name: "SubscriptionId")', function() {
        // TODO: update the code to test the property SubscriptionId
        expect(instance).to.have.property('SubscriptionId');
        // expect(instance.SubscriptionId).to.be(expectedValueLiteral);
      });

      it('should have the property PaidAt (base name: "PaidAt")', function() {
        // TODO: update the code to test the property PaidAt
        expect(instance).to.have.property('PaidAt');
        // expect(instance.PaidAt).to.be(expectedValueLiteral);
      });

      it('should have the property FinalisedAt (base name: "FinalisedAt")', function() {
        // TODO: update the code to test the property FinalisedAt
        expect(instance).to.have.property('FinalisedAt');
        // expect(instance.FinalisedAt).to.be(expectedValueLiteral);
      });

      it('should have the property PdfLink (base name: "PdfLink")', function() {
        // TODO: update the code to test the property PdfLink
        expect(instance).to.have.property('PdfLink');
        // expect(instance.PdfLink).to.be(expectedValueLiteral);
      });

      it('should have the property HostedUrl (base name: "HostedUrl")', function() {
        // TODO: update the code to test the property HostedUrl
        expect(instance).to.have.property('HostedUrl');
        // expect(instance.HostedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property Overdue (base name: "Overdue")', function() {
        // TODO: update the code to test the property Overdue
        expect(instance).to.have.property('Overdue');
        // expect(instance.Overdue).to.be(expectedValueLiteral);
      });

    });
  });

}));
