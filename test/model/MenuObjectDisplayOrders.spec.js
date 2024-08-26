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
    describe('MenuObjectDisplayOrders', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuObjectDisplayOrders();
      });

      it('should create an instance of MenuObjectDisplayOrders', function() {
        // TODO: update the code to test MenuObjectDisplayOrders
        expect(instance).to.be.a(Flipdish.MenuObjectDisplayOrders);
      });

      it('should have the property DisplayOrders (base name: "DisplayOrders")', function() {
        // TODO: update the code to test the property DisplayOrders
        expect(instance).to.have.property('DisplayOrders');
        // expect(instance.DisplayOrders).to.be(expectedValueLiteral);
      });

    });
  });

}));
