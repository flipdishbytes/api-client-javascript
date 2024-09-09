/**
 * Flipdish Open API v1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flipdish.TeammatesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TeammatesApi', function() {
    describe('createTeammate', function() {
      it('should call createTeammate successfully', function(done) {
        //uncomment below and update the code to test createTeammate
        //instance.createTeammate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTeammate', function() {
      it('should call deleteTeammate successfully', function(done) {
        //uncomment below and update the code to test deleteTeammate
        //instance.deleteTeammate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeammateByAppIdAndTeammateId', function() {
      it('should call getTeammateByAppIdAndTeammateId successfully', function(done) {
        //uncomment below and update the code to test getTeammateByAppIdAndTeammateId
        //instance.getTeammateByAppIdAndTeammateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeammatesByAppId', function() {
      it('should call getTeammatesByAppId successfully', function(done) {
        //uncomment below and update the code to test getTeammatesByAppId
        //instance.getTeammatesByAppId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grantAccess', function() {
      it('should call grantAccess successfully', function(done) {
        //uncomment below and update the code to test grantAccess
        //instance.grantAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redeemInvitation', function() {
      it('should call redeemInvitation successfully', function(done) {
        //uncomment below and update the code to test redeemInvitation
        //instance.redeemInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teammatesAcceptInvitation', function() {
      it('should call teammatesAcceptInvitation successfully', function(done) {
        //uncomment below and update the code to test teammatesAcceptInvitation
        //instance.teammatesAcceptInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTeammate', function() {
      it('should call updateTeammate successfully', function(done) {
        //uncomment below and update the code to test updateTeammate
        //instance.updateTeammate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
