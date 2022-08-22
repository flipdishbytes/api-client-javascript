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
    describe('UpdateMobileAppsSubmissionStatus', function() {
      beforeEach(function() {
        instance = new Flipdish.UpdateMobileAppsSubmissionStatus();
      });

      it('should create an instance of UpdateMobileAppsSubmissionStatus', function() {
        // TODO: update the code to test UpdateMobileAppsSubmissionStatus
        expect(instance).to.be.a(Flipdish.UpdateMobileAppsSubmissionStatus);
      });

      it('should have the property MobileAppsSubmissionStatusId (base name: "MobileAppsSubmissionStatusId")', function() {
        // TODO: update the code to test the property MobileAppsSubmissionStatusId
        expect(instance).to.have.property('MobileAppsSubmissionStatusId');
        // expect(instance.MobileAppsSubmissionStatusId).to.be(expectedValueLiteral);
      });

      it('should have the property Type (base name: "Type")', function() {
        // TODO: update the code to test the property Type
        expect(instance).to.have.property('Type');
        // expect(instance.Type).to.be(expectedValueLiteral);
      });

      it('should have the property AppStatus (base name: "AppStatus")', function() {
        // TODO: update the code to test the property AppStatus
        expect(instance).to.have.property('AppStatus');
        // expect(instance.AppStatus).to.be(expectedValueLiteral);
      });

      it('should have the property UpdateStatus (base name: "UpdateStatus")', function() {
        // TODO: update the code to test the property UpdateStatus
        expect(instance).to.have.property('UpdateStatus');
        // expect(instance.UpdateStatus).to.be(expectedValueLiteral);
      });

      it('should have the property LastUpdateStatusTime (base name: "LastUpdateStatusTime")', function() {
        // TODO: update the code to test the property LastUpdateStatusTime
        expect(instance).to.have.property('LastUpdateStatusTime');
        // expect(instance.LastUpdateStatusTime).to.be(expectedValueLiteral);
      });

      it('should have the property Notes (base name: "Notes")', function() {
        // TODO: update the code to test the property Notes
        expect(instance).to.have.property('Notes');
        // expect(instance.Notes).to.be(expectedValueLiteral);
      });

    });
  });

}));
