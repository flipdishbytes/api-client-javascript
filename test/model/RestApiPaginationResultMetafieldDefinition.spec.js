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
    describe('RestApiPaginationResultMetafieldDefinition', function() {
      beforeEach(function() {
        instance = new Flipdish.RestApiPaginationResultMetafieldDefinition();
      });

      it('should create an instance of RestApiPaginationResultMetafieldDefinition', function() {
        // TODO: update the code to test RestApiPaginationResultMetafieldDefinition
        expect(instance).to.be.a(Flipdish.RestApiPaginationResultMetafieldDefinition);
      });

      it('should have the property Page (base name: "Page")', function() {
        // TODO: update the code to test the property Page
        expect(instance).to.have.property('Page');
        // expect(instance.Page).to.be(expectedValueLiteral);
      });

      it('should have the property Limit (base name: "Limit")', function() {
        // TODO: update the code to test the property Limit
        expect(instance).to.have.property('Limit');
        // expect(instance.Limit).to.be(expectedValueLiteral);
      });

      it('should have the property TotalRecordCount (base name: "TotalRecordCount")', function() {
        // TODO: update the code to test the property TotalRecordCount
        expect(instance).to.have.property('TotalRecordCount');
        // expect(instance.TotalRecordCount).to.be(expectedValueLiteral);
      });

      it('should have the property Data (base name: "Data")', function() {
        // TODO: update the code to test the property Data
        expect(instance).to.have.property('Data');
        // expect(instance.Data).to.be(expectedValueLiteral);
      });

    });
  });

}));
