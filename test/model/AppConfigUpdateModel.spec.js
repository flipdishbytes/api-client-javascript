/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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

  describe('(package)', function() {
    describe('AppConfigUpdateModel', function() {
      beforeEach(function() {
        instance = new Flipdish.AppConfigUpdateModel();
      });

      it('should create an instance of AppConfigUpdateModel', function() {
        // TODO: update the code to test AppConfigUpdateModel
        expect(instance).to.be.a(Flipdish.AppConfigUpdateModel);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property HostName (base name: "HostName")', function() {
        // TODO: update the code to test the property HostName
        expect(instance).to.have.property('HostName');
        // expect(instance.HostName).to.be(expectedValueLiteral);
      });

      it('should have the property MainColor (base name: "MainColor")', function() {
        // TODO: update the code to test the property MainColor
        expect(instance).to.have.property('MainColor');
        // expect(instance.MainColor).to.be(expectedValueLiteral);
      });

      it('should have the property KioskPrimaryColour (base name: "KioskPrimaryColour")', function() {
        // TODO: update the code to test the property KioskPrimaryColour
        expect(instance).to.have.property('KioskPrimaryColour');
        // expect(instance.KioskPrimaryColour).to.be(expectedValueLiteral);
      });

      it('should have the property ApplicationCategory (base name: "ApplicationCategory")', function() {
        // TODO: update the code to test the property ApplicationCategory
        expect(instance).to.have.property('ApplicationCategory');
        // expect(instance.ApplicationCategory).to.be(expectedValueLiteral);
      });

      it('should have the property IsPanaceaEnabled (base name: "IsPanaceaEnabled")', function() {
        // TODO: update the code to test the property IsPanaceaEnabled
        expect(instance).to.have.property('IsPanaceaEnabled');
        // expect(instance.IsPanaceaEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property PanaceaVanityUrl (base name: "PanaceaVanityUrl")', function() {
        // TODO: update the code to test the property PanaceaVanityUrl
        expect(instance).to.have.property('PanaceaVanityUrl');
        // expect(instance.PanaceaVanityUrl).to.be(expectedValueLiteral);
      });

      it('should have the property CookieConsentPromptEnabled (base name: "CookieConsentPromptEnabled")', function() {
        // TODO: update the code to test the property CookieConsentPromptEnabled
        expect(instance).to.have.property('CookieConsentPromptEnabled');
        // expect(instance.CookieConsentPromptEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
