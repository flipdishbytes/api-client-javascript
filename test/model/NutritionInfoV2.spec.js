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
    describe('NutritionInfoV2', function() {
      beforeEach(function() {
        instance = new Flipdish.NutritionInfoV2();
      });

      it('should create an instance of NutritionInfoV2', function() {
        // TODO: update the code to test NutritionInfoV2
        expect(instance).to.be.a(Flipdish.NutritionInfoV2);
      });

      it('should have the property MenuItems (base name: "MenuItems")', function() {
        // TODO: update the code to test the property MenuItems
        expect(instance).to.have.property('MenuItems');
        // expect(instance.MenuItems).to.be(expectedValueLiteral);
      });

      it('should have the property MenuItemOptionSetItems (base name: "MenuItemOptionSetItems")', function() {
        // TODO: update the code to test the property MenuItemOptionSetItems
        expect(instance).to.have.property('MenuItemOptionSetItems');
        // expect(instance.MenuItemOptionSetItems).to.be(expectedValueLiteral);
      });

      it('should have the property ImageBaseUrl (base name: "ImageBaseUrl")', function() {
        // TODO: update the code to test the property ImageBaseUrl
        expect(instance).to.have.property('ImageBaseUrl');
        // expect(instance.ImageBaseUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
