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
    describe('StoreChannelAssignment', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreChannelAssignment();
      });

      it('should create an instance of StoreChannelAssignment', function() {
        // TODO: update the code to test StoreChannelAssignment
        expect(instance).to.be.a(Flipdish.StoreChannelAssignment);
      });

      it('should have the property ChannelId (base name: "ChannelId")', function() {
        // TODO: update the code to test the property ChannelId
        expect(instance).to.have.property('ChannelId');
        // expect(instance.ChannelId).to.be(expectedValueLiteral);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property StoreName (base name: "StoreName")', function() {
        // TODO: update the code to test the property StoreName
        expect(instance).to.have.property('StoreName');
        // expect(instance.StoreName).to.be(expectedValueLiteral);
      });

    });
  });

}));