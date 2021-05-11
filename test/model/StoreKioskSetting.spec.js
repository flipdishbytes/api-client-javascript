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
    describe('StoreKioskSetting', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreKioskSetting();
      });

      it('should create an instance of StoreKioskSetting', function() {
        // TODO: update the code to test StoreKioskSetting
        expect(instance).to.be.a(Flipdish.StoreKioskSetting);
      });

      it('should have the property KioskSettingId (base name: "KioskSettingId")', function() {
        // TODO: update the code to test the property KioskSettingId
        expect(instance).to.have.property('KioskSettingId');
        // expect(instance.KioskSettingId).to.be(expectedValueLiteral);
      });

      it('should have the property KioskName (base name: "KioskName")', function() {
        // TODO: update the code to test the property KioskName
        expect(instance).to.have.property('KioskName');
        // expect(instance.KioskName).to.be(expectedValueLiteral);
      });

      it('should have the property RequireCustomerName (base name: "RequireCustomerName")', function() {
        // TODO: update the code to test the property RequireCustomerName
        expect(instance).to.have.property('RequireCustomerName');
        // expect(instance.RequireCustomerName).to.be(expectedValueLiteral);
      });

      it('should have the property RequestTableNumber (base name: "RequestTableNumber")', function() {
        // TODO: update the code to test the property RequestTableNumber
        expect(instance).to.have.property('RequestTableNumber');
        // expect(instance.RequestTableNumber).to.be(expectedValueLiteral);
      });

      it('should have the property OfferDineInOrTakeawayOption (base name: "OfferDineInOrTakeawayOption")', function() {
        // TODO: update the code to test the property OfferDineInOrTakeawayOption
        expect(instance).to.have.property('OfferDineInOrTakeawayOption');
        // expect(instance.OfferDineInOrTakeawayOption).to.be(expectedValueLiteral);
      });

      it('should have the property PhysicalRestaurantId (base name: "PhysicalRestaurantId")', function() {
        // TODO: update the code to test the property PhysicalRestaurantId
        expect(instance).to.have.property('PhysicalRestaurantId');
        // expect(instance.PhysicalRestaurantId).to.be(expectedValueLiteral);
      });

      it('should have the property HydraConfigId (base name: "HydraConfigId")', function() {
        // TODO: update the code to test the property HydraConfigId
        expect(instance).to.have.property('HydraConfigId');
        // expect(instance.HydraConfigId).to.be(expectedValueLiteral);
      });

    });
  });

}));
