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
    describe('StoreCloneSettings', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreCloneSettings();
      });

      it('should create an instance of StoreCloneSettings', function() {
        // TODO: update the code to test StoreCloneSettings
        expect(instance).to.be.a(Flipdish.StoreCloneSettings);
      });

      it('should have the property TargetStoreGroupId (base name: "TargetStoreGroupId")', function() {
        // TODO: update the code to test the property TargetStoreGroupId
        expect(instance).to.have.property('TargetStoreGroupId');
        // expect(instance.TargetStoreGroupId).to.be(expectedValueLiteral);
      });

    });
  });

}));
