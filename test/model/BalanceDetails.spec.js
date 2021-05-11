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
    describe('BalanceDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.BalanceDetails();
      });

      it('should create an instance of BalanceDetails', function() {
        // TODO: update the code to test BalanceDetails
        expect(instance).to.be.a(Flipdish.BalanceDetails);
      });

      it('should have the property OpeningBalance (base name: "OpeningBalance")', function() {
        // TODO: update the code to test the property OpeningBalance
        expect(instance).to.have.property('OpeningBalance');
        // expect(instance.OpeningBalance).to.be(expectedValueLiteral);
      });

      it('should have the property ClosingBalance (base name: "ClosingBalance")', function() {
        // TODO: update the code to test the property ClosingBalance
        expect(instance).to.have.property('ClosingBalance');
        // expect(instance.ClosingBalance).to.be(expectedValueLiteral);
      });

    });
  });

}));
