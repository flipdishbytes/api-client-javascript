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
    instance = new Flipdish.ClientDeviceEnroll();
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

  describe('ClientDeviceEnroll', function() {
    it('should create an instance of ClientDeviceEnroll', function() {
      // uncomment below and update the code to test ClientDeviceEnroll
      //var instane = new Flipdish.ClientDeviceEnroll();
      //expect(instance).to.be.a(Flipdish.ClientDeviceEnroll);
    });

    it('should have the property DeviceModel (base name: "DeviceModel")', function() {
      // uncomment below and update the code to test the property DeviceModel
      //var instance = new Flipdish.ClientDeviceEnroll();
      //expect(instance).to.be();
    });

    it('should have the property DeviceId (base name: "DeviceId")', function() {
      // uncomment below and update the code to test the property DeviceId
      //var instance = new Flipdish.ClientDeviceEnroll();
      //expect(instance).to.be();
    });

    it('should have the property DeviceName (base name: "DeviceName")', function() {
      // uncomment below and update the code to test the property DeviceName
      //var instance = new Flipdish.ClientDeviceEnroll();
      //expect(instance).to.be();
    });

  });

}));
