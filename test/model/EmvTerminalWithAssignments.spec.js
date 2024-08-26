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
    describe('EmvTerminalWithAssignments', function() {
      beforeEach(function() {
        instance = new Flipdish.EmvTerminalWithAssignments();
      });

      it('should create an instance of EmvTerminalWithAssignments', function() {
        // TODO: update the code to test EmvTerminalWithAssignments
        expect(instance).to.be.a(Flipdish.EmvTerminalWithAssignments);
      });

      it('should have the property EmvTerminalId (base name: "EmvTerminalId")', function() {
        // TODO: update the code to test the property EmvTerminalId
        expect(instance).to.have.property('EmvTerminalId');
        // expect(instance.EmvTerminalId).to.be(expectedValueLiteral);
      });

      it('should have the property TerminalId (base name: "TerminalId")', function() {
        // TODO: update the code to test the property TerminalId
        expect(instance).to.have.property('TerminalId');
        // expect(instance.TerminalId).to.be(expectedValueLiteral);
      });

      it('should have the property IsAssignedToHydraDevice (base name: "IsAssignedToHydraDevice")', function() {
        // TODO: update the code to test the property IsAssignedToHydraDevice
        expect(instance).to.have.property('IsAssignedToHydraDevice');
        // expect(instance.IsAssignedToHydraDevice).to.be(expectedValueLiteral);
      });

      it('should have the property HydraConfigId (base name: "HydraConfigId")', function() {
        // TODO: update the code to test the property HydraConfigId
        expect(instance).to.have.property('HydraConfigId');
        // expect(instance.HydraConfigId).to.be(expectedValueLiteral);
      });

      it('should have the property HydraDeviceId (base name: "HydraDeviceId")', function() {
        // TODO: update the code to test the property HydraDeviceId
        expect(instance).to.have.property('HydraDeviceId');
        // expect(instance.HydraDeviceId).to.be(expectedValueLiteral);
      });

      it('should have the property HydraName (base name: "HydraName")', function() {
        // TODO: update the code to test the property HydraName
        expect(instance).to.have.property('HydraName');
        // expect(instance.HydraName).to.be(expectedValueLiteral);
      });

    });
  });

}));
