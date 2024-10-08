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
    instance = new Flipdish.Contact();
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

  describe('Contact', function() {
    it('should create an instance of Contact', function() {
      // uncomment below and update the code to test Contact
      //var instane = new Flipdish.Contact();
      //expect(instance).to.be.a(Flipdish.Contact);
    });

    it('should have the property Email (base name: "Email")', function() {
      // uncomment below and update the code to test the property Email
      //var instance = new Flipdish.Contact();
      //expect(instance).to.be();
    });

    it('should have the property PhoneNumber (base name: "PhoneNumber")', function() {
      // uncomment below and update the code to test the property PhoneNumber
      //var instance = new Flipdish.Contact();
      //expect(instance).to.be();
    });

    it('should have the property FirstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property FirstName
      //var instance = new Flipdish.Contact();
      //expect(instance).to.be();
    });

    it('should have the property LastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property LastName
      //var instance = new Flipdish.Contact();
      //expect(instance).to.be();
    });

  });

}));
