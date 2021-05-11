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
    describe('HomeAction', function() {
      beforeEach(function() {
        instance = new Flipdish.HomeAction();
      });

      it('should create an instance of HomeAction', function() {
        // TODO: update the code to test HomeAction
        expect(instance).to.be.a(Flipdish.HomeAction);
      });

      it('should have the property HomeActionId (base name: "HomeActionId")', function() {
        // TODO: update the code to test the property HomeActionId
        expect(instance).to.have.property('HomeActionId');
        // expect(instance.HomeActionId).to.be(expectedValueLiteral);
      });

      it('should have the property HomeActionType (base name: "HomeActionType")', function() {
        // TODO: update the code to test the property HomeActionType
        expect(instance).to.have.property('HomeActionType');
        // expect(instance.HomeActionType).to.be(expectedValueLiteral);
      });

      it('should have the property Order (base name: "Order")', function() {
        // TODO: update the code to test the property Order
        expect(instance).to.have.property('Order');
        // expect(instance.Order).to.be(expectedValueLiteral);
      });

      it('should have the property TitleKey (base name: "TitleKey")', function() {
        // TODO: update the code to test the property TitleKey
        expect(instance).to.have.property('TitleKey');
        // expect(instance.TitleKey).to.be(expectedValueLiteral);
      });

      it('should have the property ActionKey (base name: "ActionKey")', function() {
        // TODO: update the code to test the property ActionKey
        expect(instance).to.have.property('ActionKey');
        // expect(instance.ActionKey).to.be(expectedValueLiteral);
      });

      it('should have the property DescriptionKey (base name: "DescriptionKey")', function() {
        // TODO: update the code to test the property DescriptionKey
        expect(instance).to.have.property('DescriptionKey');
        // expect(instance.DescriptionKey).to.be(expectedValueLiteral);
      });

      it('should have the property Action (base name: "Action")', function() {
        // TODO: update the code to test the property Action
        expect(instance).to.have.property('Action');
        // expect(instance.Action).to.be(expectedValueLiteral);
      });

      it('should have the property Dismissible (base name: "Dismissible")', function() {
        // TODO: update the code to test the property Dismissible
        expect(instance).to.have.property('Dismissible');
        // expect(instance.Dismissible).to.be(expectedValueLiteral);
      });

    });
  });

}));
