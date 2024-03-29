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
    describe('ChargebackDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.ChargebackDetails();
      });

      it('should create an instance of ChargebackDetails', function() {
        // TODO: update the code to test ChargebackDetails
        expect(instance).to.be.a(Flipdish.ChargebackDetails);
      });

      it('should have the property ChargebackAmount (base name: "ChargebackAmount")', function() {
        // TODO: update the code to test the property ChargebackAmount
        expect(instance).to.have.property('ChargebackAmount');
        // expect(instance.ChargebackAmount).to.be(expectedValueLiteral);
      });

      it('should have the property PosSalesChargebackAmount (base name: "PosSalesChargebackAmount")', function() {
        // TODO: update the code to test the property PosSalesChargebackAmount
        expect(instance).to.have.property('PosSalesChargebackAmount');
        // expect(instance.PosSalesChargebackAmount).to.be(expectedValueLiteral);
      });

      it('should have the property ChargebackRefundedFees (base name: "ChargebackRefundedFees")', function() {
        // TODO: update the code to test the property ChargebackRefundedFees
        expect(instance).to.have.property('ChargebackRefundedFees');
        // expect(instance.ChargebackRefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property ChargebacksCount (base name: "ChargebacksCount")', function() {
        // TODO: update the code to test the property ChargebacksCount
        expect(instance).to.have.property('ChargebacksCount');
        // expect(instance.ChargebacksCount).to.be(expectedValueLiteral);
      });

      it('should have the property TotalChargebackCost (base name: "TotalChargebackCost")', function() {
        // TODO: update the code to test the property TotalChargebackCost
        expect(instance).to.have.property('TotalChargebackCost');
        // expect(instance.TotalChargebackCost).to.be(expectedValueLiteral);
      });

    });
  });

}));
