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
    describe('StoreGroupUpdatedEvent', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreGroupUpdatedEvent();
      });

      it('should create an instance of StoreGroupUpdatedEvent', function() {
        // TODO: update the code to test StoreGroupUpdatedEvent
        expect(instance).to.be.a(Flipdish.StoreGroupUpdatedEvent);
      });

      it('should have the property EventName (base name: "EventName")', function() {
        // TODO: update the code to test the property EventName
        expect(instance).to.have.property('EventName');
        // expect(instance.EventName).to.be(expectedValueLiteral);
      });

      it('should have the property StoreGroupId (base name: "StoreGroupId")', function() {
        // TODO: update the code to test the property StoreGroupId
        expect(instance).to.have.property('StoreGroupId');
        // expect(instance.StoreGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property User (base name: "User")', function() {
        // TODO: update the code to test the property User
        expect(instance).to.have.property('User');
        // expect(instance.User).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "Description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property StoreGroup (base name: "StoreGroup")', function() {
        // TODO: update the code to test the property StoreGroup
        expect(instance).to.have.property('StoreGroup');
        // expect(instance.StoreGroup).to.be(expectedValueLiteral);
      });

      it('should have the property FlipdishEventId (base name: "FlipdishEventId")', function() {
        // TODO: update the code to test the property FlipdishEventId
        expect(instance).to.have.property('FlipdishEventId');
        // expect(instance.FlipdishEventId).to.be(expectedValueLiteral);
      });

      it('should have the property CreateTime (base name: "CreateTime")', function() {
        // TODO: update the code to test the property CreateTime
        expect(instance).to.have.property('CreateTime');
        // expect(instance.CreateTime).to.be(expectedValueLiteral);
      });

      it('should have the property Position (base name: "Position")', function() {
        // TODO: update the code to test the property Position
        expect(instance).to.have.property('Position');
        // expect(instance.Position).to.be(expectedValueLiteral);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property IpAddress (base name: "IpAddress")', function() {
        // TODO: update the code to test the property IpAddress
        expect(instance).to.have.property('IpAddress');
        // expect(instance.IpAddress).to.be(expectedValueLiteral);
      });

    });
  });

}));
