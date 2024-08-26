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
    instance = new Flipdish.StripeAccountLinkRequest();
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

  describe('StripeAccountLinkRequest', function() {
    it('should create an instance of StripeAccountLinkRequest', function() {
      // uncomment below and update the code to test StripeAccountLinkRequest
      //var instane = new Flipdish.StripeAccountLinkRequest();
      //expect(instance).to.be.a(Flipdish.StripeAccountLinkRequest);
    });

    it('should have the property StripeId (base name: "StripeId")', function() {
      // uncomment below and update the code to test the property StripeId
      //var instance = new Flipdish.StripeAccountLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property ReturnUrl (base name: "ReturnUrl")', function() {
      // uncomment below and update the code to test the property ReturnUrl
      //var instance = new Flipdish.StripeAccountLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property Collect (base name: "Collect")', function() {
      // uncomment below and update the code to test the property Collect
      //var instance = new Flipdish.StripeAccountLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property Type (base name: "Type")', function() {
      // uncomment below and update the code to test the property Type
      //var instance = new Flipdish.StripeAccountLinkRequest();
      //expect(instance).to.be();
    });

  });

}));
