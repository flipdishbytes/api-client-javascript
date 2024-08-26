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
    describe('AccountDetailBase', function() {
      beforeEach(function() {
        instance = new Flipdish.AccountDetailBase();
      });

      it('should create an instance of AccountDetailBase', function() {
        // TODO: update the code to test AccountDetailBase
        expect(instance).to.be.a(Flipdish.AccountDetailBase);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Language (base name: "Language")', function() {
        // TODO: update the code to test the property Language
        expect(instance).to.have.property('Language');
        // expect(instance.Language).to.be(expectedValueLiteral);
      });

      it('should have the property TimeZoneInfoId (base name: "TimeZoneInfoId")', function() {
        // TODO: update the code to test the property TimeZoneInfoId
        expect(instance).to.have.property('TimeZoneInfoId');
        // expect(instance.TimeZoneInfoId).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayTimesInUserLocalTimeZone (base name: "DisplayTimesInUserLocalTimeZone")', function() {
        // TODO: update the code to test the property DisplayTimesInUserLocalTimeZone
        expect(instance).to.have.property('DisplayTimesInUserLocalTimeZone');
        // expect(instance.DisplayTimesInUserLocalTimeZone).to.be(expectedValueLiteral);
      });

      it('should have the property ShowHiddenFeatures (base name: "ShowHiddenFeatures")', function() {
        // TODO: update the code to test the property ShowHiddenFeatures
        expect(instance).to.have.property('ShowHiddenFeatures');
        // expect(instance.ShowHiddenFeatures).to.be(expectedValueLiteral);
      });

    });
  });

}));
