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
    instance = new Flipdish.Menu();
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

  describe('Menu', function() {
    it('should create an instance of Menu', function() {
      // uncomment below and update the code to test Menu
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be.a(Flipdish.Menu);
    });

    it('should have the property menuId (base name: "MenuId")', function() {
      // uncomment below and update the code to test the property menuId
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

    it('should have the property modifiedTime (base name: "ModifiedTime")', function() {
      // uncomment below and update the code to test the property modifiedTime
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

    it('should have the property versionNumber (base name: "VersionNumber")', function() {
      // uncomment below and update the code to test the property versionNumber
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "ImageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

    it('should have the property menuSections (base name: "MenuSections")', function() {
      // uncomment below and update the code to test the property menuSections
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

    it('should have the property displaySectionLinks (base name: "DisplaySectionLinks")', function() {
      // uncomment below and update the code to test the property displaySectionLinks
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

    it('should have the property menuSectionBehaviour (base name: "MenuSectionBehaviour")', function() {
      // uncomment below and update the code to test the property menuSectionBehaviour
      //var instane = new Flipdish.Menu();
      //expect(instance).to.be();
    });

  });

}));
