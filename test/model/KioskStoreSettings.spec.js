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
    describe('KioskStoreSettings', function() {
      beforeEach(function() {
        instance = new Flipdish.KioskStoreSettings();
      });

      it('should create an instance of KioskStoreSettings', function() {
        // TODO: update the code to test KioskStoreSettings
        expect(instance).to.be.a(Flipdish.KioskStoreSettings);
      });

      it('should have the property StoreKioskSettings (base name: "StoreKioskSettings")', function() {
        // TODO: update the code to test the property StoreKioskSettings
        expect(instance).to.have.property('StoreKioskSettings');
        // expect(instance.StoreKioskSettings).to.be(expectedValueLiteral);
      });

      it('should have the property Timezone (base name: "Timezone")', function() {
        // TODO: update the code to test the property Timezone
        expect(instance).to.have.property('Timezone');
        // expect(instance.Timezone).to.be(expectedValueLiteral);
      });

      it('should have the property CurrentUtcTime (base name: "CurrentUtcTime")', function() {
        // TODO: update the code to test the property CurrentUtcTime
        expect(instance).to.have.property('CurrentUtcTime');
        // expect(instance.CurrentUtcTime).to.be(expectedValueLiteral);
      });

    });
  });

}));