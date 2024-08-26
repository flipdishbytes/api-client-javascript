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
    describe('MenuZone', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuZone();
      });

      it('should create an instance of MenuZone', function() {
        // TODO: update the code to test MenuZone
        expect(instance).to.be.a(Flipdish.MenuZone);
      });

      it('should have the property MenuZoneId (base name: "MenuZoneId")', function() {
        // TODO: update the code to test the property MenuZoneId
        expect(instance).to.have.property('MenuZoneId');
        // expect(instance.MenuZoneId).to.be(expectedValueLiteral);
      });

      it('should have the property MenuId (base name: "MenuId")', function() {
        // TODO: update the code to test the property MenuId
        expect(instance).to.have.property('MenuId');
        // expect(instance.MenuId).to.be(expectedValueLiteral);
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

      it('should have the property ImageName (base name: "ImageName")', function() {
        // TODO: update the code to test the property ImageName
        expect(instance).to.have.property('ImageName');
        // expect(instance.ImageName).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
        // TODO: update the code to test the property DisplayOrder
        expect(instance).to.have.property('DisplayOrder');
        // expect(instance.DisplayOrder).to.be(expectedValueLiteral);
      });

    });
  });

}));
