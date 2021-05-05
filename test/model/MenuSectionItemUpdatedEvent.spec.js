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
    instance = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
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

  describe('MenuSectionItemUpdatedEvent', function() {
    it('should create an instance of MenuSectionItemUpdatedEvent', function() {
      // uncomment below and update the code to test MenuSectionItemUpdatedEvent
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be.a(FlipdishOpenApiV10.MenuSectionItemUpdatedEvent);
    });

    it('should have the property menuId (base name: "MenuId")', function() {
      // uncomment below and update the code to test the property menuId
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "User")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property menuSectionItem (base name: "MenuSectionItem")', function() {
      // uncomment below and update the code to test the property menuSectionItem
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property eventName (base name: "EventName")', function() {
      // uncomment below and update the code to test the property eventName
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property flipdishEventId (base name: "FlipdishEventId")', function() {
      // uncomment below and update the code to test the property flipdishEventId
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property createTime (base name: "CreateTime")', function() {
      // uncomment below and update the code to test the property createTime
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "Position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "AppId")', function() {
      // uncomment below and update the code to test the property appId
      //var instane = new FlipdishOpenApiV10.MenuSectionItemUpdatedEvent();
      //expect(instance).to.be();
    });

  });

}));
