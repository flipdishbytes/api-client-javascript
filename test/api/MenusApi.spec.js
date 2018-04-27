/**
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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

  beforeEach(function() {
    instance = new Flipdish.MenusApi();
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

  describe('MenusApi', function() {
    describe('deleteMenuItemMetadata', function() {
      it('should call deleteMenuItemMetadata successfully', function(done) {
        //uncomment below and update the code to test deleteMenuItemMetadata
        //instance.deleteMenuItemMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMenuItemMetadata_0', function() {
      it('should call deleteMenuItemMetadata_0 successfully', function(done) {
        //uncomment below and update the code to test deleteMenuItemMetadata_0
        //instance.deleteMenuItemMetadata_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMenuSectionImage', function() {
      it('should call deleteMenuSectionImage successfully', function(done) {
        //uncomment below and update the code to test deleteMenuSectionImage
        //instance.deleteMenuSectionImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuById', function() {
      it('should call getMenuById successfully', function(done) {
        //uncomment below and update the code to test getMenuById
        //instance.getMenuById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItemMetadata', function() {
      it('should call getMenuItemMetadata successfully', function(done) {
        //uncomment below and update the code to test getMenuItemMetadata
        //instance.getMenuItemMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItemOptionSetItemMetadata', function() {
      it('should call getMenuItemOptionSetItemMetadata successfully', function(done) {
        //uncomment below and update the code to test getMenuItemOptionSetItemMetadata
        //instance.getMenuItemOptionSetItemMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setMenuItemMetadata', function() {
      it('should call setMenuItemMetadata successfully', function(done) {
        //uncomment below and update the code to test setMenuItemMetadata
        //instance.setMenuItemMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setMenuItemOptionSetItemMetadata', function() {
      it('should call setMenuItemOptionSetItemMetadata successfully', function(done) {
        //uncomment below and update the code to test setMenuItemOptionSetItemMetadata
        //instance.setMenuItemOptionSetItemMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMenu', function() {
      it('should call updateMenu successfully', function(done) {
        //uncomment below and update the code to test updateMenu
        //instance.updateMenu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadMenuSectionImage', function() {
      it('should call uploadMenuSectionImage successfully', function(done) {
        //uncomment below and update the code to test uploadMenuSectionImage
        //instance.uploadMenuSectionImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
