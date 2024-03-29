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
    describe('UpdateTipConfiguration', function() {
      beforeEach(function() {
        instance = new Flipdish.UpdateTipConfiguration();
      });

      it('should create an instance of UpdateTipConfiguration', function() {
        // TODO: update the code to test UpdateTipConfiguration
        expect(instance).to.be.a(Flipdish.UpdateTipConfiguration);
      });

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property AllowCustomTips (base name: "AllowCustomTips")', function() {
        // TODO: update the code to test the property AllowCustomTips
        expect(instance).to.have.property('AllowCustomTips');
        // expect(instance.AllowCustomTips).to.be(expectedValueLiteral);
      });

      it('should have the property AllowRoundUp (base name: "AllowRoundUp")', function() {
        // TODO: update the code to test the property AllowRoundUp
        expect(instance).to.have.property('AllowRoundUp');
        // expect(instance.AllowRoundUp).to.be(expectedValueLiteral);
      });

      it('should have the property AllowEmojis (base name: "AllowEmojis")', function() {
        // TODO: update the code to test the property AllowEmojis
        expect(instance).to.have.property('AllowEmojis');
        // expect(instance.AllowEmojis).to.be(expectedValueLiteral);
      });

      it('should have the property Percentages (base name: "Percentages")', function() {
        // TODO: update the code to test the property Percentages
        expect(instance).to.have.property('Percentages');
        // expect(instance.Percentages).to.be(expectedValueLiteral);
      });

      it('should have the property DefaultPercentage (base name: "DefaultPercentage")', function() {
        // TODO: update the code to test the property DefaultPercentage
        expect(instance).to.have.property('DefaultPercentage');
        // expect(instance.DefaultPercentage).to.be(expectedValueLiteral);
      });

    });
  });

}));
