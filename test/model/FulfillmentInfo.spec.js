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
    describe('FulfillmentInfo', function() {
      beforeEach(function() {
        instance = new Flipdish.FulfillmentInfo();
      });

      it('should create an instance of FulfillmentInfo', function() {
        // TODO: update the code to test FulfillmentInfo
        expect(instance).to.be.a(Flipdish.FulfillmentInfo);
      });

      it('should have the property DispatchType (base name: "DispatchType")', function() {
        // TODO: update the code to test the property DispatchType
        expect(instance).to.have.property('DispatchType');
        // expect(instance.DispatchType).to.be(expectedValueLiteral);
      });

      it('should have the property RequestedForUtc (base name: "RequestedForUtc")', function() {
        // TODO: update the code to test the property RequestedForUtc
        expect(instance).to.have.property('RequestedForUtc');
        // expect(instance.RequestedForUtc).to.be(expectedValueLiteral);
      });

      it('should have the property Location (base name: "Location")', function() {
        // TODO: update the code to test the property Location
        expect(instance).to.have.property('Location');
        // expect(instance.Location).to.be(expectedValueLiteral);
      });

      it('should have the property DispatchAmount (base name: "DispatchAmount")', function() {
        // TODO: update the code to test the property DispatchAmount
        expect(instance).to.have.property('DispatchAmount');
        // expect(instance.DispatchAmount).to.be(expectedValueLiteral);
      });

    });
  });

}));
