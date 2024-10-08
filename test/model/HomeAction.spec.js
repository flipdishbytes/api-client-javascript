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
    instance = new Flipdish.HomeAction();
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

  describe('HomeAction', function() {
    it('should create an instance of HomeAction', function() {
      // uncomment below and update the code to test HomeAction
      //var instane = new Flipdish.HomeAction();
      //expect(instance).to.be.a(Flipdish.HomeAction);
    });

    it('should have the property HomeActionId (base name: "HomeActionId")', function() {
      // uncomment below and update the code to test the property HomeActionId
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property HomeActionType (base name: "HomeActionType")', function() {
      // uncomment below and update the code to test the property HomeActionType
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property Order (base name: "Order")', function() {
      // uncomment below and update the code to test the property Order
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property TitleKey (base name: "TitleKey")', function() {
      // uncomment below and update the code to test the property TitleKey
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property ActionKey (base name: "ActionKey")', function() {
      // uncomment below and update the code to test the property ActionKey
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property DescriptionKey (base name: "DescriptionKey")', function() {
      // uncomment below and update the code to test the property DescriptionKey
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property Action (base name: "Action")', function() {
      // uncomment below and update the code to test the property Action
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property Dismissible (base name: "Dismissible")', function() {
      // uncomment below and update the code to test the property Dismissible
      //var instance = new Flipdish.HomeAction();
      //expect(instance).to.be();
    });

  });

}));
