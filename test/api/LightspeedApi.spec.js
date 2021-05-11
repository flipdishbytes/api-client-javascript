/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    instance = new Flipdish.LightspeedApi();
  });

  describe('(package)', function() {
    describe('LightspeedApi', function() {
      describe('lightspeedGenerateMenu', function() {
        it('should call lightspeedGenerateMenu successfully', function(done) {
          // TODO: uncomment, update parameter values for lightspeedGenerateMenu call and complete the assertions
          /*
          var storeId = 56;

          instance.lightspeedGenerateMenu(storeId, function(error, data, response) {
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
      describe('lightspeedGetStoreSettings', function() {
        it('should call lightspeedGetStoreSettings successfully', function(done) {
          // TODO: uncomment, update parameter values for lightspeedGetStoreSettings call and complete the assertions
          /*
          var storeId = 56;

          instance.lightspeedGetStoreSettings(storeId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultLightspeedSettings);
            expect(data.Data).to.be.a(Flipdish.LightspeedSettings);
                  expect(data.Data.CompanyId).to.be.a('string');
              expect(data.Data.CompanyId).to.be("");
              expect(data.Data.UseOAuth).to.be.a('boolean');
              expect(data.Data.UseOAuth).to.be(false);
              expect(data.Data.Enabled).to.be.a('boolean');
              expect(data.Data.Enabled).to.be(false);
              expect(data.Data.EstimatedMinutesForDelivery).to.be.a('number');
              expect(data.Data.EstimatedMinutesForDelivery).to.be(0);
              expect(data.Data.EstimatedMinutesForCollection).to.be.a('number');
              expect(data.Data.EstimatedMinutesForCollection).to.be(0);
              expect(data.Data.GeographicLocation).to.be.a('string');
              expect(data.Data.GeographicLocation).to.be("");
              expect(data.Data.Establishment).to.be.a('boolean');
              expect(data.Data.Establishment).to.be(false);
              expect(data.Data.VoucherId).to.be.a('string');
              expect(data.Data.VoucherId).to.be("");
              expect(data.Data.DeliveryFeeId).to.be.a('string');
              expect(data.Data.DeliveryFeeId).to.be("");
              expect(data.Data.ProcessingFeeId).to.be.a('string');
              expect(data.Data.ProcessingFeeId).to.be("");
              expect(data.Data.PriceType).to.be.a('string');
              expect(data.Data.PriceType).to.be("Default");
              expect(data.Data.MenuId).to.be.a('number');
              expect(data.Data.MenuId).to.be(0);
              expect(data.Data.CollectionTableId).to.be.a('number');
              expect(data.Data.CollectionTableId).to.be(0);
              expect(data.Data.DeliveryTableId).to.be.a('number');
              expect(data.Data.DeliveryTableId).to.be(0);
              {
                let dataCtr = data.Data.CollectionTableIds;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.Data.DeliveryTableIds;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.Data.UseTaxInclusivePrices).to.be.a('boolean');
              expect(data.Data.UseTaxInclusivePrices).to.be(false);
              expect(data.Data.SkipStatusCheckAndAcceptOrderAfterSending).to.be.a('boolean');
              expect(data.Data.SkipStatusCheckAndAcceptOrderAfterSending).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('lightspeedSaveStoreSettings', function() {
        it('should call lightspeedSaveStoreSettings successfully', function(done) {
          // TODO: uncomment, update parameter values for lightspeedSaveStoreSettings call and complete the assertions
          /*
          var storeId = 56;
          var lightspeedSettings = new Flipdish.LightspeedSettings();
          lightspeedSettings.CompanyId = "";
          lightspeedSettings.UseOAuth = false;
          lightspeedSettings.Enabled = false;
          lightspeedSettings.EstimatedMinutesForDelivery = 0;
          lightspeedSettings.EstimatedMinutesForCollection = 0;
          lightspeedSettings.GeographicLocation = "";
          lightspeedSettings.Establishment = false;
          lightspeedSettings.VoucherId = "";
          lightspeedSettings.DeliveryFeeId = "";
          lightspeedSettings.ProcessingFeeId = "";
          lightspeedSettings.PriceType = "Default";
          lightspeedSettings.MenuId = 0;
          lightspeedSettings.CollectionTableId = 0;
          lightspeedSettings.DeliveryTableId = 0;
          lightspeedSettings.CollectionTableIds = {key: ""};
          lightspeedSettings.DeliveryTableIds = {key: ""};
          lightspeedSettings.UseTaxInclusivePrices = false;
          lightspeedSettings.SkipStatusCheckAndAcceptOrderAfterSending = false;

          instance.lightspeedSaveStoreSettings(storeId, lightspeedSettings, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultLightspeedSettings);
            expect(data.Data).to.be.a(Flipdish.LightspeedSettings);
                  expect(data.Data.CompanyId).to.be.a('string');
              expect(data.Data.CompanyId).to.be("");
              expect(data.Data.UseOAuth).to.be.a('boolean');
              expect(data.Data.UseOAuth).to.be(false);
              expect(data.Data.Enabled).to.be.a('boolean');
              expect(data.Data.Enabled).to.be(false);
              expect(data.Data.EstimatedMinutesForDelivery).to.be.a('number');
              expect(data.Data.EstimatedMinutesForDelivery).to.be(0);
              expect(data.Data.EstimatedMinutesForCollection).to.be.a('number');
              expect(data.Data.EstimatedMinutesForCollection).to.be(0);
              expect(data.Data.GeographicLocation).to.be.a('string');
              expect(data.Data.GeographicLocation).to.be("");
              expect(data.Data.Establishment).to.be.a('boolean');
              expect(data.Data.Establishment).to.be(false);
              expect(data.Data.VoucherId).to.be.a('string');
              expect(data.Data.VoucherId).to.be("");
              expect(data.Data.DeliveryFeeId).to.be.a('string');
              expect(data.Data.DeliveryFeeId).to.be("");
              expect(data.Data.ProcessingFeeId).to.be.a('string');
              expect(data.Data.ProcessingFeeId).to.be("");
              expect(data.Data.PriceType).to.be.a('string');
              expect(data.Data.PriceType).to.be("Default");
              expect(data.Data.MenuId).to.be.a('number');
              expect(data.Data.MenuId).to.be(0);
              expect(data.Data.CollectionTableId).to.be.a('number');
              expect(data.Data.CollectionTableId).to.be(0);
              expect(data.Data.DeliveryTableId).to.be.a('number');
              expect(data.Data.DeliveryTableId).to.be(0);
              {
                let dataCtr = data.Data.CollectionTableIds;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.Data.DeliveryTableIds;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.Data.UseTaxInclusivePrices).to.be.a('boolean');
              expect(data.Data.UseTaxInclusivePrices).to.be(false);
              expect(data.Data.SkipStatusCheckAndAcceptOrderAfterSending).to.be.a('boolean');
              expect(data.Data.SkipStatusCheckAndAcceptOrderAfterSending).to.be(false);

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