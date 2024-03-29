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
    describe('PaymentTerminalDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.PaymentTerminalDetails();
      });

      it('should create an instance of PaymentTerminalDetails', function() {
        // TODO: update the code to test PaymentTerminalDetails
        expect(instance).to.be.a(Flipdish.PaymentTerminalDetails);
      });

      it('should have the property TerminalId (base name: "TerminalId")', function() {
        // TODO: update the code to test the property TerminalId
        expect(instance).to.have.property('TerminalId');
        // expect(instance.TerminalId).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property Uri (base name: "Uri")', function() {
        // TODO: update the code to test the property Uri
        expect(instance).to.have.property('Uri');
        // expect(instance.Uri).to.be(expectedValueLiteral);
      });

    });
  });

}));
