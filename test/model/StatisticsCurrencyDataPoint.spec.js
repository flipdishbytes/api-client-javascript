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
    describe('StatisticsCurrencyDataPoint', function() {
      beforeEach(function() {
        instance = new Flipdish.StatisticsCurrencyDataPoint();
      });

      it('should create an instance of StatisticsCurrencyDataPoint', function() {
        // TODO: update the code to test StatisticsCurrencyDataPoint
        expect(instance).to.be.a(Flipdish.StatisticsCurrencyDataPoint);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property UserCount (base name: "UserCount")', function() {
        // TODO: update the code to test the property UserCount
        expect(instance).to.have.property('UserCount');
        // expect(instance.UserCount).to.be(expectedValueLiteral);
      });

      it('should have the property OrderCount (base name: "OrderCount")', function() {
        // TODO: update the code to test the property OrderCount
        expect(instance).to.have.property('OrderCount');
        // expect(instance.OrderCount).to.be(expectedValueLiteral);
      });

      it('should have the property OrderValue (base name: "OrderValue")', function() {
        // TODO: update the code to test the property OrderValue
        expect(instance).to.have.property('OrderValue');
        // expect(instance.OrderValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
