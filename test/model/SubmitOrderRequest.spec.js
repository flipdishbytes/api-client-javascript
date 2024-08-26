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
    describe('SubmitOrderRequest', function() {
      beforeEach(function() {
        instance = new Flipdish.SubmitOrderRequest();
      });

      it('should create an instance of SubmitOrderRequest', function() {
        // TODO: update the code to test SubmitOrderRequest
        expect(instance).to.be.a(Flipdish.SubmitOrderRequest);
      });

      it('should have the property PaymentToken (base name: "PaymentToken")', function() {
        // TODO: update the code to test the property PaymentToken
        expect(instance).to.have.property('PaymentToken');
        // expect(instance.PaymentToken).to.be(expectedValueLiteral);
      });

      it('should have the property PhoneNumber (base name: "PhoneNumber")', function() {
        // TODO: update the code to test the property PhoneNumber
        expect(instance).to.have.property('PhoneNumber');
        // expect(instance.PhoneNumber).to.be(expectedValueLiteral);
      });

      it('should have the property ChefNote (base name: "ChefNote")', function() {
        // TODO: update the code to test the property ChefNote
        expect(instance).to.have.property('ChefNote');
        // expect(instance.ChefNote).to.be(expectedValueLiteral);
      });

    });
  });

}));
