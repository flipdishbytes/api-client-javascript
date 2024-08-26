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
    describe('PayoutOtherCharge', function() {
      beforeEach(function() {
        instance = new Flipdish.PayoutOtherCharge();
      });

      it('should create an instance of PayoutOtherCharge', function() {
        // TODO: update the code to test PayoutOtherCharge
        expect(instance).to.be.a(Flipdish.PayoutOtherCharge);
      });

      it('should have the property ChargeId (base name: "ChargeId")', function() {
        // TODO: update the code to test the property ChargeId
        expect(instance).to.have.property('ChargeId');
        // expect(instance.ChargeId).to.be(expectedValueLiteral);
      });

      it('should have the property Amount (base name: "Amount")', function() {
        // TODO: update the code to test the property Amount
        expect(instance).to.have.property('Amount');
        // expect(instance.Amount).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutId (base name: "PayoutId")', function() {
        // TODO: update the code to test the property PayoutId
        expect(instance).to.have.property('PayoutId');
        // expect(instance.PayoutId).to.be(expectedValueLiteral);
      });

      it('should have the property ChargeDate (base name: "ChargeDate")', function() {
        // TODO: update the code to test the property ChargeDate
        expect(instance).to.have.property('ChargeDate');
        // expect(instance.ChargeDate).to.be(expectedValueLiteral);
      });

      it('should have the property ChargeType (base name: "ChargeType")', function() {
        // TODO: update the code to test the property ChargeType
        expect(instance).to.have.property('ChargeType');
        // expect(instance.ChargeType).to.be(expectedValueLiteral);
      });

      it('should have the property ChargeDescription (base name: "ChargeDescription")', function() {
        // TODO: update the code to test the property ChargeDescription
        expect(instance).to.have.property('ChargeDescription');
        // expect(instance.ChargeDescription).to.be(expectedValueLiteral);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

    });
  });

}));
