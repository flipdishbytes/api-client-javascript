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
    describe('App', function() {
      beforeEach(function() {
        instance = new Flipdish.App();
      });

      it('should create an instance of App', function() {
        // TODO: update the code to test App
        expect(instance).to.be.a(Flipdish.App);
      });

      it('should have the property AppId (base name: "AppId")', function() {
        // TODO: update the code to test the property AppId
        expect(instance).to.have.property('AppId');
        // expect(instance.AppId).to.be(expectedValueLiteral);
      });

      it('should have the property HasIosApp (base name: "HasIosApp")', function() {
        // TODO: update the code to test the property HasIosApp
        expect(instance).to.have.property('HasIosApp');
        // expect(instance.HasIosApp).to.be(expectedValueLiteral);
      });

      it('should have the property HasAndroidApp (base name: "HasAndroidApp")', function() {
        // TODO: update the code to test the property HasAndroidApp
        expect(instance).to.have.property('HasAndroidApp');
        // expect(instance.HasAndroidApp).to.be(expectedValueLiteral);
      });

      it('should have the property CountryId (base name: "CountryId")', function() {
        // TODO: update the code to test the property CountryId
        expect(instance).to.have.property('CountryId');
        // expect(instance.CountryId).to.be(expectedValueLiteral);
      });

      it('should have the property LogoImageUrl (base name: "LogoImageUrl")', function() {
        // TODO: update the code to test the property LogoImageUrl
        expect(instance).to.have.property('LogoImageUrl');
        // expect(instance.LogoImageUrl).to.be(expectedValueLiteral);
      });

      it('should have the property Languages (base name: "Languages")', function() {
        // TODO: update the code to test the property Languages
        expect(instance).to.have.property('Languages');
        // expect(instance.Languages).to.be(expectedValueLiteral);
      });

      it('should have the property AvailableAppLanguages (base name: "AvailableAppLanguages")', function() {
        // TODO: update the code to test the property AvailableAppLanguages
        expect(instance).to.have.property('AvailableAppLanguages');
        // expect(instance.AvailableAppLanguages).to.be(expectedValueLiteral);
      });

      it('should have the property AppAccessLevel (base name: "AppAccessLevel")', function() {
        // TODO: update the code to test the property AppAccessLevel
        expect(instance).to.have.property('AppAccessLevel');
        // expect(instance.AppAccessLevel).to.be(expectedValueLiteral);
      });

      it('should have the property AppResourceSet (base name: "AppResourceSet")', function() {
        // TODO: update the code to test the property AppResourceSet
        expect(instance).to.have.property('AppResourceSet');
        // expect(instance.AppResourceSet).to.be(expectedValueLiteral);
      });

      it('should have the property Features (base name: "Features")', function() {
        // TODO: update the code to test the property Features
        expect(instance).to.have.property('Features');
        // expect(instance.Features).to.be(expectedValueLiteral);
      });

      it('should have the property MapCenter (base name: "MapCenter")', function() {
        // TODO: update the code to test the property MapCenter
        expect(instance).to.have.property('MapCenter');
        // expect(instance.MapCenter).to.be(expectedValueLiteral);
      });

      it('should have the property MapNorthEast (base name: "MapNorthEast")', function() {
        // TODO: update the code to test the property MapNorthEast
        expect(instance).to.have.property('MapNorthEast');
        // expect(instance.MapNorthEast).to.be(expectedValueLiteral);
      });

      it('should have the property MapSouthWest (base name: "MapSouthWest")', function() {
        // TODO: update the code to test the property MapSouthWest
        expect(instance).to.have.property('MapSouthWest');
        // expect(instance.MapSouthWest).to.be(expectedValueLiteral);
      });

      it('should have the property GoogleMapsApiKeyWeb (base name: "GoogleMapsApiKeyWeb")', function() {
        // TODO: update the code to test the property GoogleMapsApiKeyWeb
        expect(instance).to.have.property('GoogleMapsApiKeyWeb');
        // expect(instance.GoogleMapsApiKeyWeb).to.be(expectedValueLiteral);
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

      it('should have the property CookieConsentPromptEnabled (base name: "CookieConsentPromptEnabled")', function() {
        // TODO: update the code to test the property CookieConsentPromptEnabled
        expect(instance).to.have.property('CookieConsentPromptEnabled');
        // expect(instance.CookieConsentPromptEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
