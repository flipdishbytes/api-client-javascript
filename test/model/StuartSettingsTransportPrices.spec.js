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
    describe('StuartSettingsTransportPrices', function() {
      beforeEach(function() {
        instance = new Flipdish.StuartSettingsTransportPrices();
      });

      it('should create an instance of StuartSettingsTransportPrices', function() {
        // TODO: update the code to test StuartSettingsTransportPrices
        expect(instance).to.be.a(Flipdish.StuartSettingsTransportPrices);
      });

      it('should have the property Bike (base name: "Bike")', function() {
        // TODO: update the code to test the property Bike
        expect(instance).to.have.property('Bike');
        // expect(instance.Bike).to.be(expectedValueLiteral);
      });

      it('should have the property Cargobike (base name: "Cargobike")', function() {
        // TODO: update the code to test the property Cargobike
        expect(instance).to.have.property('Cargobike');
        // expect(instance.Cargobike).to.be(expectedValueLiteral);
      });

      it('should have the property Cargobikexl (base name: "Cargobikexl")', function() {
        // TODO: update the code to test the property Cargobikexl
        expect(instance).to.have.property('Cargobikexl');
        // expect(instance.Cargobikexl).to.be(expectedValueLiteral);
      });

      it('should have the property Motorbike (base name: "Motorbike")', function() {
        // TODO: update the code to test the property Motorbike
        expect(instance).to.have.property('Motorbike');
        // expect(instance.Motorbike).to.be(expectedValueLiteral);
      });

      it('should have the property Motorbikexl (base name: "Motorbikexl")', function() {
        // TODO: update the code to test the property Motorbikexl
        expect(instance).to.have.property('Motorbikexl');
        // expect(instance.Motorbikexl).to.be(expectedValueLiteral);
      });

      it('should have the property Car (base name: "Car")', function() {
        // TODO: update the code to test the property Car
        expect(instance).to.have.property('Car');
        // expect(instance.Car).to.be(expectedValueLiteral);
      });

      it('should have the property Van (base name: "Van")', function() {
        // TODO: update the code to test the property Van
        expect(instance).to.have.property('Van');
        // expect(instance.Van).to.be(expectedValueLiteral);
      });

    });
  });

}));
