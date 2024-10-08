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
    instance = new Flipdish.JobContact();
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

  describe('JobContact', function() {
    it('should create an instance of JobContact', function() {
      // uncomment below and update the code to test JobContact
      //var instane = new Flipdish.JobContact();
      //expect(instance).to.be.a(Flipdish.JobContact);
    });

    it('should have the property Firstname (base name: "Firstname")', function() {
      // uncomment below and update the code to test the property Firstname
      //var instance = new Flipdish.JobContact();
      //expect(instance).to.be();
    });

    it('should have the property Lastname (base name: "Lastname")', function() {
      // uncomment below and update the code to test the property Lastname
      //var instance = new Flipdish.JobContact();
      //expect(instance).to.be();
    });

    it('should have the property Phone (base name: "Phone")', function() {
      // uncomment below and update the code to test the property Phone
      //var instance = new Flipdish.JobContact();
      //expect(instance).to.be();
    });

    it('should have the property Email (base name: "Email")', function() {
      // uncomment below and update the code to test the property Email
      //var instance = new Flipdish.JobContact();
      //expect(instance).to.be();
    });

    it('should have the property Company (base name: "Company")', function() {
      // uncomment below and update the code to test the property Company
      //var instance = new Flipdish.JobContact();
      //expect(instance).to.be();
    });

    it('should have the property CompanyName (base name: "CompanyName")', function() {
      // uncomment below and update the code to test the property CompanyName
      //var instance = new Flipdish.JobContact();
      //expect(instance).to.be();
    });

  });

}));
