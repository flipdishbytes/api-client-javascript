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
    instance = new Flipdish.RestaurantVouchersPayGreenApi();
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

  describe('RestaurantVouchersPayGreenApi', function() {
    describe('createPayGreenConfiguration', function() {
      it('should call createPayGreenConfiguration successfully', function(done) {
        //uncomment below and update the code to test createPayGreenConfiguration
        //instance.createPayGreenConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePayGreenConfiguration', function() {
      it('should call deletePayGreenConfiguration successfully', function(done) {
        //uncomment below and update the code to test deletePayGreenConfiguration
        //instance.deletePayGreenConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElegibleStores', function() {
      it('should call getElegibleStores successfully', function(done) {
        //uncomment below and update the code to test getElegibleStores
        //instance.getElegibleStores(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPayGreenConfigurations', function() {
      it('should call getPayGreenConfigurations successfully', function(done) {
        //uncomment below and update the code to test getPayGreenConfigurations
        //instance.getPayGreenConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreAvailablePayGreenConfigurations', function() {
      it('should call getStoreAvailablePayGreenConfigurations successfully', function(done) {
        //uncomment below and update the code to test getStoreAvailablePayGreenConfigurations
        //instance.getStoreAvailablePayGreenConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStorePayGreenConfiguration', function() {
      it('should call getStorePayGreenConfiguration successfully', function(done) {
        //uncomment below and update the code to test getStorePayGreenConfiguration
        //instance.getStorePayGreenConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPayGreenConfigurations', function() {
      it('should call listPayGreenConfigurations successfully', function(done) {
        //uncomment below and update the code to test listPayGreenConfigurations
        //instance.listPayGreenConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePayGreenConfiguration', function() {
      it('should call updatePayGreenConfiguration successfully', function(done) {
        //uncomment below and update the code to test updatePayGreenConfiguration
        //instance.updatePayGreenConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStorePayGreenConfiguration', function() {
      it('should call updateStorePayGreenConfiguration successfully', function(done) {
        //uncomment below and update the code to test updateStorePayGreenConfiguration
        //instance.updateStorePayGreenConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));