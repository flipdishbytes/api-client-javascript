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
    describe('GoogleLocation', function() {
      beforeEach(function() {
        instance = new Flipdish.GoogleLocation();
      });

      it('should create an instance of GoogleLocation', function() {
        // TODO: update the code to test GoogleLocation
        expect(instance).to.be.a(Flipdish.GoogleLocation);
      });

      it('should have the property Lat (base name: "Lat")', function() {
        // TODO: update the code to test the property Lat
        expect(instance).to.have.property('Lat');
        // expect(instance.Lat).to.be(expectedValueLiteral);
      });

      it('should have the property Lng (base name: "Lng")', function() {
        // TODO: update the code to test the property Lng
        expect(instance).to.have.property('Lng');
        // expect(instance.Lng).to.be(expectedValueLiteral);
      });

    });
  });

}));
