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
    instance = new Flipdish.ChannelsApi();
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

  describe('ChannelsApi', function() {
    describe('assignAppIdToSalesChannel', function() {
      it('should call assignAppIdToSalesChannel successfully', function(done) {
        //uncomment below and update the code to test assignAppIdToSalesChannel
        //instance.assignAppIdToSalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignStoreToChannel', function() {
      it('should call assignStoreToChannel successfully', function(done) {
        //uncomment below and update the code to test assignStoreToChannel
        //instance.assignStoreToChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachStoreToSalesChannel', function() {
      it('should call attachStoreToSalesChannel successfully', function(done) {
        //uncomment below and update the code to test attachStoreToSalesChannel
        //instance.attachStoreToSalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachAllStoresFromSalesChannel', function() {
      it('should call detachAllStoresFromSalesChannel successfully', function(done) {
        //uncomment below and update the code to test detachAllStoresFromSalesChannel
        //instance.detachAllStoresFromSalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachStoreFromSalesChannel', function() {
      it('should call detachStoreFromSalesChannel successfully', function(done) {
        //uncomment below and update the code to test detachStoreFromSalesChannel
        //instance.detachStoreFromSalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssignedChannels', function() {
      it('should call getAssignedChannels successfully', function(done) {
        //uncomment below and update the code to test getAssignedChannels
        //instance.getAssignedChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAvailableChannels', function() {
      it('should call getAvailableChannels successfully', function(done) {
        //uncomment below and update the code to test getAvailableChannels
        //instance.getAvailableChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannel', function() {
      it('should call getChannel successfully', function(done) {
        //uncomment below and update the code to test getChannel
        //instance.getChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannels', function() {
      it('should call getChannels successfully', function(done) {
        //uncomment below and update the code to test getChannels
        //instance.getChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoresAssignedToChannel', function() {
      it('should call getStoresAssignedToChannel successfully', function(done) {
        //uncomment below and update the code to test getStoresAssignedToChannel
        //instance.getStoresAssignedToChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoresBySalesChannel', function() {
      it('should call getStoresBySalesChannel successfully', function(done) {
        //uncomment below and update the code to test getStoresBySalesChannel
        //instance.getStoresBySalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unassignStoreFromChannel', function() {
      it('should call unassignStoreFromChannel successfully', function(done) {
        //uncomment below and update the code to test unassignStoreFromChannel
        //instance.unassignStoreFromChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
