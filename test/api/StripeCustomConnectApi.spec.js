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
    instance = new Flipdish.StripeCustomConnectApi();
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

  describe('StripeCustomConnectApi', function() {
    describe('createBankAccountAndConnectedAccount', function() {
      it('should call createBankAccountAndConnectedAccount successfully', function(done) {
        //uncomment below and update the code to test createBankAccountAndConnectedAccount
        //instance.createBankAccountAndConnectedAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStripeConnectedAccount', function() {
      it('should call createStripeConnectedAccount successfully', function(done) {
        //uncomment below and update the code to test createStripeConnectedAccount
        //instance.createStripeConnectedAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStripeConnectedAccountLink', function() {
      it('should call createStripeConnectedAccountLink successfully', function(done) {
        //uncomment below and update the code to test createStripeConnectedAccountLink
        //instance.createStripeConnectedAccountLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomConnect', function() {
      it('should call getCustomConnect successfully', function(done) {
        //uncomment below and update the code to test getCustomConnect
        //instance.getCustomConnect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVerificationStatus', function() {
      it('should call getVerificationStatus successfully', function(done) {
        //uncomment below and update the code to test getVerificationStatus
        //instance.getVerificationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setBankAccountBusinessType', function() {
      it('should call setBankAccountBusinessType successfully', function(done) {
        //uncomment below and update the code to test setBankAccountBusinessType
        //instance.setBankAccountBusinessType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stripeCustomConnectRefresh', function() {
      it('should call stripeCustomConnectRefresh successfully', function(done) {
        //uncomment below and update the code to test stripeCustomConnectRefresh
        //instance.stripeCustomConnectRefresh(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBankAccountDetails', function() {
      it('should call updateBankAccountDetails successfully', function(done) {
        //uncomment below and update the code to test updateBankAccountDetails
        //instance.updateBankAccountDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePayoutSchedule', function() {
      it('should call updatePayoutSchedule successfully', function(done) {
        //uncomment below and update the code to test updatePayoutSchedule
        //instance.updatePayoutSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
