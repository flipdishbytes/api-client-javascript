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
    instance = new Flipdish.StoreGroupsApi();
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

  describe('StoreGroupsApi', function() {
    describe('createStoreGroup', function() {
      it('should call createStoreGroup successfully', function(done) {
        //uncomment below and update the code to test createStoreGroup
        //instance.createStoreGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreGroup', function() {
      it('should call getStoreGroup successfully', function(done) {
        //uncomment below and update the code to test getStoreGroup
        //instance.getStoreGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreGroups', function() {
      it('should call getStoreGroups successfully', function(done) {
        //uncomment below and update the code to test getStoreGroups
        //instance.getStoreGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreGroupsExtended', function() {
      it('should call getStoreGroupsExtended successfully', function(done) {
        //uncomment below and update the code to test getStoreGroupsExtended
        //instance.getStoreGroupsExtended(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeStoreGroup', function() {
      it('should call removeStoreGroup successfully', function(done) {
        //uncomment below and update the code to test removeStoreGroup
        //instance.removeStoreGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setMenuMessagePerDeliveryType', function() {
      it('should call setMenuMessagePerDeliveryType successfully', function(done) {
        //uncomment below and update the code to test setMenuMessagePerDeliveryType
        //instance.setMenuMessagePerDeliveryType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStoreGroup', function() {
      it('should call updateStoreGroup successfully', function(done) {
        //uncomment below and update the code to test updateStoreGroup
        //instance.updateStoreGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
