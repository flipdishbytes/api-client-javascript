/**
 * Flipdish Open API v1.0
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    factory(root.expect, root.FlipdishOpenApiV10);
  }
}(this, function(expect, FlipdishOpenApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FlipdishOpenApiV10.IndexPage();
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

  describe('IndexPage', function() {
    it('should create an instance of IndexPage', function() {
      // uncomment below and update the code to test IndexPage
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be.a(FlipdishOpenApiV10.IndexPage);
    });

    it('should have the property testimonials (base name: "Testimonials")', function() {
      // uncomment below and update the code to test the property testimonials
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "Images")', function() {
      // uncomment below and update the code to test the property images
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionEnabled (base name: "AboutSectionEnabled")', function() {
      // uncomment below and update the code to test the property aboutSectionEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionTitle (base name: "AboutSectionTitle")', function() {
      // uncomment below and update the code to test the property aboutSectionTitle
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionSubtitle (base name: "AboutSectionSubtitle")', function() {
      // uncomment below and update the code to test the property aboutSectionSubtitle
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionLeftTitle (base name: "AboutSectionLeftTitle")', function() {
      // uncomment below and update the code to test the property aboutSectionLeftTitle
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionLeftBody (base name: "AboutSectionLeftBody")', function() {
      // uncomment below and update the code to test the property aboutSectionLeftBody
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionRightTitle (base name: "AboutSectionRightTitle")', function() {
      // uncomment below and update the code to test the property aboutSectionRightTitle
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property aboutSectionRightBody (base name: "AboutSectionRightBody")', function() {
      // uncomment below and update the code to test the property aboutSectionRightBody
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property openingHoursEnabled (base name: "OpeningHoursEnabled")', function() {
      // uncomment below and update the code to test the property openingHoursEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property menuPreviewEnabled (base name: "MenuPreviewEnabled")', function() {
      // uncomment below and update the code to test the property menuPreviewEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property galleryEnabled (base name: "GalleryEnabled")', function() {
      // uncomment below and update the code to test the property galleryEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property testimonialsEnabled (base name: "TestimonialsEnabled")', function() {
      // uncomment below and update the code to test the property testimonialsEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property contactFormEnabled (base name: "ContactFormEnabled")', function() {
      // uncomment below and update the code to test the property contactFormEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property contactFormEmail (base name: "ContactFormEmail")', function() {
      // uncomment below and update the code to test the property contactFormEmail
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

    it('should have the property mapEnabled (base name: "MapEnabled")', function() {
      // uncomment below and update the code to test the property mapEnabled
      //var instane = new FlipdishOpenApiV10.IndexPage();
      //expect(instance).to.be();
    });

  });

}));
