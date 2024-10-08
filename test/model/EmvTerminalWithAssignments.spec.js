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
    instance = new Flipdish.EmvTerminalWithAssignments();
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

  describe('EmvTerminalWithAssignments', function() {
    it('should create an instance of EmvTerminalWithAssignments', function() {
      // uncomment below and update the code to test EmvTerminalWithAssignments
      //var instane = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be.a(Flipdish.EmvTerminalWithAssignments);
    });

    it('should have the property EmvTerminalId (base name: "EmvTerminalId")', function() {
      // uncomment below and update the code to test the property EmvTerminalId
      //var instance = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be();
    });

    it('should have the property TerminalId (base name: "TerminalId")', function() {
      // uncomment below and update the code to test the property TerminalId
      //var instance = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be();
    });

    it('should have the property IsAssignedToHydraDevice (base name: "IsAssignedToHydraDevice")', function() {
      // uncomment below and update the code to test the property IsAssignedToHydraDevice
      //var instance = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be();
    });

    it('should have the property HydraConfigId (base name: "HydraConfigId")', function() {
      // uncomment below and update the code to test the property HydraConfigId
      //var instance = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be();
    });

    it('should have the property HydraDeviceId (base name: "HydraDeviceId")', function() {
      // uncomment below and update the code to test the property HydraDeviceId
      //var instance = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be();
    });

    it('should have the property HydraName (base name: "HydraName")', function() {
      // uncomment below and update the code to test the property HydraName
      //var instance = new Flipdish.EmvTerminalWithAssignments();
      //expect(instance).to.be();
    });

  });

}));
