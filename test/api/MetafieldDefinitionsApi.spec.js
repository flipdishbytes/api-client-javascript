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
    instance = new Flipdish.MetafieldDefinitionsApi();
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

  describe('MetafieldDefinitionsApi', function() {
    describe('createMetafieldDefinition', function() {
      it('should call createMetafieldDefinition successfully', function(done) {
        //uncomment below and update the code to test createMetafieldDefinition
        //instance.createMetafieldDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetafieldDefinitionByKey', function() {
      it('should call getMetafieldDefinitionByKey successfully', function(done) {
        //uncomment below and update the code to test getMetafieldDefinitionByKey
        //instance.getMetafieldDefinitionByKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetafieldDefinitions', function() {
      it('should call getMetafieldDefinitions successfully', function(done) {
        //uncomment below and update the code to test getMetafieldDefinitions
        //instance.getMetafieldDefinitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOwnerEntityConfigurations', function() {
      it('should call getOwnerEntityConfigurations successfully', function(done) {
        //uncomment below and update the code to test getOwnerEntityConfigurations
        //instance.getOwnerEntityConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOwnerEntityRecommendations', function() {
      it('should call getOwnerEntityRecommendations successfully', function(done) {
        //uncomment below and update the code to test getOwnerEntityRecommendations
        //instance.getOwnerEntityRecommendations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetafieldDefinition', function() {
      it('should call updateMetafieldDefinition successfully', function(done) {
        //uncomment below and update the code to test updateMetafieldDefinition
        //instance.updateMetafieldDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
