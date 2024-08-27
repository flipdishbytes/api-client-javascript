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
    instance = new Flipdish.MenusNutritionInfoApi();
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

  describe('MenusNutritionInfoApi', function() {
    describe('addOrUpdateMenuItemNutritionInfo', function() {
      it('should call addOrUpdateMenuItemNutritionInfo successfully', function(done) {
        //uncomment below and update the code to test addOrUpdateMenuItemNutritionInfo
        //instance.addOrUpdateMenuItemNutritionInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrUpdateMenuItemOptionSetItemNutritionInfo', function() {
      it('should call addOrUpdateMenuItemOptionSetItemNutritionInfo successfully', function(done) {
        //uncomment below and update the code to test addOrUpdateMenuItemOptionSetItemNutritionInfo
        //instance.addOrUpdateMenuItemOptionSetItemNutritionInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrUpdateMenuNutritionInfoByMenuId', function() {
      it('should call addOrUpdateMenuNutritionInfoByMenuId successfully', function(done) {
        //uncomment below and update the code to test addOrUpdateMenuNutritionInfoByMenuId
        //instance.addOrUpdateMenuNutritionInfoByMenuId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMenuNutritionInfoByMenuId', function() {
      it('should call deleteMenuNutritionInfoByMenuId successfully', function(done) {
        //uncomment below and update the code to test deleteMenuNutritionInfoByMenuId
        //instance.deleteMenuNutritionInfoByMenuId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllergens', function() {
      it('should call getAllergens successfully', function(done) {
        //uncomment below and update the code to test getAllergens
        //instance.getAllergens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuNutritionInfoByMenuId', function() {
      it('should call getMenuNutritionInfoByMenuId successfully', function(done) {
        //uncomment below and update the code to test getMenuNutritionInfoByMenuId
        //instance.getMenuNutritionInfoByMenuId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));