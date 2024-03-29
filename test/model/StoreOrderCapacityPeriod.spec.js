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
    describe('StoreOrderCapacityPeriod', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreOrderCapacityPeriod();
      });

      it('should create an instance of StoreOrderCapacityPeriod', function() {
        // TODO: update the code to test StoreOrderCapacityPeriod
        expect(instance).to.be.a(Flipdish.StoreOrderCapacityPeriod);
      });

      it('should have the property MaxOrderNumberPerStoreInterval (base name: "MaxOrderNumberPerStoreInterval")', function() {
        // TODO: update the code to test the property MaxOrderNumberPerStoreInterval
        expect(instance).to.have.property('MaxOrderNumberPerStoreInterval');
        // expect(instance.MaxOrderNumberPerStoreInterval).to.be(expectedValueLiteral);
      });

      it('should have the property DayOfTheWeek (base name: "DayOfTheWeek")', function() {
        // TODO: update the code to test the property DayOfTheWeek
        expect(instance).to.have.property('DayOfTheWeek');
        // expect(instance.DayOfTheWeek).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodStartHour (base name: "PeriodStartHour")', function() {
        // TODO: update the code to test the property PeriodStartHour
        expect(instance).to.have.property('PeriodStartHour');
        // expect(instance.PeriodStartHour).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodStartMinutes (base name: "PeriodStartMinutes")', function() {
        // TODO: update the code to test the property PeriodStartMinutes
        expect(instance).to.have.property('PeriodStartMinutes');
        // expect(instance.PeriodStartMinutes).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodEndHour (base name: "PeriodEndHour")', function() {
        // TODO: update the code to test the property PeriodEndHour
        expect(instance).to.have.property('PeriodEndHour');
        // expect(instance.PeriodEndHour).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodEndMinutes (base name: "PeriodEndMinutes")', function() {
        // TODO: update the code to test the property PeriodEndMinutes
        expect(instance).to.have.property('PeriodEndMinutes');
        // expect(instance.PeriodEndMinutes).to.be(expectedValueLiteral);
      });

    });
  });

}));
