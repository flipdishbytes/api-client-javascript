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
    describe('RedeemInvitationResult', function() {
      beforeEach(function() {
        instance = new Flipdish.RedeemInvitationResult();
      });

      it('should create an instance of RedeemInvitationResult', function() {
        // TODO: update the code to test RedeemInvitationResult
        expect(instance).to.be.a(Flipdish.RedeemInvitationResult);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property InvitationStatus (base name: "InvitationStatus")', function() {
        // TODO: update the code to test the property InvitationStatus
        expect(instance).to.have.property('InvitationStatus');
        // expect(instance.InvitationStatus).to.be(expectedValueLiteral);
      });

      it('should have the property IsNewUser (base name: "IsNewUser")', function() {
        // TODO: update the code to test the property IsNewUser
        expect(instance).to.have.property('IsNewUser');
        // expect(instance.IsNewUser).to.be(expectedValueLiteral);
      });

    });
  });

}));
