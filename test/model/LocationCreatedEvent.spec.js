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
    describe('LocationCreatedEvent', function() {
      beforeEach(function() {
        instance = new Flipdish.LocationCreatedEvent();
      });

      it('should create an instance of LocationCreatedEvent', function() {
        // TODO: update the code to test LocationCreatedEvent
        expect(instance).to.be.a(Flipdish.LocationCreatedEvent);
      });

      it('should have the property LocationId (base name: "LocationId")', function() {
        // TODO: update the code to test the property LocationId
        expect(instance).to.have.property('LocationId');
        // expect(instance.LocationId).to.be(expectedValueLiteral);
      });

      it('should have the property LocationName (base name: "LocationName")', function() {
        // TODO: update the code to test the property LocationName
        expect(instance).to.have.property('LocationName');
        // expect(instance.LocationName).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
        // TODO: update the code to test the property DisplayOrder
        expect(instance).to.have.property('DisplayOrder');
        // expect(instance.DisplayOrder).to.be(expectedValueLiteral);
      });

      it('should have the property ExternalLocationId (base name: "ExternalLocationId")', function() {
        // TODO: update the code to test the property ExternalLocationId
        expect(instance).to.have.property('ExternalLocationId');
        // expect(instance.ExternalLocationId).to.be(expectedValueLiteral);
      });

      it('should have the property LocationAreaId (base name: "LocationAreaId")', function() {
        // TODO: update the code to test the property LocationAreaId
        expect(instance).to.have.property('LocationAreaId');
        // expect(instance.LocationAreaId).to.be(expectedValueLiteral);
      });

      it('should have the property EventName (base name: "EventName")', function() {
        // TODO: update the code to test the property EventName
        expect(instance).to.have.property('EventName');
        // expect(instance.EventName).to.be(expectedValueLiteral);
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
