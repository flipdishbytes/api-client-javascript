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
    describe('Channel', function() {
      beforeEach(function() {
        instance = new Flipdish.Channel();
      });

      it('should create an instance of Channel', function() {
        // TODO: update the code to test Channel
        expect(instance).to.be.a(Flipdish.Channel);
      });

      it('should have the property ChannelId (base name: "ChannelId")', function() {
        // TODO: update the code to test the property ChannelId
        expect(instance).to.have.property('ChannelId');
        // expect(instance.ChannelId).to.be(expectedValueLiteral);
      });

      it('should have the property TranslationKey (base name: "TranslationKey")', function() {
        // TODO: update the code to test the property TranslationKey
        expect(instance).to.have.property('TranslationKey');
        // expect(instance.TranslationKey).to.be(expectedValueLiteral);
      });

      it('should have the property Source (base name: "Source")', function() {
        // TODO: update the code to test the property Source
        expect(instance).to.have.property('Source');
        // expect(instance.Source).to.be(expectedValueLiteral);
      });

      it('should have the property LogoUri (base name: "LogoUri")', function() {
        // TODO: update the code to test the property LogoUri
        expect(instance).to.have.property('LogoUri');
        // expect(instance.LogoUri).to.be(expectedValueLiteral);
      });

      it('should have the property Available (base name: "Available")', function() {
        // TODO: update the code to test the property Available
        expect(instance).to.have.property('Available');
        // expect(instance.Available).to.be(expectedValueLiteral);
      });

      it('should have the property MaintainedExternally (base name: "MaintainedExternally")', function() {
        // TODO: update the code to test the property MaintainedExternally
        expect(instance).to.have.property('MaintainedExternally');
        // expect(instance.MaintainedExternally).to.be(expectedValueLiteral);
      });

    });
  });

}));
