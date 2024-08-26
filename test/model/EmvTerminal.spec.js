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
    instance = new Flipdish.EmvTerminal();
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

  describe('EmvTerminal', function() {
    it('should create an instance of EmvTerminal', function() {
      // uncomment below and update the code to test EmvTerminal
      //var instane = new Flipdish.EmvTerminal();
      //expect(instance).to.be.a(Flipdish.EmvTerminal);
    });

    it('should have the property EmvTerminalId (base name: "EmvTerminalId")', function() {
      // uncomment below and update the code to test the property EmvTerminalId
      //var instance = new Flipdish.EmvTerminal();
      //expect(instance).to.be();
    });

    it('should have the property TerminalId (base name: "TerminalId")', function() {
      // uncomment below and update the code to test the property TerminalId
      //var instance = new Flipdish.EmvTerminal();
      //expect(instance).to.be();
    });

    it('should have the property Url (base name: "Url")', function() {
      // uncomment below and update the code to test the property Url
      //var instance = new Flipdish.EmvTerminal();
      //expect(instance).to.be();
    });

    it('should have the property Token (base name: "Token")', function() {
      // uncomment below and update the code to test the property Token
      //var instance = new Flipdish.EmvTerminal();
      //expect(instance).to.be();
    });

    it('should have the property SoftwareHouseId (base name: "SoftwareHouseId")', function() {
      // uncomment below and update the code to test the property SoftwareHouseId
      //var instance = new Flipdish.EmvTerminal();
      //expect(instance).to.be();
    });

    it('should have the property InstallerId (base name: "InstallerId")', function() {
      // uncomment below and update the code to test the property InstallerId
      //var instance = new Flipdish.EmvTerminal();
      //expect(instance).to.be();
    });

  });

}));
