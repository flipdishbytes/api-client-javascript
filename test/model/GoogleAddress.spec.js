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
    describe('GoogleAddress', function() {
      beforeEach(function() {
        instance = new Flipdish.GoogleAddress();
      });

      it('should create an instance of GoogleAddress', function() {
        // TODO: update the code to test GoogleAddress
        expect(instance).to.be.a(Flipdish.GoogleAddress);
      });

      it('should have the property Results (base name: "Results")', function() {
        // TODO: update the code to test the property Results
        expect(instance).to.have.property('Results');
        // expect(instance.Results).to.be(expectedValueLiteral);
      });

      it('should have the property Result (base name: "Result")', function() {
        // TODO: update the code to test the property Result
        expect(instance).to.have.property('Result');
        // expect(instance.Result).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

    });
  });

}));
