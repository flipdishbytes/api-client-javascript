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
    describe('FirebaseApp', function() {
      beforeEach(function() {
        instance = new Flipdish.FirebaseApp();
      });

      it('should create an instance of FirebaseApp', function() {
        // TODO: update the code to test FirebaseApp
        expect(instance).to.be.a(Flipdish.FirebaseApp);
      });

      it('should have the property WhitelabelId (base name: "WhitelabelId")', function() {
        // TODO: update the code to test the property WhitelabelId
        expect(instance).to.have.property('WhitelabelId');
        // expect(instance.WhitelabelId).to.be(expectedValueLiteral);
      });

      it('should have the property PackageId (base name: "PackageId")', function() {
        // TODO: update the code to test the property PackageId
        expect(instance).to.have.property('PackageId');
        // expect(instance.PackageId).to.be(expectedValueLiteral);
      });

      it('should have the property FirebaseAppId (base name: "FirebaseAppId")', function() {
        // TODO: update the code to test the property FirebaseAppId
        expect(instance).to.have.property('FirebaseAppId');
        // expect(instance.FirebaseAppId).to.be(expectedValueLiteral);
      });

      it('should have the property FirebaseProjectId (base name: "FirebaseProjectId")', function() {
        // TODO: update the code to test the property FirebaseProjectId
        expect(instance).to.have.property('FirebaseProjectId');
        // expect(instance.FirebaseProjectId).to.be(expectedValueLiteral);
      });

    });
  });

}));
