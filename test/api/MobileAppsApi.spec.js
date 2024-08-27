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
    instance = new Flipdish.MobileAppsApi();
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

  describe('MobileAppsApi', function() {
    describe('getAppConfigSalesChannel', function() {
      it('should call getAppConfigSalesChannel successfully', function(done) {
        //uncomment below and update the code to test getAppConfigSalesChannel
        //instance.getAppConfigSalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStatistics', function() {
      it('should call getStatistics successfully', function(done) {
        //uncomment below and update the code to test getStatistics
        //instance.getStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubmissionDetails', function() {
      it('should call getSubmissionDetails successfully', function(done) {
        //uncomment below and update the code to test getSubmissionDetails
        //instance.getSubmissionDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubmissionStatus', function() {
      it('should call getSubmissionStatus successfully', function(done) {
        //uncomment below and update the code to test getSubmissionStatus
        //instance.getSubmissionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publish', function() {
      it('should call publish successfully', function(done) {
        //uncomment below and update the code to test publish
        //instance.publish(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resubmission', function() {
      it('should call resubmission successfully', function(done) {
        //uncomment below and update the code to test resubmission
        //instance.resubmission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submission', function() {
      it('should call submission successfully', function(done) {
        //uncomment below and update the code to test submission
        //instance.submission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unpublish', function() {
      it('should call unpublish successfully', function(done) {
        //uncomment below and update the code to test unpublish
        //instance.unpublish(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAppConfigSalesChannel', function() {
      it('should call updateAppConfigSalesChannel successfully', function(done) {
        //uncomment below and update the code to test updateAppConfigSalesChannel
        //instance.updateAppConfigSalesChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubmissionStatus', function() {
      it('should call updateSubmissionStatus successfully', function(done) {
        //uncomment below and update the code to test updateSubmissionStatus
        //instance.updateSubmissionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadImage', function() {
      it('should call uploadImage successfully', function(done) {
        //uncomment below and update the code to test uploadImage
        //instance.uploadImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));