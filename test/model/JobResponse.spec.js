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
    describe('JobResponse', function() {
      beforeEach(function() {
        instance = new Flipdish.JobResponse();
      });

      it('should create an instance of JobResponse', function() {
        // TODO: update the code to test JobResponse
        expect(instance).to.be.a(Flipdish.JobResponse);
      });

      it('should have the property Id (base name: "Id")', function() {
        // TODO: update the code to test the property Id
        expect(instance).to.have.property('Id');
        // expect(instance.Id).to.be(expectedValueLiteral);
      });

      it('should have the property CreatedAt (base name: "CreatedAt")', function() {
        // TODO: update the code to test the property CreatedAt
        expect(instance).to.have.property('CreatedAt');
        // expect(instance.CreatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property PackageType (base name: "PackageType")', function() {
        // TODO: update the code to test the property PackageType
        expect(instance).to.have.property('PackageType');
        // expect(instance.PackageType).to.be(expectedValueLiteral);
      });

      it('should have the property TransportType (base name: "TransportType")', function() {
        // TODO: update the code to test the property TransportType
        expect(instance).to.have.property('TransportType');
        // expect(instance.TransportType).to.be(expectedValueLiteral);
      });

      it('should have the property AssignmentCode (base name: "AssignmentCode")', function() {
        // TODO: update the code to test the property AssignmentCode
        expect(instance).to.have.property('AssignmentCode');
        // expect(instance.AssignmentCode).to.be(expectedValueLiteral);
      });

      it('should have the property PickupAt (base name: "PickupAt")', function() {
        // TODO: update the code to test the property PickupAt
        expect(instance).to.have.property('PickupAt');
        // expect(instance.PickupAt).to.be(expectedValueLiteral);
      });

      it('should have the property DropoffAt (base name: "DropoffAt")', function() {
        // TODO: update the code to test the property DropoffAt
        expect(instance).to.have.property('DropoffAt');
        // expect(instance.DropoffAt).to.be(expectedValueLiteral);
      });

      it('should have the property Comment (base name: "Comment")', function() {
        // TODO: update the code to test the property Comment
        expect(instance).to.have.property('Comment');
        // expect(instance.Comment).to.be(expectedValueLiteral);
      });

      it('should have the property Distance (base name: "Distance")', function() {
        // TODO: update the code to test the property Distance
        expect(instance).to.have.property('Distance');
        // expect(instance.Distance).to.be(expectedValueLiteral);
      });

      it('should have the property Duration (base name: "Duration")', function() {
        // TODO: update the code to test the property Duration
        expect(instance).to.have.property('Duration');
        // expect(instance.Duration).to.be(expectedValueLiteral);
      });

      it('should have the property Deliveries (base name: "Deliveries")', function() {
        // TODO: update the code to test the property Deliveries
        expect(instance).to.have.property('Deliveries');
        // expect(instance.Deliveries).to.be(expectedValueLiteral);
      });

      it('should have the property Pricing (base name: "Pricing")', function() {
        // TODO: update the code to test the property Pricing
        expect(instance).to.have.property('Pricing');
        // expect(instance.Pricing).to.be(expectedValueLiteral);
      });

      it('should have the property Driver (base name: "Driver")', function() {
        // TODO: update the code to test the property Driver
        expect(instance).to.have.property('Driver');
        // expect(instance.Driver).to.be(expectedValueLiteral);
      });

    });
  });

}));
