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
    describe('MenuBulkEditEvent', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuBulkEditEvent();
      });

      it('should create an instance of MenuBulkEditEvent', function() {
        // TODO: update the code to test MenuBulkEditEvent
        expect(instance).to.be.a(Flipdish.MenuBulkEditEvent);
      });

      it('should have the property EventName (base name: "EventName")', function() {
        // TODO: update the code to test the property EventName
        expect(instance).to.have.property('EventName');
        // expect(instance.EventName).to.be(expectedValueLiteral);
      });

      it('should have the property MenuName (base name: "MenuName")', function() {
        // TODO: update the code to test the property MenuName
        expect(instance).to.have.property('MenuName');
        // expect(instance.MenuName).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "Description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property Item (base name: "Item")', function() {
        // TODO: update the code to test the property Item
        expect(instance).to.have.property('Item');
        // expect(instance.Item).to.be(expectedValueLiteral);
      });

      it('should have the property InstanceCount (base name: "InstanceCount")', function() {
        // TODO: update the code to test the property InstanceCount
        expect(instance).to.have.property('InstanceCount');
        // expect(instance.InstanceCount).to.be(expectedValueLiteral);
      });

      it('should have the property IsAvailable (base name: "IsAvailable")', function() {
        // TODO: update the code to test the property IsAvailable
        expect(instance).to.have.property('IsAvailable');
        // expect(instance.IsAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property User (base name: "User")', function() {
        // TODO: update the code to test the property User
        expect(instance).to.have.property('User');
        // expect(instance.User).to.be(expectedValueLiteral);
      });

      it('should have the property MenuId (base name: "MenuId")', function() {
        // TODO: update the code to test the property MenuId
        expect(instance).to.have.property('MenuId');
        // expect(instance.MenuId).to.be(expectedValueLiteral);
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
