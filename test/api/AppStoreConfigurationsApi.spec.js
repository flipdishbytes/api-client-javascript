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
    instance = new Flipdish.AppStoreConfigurationsApi();
  });

  describe('(package)', function() {
    describe('AppStoreConfigurationsApi', function() {
      describe('appStoreConfigurationsAppStoreHandleOauthResponseCode', function() {
        it('should call appStoreConfigurationsAppStoreHandleOauthResponseCode successfully', function(done) {
          // TODO: uncomment, update parameter values for appStoreConfigurationsAppStoreHandleOauthResponseCode call and complete the assertions
          /*
          var appStoreAppId = "appStoreAppId_example";

          instance.appStoreConfigurationsAppStoreHandleOauthResponseCode(appStoreAppId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createAppStoreConfig', function() {
        it('should call createAppStoreConfig successfully', function(done) {
          // TODO: uncomment, update parameter values for createAppStoreConfig call and complete the assertions
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";

          instance.createAppStoreConfig(appId, appStoreAppId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAppStoreAppConfiguration);
            expect(data.Data).to.be.a(Flipdish.AppStoreAppConfiguration);
                  expect(data.Data.Id).to.be.a('string');
              expect(data.Data.Id).to.be("");
              expect(data.Data.AppId).to.be.a('string');
              expect(data.Data.AppId).to.be("");
              expect(data.Data.AppStoreAppId).to.be.a('string');
              expect(data.Data.AppStoreAppId).to.be("");
              expect(data.Data.IsEnabled).to.be.a('boolean');
              expect(data.Data.IsEnabled).to.be(false);
              {
                let dataCtr = data.Data.StoreIds;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.Data.Settings;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.Setting);
                  expect(data.Key).to.be.a('string');
                  expect(data.Key).to.be("");
                  expect(data.Value).to.be.a('string');
                  expect(data.Value).to.be("");
  
                        }
              }
              expect(data.Data.VerificationStatus).to.be.a('string');
              expect(data.Data.VerificationStatus).to.be("Draft");
              expect(data.Data.Logo).to.be.a('string');
              expect(data.Data.Logo).to.be("");
              expect(data.Data.OAuthAppId).to.be.a('string');
              expect(data.Data.OAuthAppId).to.be("");
              expect(data.Data.Internal).to.be.a('boolean');
              expect(data.Data.Internal).to.be(false);
              expect(data.Data.Details).to.be.a('string');
              expect(data.Data.Details).to.be("");
              expect(data.Data.ConfigurationType).to.be.a('string');
              expect(data.Data.ConfigurationType).to.be("ExternalLink");
              expect(data.Data.StoreSelectorType).to.be.a('string');
              expect(data.Data.StoreSelectorType).to.be("None");
              {
                let dataCtr = data.Data.FieldGroups;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.FieldGroup);
                  expect(data.Name).to.be.a('string');
                  expect(data.Name).to.be("");
                  expect(data.Description).to.be.a('string');
                  expect(data.Description).to.be("");
                  expect(data.Tooltip).to.be.a('string');
                  expect(data.Tooltip).to.be("");
                  expect(data.Position).to.be.a('number');
                  expect(data.Position).to.be(0);
                  {
                    let dataCtr = data.Fields;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Flipdish.Field);
                      expect(data.Name).to.be.a('string');
                      expect(data.Name).to.be("");
                      expect(data.Description).to.be.a('string');
                      expect(data.Description).to.be("");
                      expect(data.Key).to.be.a('string');
                      expect(data.Key).to.be("");
                      expect(data.Tooltip).to.be.a('string');
                      expect(data.Tooltip).to.be("");
                      expect(data.Position).to.be.a('number');
                      expect(data.Position).to.be(0);
                      expect(data.DefaultValue).to.be.a('string');
                      expect(data.DefaultValue).to.be("");
                      {
                        let dataCtr = data.ValidValues;
                        expect(dataCtr).to.be.an(Array);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a(Flipdish.ValidValue);
                          expect(data.Code).to.be.a('string');
                          expect(data.Code).to.be("");
                          expect(data.Name).to.be.a('string');
                          expect(data.Name).to.be("");
          
                                }
                      }
                      expect(data.ValidationRegex).to.be.a('string');
                      expect(data.ValidationRegex).to.be("");
                      expect(data.FieldType).to.be.a('string');
                      expect(data.FieldType).to.be("Text");
                      expect(data.IsFlipdishRestricted).to.be.a('boolean');
                      expect(data.IsFlipdishRestricted).to.be(false);
      
                            }
                  }
  
                        }
              }
              expect(data.Data.SetupInstructions).to.be.a('string');
              expect(data.Data.SetupInstructions).to.be("");
              expect(data.Data.ExternalSetupLink).to.be.a('string');
              expect(data.Data.ExternalSetupLink).to.be("");
              expect(data.Data.TeammateAppAccessLevel).to.be.a('string');
              expect(data.Data.TeammateAppAccessLevel).to.be("Owner");
              expect(data.Data.PermissionsType).to.be.a('string');
              expect(data.Data.PermissionsType).to.be("Teammate");
              expect(data.Data.Support).to.be.a(Flipdish.AppStoreAppSupportInfo);
                    expect(data.Data.Support.PrivacyPolicy).to.be.a('string');
                expect(data.Data.Support.PrivacyPolicy).to.be("");
                expect(data.Data.Support.TermsOfUse).to.be.a('string');
                expect(data.Data.Support.TermsOfUse).to.be("");
                expect(data.Data.Support.CompanyWebsite).to.be.a('string');
                expect(data.Data.Support.CompanyWebsite).to.be("");
                expect(data.Data.Support.LearnMore).to.be.a('string');
                expect(data.Data.Support.LearnMore).to.be("");
                expect(data.Data.Support.InstallationMessage).to.be.a('string');
                expect(data.Data.Support.InstallationMessage).to.be("");
                expect(data.Data.Support.SupportEmail).to.be.a('string');
                expect(data.Data.Support.SupportEmail).to.be("");
              expect(data.Data.ExternalFunctionActionUrl).to.be.a('string');
              expect(data.Data.ExternalFunctionActionUrl).to.be("");
              expect(data.Data.ExternalFunctionSignatureKey).to.be.a('string');
              expect(data.Data.ExternalFunctionSignatureKey).to.be("");
              expect(data.Data.IsPaid).to.be.a('boolean');
              expect(data.Data.IsPaid).to.be(false);
              expect(data.Data.Name).to.be.a('string');
              expect(data.Data.Name).to.be("");
              expect(data.Data.Description).to.be.a('string');
              expect(data.Data.Description).to.be("");
              {
                let dataCtr = data.Data.Categories;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("PointOfSale");
                }
              }
              {
                let dataCtr = data.Data.Countries;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("GB");
                }
              }
              expect(data.Data.DeveloperName).to.be.a('string');
              expect(data.Data.DeveloperName).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAppStoreConfig', function() {
        it('should call deleteAppStoreConfig successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAppStoreConfig call and complete the assertions
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";
          var configId = "configId_example";

          instance.deleteAppStoreConfig(appId, appStoreAppId, configId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiStringResult);
            expect(data.Data).to.be.a('string');
            expect(data.Data).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('executeConfigurationAction', function() {
        it('should call executeConfigurationAction successfully', function(done) {
          // TODO: uncomment, update parameter values for executeConfigurationAction call and complete the assertions
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";
          var configId = "configId_example";
          var executeConfigurationActionRequest = new Flipdish.ExecuteConfigurationActionRequest();
          executeConfigurationActionRequest.Key = "";
          executeConfigurationActionRequest.Action = "";

          instance.executeConfigurationAction(appId, appStoreAppId, configId, executeConfigurationActionRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultExecuteConfigurationActionResult);
            expect(data.Data).to.be.a(Flipdish.ExecuteConfigurationActionResult);
                  expect(data.Data.ErrorMessage).to.be.a('string');
              expect(data.Data.ErrorMessage).to.be("");
              expect(data.Data.InfoMessage).to.be.a('string');
              expect(data.Data.InfoMessage).to.be("");
              expect(data.Data.RedirectUrl).to.be.a('string');
              expect(data.Data.RedirectUrl).to.be("");
              expect(data.Data.RedirectTarget).to.be.a('string');
              expect(data.Data.RedirectTarget).to.be("Default");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAppStoreConfig', function() {
        it('should call getAppStoreConfig successfully', function(done) {
          // TODO: uncomment, update parameter values for getAppStoreConfig call and complete the assertions
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";
          var configId = "configId_example";

          instance.getAppStoreConfig(appId, appStoreAppId, configId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAppStoreAppConfiguration);
            expect(data.Data).to.be.a(Flipdish.AppStoreAppConfiguration);
                  expect(data.Data.Id).to.be.a('string');
              expect(data.Data.Id).to.be("");
              expect(data.Data.AppId).to.be.a('string');
              expect(data.Data.AppId).to.be("");
              expect(data.Data.AppStoreAppId).to.be.a('string');
              expect(data.Data.AppStoreAppId).to.be("");
              expect(data.Data.IsEnabled).to.be.a('boolean');
              expect(data.Data.IsEnabled).to.be(false);
              {
                let dataCtr = data.Data.StoreIds;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.Data.Settings;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.Setting);
                  expect(data.Key).to.be.a('string');
                  expect(data.Key).to.be("");
                  expect(data.Value).to.be.a('string');
                  expect(data.Value).to.be("");
  
                        }
              }
              expect(data.Data.VerificationStatus).to.be.a('string');
              expect(data.Data.VerificationStatus).to.be("Draft");
              expect(data.Data.Logo).to.be.a('string');
              expect(data.Data.Logo).to.be("");
              expect(data.Data.OAuthAppId).to.be.a('string');
              expect(data.Data.OAuthAppId).to.be("");
              expect(data.Data.Internal).to.be.a('boolean');
              expect(data.Data.Internal).to.be(false);
              expect(data.Data.Details).to.be.a('string');
              expect(data.Data.Details).to.be("");
              expect(data.Data.ConfigurationType).to.be.a('string');
              expect(data.Data.ConfigurationType).to.be("ExternalLink");
              expect(data.Data.StoreSelectorType).to.be.a('string');
              expect(data.Data.StoreSelectorType).to.be("None");
              {
                let dataCtr = data.Data.FieldGroups;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.FieldGroup);
                  expect(data.Name).to.be.a('string');
                  expect(data.Name).to.be("");
                  expect(data.Description).to.be.a('string');
                  expect(data.Description).to.be("");
                  expect(data.Tooltip).to.be.a('string');
                  expect(data.Tooltip).to.be("");
                  expect(data.Position).to.be.a('number');
                  expect(data.Position).to.be(0);
                  {
                    let dataCtr = data.Fields;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Flipdish.Field);
                      expect(data.Name).to.be.a('string');
                      expect(data.Name).to.be("");
                      expect(data.Description).to.be.a('string');
                      expect(data.Description).to.be("");
                      expect(data.Key).to.be.a('string');
                      expect(data.Key).to.be("");
                      expect(data.Tooltip).to.be.a('string');
                      expect(data.Tooltip).to.be("");
                      expect(data.Position).to.be.a('number');
                      expect(data.Position).to.be(0);
                      expect(data.DefaultValue).to.be.a('string');
                      expect(data.DefaultValue).to.be("");
                      {
                        let dataCtr = data.ValidValues;
                        expect(dataCtr).to.be.an(Array);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a(Flipdish.ValidValue);
                          expect(data.Code).to.be.a('string');
                          expect(data.Code).to.be("");
                          expect(data.Name).to.be.a('string');
                          expect(data.Name).to.be("");
          
                                }
                      }
                      expect(data.ValidationRegex).to.be.a('string');
                      expect(data.ValidationRegex).to.be("");
                      expect(data.FieldType).to.be.a('string');
                      expect(data.FieldType).to.be("Text");
                      expect(data.IsFlipdishRestricted).to.be.a('boolean');
                      expect(data.IsFlipdishRestricted).to.be(false);
      
                            }
                  }
  
                        }
              }
              expect(data.Data.SetupInstructions).to.be.a('string');
              expect(data.Data.SetupInstructions).to.be("");
              expect(data.Data.ExternalSetupLink).to.be.a('string');
              expect(data.Data.ExternalSetupLink).to.be("");
              expect(data.Data.TeammateAppAccessLevel).to.be.a('string');
              expect(data.Data.TeammateAppAccessLevel).to.be("Owner");
              expect(data.Data.PermissionsType).to.be.a('string');
              expect(data.Data.PermissionsType).to.be("Teammate");
              expect(data.Data.Support).to.be.a(Flipdish.AppStoreAppSupportInfo);
                    expect(data.Data.Support.PrivacyPolicy).to.be.a('string');
                expect(data.Data.Support.PrivacyPolicy).to.be("");
                expect(data.Data.Support.TermsOfUse).to.be.a('string');
                expect(data.Data.Support.TermsOfUse).to.be("");
                expect(data.Data.Support.CompanyWebsite).to.be.a('string');
                expect(data.Data.Support.CompanyWebsite).to.be("");
                expect(data.Data.Support.LearnMore).to.be.a('string');
                expect(data.Data.Support.LearnMore).to.be("");
                expect(data.Data.Support.InstallationMessage).to.be.a('string');
                expect(data.Data.Support.InstallationMessage).to.be("");
                expect(data.Data.Support.SupportEmail).to.be.a('string');
                expect(data.Data.Support.SupportEmail).to.be("");
              expect(data.Data.ExternalFunctionActionUrl).to.be.a('string');
              expect(data.Data.ExternalFunctionActionUrl).to.be("");
              expect(data.Data.ExternalFunctionSignatureKey).to.be.a('string');
              expect(data.Data.ExternalFunctionSignatureKey).to.be("");
              expect(data.Data.IsPaid).to.be.a('boolean');
              expect(data.Data.IsPaid).to.be(false);
              expect(data.Data.Name).to.be.a('string');
              expect(data.Data.Name).to.be("");
              expect(data.Data.Description).to.be.a('string');
              expect(data.Data.Description).to.be("");
              {
                let dataCtr = data.Data.Categories;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("PointOfSale");
                }
              }
              {
                let dataCtr = data.Data.Countries;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("GB");
                }
              }
              expect(data.Data.DeveloperName).to.be.a('string');
              expect(data.Data.DeveloperName).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getConfiguredAppSingleApp', function() {
        it('should call getConfiguredAppSingleApp successfully', function(done) {
          // TODO: uncomment, update parameter values for getConfiguredAppSingleApp call and complete the assertions
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";

          instance.getConfiguredAppSingleApp(appId, appStoreAppId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiArrayResultAppStoreAppConfigurationSummary);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.AppStoreAppConfigurationSummary);
                expect(data.Id).to.be.a('string');
                expect(data.Id).to.be("");
                expect(data.AppId).to.be.a('string');
                expect(data.AppId).to.be("");
                expect(data.IsEnabled).to.be.a('boolean');
                expect(data.IsEnabled).to.be(false);
                {
                  let dataCtr = data.Stores;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Flipdish.ConfiguredStore);
                    expect(data.StoreId).to.be.a('number');
                    expect(data.StoreId).to.be(0);
                    expect(data.Name).to.be.a('string');
                    expect(data.Name).to.be("");
    
                          }
                }
                expect(data.ConfigurationType).to.be.a('string');
                expect(data.ConfigurationType).to.be("ExternalLink");
                expect(data.StoreSelectorType).to.be.a('string');
                expect(data.StoreSelectorType).to.be("None");
                expect(data.Internal).to.be.a('boolean');
                expect(data.Internal).to.be(false);
                expect(data.AppStoreAppId).to.be.a('string');
                expect(data.AppStoreAppId).to.be("");
                expect(data.Name).to.be.a('string');
                expect(data.Name).to.be("");
                expect(data.Description).to.be.a('string');
                expect(data.Description).to.be("");
                expect(data.Logo).to.be.a('string');
                expect(data.Logo).to.be("");
                expect(data.DeveloperName).to.be.a('string');
                expect(data.DeveloperName).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getConfiguredApps', function() {
        it('should call getConfiguredApps successfully', function(done) {
          // TODO: uncomment, update parameter values for getConfiguredApps call and complete the assertions
          /*
          var appId = "appId_example";

          instance.getConfiguredApps(appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiArrayResultAppStoreAppSummary);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.AppStoreAppSummary);
                expect(data.Id).to.be.a('string');
                expect(data.Id).to.be("");
                expect(data.VerificationStatus).to.be.a('string');
                expect(data.VerificationStatus).to.be("Draft");
                expect(data.Logo).to.be.a('string');
                expect(data.Logo).to.be("");
                expect(data.Internal).to.be.a('boolean');
                expect(data.Internal).to.be(false);
                expect(data.Name).to.be.a('string');
                expect(data.Name).to.be("");
                expect(data.Description).to.be.a('string');
                expect(data.Description).to.be("");
                expect(data.IsEnabled).to.be.a('boolean');
                expect(data.IsEnabled).to.be(false);
                {
                  let dataCtr = data.Categories;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("PointOfSale");
                  }
                }
                {
                  let dataCtr = data.Countries;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("GB");
                  }
                }
                expect(data.DeveloperName).to.be.a('string');
                expect(data.DeveloperName).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAppStoreConfig', function() {
        it('should call updateAppStoreConfig successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAppStoreConfig call
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";
          var configId = "configId_example";
          var updateAppStoreAppConfiguration = new Flipdish.UpdateAppStoreAppConfiguration();
          updateAppStoreAppConfiguration.IsEnabled = false;
          updateAppStoreAppConfiguration.StoreIds = [0];
          updateAppStoreAppConfiguration.Settings = [new Flipdish.Setting()];
          updateAppStoreAppConfiguration.Settings[0].Key = "";
          updateAppStoreAppConfiguration.Settings[0].Value = "";

          instance.updateAppStoreConfig(appId, appStoreAppId, configId, updateAppStoreAppConfiguration, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAppStoreConfigSettingValues', function() {
        it('should call updateAppStoreConfigSettingValues successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAppStoreConfigSettingValues call
          /*
          var appId = "appId_example";
          var appStoreAppId = "appStoreAppId_example";
          var configId = "configId_example";
          var updateAppStoreAppConfigurationValues = new Flipdish.UpdateAppStoreAppConfigurationValuesBatch();
          updateAppStoreAppConfigurationValues.Settings = [new Flipdish.Setting()];
          updateAppStoreAppConfigurationValues.Settings[0].Key = "";
          updateAppStoreAppConfigurationValues.Settings[0].Value = "";

          instance.updateAppStoreConfigSettingValues(appId, appStoreAppId, configId, updateAppStoreAppConfigurationValues, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

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
