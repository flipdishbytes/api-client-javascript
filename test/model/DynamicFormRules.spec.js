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
    instance = new Flipdish.DynamicFormRules();
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

  describe('DynamicFormRules', function() {
    it('should create an instance of DynamicFormRules', function() {
      // uncomment below and update the code to test DynamicFormRules
      //var instane = new Flipdish.DynamicFormRules();
      //expect(instance).to.be.a(Flipdish.DynamicFormRules);
    });

    it('should have the property MaxLength (base name: "MaxLength")', function() {
      // uncomment below and update the code to test the property MaxLength
      //var instance = new Flipdish.DynamicFormRules();
      //expect(instance).to.be();
    });

    it('should have the property MinLength (base name: "MinLength")', function() {
      // uncomment below and update the code to test the property MinLength
      //var instance = new Flipdish.DynamicFormRules();
      //expect(instance).to.be();
    });

    it('should have the property Required (base name: "Required")', function() {
      // uncomment below and update the code to test the property Required
      //var instance = new Flipdish.DynamicFormRules();
      //expect(instance).to.be();
    });

    it('should have the property Pattern (base name: "Pattern")', function() {
      // uncomment below and update the code to test the property Pattern
      //var instance = new Flipdish.DynamicFormRules();
      //expect(instance).to.be();
    });

    it('should have the property Predefined (base name: "Predefined")', function() {
      // uncomment below and update the code to test the property Predefined
      //var instance = new Flipdish.DynamicFormRules();
      //expect(instance).to.be();
    });

  });

}));
