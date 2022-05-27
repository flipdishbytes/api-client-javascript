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
    describe('UpdateProduct', function() {
      beforeEach(function() {
        instance = new Flipdish.UpdateProduct();
      });

      it('should create an instance of UpdateProduct', function() {
        // TODO: update the code to test UpdateProduct
        expect(instance).to.be.a(Flipdish.UpdateProduct);
      });

      it('should have the property Sku (base name: "Sku")', function() {
        // TODO: update the code to test the property Sku
        expect(instance).to.have.property('Sku');
        // expect(instance.Sku).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "Description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property Price (base name: "Price")', function() {
        // TODO: update the code to test the property Price
        expect(instance).to.have.property('Price');
        // expect(instance.Price).to.be(expectedValueLiteral);
      });

      it('should have the property ImageFileName (base name: "ImageFileName")', function() {
        // TODO: update the code to test the property ImageFileName
        expect(instance).to.have.property('ImageFileName');
        // expect(instance.ImageFileName).to.be(expectedValueLiteral);
      });

      it('should have the property Alcohol (base name: "Alcohol")', function() {
        // TODO: update the code to test the property Alcohol
        expect(instance).to.have.property('Alcohol');
        // expect(instance.Alcohol).to.be(expectedValueLiteral);
      });

      it('should have the property Groups (base name: "Groups")', function() {
        // TODO: update the code to test the property Groups
        expect(instance).to.have.property('Groups');
        // expect(instance.Groups).to.be(expectedValueLiteral);
      });

      it('should have the property Metafields (base name: "Metafields")', function() {
        // TODO: update the code to test the property Metafields
        expect(instance).to.have.property('Metafields');
        // expect(instance.Metafields).to.be(expectedValueLiteral);
      });

    });
  });

}));
