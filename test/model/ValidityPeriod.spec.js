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
    describe('ValidityPeriod', function() {
      beforeEach(function() {
        instance = new Flipdish.ValidityPeriod();
      });

      it('should create an instance of ValidityPeriod', function() {
        // TODO: update the code to test ValidityPeriod
        expect(instance).to.be.a(Flipdish.ValidityPeriod);
      });

      it('should have the property DayOfWeek (base name: "DayOfWeek")', function() {
        // TODO: update the code to test the property DayOfWeek
        expect(instance).to.have.property('DayOfWeek');
        // expect(instance.DayOfWeek).to.be(expectedValueLiteral);
      });

      it('should have the property StartTime (base name: "StartTime")', function() {
        // TODO: update the code to test the property StartTime
        expect(instance).to.have.property('StartTime');
        // expect(instance.StartTime).to.be(expectedValueLiteral);
      });

      it('should have the property EndTime (base name: "EndTime")', function() {
        // TODO: update the code to test the property EndTime
        expect(instance).to.have.property('EndTime');
        // expect(instance.EndTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
