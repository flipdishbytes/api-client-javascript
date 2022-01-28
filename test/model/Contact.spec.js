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
    describe('Contact', function() {
      beforeEach(function() {
        instance = new Flipdish.Contact();
      });

      it('should create an instance of Contact', function() {
        // TODO: update the code to test Contact
        expect(instance).to.be.a(Flipdish.Contact);
      });

      it('should have the property Email (base name: "Email")', function() {
        // TODO: update the code to test the property Email
        expect(instance).to.have.property('Email');
        // expect(instance.Email).to.be(expectedValueLiteral);
      });

      it('should have the property PhoneNumber (base name: "PhoneNumber")', function() {
        // TODO: update the code to test the property PhoneNumber
        expect(instance).to.have.property('PhoneNumber');
        // expect(instance.PhoneNumber).to.be(expectedValueLiteral);
      });

      it('should have the property FirstName (base name: "FirstName")', function() {
        // TODO: update the code to test the property FirstName
        expect(instance).to.have.property('FirstName');
        // expect(instance.FirstName).to.be(expectedValueLiteral);
      });

      it('should have the property LastName (base name: "LastName")', function() {
        // TODO: update the code to test the property LastName
        expect(instance).to.have.property('LastName');
        // expect(instance.LastName).to.be(expectedValueLiteral);
      });

    });
  });

}));
