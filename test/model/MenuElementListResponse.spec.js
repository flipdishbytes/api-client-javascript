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
    describe('MenuElementListResponse', function() {
      beforeEach(function() {
        instance = new Flipdish.MenuElementListResponse();
      });

      it('should create an instance of MenuElementListResponse', function() {
        // TODO: update the code to test MenuElementListResponse
        expect(instance).to.be.a(Flipdish.MenuElementListResponse);
      });

      it('should have the property MenuName (base name: "MenuName")', function() {
        // TODO: update the code to test the property MenuName
        expect(instance).to.have.property('MenuName');
        // expect(instance.MenuName).to.be(expectedValueLiteral);
      });

      it('should have the property MenuElementName (base name: "MenuElementName")', function() {
        // TODO: update the code to test the property MenuElementName
        expect(instance).to.have.property('MenuElementName');
        // expect(instance.MenuElementName).to.be(expectedValueLiteral);
      });

      it('should have the property InstanceCount (base name: "InstanceCount")', function() {
        // TODO: update the code to test the property InstanceCount
        expect(instance).to.have.property('InstanceCount');
        // expect(instance.InstanceCount).to.be(expectedValueLiteral);
      });

      it('should have the property IsAvailable (base name: "IsAvailable")', function() {
        // TODO: update the code to test the property IsAvailable
        expect(instance).to.have.property('IsAvailable');
        // expect(instance.IsAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property Items (base name: "Items")', function() {
        // TODO: update the code to test the property Items
        expect(instance).to.have.property('Items');
        // expect(instance.Items).to.be(expectedValueLiteral);
      });

    });
  });

}));
