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
    describe('WebhookEventSample', function() {
      beforeEach(function() {
        instance = new Flipdish.WebhookEventSample();
      });

      it('should create an instance of WebhookEventSample', function() {
        // TODO: update the code to test WebhookEventSample
        expect(instance).to.be.a(Flipdish.WebhookEventSample);
      });

      it('should have the property Type (base name: "Type")', function() {
        // TODO: update the code to test the property Type
        expect(instance).to.have.property('Type');
        // expect(instance.Type).to.be(expectedValueLiteral);
      });

      it('should have the property CreateTime (base name: "CreateTime")', function() {
        // TODO: update the code to test the property CreateTime
        expect(instance).to.have.property('CreateTime');
        // expect(instance.CreateTime).to.be(expectedValueLiteral);
      });

      it('should have the property Body (base name: "Body")', function() {
        // TODO: update the code to test the property Body
        expect(instance).to.have.property('Body');
        // expect(instance.Body).to.be(expectedValueLiteral);
      });

    });
  });

}));
