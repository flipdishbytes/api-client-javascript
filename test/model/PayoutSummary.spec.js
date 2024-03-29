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
    describe('PayoutSummary', function() {
      beforeEach(function() {
        instance = new Flipdish.PayoutSummary();
      });

      it('should create an instance of PayoutSummary', function() {
        // TODO: update the code to test PayoutSummary
        expect(instance).to.be.a(Flipdish.PayoutSummary);
      });

      it('should have the property PayoutStatus (base name: "PayoutStatus")', function() {
        // TODO: update the code to test the property PayoutStatus
        expect(instance).to.have.property('PayoutStatus');
        // expect(instance.PayoutStatus).to.be(expectedValueLiteral);
      });

      it('should have the property TotalAmount (base name: "TotalAmount")', function() {
        // TODO: update the code to test the property TotalAmount
        expect(instance).to.have.property('TotalAmount');
        // expect(instance.TotalAmount).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property TotalCount (base name: "TotalCount")', function() {
        // TODO: update the code to test the property TotalCount
        expect(instance).to.have.property('TotalCount');
        // expect(instance.TotalCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
