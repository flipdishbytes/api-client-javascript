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
    describe('MobileAppsSubmission', function() {
      beforeEach(function() {
        instance = new Flipdish.MobileAppsSubmission();
      });

      it('should create an instance of MobileAppsSubmission', function() {
        // TODO: update the code to test MobileAppsSubmission
        expect(instance).to.be.a(Flipdish.MobileAppsSubmission);
      });

      it('should have the property SubmissionId (base name: "SubmissionId")', function() {
        // TODO: update the code to test the property SubmissionId
        expect(instance).to.have.property('SubmissionId');
        // expect(instance.SubmissionId).to.be(expectedValueLiteral);
      });

      it('should have the property AppName (base name: "AppName")', function() {
        // TODO: update the code to test the property AppName
        expect(instance).to.have.property('AppName');
        // expect(instance.AppName).to.be(expectedValueLiteral);
      });

      it('should have the property AppDescription (base name: "AppDescription")', function() {
        // TODO: update the code to test the property AppDescription
        expect(instance).to.have.property('AppDescription');
        // expect(instance.AppDescription).to.be(expectedValueLiteral);
      });

      it('should have the property AppShortDescription (base name: "AppShortDescription")', function() {
        // TODO: update the code to test the property AppShortDescription
        expect(instance).to.have.property('AppShortDescription');
        // expect(instance.AppShortDescription).to.be(expectedValueLiteral);
      });

      it('should have the property Keywords (base name: "Keywords")', function() {
        // TODO: update the code to test the property Keywords
        expect(instance).to.have.property('Keywords');
        // expect(instance.Keywords).to.be(expectedValueLiteral);
      });

      it('should have the property AutoPublish (base name: "AutoPublish")', function() {
        // TODO: update the code to test the property AutoPublish
        expect(instance).to.have.property('AutoPublish');
        // expect(instance.AutoPublish).to.be(expectedValueLiteral);
      });

    });
  });

}));
