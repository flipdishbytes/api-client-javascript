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
    describe('NutritionInfoItemAddUpdateLabelModel', function() {
      beforeEach(function() {
        instance = new Flipdish.NutritionInfoItemAddUpdateLabelModel();
      });

      it('should create an instance of NutritionInfoItemAddUpdateLabelModel', function() {
        // TODO: update the code to test NutritionInfoItemAddUpdateLabelModel
        expect(instance).to.be.a(Flipdish.NutritionInfoItemAddUpdateLabelModel);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Values (base name: "Values")', function() {
        // TODO: update the code to test the property Values
        expect(instance).to.have.property('Values');
        // expect(instance.Values).to.be(expectedValueLiteral);
      });

      it('should have the property IconUrl (base name: "IconUrl")', function() {
        // TODO: update the code to test the property IconUrl
        expect(instance).to.have.property('IconUrl');
        // expect(instance.IconUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
