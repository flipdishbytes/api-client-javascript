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
    describe('StoreListItem', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreListItem();
      });

      it('should create an instance of StoreListItem', function() {
        // TODO: update the code to test StoreListItem
        expect(instance).to.be.a(Flipdish.StoreListItem);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property StoreName (base name: "StoreName")', function() {
        // TODO: update the code to test the property StoreName
        expect(instance).to.have.property('StoreName');
        // expect(instance.StoreName).to.be(expectedValueLiteral);
      });

      it('should have the property StoreGroupId (base name: "StoreGroupId")', function() {
        // TODO: update the code to test the property StoreGroupId
        expect(instance).to.have.property('StoreGroupId');
        // expect(instance.StoreGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property StoreGroupName (base name: "StoreGroupName")', function() {
        // TODO: update the code to test the property StoreGroupName
        expect(instance).to.have.property('StoreGroupName');
        // expect(instance.StoreGroupName).to.be(expectedValueLiteral);
      });

      it('should have the property HasLoyaltyCampaign (base name: "HasLoyaltyCampaign")', function() {
        // TODO: update the code to test the property HasLoyaltyCampaign
        expect(instance).to.have.property('HasLoyaltyCampaign');
        // expect(instance.HasLoyaltyCampaign).to.be(expectedValueLiteral);
      });

      it('should have the property HasRetentionCampaign (base name: "HasRetentionCampaign")', function() {
        // TODO: update the code to test the property HasRetentionCampaign
        expect(instance).to.have.property('HasRetentionCampaign');
        // expect(instance.HasRetentionCampaign).to.be(expectedValueLiteral);
      });

      it('should have the property IsPublished (base name: "IsPublished")', function() {
        // TODO: update the code to test the property IsPublished
        expect(instance).to.have.property('IsPublished');
        // expect(instance.IsPublished).to.be(expectedValueLiteral);
      });

    });
  });

}));
