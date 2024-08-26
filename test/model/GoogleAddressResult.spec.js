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
    describe('GoogleAddressResult', function() {
      beforeEach(function() {
        instance = new Flipdish.GoogleAddressResult();
      });

      it('should create an instance of GoogleAddressResult', function() {
        // TODO: update the code to test GoogleAddressResult
        expect(instance).to.be.a(Flipdish.GoogleAddressResult);
      });

      it('should have the property Address_components (base name: "Address_components")', function() {
        // TODO: update the code to test the property Address_components
        expect(instance).to.have.property('Address_components');
        // expect(instance.Address_components).to.be(expectedValueLiteral);
      });

      it('should have the property Formatted_address (base name: "Formatted_address")', function() {
        // TODO: update the code to test the property Formatted_address
        expect(instance).to.have.property('Formatted_address');
        // expect(instance.Formatted_address).to.be(expectedValueLiteral);
      });

      it('should have the property Geometry (base name: "Geometry")', function() {
        // TODO: update the code to test the property Geometry
        expect(instance).to.have.property('Geometry');
        // expect(instance.Geometry).to.be(expectedValueLiteral);
      });

      it('should have the property Place_id (base name: "Place_id")', function() {
        // TODO: update the code to test the property Place_id
        expect(instance).to.have.property('Place_id');
        // expect(instance.Place_id).to.be(expectedValueLiteral);
      });

      it('should have the property Types (base name: "Types")', function() {
        // TODO: update the code to test the property Types
        expect(instance).to.have.property('Types');
        // expect(instance.Types).to.be(expectedValueLiteral);
      });

    });
  });

}));
