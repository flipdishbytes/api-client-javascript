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
    describe('OrderDropOffLocation', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderDropOffLocation();
      });

      it('should create an instance of OrderDropOffLocation', function() {
        // TODO: update the code to test OrderDropOffLocation
        expect(instance).to.be.a(Flipdish.OrderDropOffLocation);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property LocationName (base name: "LocationName")', function() {
        // TODO: update the code to test the property LocationName
        expect(instance).to.have.property('LocationName');
        // expect(instance.LocationName).to.be(expectedValueLiteral);
      });

      it('should have the property LocationAreaName (base name: "LocationAreaName")', function() {
        // TODO: update the code to test the property LocationAreaName
        expect(instance).to.have.property('LocationAreaName');
        // expect(instance.LocationAreaName).to.be(expectedValueLiteral);
      });

      it('should have the property LocationId (base name: "LocationId")', function() {
        // TODO: update the code to test the property LocationId
        expect(instance).to.have.property('LocationId');
        // expect(instance.LocationId).to.be(expectedValueLiteral);
      });

      it('should have the property LocationAreaId (base name: "LocationAreaId")', function() {
        // TODO: update the code to test the property LocationAreaId
        expect(instance).to.have.property('LocationAreaId');
        // expect(instance.LocationAreaId).to.be(expectedValueLiteral);
      });

      it('should have the property ExternalLocationId (base name: "ExternalLocationId")', function() {
        // TODO: update the code to test the property ExternalLocationId
        expect(instance).to.have.property('ExternalLocationId');
        // expect(instance.ExternalLocationId).to.be(expectedValueLiteral);
      });

    });
  });

}));
