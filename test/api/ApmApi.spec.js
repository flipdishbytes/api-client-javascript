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
    instance = new Flipdish.ApmApi();
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

  describe('ApmApi', function() {
    describe('getApmStatus', function() {
      it('should call getApmStatus successfully', function(done) {
        //uncomment below and update the code to test getApmStatus
        //instance.getApmStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBasicStatistics', function() {
      it('should call getBasicStatistics successfully', function(done) {
        //uncomment below and update the code to test getBasicStatistics
        //instance.getBasicStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCalendarWeekStatistics', function() {
      it('should call getCalendarWeekStatistics successfully', function(done) {
        //uncomment below and update the code to test getCalendarWeekStatistics
        //instance.getCalendarWeekStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCallsStatistics', function() {
      it('should call getCallsStatistics successfully', function(done) {
        //uncomment below and update the code to test getCallsStatistics
        //instance.getCallsStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderStatistics', function() {
      it('should call getOrderStatistics successfully', function(done) {
        //uncomment below and update the code to test getOrderStatistics
        //instance.getOrderStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaginatedCallList', function() {
      it('should call getPaginatedCallList successfully', function(done) {
        //uncomment below and update the code to test getPaginatedCallList
        //instance.getPaginatedCallList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
