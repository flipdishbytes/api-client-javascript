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
    describe('ExecuteConfigurationActionResult', function() {
      beforeEach(function() {
        instance = new Flipdish.ExecuteConfigurationActionResult();
      });

      it('should create an instance of ExecuteConfigurationActionResult', function() {
        // TODO: update the code to test ExecuteConfigurationActionResult
        expect(instance).to.be.a(Flipdish.ExecuteConfigurationActionResult);
      });

      it('should have the property ErrorMessage (base name: "ErrorMessage")', function() {
        // TODO: update the code to test the property ErrorMessage
        expect(instance).to.have.property('ErrorMessage');
        // expect(instance.ErrorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property InfoMessage (base name: "InfoMessage")', function() {
        // TODO: update the code to test the property InfoMessage
        expect(instance).to.have.property('InfoMessage');
        // expect(instance.InfoMessage).to.be(expectedValueLiteral);
      });

      it('should have the property RedirectUrl (base name: "RedirectUrl")', function() {
        // TODO: update the code to test the property RedirectUrl
        expect(instance).to.have.property('RedirectUrl');
        // expect(instance.RedirectUrl).to.be(expectedValueLiteral);
      });

      it('should have the property RedirectTarget (base name: "RedirectTarget")', function() {
        // TODO: update the code to test the property RedirectTarget
        expect(instance).to.have.property('RedirectTarget');
        // expect(instance.RedirectTarget).to.be(expectedValueLiteral);
      });

    });
  });

}));
