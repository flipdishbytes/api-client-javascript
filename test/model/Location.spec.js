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
    describe('Location', function() {
      beforeEach(function() {
        instance = new Flipdish.Location();
      });

      it('should create an instance of Location', function() {
        // TODO: update the code to test Location
        expect(instance).to.be.a(Flipdish.Location);
      });

      it('should have the property AddressLine1 (base name: "AddressLine1")', function() {
        // TODO: update the code to test the property AddressLine1
        expect(instance).to.have.property('AddressLine1');
        // expect(instance.AddressLine1).to.be(expectedValueLiteral);
      });

      it('should have the property AddressLine2 (base name: "AddressLine2")', function() {
        // TODO: update the code to test the property AddressLine2
        expect(instance).to.have.property('AddressLine2');
        // expect(instance.AddressLine2).to.be(expectedValueLiteral);
      });

      it('should have the property FormattedAddress (base name: "FormattedAddress")', function() {
        // TODO: update the code to test the property FormattedAddress
        expect(instance).to.have.property('FormattedAddress');
        // expect(instance.FormattedAddress).to.be(expectedValueLiteral);
      });

      it('should have the property PostalCode (base name: "PostalCode")', function() {
        // TODO: update the code to test the property PostalCode
        expect(instance).to.have.property('PostalCode');
        // expect(instance.PostalCode).to.be(expectedValueLiteral);
      });

      it('should have the property City (base name: "City")', function() {
        // TODO: update the code to test the property City
        expect(instance).to.have.property('City');
        // expect(instance.City).to.be(expectedValueLiteral);
      });

      it('should have the property Coordinates (base name: "Coordinates")', function() {
        // TODO: update the code to test the property Coordinates
        expect(instance).to.have.property('Coordinates');
        // expect(instance.Coordinates).to.be(expectedValueLiteral);
      });

      it('should have the property Notes (base name: "Notes")', function() {
        // TODO: update the code to test the property Notes
        expect(instance).to.have.property('Notes');
        // expect(instance.Notes).to.be(expectedValueLiteral);
      });

    });
  });

}));
