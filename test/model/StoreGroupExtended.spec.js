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
    describe('StoreGroupExtended', function() {
      beforeEach(function() {
        instance = new Flipdish.StoreGroupExtended();
      });

      it('should create an instance of StoreGroupExtended', function() {
        // TODO: update the code to test StoreGroupExtended
        expect(instance).to.be.a(Flipdish.StoreGroupExtended);
      });

      it('should have the property DeliveryMenuMessage (base name: "DeliveryMenuMessage")', function() {
        // TODO: update the code to test the property DeliveryMenuMessage
        expect(instance).to.have.property('DeliveryMenuMessage');
        // expect(instance.DeliveryMenuMessage).to.be(expectedValueLiteral);
      });

      it('should have the property PickupMenuMessage (base name: "PickupMenuMessage")', function() {
        // TODO: update the code to test the property PickupMenuMessage
        expect(instance).to.have.property('PickupMenuMessage');
        // expect(instance.PickupMenuMessage).to.be(expectedValueLiteral);
      });

      it('should have the property TotalStores (base name: "TotalStores")', function() {
        // TODO: update the code to test the property TotalStores
        expect(instance).to.have.property('TotalStores');
        // expect(instance.TotalStores).to.be(expectedValueLiteral);
      });

      it('should have the property GroupedCoordinates (base name: "GroupedCoordinates")', function() {
        // TODO: update the code to test the property GroupedCoordinates
        expect(instance).to.have.property('GroupedCoordinates');
        // expect(instance.GroupedCoordinates).to.be(expectedValueLiteral);
      });

      it('should have the property StoreHeaders (base name: "StoreHeaders")', function() {
        // TODO: update the code to test the property StoreHeaders
        expect(instance).to.have.property('StoreHeaders');
        // expect(instance.StoreHeaders).to.be(expectedValueLiteral);
      });

      it('should have the property StoreGroupId (base name: "StoreGroupId")', function() {
        // TODO: update the code to test the property StoreGroupId
        expect(instance).to.have.property('StoreGroupId');
        // expect(instance.StoreGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property GeneralRating (base name: "GeneralRating")', function() {
        // TODO: update the code to test the property GeneralRating
        expect(instance).to.have.property('GeneralRating');
        // expect(instance.GeneralRating).to.be(expectedValueLiteral);
      });

      it('should have the property GeneralRatingCount (base name: "GeneralRatingCount")', function() {
        // TODO: update the code to test the property GeneralRatingCount
        expect(instance).to.have.property('GeneralRatingCount');
        // expect(instance.GeneralRatingCount).to.be(expectedValueLiteral);
      });

      it('should have the property Name (base name: "Name")', function() {
        // TODO: update the code to test the property Name
        expect(instance).to.have.property('Name');
        // expect(instance.Name).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

    });
  });

}));
