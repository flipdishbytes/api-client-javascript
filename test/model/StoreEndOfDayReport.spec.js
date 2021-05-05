/**
 * Flipdish Open API v1.0
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    factory(root.expect, root.FlipdishOpenApiV10);
  }
}(this, function(expect, FlipdishOpenApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FlipdishOpenApiV10.StoreEndOfDayReport();
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

  describe('StoreEndOfDayReport', function() {
    it('should create an instance of StoreEndOfDayReport', function() {
      // uncomment below and update the code to test StoreEndOfDayReport
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be.a(FlipdishOpenApiV10.StoreEndOfDayReport);
    });

    it('should have the property storeId (base name: "StoreId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property storeName (base name: "StoreName")', function() {
      // uncomment below and update the code to test the property storeName
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "Currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property orderCount (base name: "OrderCount")', function() {
      // uncomment below and update the code to test the property orderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property orderValue (base name: "OrderValue")', function() {
      // uncomment below and update the code to test the property orderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property orderValueExcludingDeliveryFees (base name: "OrderValueExcludingDeliveryFees")', function() {
      // uncomment below and update the code to test the property orderValueExcludingDeliveryFees
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property collectionOrderCount (base name: "CollectionOrderCount")', function() {
      // uncomment below and update the code to test the property collectionOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property collectionCashOrderCount (base name: "CollectionCashOrderCount")', function() {
      // uncomment below and update the code to test the property collectionCashOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property collectionPaidOnlineOrderCount (base name: "CollectionPaidOnlineOrderCount")', function() {
      // uncomment below and update the code to test the property collectionPaidOnlineOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property collectionOrderValue (base name: "CollectionOrderValue")', function() {
      // uncomment below and update the code to test the property collectionOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property collectionCashOrderValue (base name: "CollectionCashOrderValue")', function() {
      // uncomment below and update the code to test the property collectionCashOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property collectionPaidOnlineOrderValue (base name: "CollectionPaidOnlineOrderValue")', function() {
      // uncomment below and update the code to test the property collectionPaidOnlineOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property deliveryOrderCount (base name: "DeliveryOrderCount")', function() {
      // uncomment below and update the code to test the property deliveryOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property deliveryCashOrderCount (base name: "DeliveryCashOrderCount")', function() {
      // uncomment below and update the code to test the property deliveryCashOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property deliveryPaidOnlineOrderCount (base name: "DeliveryPaidOnlineOrderCount")', function() {
      // uncomment below and update the code to test the property deliveryPaidOnlineOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property deliveryOrderValue (base name: "DeliveryOrderValue")', function() {
      // uncomment below and update the code to test the property deliveryOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property deliveryCashOrderValue (base name: "DeliveryCashOrderValue")', function() {
      // uncomment below and update the code to test the property deliveryCashOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property deliveryPaidOnlineOrderValue (base name: "DeliveryPaidOnlineOrderValue")', function() {
      // uncomment below and update the code to test the property deliveryPaidOnlineOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property paidOnlineOrderCount (base name: "PaidOnlineOrderCount")', function() {
      // uncomment below and update the code to test the property paidOnlineOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property cashOrderCount (base name: "CashOrderCount")', function() {
      // uncomment below and update the code to test the property cashOrderCount
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property paidOnlineOrderValue (base name: "PaidOnlineOrderValue")', function() {
      // uncomment below and update the code to test the property paidOnlineOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property cashOrderValue (base name: "CashOrderValue")', function() {
      // uncomment below and update the code to test the property cashOrderValue
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property paidOnlineOrderValueExcludingDeliveryFees (base name: "PaidOnlineOrderValueExcludingDeliveryFees")', function() {
      // uncomment below and update the code to test the property paidOnlineOrderValueExcludingDeliveryFees
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property cashOrderValueExcludingDeliveryFees (base name: "CashOrderValueExcludingDeliveryFees")', function() {
      // uncomment below and update the code to test the property cashOrderValueExcludingDeliveryFees
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "StartTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "EndTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new FlipdishOpenApiV10.StoreEndOfDayReport();
      //expect(instance).to.be();
    });

  });

}));
