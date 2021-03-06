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
    instance = new Flipdish.WebhooksApi();
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

  describe('WebhooksApi', function() {
    describe('craeteWebhookSubscription', function() {
      it('should call craeteWebhookSubscription successfully', function(done) {
        //uncomment below and update the code to test craeteWebhookSubscription
        //instance.craeteWebhookSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWebhookSubscriptionEventNames', function() {
      it('should call createWebhookSubscriptionEventNames successfully', function(done) {
        //uncomment below and update the code to test createWebhookSubscriptionEventNames
        //instance.createWebhookSubscriptionEventNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhookSubscription', function() {
      it('should call deleteWebhookSubscription successfully', function(done) {
        //uncomment below and update the code to test deleteWebhookSubscription
        //instance.deleteWebhookSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhookSubscriptionEventName', function() {
      it('should call deleteWebhookSubscriptionEventName successfully', function(done) {
        //uncomment below and update the code to test deleteWebhookSubscriptionEventName
        //instance.deleteWebhookSubscriptionEventName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookEventNames', function() {
      it('should call getWebhookEventNames successfully', function(done) {
        //uncomment below and update the code to test getWebhookEventNames
        //instance.getWebhookEventNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookEventNamesBySubscriptionId', function() {
      it('should call getWebhookEventNamesBySubscriptionId successfully', function(done) {
        //uncomment below and update the code to test getWebhookEventNamesBySubscriptionId
        //instance.getWebhookEventNamesBySubscriptionId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookLogs', function() {
      it('should call getWebhookLogs successfully', function(done) {
        //uncomment below and update the code to test getWebhookLogs
        //instance.getWebhookLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookSubscriptions', function() {
      it('should call getWebhookSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getWebhookSubscriptions
        //instance.getWebhookSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhookSubscription', function() {
      it('should call updateWebhookSubscription successfully', function(done) {
        //uncomment below and update the code to test updateWebhookSubscription
        //instance.updateWebhookSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
