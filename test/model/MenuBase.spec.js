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
    describe('MenuBase', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuBase();
      });

      it('should create an instance of MenuBase', function() {
        // TODO: update the code to test MenuBase
        expect(instance).to.be.a(Flipdish.MenuBase);
      });

      it('should have the property DisplaySectionLinks (base name: "DisplaySectionLinks")', function() {
        // TODO: update the code to test the property DisplaySectionLinks
        expect(instance).to.have.property('DisplaySectionLinks');
        // expect(instance.DisplaySectionLinks).to.be(expectedValueLiteral);
      });

      it('should have the property MenuSectionBehaviour (base name: "MenuSectionBehaviour")', function() {
        // TODO: update the code to test the property MenuSectionBehaviour
        expect(instance).to.have.property('MenuSectionBehaviour');
        // expect(instance.MenuSectionBehaviour).to.be(expectedValueLiteral);
      });

      it('should have the property TaxType (base name: "TaxType")', function() {
        // TODO: update the code to test the property TaxType
        expect(instance).to.have.property('TaxType');
        // expect(instance.TaxType).to.be(expectedValueLiteral);
      });

    });
  });

}));
