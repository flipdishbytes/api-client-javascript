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
    describe('AnalyticsClientEvent', function() {
      beforeEach(function() {
        instance = new Flipdish.AnalyticsClientEvent();
      });

      it('should create an instance of AnalyticsClientEvent', function() {
        // TODO: update the code to test AnalyticsClientEvent
        expect(instance).to.be.a(Flipdish.AnalyticsClientEvent);
      });

      it('should have the property EventName (base name: "EventName")', function() {
        // TODO: update the code to test the property EventName
        expect(instance).to.have.property('EventName');
        // expect(instance.EventName).to.be(expectedValueLiteral);
      });

      it('should have the property EventType (base name: "EventType")', function() {
        // TODO: update the code to test the property EventType
        expect(instance).to.have.property('EventType');
        // expect(instance.EventType).to.be(expectedValueLiteral);
      });

      it('should have the property AppType (base name: "AppType")', function() {
        // TODO: update the code to test the property AppType
        expect(instance).to.have.property('AppType');
        // expect(instance.AppType).to.be(expectedValueLiteral);
      });

      it('should have the property Metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property Metadata
        expect(instance).to.have.property('Metadata');
        // expect(instance.Metadata).to.be(expectedValueLiteral);
      });

      it('should have the property UserId (base name: "UserId")', function() {
        // TODO: update the code to test the property UserId
        expect(instance).to.have.property('UserId');
        // expect(instance.UserId).to.be(expectedValueLiteral);
      });

      it('should have the property Latitude (base name: "Latitude")', function() {
        // TODO: update the code to test the property Latitude
        expect(instance).to.have.property('Latitude');
        // expect(instance.Latitude).to.be(expectedValueLiteral);
      });

      it('should have the property Longitude (base name: "Longitude")', function() {
        // TODO: update the code to test the property Longitude
        expect(instance).to.have.property('Longitude');
        // expect(instance.Longitude).to.be(expectedValueLiteral);
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

    });
  });

}));