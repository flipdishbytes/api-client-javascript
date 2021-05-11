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
    describe('DeviceSettings', function() {
      beforeEach(function() {
        instance = new Flipdish.DeviceSettings();
      });

      it('should create an instance of DeviceSettings', function() {
        // TODO: update the code to test DeviceSettings
        expect(instance).to.be.a(Flipdish.DeviceSettings);
      });

      it('should have the property Volume (base name: "Volume")', function() {
        // TODO: update the code to test the property Volume
        expect(instance).to.have.property('Volume');
        // expect(instance.Volume).to.be(expectedValueLiteral);
      });

      it('should have the property FontSize (base name: "FontSize")', function() {
        // TODO: update the code to test the property FontSize
        expect(instance).to.have.property('FontSize');
        // expect(instance.FontSize).to.be(expectedValueLiteral);
      });

      it('should have the property Brightness (base name: "Brightness")', function() {
        // TODO: update the code to test the property Brightness
        expect(instance).to.have.property('Brightness');
        // expect(instance.Brightness).to.be(expectedValueLiteral);
      });

    });
  });

}));