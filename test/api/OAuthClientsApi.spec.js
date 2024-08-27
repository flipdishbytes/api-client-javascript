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
    instance = new Flipdish.OAuthClientsApi();
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

  describe('OAuthClientsApi', function() {
    describe('addRedirectUri', function() {
      it('should call addRedirectUri successfully', function(done) {
        //uncomment below and update the code to test addRedirectUri
        //instance.addRedirectUri(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOAuthApp', function() {
      it('should call createOAuthApp successfully', function(done) {
        //uncomment below and update the code to test createOAuthApp
        //instance.createOAuthApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOAuthApp', function() {
      it('should call deleteOAuthApp successfully', function(done) {
        //uncomment below and update the code to test deleteOAuthApp
        //instance.deleteOAuthApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOAuthApps', function() {
      it('should call getOAuthApps successfully', function(done) {
        //uncomment below and update the code to test getOAuthApps
        //instance.getOAuthApps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOAuthClientByClientId', function() {
      it('should call getOAuthClientByClientId successfully', function(done) {
        //uncomment below and update the code to test getOAuthClientByClientId
        //instance.getOAuthClientByClientId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOAuthClientSecret', function() {
      it('should call getOAuthClientSecret successfully', function(done) {
        //uncomment below and update the code to test getOAuthClientSecret
        //instance.getOAuthClientSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOauthAccessToken', function() {
      it('should call getOauthAccessToken successfully', function(done) {
        //uncomment below and update the code to test getOauthAccessToken
        //instance.getOauthAccessToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRedirectUris', function() {
      it('should call getRedirectUris successfully', function(done) {
        //uncomment below and update the code to test getRedirectUris
        //instance.getRedirectUris(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oAuthClientsGetApplications', function() {
      it('should call oAuthClientsGetApplications successfully', function(done) {
        //uncomment below and update the code to test oAuthClientsGetApplications
        //instance.oAuthClientsGetApplications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeRedirectUri', function() {
      it('should call removeRedirectUri successfully', function(done) {
        //uncomment below and update the code to test removeRedirectUri
        //instance.removeRedirectUri(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOAuthApp', function() {
      it('should call updateOAuthApp successfully', function(done) {
        //uncomment below and update the code to test updateOAuthApp
        //instance.updateOAuthApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));