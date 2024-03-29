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
    describe('TelemetrySeriesProperty', function() {
      beforeEach(function() {
        instance = new Flipdish.TelemetrySeriesProperty();
      });

      it('should create an instance of TelemetrySeriesProperty', function() {
        // TODO: update the code to test TelemetrySeriesProperty
        expect(instance).to.be.a(Flipdish.TelemetrySeriesProperty);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Type (base name: "Type")', function() {
        // TODO: update the code to test the property Type
        expect(instance).to.have.property('Type');
        // expect(instance.Type).to.be(expectedValueLiteral);
      });

      it('should have the property IntValues (base name: "IntValues")', function() {
        // TODO: update the code to test the property IntValues
        expect(instance).to.have.property('IntValues');
        // expect(instance.IntValues).to.be(expectedValueLiteral);
      });

      it('should have the property StringValues (base name: "StringValues")', function() {
        // TODO: update the code to test the property StringValues
        expect(instance).to.have.property('StringValues');
        // expect(instance.StringValues).to.be(expectedValueLiteral);
      });

      it('should have the property DoubleValues (base name: "DoubleValues")', function() {
        // TODO: update the code to test the property DoubleValues
        expect(instance).to.have.property('DoubleValues');
        // expect(instance.DoubleValues).to.be(expectedValueLiteral);
      });

    });
  });

}));
