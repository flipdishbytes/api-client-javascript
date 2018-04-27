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
    instance = new Flipdish.MenuOptionSetItemsApi();
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

  describe('MenuOptionSetItemsApi', function() {
    describe('addMenuItemOptionSetItem', function() {
      it('should call addMenuItemOptionSetItem successfully', function(done) {
        //uncomment below and update the code to test addMenuItemOptionSetItem
        //instance.addMenuItemOptionSetItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOptionSetItemImage', function() {
      it('should call deleteOptionSetItemImage successfully', function(done) {
        //uncomment below and update the code to test deleteOptionSetItemImage
        //instance.deleteOptionSetItemImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItemOptionSetItemById', function() {
      it('should call getMenuItemOptionSetItemById successfully', function(done) {
        //uncomment below and update the code to test getMenuItemOptionSetItemById
        //instance.getMenuItemOptionSetItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItemOptionSetItems', function() {
      it('should call getMenuItemOptionSetItems successfully', function(done) {
        //uncomment below and update the code to test getMenuItemOptionSetItems
        //instance.getMenuItemOptionSetItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeMenuItemOptionSetItem', function() {
      it('should call removeMenuItemOptionSetItem successfully', function(done) {
        //uncomment below and update the code to test removeMenuItemOptionSetItem
        //instance.removeMenuItemOptionSetItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMenuItemOptionSetItem', function() {
      it('should call updateMenuItemOptionSetItem successfully', function(done) {
        //uncomment below and update the code to test updateMenuItemOptionSetItem
        //instance.updateMenuItemOptionSetItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadOptionSetItemImage', function() {
      it('should call uploadOptionSetItemImage successfully', function(done) {
        //uncomment below and update the code to test uploadOptionSetItemImage
        //instance.uploadOptionSetItemImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
