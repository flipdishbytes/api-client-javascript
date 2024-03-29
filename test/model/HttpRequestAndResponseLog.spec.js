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
    describe('HttpRequestAndResponseLog', function() {
      beforeEach(function() {
        instance = new Flipdish.HttpRequestAndResponseLog();
      });

      it('should create an instance of HttpRequestAndResponseLog', function() {
        // TODO: update the code to test HttpRequestAndResponseLog
        expect(instance).to.be.a(Flipdish.HttpRequestAndResponseLog);
      });

      it('should have the property Guid (base name: "Guid")', function() {
        // TODO: update the code to test the property Guid
        expect(instance).to.have.property('Guid');
        // expect(instance.Guid).to.be(expectedValueLiteral);
      });

      it('should have the property Verb (base name: "Verb")', function() {
        // TODO: update the code to test the property Verb
        expect(instance).to.have.property('Verb');
        // expect(instance.Verb).to.be(expectedValueLiteral);
      });

      it('should have the property RequestUri (base name: "RequestUri")', function() {
        // TODO: update the code to test the property RequestUri
        expect(instance).to.have.property('RequestUri');
        // expect(instance.RequestUri).to.be(expectedValueLiteral);
      });

      it('should have the property StatusCode (base name: "StatusCode")', function() {
        // TODO: update the code to test the property StatusCode
        expect(instance).to.have.property('StatusCode');
        // expect(instance.StatusCode).to.be(expectedValueLiteral);
      });

      it('should have the property ReasonPhrase (base name: "ReasonPhrase")', function() {
        // TODO: update the code to test the property ReasonPhrase
        expect(instance).to.have.property('ReasonPhrase');
        // expect(instance.ReasonPhrase).to.be(expectedValueLiteral);
      });

      it('should have the property CallDurationInMilliseconds (base name: "CallDurationInMilliseconds")', function() {
        // TODO: update the code to test the property CallDurationInMilliseconds
        expect(instance).to.have.property('CallDurationInMilliseconds');
        // expect(instance.CallDurationInMilliseconds).to.be(expectedValueLiteral);
      });

      it('should have the property UserId (base name: "UserId")', function() {
        // TODO: update the code to test the property UserId
        expect(instance).to.have.property('UserId');
        // expect(instance.UserId).to.be(expectedValueLiteral);
      });

      it('should have the property IpAddress (base name: "IpAddress")', function() {
        // TODO: update the code to test the property IpAddress
        expect(instance).to.have.property('IpAddress');
        // expect(instance.IpAddress).to.be(expectedValueLiteral);
      });

      it('should have the property CreatedDateTime (base name: "CreatedDateTime")', function() {
        // TODO: update the code to test the property CreatedDateTime
        expect(instance).to.have.property('CreatedDateTime');
        // expect(instance.CreatedDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property RequestHeaders (base name: "RequestHeaders")', function() {
        // TODO: update the code to test the property RequestHeaders
        expect(instance).to.have.property('RequestHeaders');
        // expect(instance.RequestHeaders).to.be(expectedValueLiteral);
      });

      it('should have the property RequestBody (base name: "RequestBody")', function() {
        // TODO: update the code to test the property RequestBody
        expect(instance).to.have.property('RequestBody');
        // expect(instance.RequestBody).to.be(expectedValueLiteral);
      });

      it('should have the property RequestLength (base name: "RequestLength")', function() {
        // TODO: update the code to test the property RequestLength
        expect(instance).to.have.property('RequestLength');
        // expect(instance.RequestLength).to.be(expectedValueLiteral);
      });

      it('should have the property ResponseHeaders (base name: "ResponseHeaders")', function() {
        // TODO: update the code to test the property ResponseHeaders
        expect(instance).to.have.property('ResponseHeaders');
        // expect(instance.ResponseHeaders).to.be(expectedValueLiteral);
      });

      it('should have the property ResponseBody (base name: "ResponseBody")', function() {
        // TODO: update the code to test the property ResponseBody
        expect(instance).to.have.property('ResponseBody');
        // expect(instance.ResponseBody).to.be(expectedValueLiteral);
      });

      it('should have the property ResponseLength (base name: "ResponseLength")', function() {
        // TODO: update the code to test the property ResponseLength
        expect(instance).to.have.property('ResponseLength');
        // expect(instance.ResponseLength).to.be(expectedValueLiteral);
      });

    });
  });

}));
