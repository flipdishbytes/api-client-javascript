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
    describe('DnsRecordInformation', function() {
      beforeEach(function() {
        instance = new Flipdish.DnsRecordInformation();
      });

      it('should create an instance of DnsRecordInformation', function() {
        // TODO: update the code to test DnsRecordInformation
        expect(instance).to.be.a(Flipdish.DnsRecordInformation);
      });

      it('should have the property IsCNameReady (base name: "IsCNameReady")', function() {
        // TODO: update the code to test the property IsCNameReady
        expect(instance).to.have.property('IsCNameReady');
        // expect(instance.IsCNameReady).to.be(expectedValueLiteral);
      });

      it('should have the property IsAReady (base name: "IsAReady")', function() {
        // TODO: update the code to test the property IsAReady
        expect(instance).to.have.property('IsAReady');
        // expect(instance.IsAReady).to.be(expectedValueLiteral);
      });

      it('should have the property IsApiCNameReady (base name: "IsApiCNameReady")', function() {
        // TODO: update the code to test the property IsApiCNameReady
        expect(instance).to.have.property('IsApiCNameReady');
        // expect(instance.IsApiCNameReady).to.be(expectedValueLiteral);
      });

    });
  });

}));
