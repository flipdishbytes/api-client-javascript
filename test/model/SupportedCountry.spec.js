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
    instance = new FlipdishOpenApiV10.SupportedCountry();
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

  describe('SupportedCountry', function() {
    it('should create an instance of SupportedCountry', function() {
      // uncomment below and update the code to test SupportedCountry
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be.a(FlipdishOpenApiV10.SupportedCountry);
    });

    it('should have the property countryCode (base name: "CountryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property phoneCode (base name: "PhoneCode")', function() {
      // uncomment below and update the code to test the property phoneCode
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property languageCode (base name: "LanguageCode")', function() {
      // uncomment below and update the code to test the property languageCode
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property languageName (base name: "LanguageName")', function() {
      // uncomment below and update the code to test the property languageName
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property otpNumber (base name: "OtpNumber")', function() {
      // uncomment below and update the code to test the property otpNumber
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property supportNumber (base name: "SupportNumber")', function() {
      // uncomment below and update the code to test the property supportNumber
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property addressLayout (base name: "AddressLayout")', function() {
      // uncomment below and update the code to test the property addressLayout
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property postCodeType (base name: "PostCodeType")', function() {
      // uncomment below and update the code to test the property postCodeType
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

    it('should have the property supportRegion (base name: "SupportRegion")', function() {
      // uncomment below and update the code to test the property supportRegion
      //var instane = new FlipdishOpenApiV10.SupportedCountry();
      //expect(instance).to.be();
    });

  });

}));
