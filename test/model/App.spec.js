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
    instance = new FlipdishOpenApiV10.App();
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

  describe('App', function() {
    it('should create an instance of App', function() {
      // uncomment below and update the code to test App
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be.a(FlipdishOpenApiV10.App);
    });

    it('should have the property appId (base name: "AppId")', function() {
      // uncomment below and update the code to test the property appId
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property hasIosApp (base name: "HasIosApp")', function() {
      // uncomment below and update the code to test the property hasIosApp
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property hasAndroidApp (base name: "HasAndroidApp")', function() {
      // uncomment below and update the code to test the property hasAndroidApp
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property countryId (base name: "CountryId")', function() {
      // uncomment below and update the code to test the property countryId
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property logoImageUrl (base name: "LogoImageUrl")', function() {
      // uncomment below and update the code to test the property logoImageUrl
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property languages (base name: "Languages")', function() {
      // uncomment below and update the code to test the property languages
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property availableAppLanguages (base name: "AvailableAppLanguages")', function() {
      // uncomment below and update the code to test the property availableAppLanguages
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property appAccessLevel (base name: "AppAccessLevel")', function() {
      // uncomment below and update the code to test the property appAccessLevel
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property appResourceSet (base name: "AppResourceSet")', function() {
      // uncomment below and update the code to test the property appResourceSet
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "Features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property mapCenter (base name: "MapCenter")', function() {
      // uncomment below and update the code to test the property mapCenter
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property mapNorthEast (base name: "MapNorthEast")', function() {
      // uncomment below and update the code to test the property mapNorthEast
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property mapSouthWest (base name: "MapSouthWest")', function() {
      // uncomment below and update the code to test the property mapSouthWest
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property hostName (base name: "HostName")', function() {
      // uncomment below and update the code to test the property hostName
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property mainColor (base name: "MainColor")', function() {
      // uncomment below and update the code to test the property mainColor
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property applicationCategory (base name: "ApplicationCategory")', function() {
      // uncomment below and update the code to test the property applicationCategory
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property isPanaceaEnabled (base name: "IsPanaceaEnabled")', function() {
      // uncomment below and update the code to test the property isPanaceaEnabled
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

    it('should have the property cookieConsentPromptEnabled (base name: "CookieConsentPromptEnabled")', function() {
      // uncomment below and update the code to test the property cookieConsentPromptEnabled
      //var instane = new FlipdishOpenApiV10.App();
      //expect(instance).to.be();
    });

  });

}));
