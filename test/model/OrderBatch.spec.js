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
    describe('OrderBatch', function() {
      beforeEach(function() {
        instance = new Flipdish.OrderBatch();
      });

      it('should create an instance of OrderBatch', function() {
        // TODO: update the code to test OrderBatch
        expect(instance).to.be.a(Flipdish.OrderBatch);
      });

      it('should have the property OrderIds (base name: "OrderIds")', function() {
        // TODO: update the code to test the property OrderIds
        expect(instance).to.have.property('OrderIds');
        // expect(instance.OrderIds).to.be(expectedValueLiteral);
      });

      it('should have the property Id (base name: "Id")', function() {
        // TODO: update the code to test the property Id
        expect(instance).to.have.property('Id');
        // expect(instance.Id).to.be(expectedValueLiteral);
      });

      it('should have the property DisplayCode (base name: "DisplayCode")', function() {
        // TODO: update the code to test the property DisplayCode
        expect(instance).to.have.property('DisplayCode');
        // expect(instance.DisplayCode).to.be(expectedValueLiteral);
      });

      it('should have the property CreateTime (base name: "CreateTime")', function() {
        // TODO: update the code to test the property CreateTime
        expect(instance).to.have.property('CreateTime');
        // expect(instance.CreateTime).to.be(expectedValueLiteral);
      });

      it('should have the property IsPublished (base name: "IsPublished")', function() {
        // TODO: update the code to test the property IsPublished
        expect(instance).to.have.property('IsPublished');
        // expect(instance.IsPublished).to.be(expectedValueLiteral);
      });

    });
  });

}));
