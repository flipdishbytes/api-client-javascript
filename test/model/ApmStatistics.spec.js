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
    describe('ApmStatistics', function() {
      beforeEach(function() {
        instance = new Flipdish.ApmStatistics();
      });

      it('should create an instance of ApmStatistics', function() {
        // TODO: update the code to test ApmStatistics
        expect(instance).to.be.a(Flipdish.ApmStatistics);
      });

      it('should have the property EstimatedMinutesSaved (base name: "EstimatedMinutesSaved")', function() {
        // TODO: update the code to test the property EstimatedMinutesSaved
        expect(instance).to.have.property('EstimatedMinutesSaved');
        // expect(instance.EstimatedMinutesSaved).to.be(expectedValueLiteral);
      });

      it('should have the property EstimatedMinutesCouldSaved (base name: "EstimatedMinutesCouldSaved")', function() {
        // TODO: update the code to test the property EstimatedMinutesCouldSaved
        expect(instance).to.have.property('EstimatedMinutesCouldSaved');
        // expect(instance.EstimatedMinutesCouldSaved).to.be(expectedValueLiteral);
      });

      it('should have the property CurrencyData (base name: "CurrencyData")', function() {
        // TODO: update the code to test the property CurrencyData
        expect(instance).to.have.property('CurrencyData');
        // expect(instance.CurrencyData).to.be(expectedValueLiteral);
      });

    });
  });

}));
