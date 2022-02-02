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
    describe('OwnerEntityConfiguration', function() {
      beforeEach(function() {
        instance = new Flipdish.OwnerEntityConfiguration();
      });

      it('should create an instance of OwnerEntityConfiguration', function() {
        // TODO: update the code to test OwnerEntityConfiguration
        expect(instance).to.be.a(Flipdish.OwnerEntityConfiguration);
      });

      it('should have the property OwnerEntity (base name: "OwnerEntity")', function() {
        // TODO: update the code to test the property OwnerEntity
        expect(instance).to.have.property('OwnerEntity');
        // expect(instance.OwnerEntity).to.be(expectedValueLiteral);
      });

      it('should have the property AllowedBehaviors (base name: "AllowedBehaviors")', function() {
        // TODO: update the code to test the property AllowedBehaviors
        expect(instance).to.have.property('AllowedBehaviors');
        // expect(instance.AllowedBehaviors).to.be(expectedValueLiteral);
      });

    });
  });

}));