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
    describe('MenuTaxDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuTaxDetails();
      });

      it('should create an instance of MenuTaxDetails', function() {
        // TODO: update the code to test MenuTaxDetails
        expect(instance).to.be.a(Flipdish.MenuTaxDetails);
      });

      it('should have the property TaxRates (base name: "TaxRates")', function() {
        // TODO: update the code to test the property TaxRates
        expect(instance).to.have.property('TaxRates');
        // expect(instance.TaxRates).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayTax (base name: "DisplayTax")', function() {
        // TODO: update the code to test the property DisplayTax
        expect(instance).to.have.property('DisplayTax');
        // expect(instance.DisplayTax).to.be(expectedValueLiteral);
      });

      it('should have the property TaxType (base name: "TaxType")', function() {
        // TODO: update the code to test the property TaxType
        expect(instance).to.have.property('TaxType');
        // expect(instance.TaxType).to.be(expectedValueLiteral);
      });

      it('should have the property ItemTaxes (base name: "ItemTaxes")', function() {
        // TODO: update the code to test the property ItemTaxes
        expect(instance).to.have.property('ItemTaxes');
        // expect(instance.ItemTaxes).to.be(expectedValueLiteral);
      });

      it('should have the property SetItemTaxes (base name: "SetItemTaxes")', function() {
        // TODO: update the code to test the property SetItemTaxes
        expect(instance).to.have.property('SetItemTaxes');
        // expect(instance.SetItemTaxes).to.be(expectedValueLiteral);
      });

    });
  });

}));
