/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    instance = new Flipdish.AddressApi();
  });

  describe('(package)', function() {
    describe('AddressApi', function() {
      describe('formByApp', function() {
        it('should call formByApp successfully', function(done) {
          // TODO: uncomment, update parameter values for formByApp call and complete the assertions
          /*
          var appId = "appId_example";
          var opts = {};
          opts.language = "language_example";

          instance.formByApp(appId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAddressFormResponse);
            expect(data.Data).to.be.a(Flipdish.AddressFormResponse);
                  {
                let dataCtr = data.Data.FormData;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.DynamicFormField);
                  expect(data.Identifier).to.be.a('string');
                  expect(data.Identifier).to.be("");
                  expect(data.Label).to.be.a('string');
                  expect(data.Label).to.be("");
                  expect(data.Placeholder).to.be.a('string');
                  expect(data.Placeholder).to.be("");
                  expect(data.Rules).to.be.a(Flipdish.DynamicFormRules);
                        expect(data.Rules.MaxLength).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.MaxLength.Value).to.be.a(Object);
                      expect(data.Rules.MaxLength.Value).to.be();
                      expect(data.Rules.MaxLength.Message).to.be.a('string');
                      expect(data.Rules.MaxLength.Message).to.be("");
                      expect(data.Rules.MaxLength.Scopes).to.be.a('string');
                      expect(data.Rules.MaxLength.Scopes).to.be("");
                    expect(data.Rules.MinLength).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.MinLength.Value).to.be.a(Object);
                      expect(data.Rules.MinLength.Value).to.be();
                      expect(data.Rules.MinLength.Message).to.be.a('string');
                      expect(data.Rules.MinLength.Message).to.be("");
                      expect(data.Rules.MinLength.Scopes).to.be.a('string');
                      expect(data.Rules.MinLength.Scopes).to.be("");
                    expect(data.Rules.Required).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.Required.Value).to.be.a(Object);
                      expect(data.Rules.Required.Value).to.be();
                      expect(data.Rules.Required.Message).to.be.a('string');
                      expect(data.Rules.Required.Message).to.be("");
                      expect(data.Rules.Required.Scopes).to.be.a('string');
                      expect(data.Rules.Required.Scopes).to.be("");
                    expect(data.Rules.Pattern).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.Pattern.Value).to.be.a(Object);
                      expect(data.Rules.Pattern.Value).to.be();
                      expect(data.Rules.Pattern.Message).to.be.a('string');
                      expect(data.Rules.Pattern.Message).to.be("");
                      expect(data.Rules.Pattern.Scopes).to.be.a('string');
                      expect(data.Rules.Pattern.Scopes).to.be("");
                    {
                      let dataCtr = data.Rules.Predefined;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Flipdish.DynamicFormFieldOption);
                        expect(data.Display).to.be.a('string');
                        expect(data.Display).to.be("");
                        expect(data.Value).to.be.a('string');
                        expect(data.Value).to.be("");
        
                              }
                    }
                  {
                    let dataCtr = data.Mapping;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  {
                    let dataCtr = data.Modifiers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.Value).to.be.a(Object);
                  expect(data.Value).to.be();
                  expect(data.Scopes).to.be.a('string');
                  expect(data.Scopes).to.be("");
  
                        }
              }
              expect(data.Data.CountryCode).to.be.a('string');
              expect(data.Data.CountryCode).to.be("");
              expect(data.Data.Language).to.be.a('string');
              expect(data.Data.Language).to.be("");
              expect(data.Data.DisplayFormat).to.be.a(Flipdish.AddressFormDisplayFormat);
                    expect(data.Data.DisplayFormat.OneLine).to.be.a('string');
                expect(data.Data.DisplayFormat.OneLine).to.be("");
                {
                  let dataCtr = data.Data.DisplayFormat.TwoLines;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('formByCountry', function() {
        it('should call formByCountry successfully', function(done) {
          // TODO: uncomment, update parameter values for formByCountry call and complete the assertions
          /*
          var countryCode = "countryCode_example";
          var opts = {};
          opts.language = "language_example";

          instance.formByCountry(countryCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAddressFormResponse);
            expect(data.Data).to.be.a(Flipdish.AddressFormResponse);
                  {
                let dataCtr = data.Data.FormData;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.DynamicFormField);
                  expect(data.Identifier).to.be.a('string');
                  expect(data.Identifier).to.be("");
                  expect(data.Label).to.be.a('string');
                  expect(data.Label).to.be("");
                  expect(data.Placeholder).to.be.a('string');
                  expect(data.Placeholder).to.be("");
                  expect(data.Rules).to.be.a(Flipdish.DynamicFormRules);
                        expect(data.Rules.MaxLength).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.MaxLength.Value).to.be.a(Object);
                      expect(data.Rules.MaxLength.Value).to.be();
                      expect(data.Rules.MaxLength.Message).to.be.a('string');
                      expect(data.Rules.MaxLength.Message).to.be("");
                      expect(data.Rules.MaxLength.Scopes).to.be.a('string');
                      expect(data.Rules.MaxLength.Scopes).to.be("");
                    expect(data.Rules.MinLength).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.MinLength.Value).to.be.a(Object);
                      expect(data.Rules.MinLength.Value).to.be();
                      expect(data.Rules.MinLength.Message).to.be.a('string');
                      expect(data.Rules.MinLength.Message).to.be("");
                      expect(data.Rules.MinLength.Scopes).to.be.a('string');
                      expect(data.Rules.MinLength.Scopes).to.be("");
                    expect(data.Rules.Required).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.Required.Value).to.be.a(Object);
                      expect(data.Rules.Required.Value).to.be();
                      expect(data.Rules.Required.Message).to.be.a('string');
                      expect(data.Rules.Required.Message).to.be("");
                      expect(data.Rules.Required.Scopes).to.be.a('string');
                      expect(data.Rules.Required.Scopes).to.be("");
                    expect(data.Rules.Pattern).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.Pattern.Value).to.be.a(Object);
                      expect(data.Rules.Pattern.Value).to.be();
                      expect(data.Rules.Pattern.Message).to.be.a('string');
                      expect(data.Rules.Pattern.Message).to.be("");
                      expect(data.Rules.Pattern.Scopes).to.be.a('string');
                      expect(data.Rules.Pattern.Scopes).to.be("");
                    {
                      let dataCtr = data.Rules.Predefined;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Flipdish.DynamicFormFieldOption);
                        expect(data.Display).to.be.a('string');
                        expect(data.Display).to.be("");
                        expect(data.Value).to.be.a('string');
                        expect(data.Value).to.be("");
        
                              }
                    }
                  {
                    let dataCtr = data.Mapping;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  {
                    let dataCtr = data.Modifiers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.Value).to.be.a(Object);
                  expect(data.Value).to.be();
                  expect(data.Scopes).to.be.a('string');
                  expect(data.Scopes).to.be("");
  
                        }
              }
              expect(data.Data.CountryCode).to.be.a('string');
              expect(data.Data.CountryCode).to.be("");
              expect(data.Data.Language).to.be.a('string');
              expect(data.Data.Language).to.be("");
              expect(data.Data.DisplayFormat).to.be.a(Flipdish.AddressFormDisplayFormat);
                    expect(data.Data.DisplayFormat.OneLine).to.be.a('string');
                expect(data.Data.DisplayFormat.OneLine).to.be("");
                {
                  let dataCtr = data.Data.DisplayFormat.TwoLines;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('formatGoogleAddress', function() {
        it('should call formatGoogleAddress successfully', function(done) {
          // TODO: uncomment, update parameter values for formatGoogleAddress call and complete the assertions
          /*
          var googleAddress = new Flipdish.GoogleAddress();
          googleAddress.Results = [new Flipdish.GoogleAddressResult()];
          googleAddress.Results[0].Address_components = [new Flipdish.GoogleAddressComponent()];
          googleAddress.Results[0].Address_components[0].Long_name = "";
          googleAddress.Results[0].Address_components[0].Short_name = "";
          googleAddress.Results[0].Address_components[0].Types = [""];
          googleAddress.Results[0].Formatted_address = "";
          googleAddress.Results[0].Geometry = new Flipdish.GoogleGeometry();
          googleAddress.Results[0].Geometry.Location = new Flipdish.GoogleLocation();
          googleAddress.Results[0].Geometry.Location.Lat = 0.0;
          googleAddress.Results[0].Geometry.Location.Lng = 0.0;
          googleAddress.Results[0].Geometry.Location_type = "";
          googleAddress.Results[0].Geometry.Viewport = new Flipdish.GoogleViewport();
          googleAddress.Results[0].Geometry.Viewport.Northeast = new Flipdish.GoogleCoordinates();
          googleAddress.Results[0].Geometry.Viewport.Northeast.Lat = 0.0;
          googleAddress.Results[0].Geometry.Viewport.Northeast.Lng = 0.0;
          googleAddress.Results[0].Geometry.Viewport.Southwest = new Flipdish.GoogleCoordinates();
          googleAddress.Results[0].Geometry.Viewport.Southwest.Lat = 0.0;
          googleAddress.Results[0].Geometry.Viewport.Southwest.Lng = 0.0;
          googleAddress.Results[0].Place_id = "";
          googleAddress.Results[0].Types = [""];
          googleAddress.Result = new Flipdish.GoogleAddressResult();
          googleAddress.Result.Address_components = [new Flipdish.GoogleAddressComponent()];
          googleAddress.Result.Address_components[0].Long_name = "";
          googleAddress.Result.Address_components[0].Short_name = "";
          googleAddress.Result.Address_components[0].Types = [""];
          googleAddress.Result.Formatted_address = "";
          googleAddress.Result.Geometry = new Flipdish.GoogleGeometry();
          googleAddress.Result.Geometry.Location = new Flipdish.GoogleLocation();
          googleAddress.Result.Geometry.Location.Lat = 0.0;
          googleAddress.Result.Geometry.Location.Lng = 0.0;
          googleAddress.Result.Geometry.Location_type = "";
          googleAddress.Result.Geometry.Viewport = new Flipdish.GoogleViewport();
          googleAddress.Result.Geometry.Viewport.Northeast = new Flipdish.GoogleCoordinates();
          googleAddress.Result.Geometry.Viewport.Northeast.Lat = 0.0;
          googleAddress.Result.Geometry.Viewport.Northeast.Lng = 0.0;
          googleAddress.Result.Geometry.Viewport.Southwest = new Flipdish.GoogleCoordinates();
          googleAddress.Result.Geometry.Viewport.Southwest.Lat = 0.0;
          googleAddress.Result.Geometry.Viewport.Southwest.Lng = 0.0;
          googleAddress.Result.Place_id = "";
          googleAddress.Result.Types = [""];
          googleAddress.Status = "";
          var opts = {};
          opts.language = "language_example";

          instance.formatGoogleAddress(googleAddress, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAddressFormResponse);
            expect(data.Data).to.be.a(Flipdish.AddressFormResponse);
                  {
                let dataCtr = data.Data.FormData;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.DynamicFormField);
                  expect(data.Identifier).to.be.a('string');
                  expect(data.Identifier).to.be("");
                  expect(data.Label).to.be.a('string');
                  expect(data.Label).to.be("");
                  expect(data.Placeholder).to.be.a('string');
                  expect(data.Placeholder).to.be("");
                  expect(data.Rules).to.be.a(Flipdish.DynamicFormRules);
                        expect(data.Rules.MaxLength).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.MaxLength.Value).to.be.a(Object);
                      expect(data.Rules.MaxLength.Value).to.be();
                      expect(data.Rules.MaxLength.Message).to.be.a('string');
                      expect(data.Rules.MaxLength.Message).to.be("");
                      expect(data.Rules.MaxLength.Scopes).to.be.a('string');
                      expect(data.Rules.MaxLength.Scopes).to.be("");
                    expect(data.Rules.MinLength).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.MinLength.Value).to.be.a(Object);
                      expect(data.Rules.MinLength.Value).to.be();
                      expect(data.Rules.MinLength.Message).to.be.a('string');
                      expect(data.Rules.MinLength.Message).to.be("");
                      expect(data.Rules.MinLength.Scopes).to.be.a('string');
                      expect(data.Rules.MinLength.Scopes).to.be("");
                    expect(data.Rules.Required).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.Required.Value).to.be.a(Object);
                      expect(data.Rules.Required.Value).to.be();
                      expect(data.Rules.Required.Message).to.be.a('string');
                      expect(data.Rules.Required.Message).to.be("");
                      expect(data.Rules.Required.Scopes).to.be.a('string');
                      expect(data.Rules.Required.Scopes).to.be("");
                    expect(data.Rules.Pattern).to.be.a(Flipdish.DynamicFormRule);
                          expect(data.Rules.Pattern.Value).to.be.a(Object);
                      expect(data.Rules.Pattern.Value).to.be();
                      expect(data.Rules.Pattern.Message).to.be.a('string');
                      expect(data.Rules.Pattern.Message).to.be("");
                      expect(data.Rules.Pattern.Scopes).to.be.a('string');
                      expect(data.Rules.Pattern.Scopes).to.be("");
                    {
                      let dataCtr = data.Rules.Predefined;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Flipdish.DynamicFormFieldOption);
                        expect(data.Display).to.be.a('string');
                        expect(data.Display).to.be("");
                        expect(data.Value).to.be.a('string');
                        expect(data.Value).to.be("");
        
                              }
                    }
                  {
                    let dataCtr = data.Mapping;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  {
                    let dataCtr = data.Modifiers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.Value).to.be.a(Object);
                  expect(data.Value).to.be();
                  expect(data.Scopes).to.be.a('string');
                  expect(data.Scopes).to.be("");
  
                        }
              }
              expect(data.Data.CountryCode).to.be.a('string');
              expect(data.Data.CountryCode).to.be("");
              expect(data.Data.Language).to.be.a('string');
              expect(data.Data.Language).to.be("");
              expect(data.Data.DisplayFormat).to.be.a(Flipdish.AddressFormDisplayFormat);
                    expect(data.Data.DisplayFormat.OneLine).to.be.a('string');
                expect(data.Data.DisplayFormat.OneLine).to.be("");
                {
                  let dataCtr = data.Data.DisplayFormat.TwoLines;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCountries', function() {
        it('should call getCountries successfully', function(done) {
          // TODO: uncomment, update parameter values for getCountries call and complete the assertions
          /*
          var opts = {};
          opts.language = "language_example";

          instance.getCountries(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultCountryFormResponse);
            expect(data.Data).to.be.a(Flipdish.CountryFormResponse);
                  expect(data.Data.Value).to.be.a('string');
              expect(data.Data.Value).to.be("");
              expect(data.Data.Label).to.be.a('string');
              expect(data.Data.Label).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
