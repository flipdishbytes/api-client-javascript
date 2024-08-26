/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    describe('OrderDeliveryInformationBase', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderDeliveryInformationBase();
      });

      it('should create an instance of OrderDeliveryInformationBase', function() {
        // TODO: update the code to test OrderDeliveryInformationBase
        expect(instance).to.be.a(Flipdish.OrderDeliveryInformationBase);
      });

      it('should have the property ExternalReferenceId (base name: "ExternalReferenceId")', function() {
        // TODO: update the code to test the property ExternalReferenceId
        expect(instance).to.have.property('ExternalReferenceId');
        // expect(instance.ExternalReferenceId).to.be(expectedValueLiteral);
      });

      it('should have the property TrackUrl (base name: "TrackUrl")', function() {
        // TODO: update the code to test the property TrackUrl
        expect(instance).to.have.property('TrackUrl');
        // expect(instance.TrackUrl).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryStatusNotes (base name: "DeliveryStatusNotes")', function() {
        // TODO: update the code to test the property DeliveryStatusNotes
        expect(instance).to.have.property('DeliveryStatusNotes');
        // expect(instance.DeliveryStatusNotes).to.be(expectedValueLiteral);
      });

      it('should have the property ErrorMessage (base name: "ErrorMessage")', function() {
        // TODO: update the code to test the property ErrorMessage
        expect(instance).to.have.property('ErrorMessage');
        // expect(instance.ErrorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property IntegrationCode (base name: "IntegrationCode")', function() {
        // TODO: update the code to test the property IntegrationCode
        expect(instance).to.have.property('IntegrationCode');
        // expect(instance.IntegrationCode).to.be(expectedValueLiteral);
      });

      it('should have the property IntegrationName (base name: "IntegrationName")', function() {
        // TODO: update the code to test the property IntegrationName
        expect(instance).to.have.property('IntegrationName');
        // expect(instance.IntegrationName).to.be(expectedValueLiteral);
      });

    });
  });

}));
