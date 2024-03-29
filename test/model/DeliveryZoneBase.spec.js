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
    describe('DeliveryZoneBase', function() {
      beforeEach(function() {
        instance = new Flipdish.DeliveryZoneBase();
      });

      it('should create an instance of DeliveryZoneBase', function() {
        // TODO: update the code to test DeliveryZoneBase
        expect(instance).to.be.a(Flipdish.DeliveryZoneBase);
      });

      it('should have the property DeliveryFee (base name: "DeliveryFee")', function() {
        // TODO: update the code to test the property DeliveryFee
        expect(instance).to.have.property('DeliveryFee');
        // expect(instance.DeliveryFee).to.be(expectedValueLiteral);
      });

      it('should have the property MinimumDeliveryOrderAmount (base name: "MinimumDeliveryOrderAmount")', function() {
        // TODO: update the code to test the property MinimumDeliveryOrderAmount
        expect(instance).to.have.property('MinimumDeliveryOrderAmount');
        // expect(instance.MinimumDeliveryOrderAmount).to.be(expectedValueLiteral);
      });

      it('should have the property WellKnownText (base name: "WellKnownText")', function() {
        // TODO: update the code to test the property WellKnownText
        expect(instance).to.have.property('WellKnownText');
        // expect(instance.WellKnownText).to.be(expectedValueLiteral);
      });

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
