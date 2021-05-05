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
    instance = new FlipdishOpenApiV10.HomeAction();
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

  describe('HomeAction', function() {
    it('should create an instance of HomeAction', function() {
      // uncomment below and update the code to test HomeAction
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be.a(FlipdishOpenApiV10.HomeAction);
    });

    it('should have the property homeActionId (base name: "HomeActionId")', function() {
      // uncomment below and update the code to test the property homeActionId
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property homeActionType (base name: "HomeActionType")', function() {
      // uncomment below and update the code to test the property homeActionType
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "Order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property titleKey (base name: "TitleKey")', function() {
      // uncomment below and update the code to test the property titleKey
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property actionKey (base name: "ActionKey")', function() {
      // uncomment below and update the code to test the property actionKey
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property descriptionKey (base name: "DescriptionKey")', function() {
      // uncomment below and update the code to test the property descriptionKey
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "Action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

    it('should have the property dismissible (base name: "Dismissible")', function() {
      // uncomment below and update the code to test the property dismissible
      //var instane = new FlipdishOpenApiV10.HomeAction();
      //expect(instance).to.be();
    });

  });

}));
