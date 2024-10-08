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
    instance = new Flipdish.OrdersApi();
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

  describe('OrdersApi', function() {
    describe('acceptOrder', function() {
      it('should call acceptOrder successfully', function(done) {
        //uncomment below and update the code to test acceptOrder
        //instance.acceptOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dispatchOrder', function() {
      it('should call dispatchOrder successfully', function(done) {
        //uncomment below and update the code to test dispatchOrder
        //instance.dispatchOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveryInformation', function() {
      it('should call getDeliveryInformation successfully', function(done) {
        //uncomment below and update the code to test getDeliveryInformation
        //instance.getDeliveryInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentState', function() {
      it('should call getFulfillmentState successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentState
        //instance.getFulfillmentState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentStatusWithDetailsAndActions', function() {
      it('should call getFulfillmentStatusWithDetailsAndActions successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentStatusWithDetailsAndActions
        //instance.getFulfillmentStatusWithDetailsAndActions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderById', function() {
      it('should call getOrderById successfully', function(done) {
        //uncomment below and update the code to test getOrderById
        //instance.getOrderById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrders', function() {
      it('should call getOrders successfully', function(done) {
        //uncomment below and update the code to test getOrders
        //instance.getOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrdersSummary', function() {
      it('should call getOrdersSummary successfully', function(done) {
        //uncomment below and update the code to test getOrdersSummary
        //instance.getOrdersSummary(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrdersSummaryNew', function() {
      it('should call getOrdersSummaryNew successfully', function(done) {
        //uncomment below and update the code to test getOrdersSummaryNew
        //instance.getOrdersSummaryNew(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReadyToProcess', function() {
      it('should call getReadyToProcess successfully', function(done) {
        //uncomment below and update the code to test getReadyToProcess
        //instance.getReadyToProcess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refundOrder', function() {
      it('should call refundOrder successfully', function(done) {
        //uncomment below and update the code to test refundOrder
        //instance.refundOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rejectOrder', function() {
      it('should call rejectOrder successfully', function(done) {
        //uncomment below and update the code to test rejectOrder
        //instance.rejectOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchFulfillmentStatuses', function() {
      it('should call searchFulfillmentStatuses successfully', function(done) {
        //uncomment below and update the code to test searchFulfillmentStatuses
        //instance.searchFulfillmentStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeliveryInformation', function() {
      it('should call updateDeliveryInformation successfully', function(done) {
        //uncomment below and update the code to test updateDeliveryInformation
        //instance.updateDeliveryInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFulfillmentState', function() {
      it('should call updateFulfillmentState successfully', function(done) {
        //uncomment below and update the code to test updateFulfillmentState
        //instance.updateFulfillmentState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
