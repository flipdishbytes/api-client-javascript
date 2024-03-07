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
    describe('PayoutReport3OverviewHeader', function() {
      beforeEach(function() {
        instance = new Flipdish.PayoutReport3OverviewHeader();
      });

      it('should create an instance of PayoutReport3OverviewHeader', function() {
        // TODO: update the code to test PayoutReport3OverviewHeader
        expect(instance).to.be.a(Flipdish.PayoutReport3OverviewHeader);
      });

      it('should have the property PayoutId (base name: "PayoutId")', function() {
        // TODO: update the code to test the property PayoutId
        expect(instance).to.have.property('PayoutId');
        // expect(instance.PayoutId).to.be(expectedValueLiteral);
      });

      it('should have the property BankAccountId (base name: "BankAccountId")', function() {
        // TODO: update the code to test the property BankAccountId
        expect(instance).to.have.property('BankAccountId');
        // expect(instance.BankAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property AccountName (base name: "AccountName")', function() {
        // TODO: update the code to test the property AccountName
        expect(instance).to.have.property('AccountName');
        // expect(instance.AccountName).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutStatus (base name: "PayoutStatus")', function() {
        // TODO: update the code to test the property PayoutStatus
        expect(instance).to.have.property('PayoutStatus');
        // expect(instance.PayoutStatus).to.be(expectedValueLiteral);
      });

      it('should have the property CreatedDate (base name: "CreatedDate")', function() {
        // TODO: update the code to test the property CreatedDate
        expect(instance).to.have.property('CreatedDate');
        // expect(instance.CreatedDate).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodStartTime (base name: "PeriodStartTime")', function() {
        // TODO: update the code to test the property PeriodStartTime
        expect(instance).to.have.property('PeriodStartTime');
        // expect(instance.PeriodStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property PeriodEndTime (base name: "PeriodEndTime")', function() {
        // TODO: update the code to test the property PeriodEndTime
        expect(instance).to.have.property('PeriodEndTime');
        // expect(instance.PeriodEndTime).to.be(expectedValueLiteral);
      });

      it('should have the property DestinationBank (base name: "DestinationBank")', function() {
        // TODO: update the code to test the property DestinationBank
        expect(instance).to.have.property('DestinationBank');
        // expect(instance.DestinationBank).to.be(expectedValueLiteral);
      });

      it('should have the property DestinationAccount (base name: "DestinationAccount")', function() {
        // TODO: update the code to test the property DestinationAccount
        expect(instance).to.have.property('DestinationAccount');
        // expect(instance.DestinationAccount).to.be(expectedValueLiteral);
      });

    });
  });

}));
