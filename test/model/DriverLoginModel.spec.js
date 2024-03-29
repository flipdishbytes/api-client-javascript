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
    describe('DriverLoginModel', function() {
      beforeEach(function() {
        instance = new Flipdish.DriverLoginModel();
      });

      it('should create an instance of DriverLoginModel', function() {
        // TODO: update the code to test DriverLoginModel
        expect(instance).to.be.a(Flipdish.DriverLoginModel);
      });

      it('should have the property PhoneNumber (base name: "PhoneNumber")', function() {
        // TODO: update the code to test the property PhoneNumber
        expect(instance).to.have.property('PhoneNumber');
        // expect(instance.PhoneNumber).to.be(expectedValueLiteral);
      });

      it('should have the property Code (base name: "Code")', function() {
        // TODO: update the code to test the property Code
        expect(instance).to.have.property('Code');
        // expect(instance.Code).to.be(expectedValueLiteral);
      });

    });
  });

}));
