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
    instance = new Flipdish.TelephonyConfig();
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

  describe('TelephonyConfig', function() {
    it('should create an instance of TelephonyConfig', function() {
      // uncomment below and update the code to test TelephonyConfig
      //var instane = new Flipdish.TelephonyConfig();
      //expect(instance).to.be.a(Flipdish.TelephonyConfig);
    });

    it('should have the property TelephonyConfigId (base name: "TelephonyConfigId")', function() {
      // uncomment below and update the code to test the property TelephonyConfigId
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property ApmEnabled (base name: "ApmEnabled")', function() {
      // uncomment below and update the code to test the property ApmEnabled
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property Type (base name: "Type")', function() {
      // uncomment below and update the code to test the property Type
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property ConsentEnabled (base name: "ConsentEnabled")', function() {
      // uncomment below and update the code to test the property ConsentEnabled
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property PhoneNumber (base name: "PhoneNumber")', function() {
      // uncomment below and update the code to test the property PhoneNumber
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property SendAppLinkSms (base name: "SendAppLinkSms")', function() {
      // uncomment below and update the code to test the property SendAppLinkSms
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property UseCustomAppLinkSmsMessage (base name: "UseCustomAppLinkSmsMessage")', function() {
      // uncomment below and update the code to test the property UseCustomAppLinkSmsMessage
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property UseCustomVoiceMessage (base name: "UseCustomVoiceMessage")', function() {
      // uncomment below and update the code to test the property UseCustomVoiceMessage
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property AppLinkSmsMessage (base name: "AppLinkSmsMessage")', function() {
      // uncomment below and update the code to test the property AppLinkSmsMessage
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

    it('should have the property ResendApmMessageAfterDays (base name: "ResendApmMessageAfterDays")', function() {
      // uncomment below and update the code to test the property ResendApmMessageAfterDays
      //var instance = new Flipdish.TelephonyConfig();
      //expect(instance).to.be();
    });

  });

}));
