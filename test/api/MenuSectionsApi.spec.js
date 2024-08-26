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
    instance = new Flipdish.MenuSectionsApi();
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

  describe('MenuSectionsApi', function() {
    describe('cloneMenuSection', function() {
      it('should call cloneMenuSection successfully', function(done) {
        //uncomment below and update the code to test cloneMenuSection
        //instance.cloneMenuSection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMenuAvailabilityForDay', function() {
      it('should call createMenuAvailabilityForDay successfully', function(done) {
        //uncomment below and update the code to test createMenuAvailabilityForDay
        //instance.createMenuAvailabilityForDay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMenuSection', function() {
      it('should call createMenuSection successfully', function(done) {
        //uncomment below and update the code to test createMenuSection
        //instance.createMenuSection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMenuSectionAvailability', function() {
      it('should call createMenuSectionAvailability successfully', function(done) {
        //uncomment below and update the code to test createMenuSectionAvailability
        //instance.createMenuSectionAvailability(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMenuSection', function() {
      it('should call deleteMenuSection successfully', function(done) {
        //uncomment below and update the code to test deleteMenuSection
        //instance.deleteMenuSection(function(error) {
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
    describe('getMenuSectionById', function() {
      it('should call getMenuSectionById successfully', function(done) {
        //uncomment below and update the code to test getMenuSectionById
        //instance.getMenuSectionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuSections', function() {
      it('should call getMenuSections successfully', function(done) {
        //uncomment below and update the code to test getMenuSections
        //instance.getMenuSections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('menuSectionsSetItemDisplayOrders', function() {
      it('should call menuSectionsSetItemDisplayOrders successfully', function(done) {
        //uncomment below and update the code to test menuSectionsSetItemDisplayOrders
        //instance.menuSectionsSetItemDisplayOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMenuSection', function() {
      it('should call updateMenuSection successfully', function(done) {
        //uncomment below and update the code to test updateMenuSection
        //instance.updateMenuSection(function(error) {
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
