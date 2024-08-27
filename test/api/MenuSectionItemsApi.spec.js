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
    instance = new Flipdish.MenuSectionItemsApi();
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

  describe('MenuSectionItemsApi', function() {
    describe('cloneMenuSectionItem', function() {
      it('should call cloneMenuSectionItem successfully', function(done) {
        //uncomment below and update the code to test cloneMenuSectionItem
        //instance.cloneMenuSectionItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMenuSectionItem', function() {
      it('should call createMenuSectionItem successfully', function(done) {
        //uncomment below and update the code to test createMenuSectionItem
        //instance.createMenuSectionItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMenuSectionItemFromCatalogItems', function() {
      it('should call createMenuSectionItemFromCatalogItems successfully', function(done) {
        //uncomment below and update the code to test createMenuSectionItemFromCatalogItems
        //instance.createMenuSectionItemFromCatalogItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMenuSectionItem', function() {
      it('should call deleteMenuSectionItem successfully', function(done) {
        //uncomment below and update the code to test deleteMenuSectionItem
        //instance.deleteMenuSectionItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMenuSectionItemImage', function() {
      it('should call deleteMenuSectionItemImage successfully', function(done) {
        //uncomment below and update the code to test deleteMenuSectionItemImage
        //instance.deleteMenuSectionItemImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItemById', function() {
      it('should call getMenuItemById successfully', function(done) {
        //uncomment below and update the code to test getMenuItemById
        //instance.getMenuItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItems', function() {
      it('should call getMenuItems successfully', function(done) {
        //uncomment below and update the code to test getMenuItems
        //instance.getMenuItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveMenuItem', function() {
      it('should call moveMenuItem successfully', function(done) {
        //uncomment below and update the code to test moveMenuItem
        //instance.moveMenuItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setSectionItemTax', function() {
      it('should call setSectionItemTax successfully', function(done) {
        //uncomment below and update the code to test setSectionItemTax
        //instance.setSectionItemTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMenuSectionItem', function() {
      it('should call updateMenuSectionItem successfully', function(done) {
        //uncomment below and update the code to test updateMenuSectionItem
        //instance.updateMenuSectionItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadMenuSectionItemImage', function() {
      it('should call uploadMenuSectionItemImage successfully', function(done) {
        //uncomment below and update the code to test uploadMenuSectionItemImage
        //instance.uploadMenuSectionItemImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));