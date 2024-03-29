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
    describe('CardReader', function() {
      beforeEach(function() {
        instance = new Flipdish.CardReader();
      });

      it('should create an instance of CardReader', function() {
        // TODO: update the code to test CardReader
        expect(instance).to.be.a(Flipdish.CardReader);
      });

      it('should have the property Id (base name: "Id")', function() {
        // TODO: update the code to test the property Id
        expect(instance).to.have.property('Id');
        // expect(instance.Id).to.be(expectedValueLiteral);
      });

      it('should have the property DeviceSoftwareVersion (base name: "DeviceSoftwareVersion")', function() {
        // TODO: update the code to test the property DeviceSoftwareVersion
        expect(instance).to.have.property('DeviceSoftwareVersion');
        // expect(instance.DeviceSoftwareVersion).to.be(expectedValueLiteral);
      });

      it('should have the property SerialNumber (base name: "SerialNumber")', function() {
        // TODO: update the code to test the property SerialNumber
        expect(instance).to.have.property('SerialNumber');
        // expect(instance.SerialNumber).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property RegistrationCode (base name: "RegistrationCode")', function() {
        // TODO: update the code to test the property RegistrationCode
        expect(instance).to.have.property('RegistrationCode');
        // expect(instance.RegistrationCode).to.be(expectedValueLiteral);
      });

      it('should have the property DeviceType (base name: "DeviceType")', function() {
        // TODO: update the code to test the property DeviceType
        expect(instance).to.have.property('DeviceType');
        // expect(instance.DeviceType).to.be(expectedValueLiteral);
      });

      it('should have the property Deleted (base name: "Deleted")', function() {
        // TODO: update the code to test the property Deleted
        expect(instance).to.have.property('Deleted');
        // expect(instance.Deleted).to.be(expectedValueLiteral);
      });

      it('should have the property Action (base name: "Action")', function() {
        // TODO: update the code to test the property Action
        expect(instance).to.have.property('Action');
        // expect(instance.Action).to.be(expectedValueLiteral);
      });

    });
  });

}));
