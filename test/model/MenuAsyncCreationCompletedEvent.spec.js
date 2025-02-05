/**
 * Flipdish Open API v1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flipdish.MenuAsyncCreationCompletedEvent();
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

  describe('MenuAsyncCreationCompletedEvent', function() {
    it('should create an instance of MenuAsyncCreationCompletedEvent', function() {
      // uncomment below and update the code to test MenuAsyncCreationCompletedEvent
      //var instane = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be.a(Flipdish.MenuAsyncCreationCompletedEvent);
    });

    it('should have the property EventName (base name: "EventName")', function() {
      // uncomment below and update the code to test the property EventName
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property Description (base name: "Description")', function() {
      // uncomment below and update the code to test the property Description
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property User (base name: "User")', function() {
      // uncomment below and update the code to test the property User
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property Menu (base name: "Menu")', function() {
      // uncomment below and update the code to test the property Menu
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property Success (base name: "Success")', function() {
      // uncomment below and update the code to test the property Success
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property FlipdishEventId (base name: "FlipdishEventId")', function() {
      // uncomment below and update the code to test the property FlipdishEventId
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property CreateTime (base name: "CreateTime")', function() {
      // uncomment below and update the code to test the property CreateTime
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property Position (base name: "Position")', function() {
      // uncomment below and update the code to test the property Position
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property AppId (base name: "AppId")', function() {
      // uncomment below and update the code to test the property AppId
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property OrgId (base name: "OrgId")', function() {
      // uncomment below and update the code to test the property OrgId
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

    it('should have the property IpAddress (base name: "IpAddress")', function() {
      // uncomment below and update the code to test the property IpAddress
      //var instance = new Flipdish.MenuAsyncCreationCompletedEvent();
      //expect(instance).to.be();
    });

  });

}));
