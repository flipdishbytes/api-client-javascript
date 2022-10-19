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
    describe('ExecuteConfigurationActionRequest', function() {
      beforeEach(function() {
        instance = new Flipdish.ExecuteConfigurationActionRequest();
      });

      it('should create an instance of ExecuteConfigurationActionRequest', function() {
        // TODO: update the code to test ExecuteConfigurationActionRequest
        expect(instance).to.be.a(Flipdish.ExecuteConfigurationActionRequest);
      });

      it('should have the property Key (base name: "Key")', function() {
        // TODO: update the code to test the property Key
        expect(instance).to.have.property('Key');
        // expect(instance.Key).to.be(expectedValueLiteral);
      });

      it('should have the property Action (base name: "Action")', function() {
        // TODO: update the code to test the property Action
        expect(instance).to.have.property('Action');
        // expect(instance.Action).to.be(expectedValueLiteral);
      });

    });
  });

}));