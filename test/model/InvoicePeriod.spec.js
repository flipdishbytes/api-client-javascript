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
    describe('InvoicePeriod', function() {
      beforeEach(function() {
        instance = new Flipdish.InvoicePeriod();
      });

      it('should create an instance of InvoicePeriod', function() {
        // TODO: update the code to test InvoicePeriod
        expect(instance).to.be.a(Flipdish.InvoicePeriod);
      });

      it('should have the property Start (base name: "Start")', function() {
        // TODO: update the code to test the property Start
        expect(instance).to.have.property('Start');
        // expect(instance.Start).to.be(expectedValueLiteral);
      });

      it('should have the property End (base name: "End")', function() {
        // TODO: update the code to test the property End
        expect(instance).to.have.property('End');
        // expect(instance.End).to.be(expectedValueLiteral);
      });

    });
  });

}));