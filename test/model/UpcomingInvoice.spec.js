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
    describe('UpcomingInvoice', function() {
      beforeEach(function() {
        instance = new Flipdish.UpcomingInvoice();
      });

      it('should create an instance of UpcomingInvoice', function() {
        // TODO: update the code to test UpcomingInvoice
        expect(instance).to.be.a(Flipdish.UpcomingInvoice);
      });

      it('should have the property Amount (base name: "Amount")', function() {
        // TODO: update the code to test the property Amount
        expect(instance).to.have.property('Amount');
        // expect(instance.Amount).to.be(expectedValueLiteral);
      });

      it('should have the property NextBillingDate (base name: "NextBillingDate")', function() {
        // TODO: update the code to test the property NextBillingDate
        expect(instance).to.have.property('NextBillingDate');
        // expect(instance.NextBillingDate).to.be(expectedValueLiteral);
      });

      it('should have the property Subtotal (base name: "Subtotal")', function() {
        // TODO: update the code to test the property Subtotal
        expect(instance).to.have.property('Subtotal');
        // expect(instance.Subtotal).to.be(expectedValueLiteral);
      });

      it('should have the property TotalExcludingTax (base name: "TotalExcludingTax")', function() {
        // TODO: update the code to test the property TotalExcludingTax
        expect(instance).to.have.property('TotalExcludingTax');
        // expect(instance.TotalExcludingTax).to.be(expectedValueLiteral);
      });

      it('should have the property AmountDue (base name: "AmountDue")', function() {
        // TODO: update the code to test the property AmountDue
        expect(instance).to.have.property('AmountDue');
        // expect(instance.AmountDue).to.be(expectedValueLiteral);
      });

      it('should have the property Tax (base name: "Tax")', function() {
        // TODO: update the code to test the property Tax
        expect(instance).to.have.property('Tax');
        // expect(instance.Tax).to.be(expectedValueLiteral);
      });

      it('should have the property Items (base name: "Items")', function() {
        // TODO: update the code to test the property Items
        expect(instance).to.have.property('Items');
        // expect(instance.Items).to.be(expectedValueLiteral);
      });

      it('should have the property Discounts (base name: "Discounts")', function() {
        // TODO: update the code to test the property Discounts
        expect(instance).to.have.property('Discounts');
        // expect(instance.Discounts).to.be(expectedValueLiteral);
      });

    });
  });

}));
