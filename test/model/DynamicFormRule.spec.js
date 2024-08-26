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
    describe('DynamicFormRule', function() {
      beforeEach(function() {
        instance = new Flipdish.DynamicFormRule();
      });

      it('should create an instance of DynamicFormRule', function() {
        // TODO: update the code to test DynamicFormRule
        expect(instance).to.be.a(Flipdish.DynamicFormRule);
      });

      it('should have the property Value (base name: "Value")', function() {
        // TODO: update the code to test the property Value
        expect(instance).to.have.property('Value');
        // expect(instance.Value).to.be(expectedValueLiteral);
      });

      it('should have the property Message (base name: "Message")', function() {
        // TODO: update the code to test the property Message
        expect(instance).to.have.property('Message');
        // expect(instance.Message).to.be(expectedValueLiteral);
      });

      it('should have the property Scopes (base name: "Scopes")', function() {
        // TODO: update the code to test the property Scopes
        expect(instance).to.have.property('Scopes');
        // expect(instance.Scopes).to.be(expectedValueLiteral);
      });

    });
  });

}));
