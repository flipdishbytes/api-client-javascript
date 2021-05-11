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
    describe('RevenueAdjustmentsDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.RevenueAdjustmentsDetails();
      });

      it('should create an instance of RevenueAdjustmentsDetails', function() {
        // TODO: update the code to test RevenueAdjustmentsDetails
        expect(instance).to.be.a(Flipdish.RevenueAdjustmentsDetails);
      });

      it('should have the property OnlineSalesRefundedAmount (base name: "OnlineSalesRefundedAmount")', function() {
        // TODO: update the code to test the property OnlineSalesRefundedAmount
        expect(instance).to.have.property('OnlineSalesRefundedAmount');
        // expect(instance.OnlineSalesRefundedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesRefundedAmount (base name: "CashSalesRefundedAmount")', function() {
        // TODO: update the code to test the property CashSalesRefundedAmount
        expect(instance).to.have.property('CashSalesRefundedAmount');
        // expect(instance.CashSalesRefundedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property CustomerCashFees (base name: "CustomerCashFees")', function() {
        // TODO: update the code to test the property CustomerCashFees
        expect(instance).to.have.property('CustomerCashFees');
        // expect(instance.CustomerCashFees).to.be(expectedValueLiteral);
      });

      it('should have the property RefundsCount (base name: "RefundsCount")', function() {
        // TODO: update the code to test the property RefundsCount
        expect(instance).to.have.property('RefundsCount');
        // expect(instance.RefundsCount).to.be(expectedValueLiteral);
      });

      it('should have the property TotalOnlineRevenueAdjustments (base name: "TotalOnlineRevenueAdjustments")', function() {
        // TODO: update the code to test the property TotalOnlineRevenueAdjustments
        expect(instance).to.have.property('TotalOnlineRevenueAdjustments');
        // expect(instance.TotalOnlineRevenueAdjustments).to.be(expectedValueLiteral);
      });

    });
  });

}));
