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
    describe('Teammate', function() {
      beforeEach(function() {
        instance = new Flipdish.Teammate();
      });

      it('should create an instance of Teammate', function() {
        // TODO: update the code to test Teammate
        expect(instance).to.be.a(Flipdish.Teammate);
      });

      it('should have the property TeammateId (base name: "TeammateId")', function() {
        // TODO: update the code to test the property TeammateId
        expect(instance).to.have.property('TeammateId');
        // expect(instance.TeammateId).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property LastActivity (base name: "LastActivity")', function() {
        // TODO: update the code to test the property LastActivity
        expect(instance).to.have.property('LastActivity');
        // expect(instance.LastActivity).to.be(expectedValueLiteral);
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

      it('should have the property Email (base name: "Email")', function() {
        // TODO: update the code to test the property Email
        expect(instance).to.have.property('Email');
        // expect(instance.Email).to.be(expectedValueLiteral);
      });

      it('should have the property AppAccessLevel (base name: "AppAccessLevel")', function() {
        // TODO: update the code to test the property AppAccessLevel
        expect(instance).to.have.property('AppAccessLevel');
        // expect(instance.AppAccessLevel).to.be(expectedValueLiteral);
      });

      it('should have the property HasAccessToAllStores (base name: "HasAccessToAllStores")', function() {
        // TODO: update the code to test the property HasAccessToAllStores
        expect(instance).to.have.property('HasAccessToAllStores');
        // expect(instance.HasAccessToAllStores).to.be(expectedValueLiteral);
      });

      it('should have the property StoreIds (base name: "StoreIds")', function() {
        // TODO: update the code to test the property StoreIds
        expect(instance).to.have.property('StoreIds');
        // expect(instance.StoreIds).to.be(expectedValueLiteral);
      });

    });
  });

}));