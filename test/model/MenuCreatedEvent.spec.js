/**
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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

  beforeEach(function() {
    instance = new Flipdish.MenuCreatedEvent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MenuCreatedEvent', function() {
    it('should create an instance of MenuCreatedEvent', function() {
      // uncomment below and update the code to test MenuCreatedEvent
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be.a(Flipdish.MenuCreatedEvent);
    });

    it('should have the property eventName (base name: "EventName")', function() {
      // uncomment below and update the code to test the property eventName
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "User")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property menu (base name: "Menu")', function() {
      // uncomment below and update the code to test the property menu
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property flipdishEventId (base name: "FlipdishEventId")', function() {
      // uncomment below and update the code to test the property flipdishEventId
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property createTime (base name: "CreateTime")', function() {
      // uncomment below and update the code to test the property createTime
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "Position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new Flipdish.MenuCreatedEvent();
      //expect(instance).to.be();
    });

  });

}));
