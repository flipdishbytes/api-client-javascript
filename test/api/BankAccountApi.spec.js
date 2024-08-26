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
    instance = new Flipdish.BankAccountApi();
  });

  describe('(package)', function() {
    describe('BankAccountApi', function() {
      describe('attachBankAccountToStore', function() {
        it('should call attachBankAccountToStore successfully', function(done) {
          // TODO: uncomment, update parameter values for attachBankAccountToStore call
          /*
          var appId = "appId_example";
          var bankAccountId = 56;
          var storeId = 56;

          instance.attachBankAccountToStore(appId, bankAccountId, storeId, function(error, data, response) {
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
      describe('createBankAccount', function() {
        it('should call createBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for createBankAccount call and complete the assertions
          /*
          var appId = "appId_example";
          var account = new Flipdish.BankAccountCreate();
          account.BankAddress = "";
          account.BankCountryCode = "";
          account.AccountHolderAddress = "";
          account.AccountHolderCountryCode = "";
          account.VatNumber = "";
          account.CurrencyCode = "EUR";
          account.StoreIds = [0];
          account.BankName = "";
          account.AccountName = "";
          account.Iban = "";
          account.Swift = "";
          account.NationalClearingCode = "";
          account.PopulatedAccountFields = [new Flipdish.AccountFieldKeyValuePair()];
          account.PopulatedAccountFields[0].Key = "Iban";
          account.PopulatedAccountFields[0].Value = "";
          account.RejectionReason = "";
          account.BusinessType = "Individual";

          instance.createBankAccount(appId, account, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultBankAccountDetail);
            expect(data.Data).to.be.a(Flipdish.BankAccountDetail);
                  expect(data.Data.Id).to.be.a('number');
              expect(data.Data.Id).to.be(0);
              {
                let dataCtr = data.Data.StoreNames;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.Data.AccountState).to.be.a('string');
              expect(data.Data.AccountState).to.be("Unverified");
              expect(data.Data.StripeConnectedAccountInfo).to.be.a(Flipdish.StripeConnectedAccountInfo);
                    expect(data.Data.StripeConnectedAccountInfo.AccountStatus).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.AccountStatus).to.be("Disabled");
                expect(data.Data.StripeConnectedAccountInfo.StripeId).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.StripeId).to.be("");
                expect(data.Data.StripeConnectedAccountInfo.CardPaymentStatus).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.CardPaymentStatus).to.be("Inactive");
                expect(data.Data.StripeConnectedAccountInfo.PayoutScheduleInterval).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.PayoutScheduleInterval).to.be("Manual");
                expect(data.Data.StripeConnectedAccountInfo.PayoutsEnabled).to.be.a('boolean');
                expect(data.Data.StripeConnectedAccountInfo.PayoutsEnabled).to.be(false);
                expect(data.Data.StripeConnectedAccountInfo.PayoutsPaused).to.be.a('boolean');
                expect(data.Data.StripeConnectedAccountInfo.PayoutsPaused).to.be(false);
                expect(data.Data.StripeConnectedAccountInfo.PaymentsEnabled).to.be.a('boolean');
                expect(data.Data.StripeConnectedAccountInfo.PaymentsEnabled).to.be(false);
              expect(data.Data.BankAddress).to.be.a('string');
              expect(data.Data.BankAddress).to.be("");
              expect(data.Data.BankCountryCode).to.be.a('string');
              expect(data.Data.BankCountryCode).to.be("");
              expect(data.Data.AccountHolderAddress).to.be.a('string');
              expect(data.Data.AccountHolderAddress).to.be("");
              expect(data.Data.AccountHolderCountryCode).to.be.a('string');
              expect(data.Data.AccountHolderCountryCode).to.be("");
              expect(data.Data.VatNumber).to.be.a('string');
              expect(data.Data.VatNumber).to.be("");
              expect(data.Data.CurrencyCode).to.be.a('string');
              expect(data.Data.CurrencyCode).to.be("EUR");
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
              expect(data.Data.BankName).to.be.a('string');
              expect(data.Data.BankName).to.be("");
              expect(data.Data.AccountName).to.be.a('string');
              expect(data.Data.AccountName).to.be("");
              expect(data.Data.Iban).to.be.a('string');
              expect(data.Data.Iban).to.be("");
              expect(data.Data.Swift).to.be.a('string');
              expect(data.Data.Swift).to.be("");
              expect(data.Data.NationalClearingCode).to.be.a('string');
              expect(data.Data.NationalClearingCode).to.be("");
              {
                let dataCtr = data.Data.PopulatedAccountFields;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.AccountFieldKeyValuePair);
                  expect(data.Key).to.be.a('string');
                  expect(data.Key).to.be("Iban");
                  expect(data.Value).to.be.a('string');
                  expect(data.Value).to.be("");
  
                        }
              }
              expect(data.Data.RejectionReason).to.be.a('string');
              expect(data.Data.RejectionReason).to.be("");
              expect(data.Data.BusinessType).to.be.a('string');
              expect(data.Data.BusinessType).to.be("Individual");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteBankAccount', function() {
        it('should call deleteBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteBankAccount call
          /*
          var appId = "appId_example";
          var bankAccountId = 56;

          instance.deleteBankAccount(appId, bankAccountId, function(error, data, response) {
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
      describe('getBankAccountById', function() {
        it('should call getBankAccountById successfully', function(done) {
          // TODO: uncomment, update parameter values for getBankAccountById call and complete the assertions
          /*
          var bankAccountId = 56;
          var appId = "appId_example";

          instance.getBankAccountById(bankAccountId, appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultBankAccountDetail);
            expect(data.Data).to.be.a(Flipdish.BankAccountDetail);
                  expect(data.Data.Id).to.be.a('number');
              expect(data.Data.Id).to.be(0);
              {
                let dataCtr = data.Data.StoreNames;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.Data.AccountState).to.be.a('string');
              expect(data.Data.AccountState).to.be("Unverified");
              expect(data.Data.StripeConnectedAccountInfo).to.be.a(Flipdish.StripeConnectedAccountInfo);
                    expect(data.Data.StripeConnectedAccountInfo.AccountStatus).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.AccountStatus).to.be("Disabled");
                expect(data.Data.StripeConnectedAccountInfo.StripeId).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.StripeId).to.be("");
                expect(data.Data.StripeConnectedAccountInfo.CardPaymentStatus).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.CardPaymentStatus).to.be("Inactive");
                expect(data.Data.StripeConnectedAccountInfo.PayoutScheduleInterval).to.be.a('string');
                expect(data.Data.StripeConnectedAccountInfo.PayoutScheduleInterval).to.be("Manual");
                expect(data.Data.StripeConnectedAccountInfo.PayoutsEnabled).to.be.a('boolean');
                expect(data.Data.StripeConnectedAccountInfo.PayoutsEnabled).to.be(false);
                expect(data.Data.StripeConnectedAccountInfo.PayoutsPaused).to.be.a('boolean');
                expect(data.Data.StripeConnectedAccountInfo.PayoutsPaused).to.be(false);
                expect(data.Data.StripeConnectedAccountInfo.PaymentsEnabled).to.be.a('boolean');
                expect(data.Data.StripeConnectedAccountInfo.PaymentsEnabled).to.be(false);
              expect(data.Data.BankAddress).to.be.a('string');
              expect(data.Data.BankAddress).to.be("");
              expect(data.Data.BankCountryCode).to.be.a('string');
              expect(data.Data.BankCountryCode).to.be("");
              expect(data.Data.AccountHolderAddress).to.be.a('string');
              expect(data.Data.AccountHolderAddress).to.be("");
              expect(data.Data.AccountHolderCountryCode).to.be.a('string');
              expect(data.Data.AccountHolderCountryCode).to.be("");
              expect(data.Data.VatNumber).to.be.a('string');
              expect(data.Data.VatNumber).to.be("");
              expect(data.Data.CurrencyCode).to.be.a('string');
              expect(data.Data.CurrencyCode).to.be("EUR");
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
              expect(data.Data.BankName).to.be.a('string');
              expect(data.Data.BankName).to.be("");
              expect(data.Data.AccountName).to.be.a('string');
              expect(data.Data.AccountName).to.be("");
              expect(data.Data.Iban).to.be.a('string');
              expect(data.Data.Iban).to.be("");
              expect(data.Data.Swift).to.be.a('string');
              expect(data.Data.Swift).to.be("");
              expect(data.Data.NationalClearingCode).to.be.a('string');
              expect(data.Data.NationalClearingCode).to.be("");
              {
                let dataCtr = data.Data.PopulatedAccountFields;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.AccountFieldKeyValuePair);
                  expect(data.Key).to.be.a('string');
                  expect(data.Key).to.be("Iban");
                  expect(data.Value).to.be.a('string');
                  expect(data.Value).to.be("");
  
                        }
              }
              expect(data.Data.RejectionReason).to.be.a('string');
              expect(data.Data.RejectionReason).to.be("");
              expect(data.Data.BusinessType).to.be.a('string');
              expect(data.Data.BusinessType).to.be("Individual");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBankAccounts', function() {
        it('should call getBankAccounts successfully', function(done) {
          // TODO: uncomment, update parameter values for getBankAccounts call and complete the assertions
          /*
          var appId = "appId_example";

          instance.getBankAccounts(appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiArrayResultBankAccountSummary);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.BankAccountSummary);
                expect(data.Id).to.be.a('number');
                expect(data.Id).to.be(0);
                {
                  let dataCtr = data.StoreNames;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.AccountState).to.be.a('string');
                expect(data.AccountState).to.be("Unverified");
                expect(data.CurrencyCode).to.be.a('string');
                expect(data.CurrencyCode).to.be("");
                expect(data.StripeConnectedAccountInfo).to.be.a(Flipdish.StripeConnectedAccountInfo);
                      expect(data.StripeConnectedAccountInfo.AccountStatus).to.be.a('string');
                  expect(data.StripeConnectedAccountInfo.AccountStatus).to.be("Disabled");
                  expect(data.StripeConnectedAccountInfo.StripeId).to.be.a('string');
                  expect(data.StripeConnectedAccountInfo.StripeId).to.be("");
                  expect(data.StripeConnectedAccountInfo.CardPaymentStatus).to.be.a('string');
                  expect(data.StripeConnectedAccountInfo.CardPaymentStatus).to.be("Inactive");
                  expect(data.StripeConnectedAccountInfo.PayoutScheduleInterval).to.be.a('string');
                  expect(data.StripeConnectedAccountInfo.PayoutScheduleInterval).to.be("Manual");
                  expect(data.StripeConnectedAccountInfo.PayoutsEnabled).to.be.a('boolean');
                  expect(data.StripeConnectedAccountInfo.PayoutsEnabled).to.be(false);
                  expect(data.StripeConnectedAccountInfo.PayoutsPaused).to.be.a('boolean');
                  expect(data.StripeConnectedAccountInfo.PayoutsPaused).to.be(false);
                  expect(data.StripeConnectedAccountInfo.PaymentsEnabled).to.be.a('boolean');
                  expect(data.StripeConnectedAccountInfo.PaymentsEnabled).to.be(false);
                expect(data.AccountName).to.be.a('string');
                expect(data.AccountName).to.be("");
                expect(data.Iban).to.be.a('string');
                expect(data.Iban).to.be("");
                expect(data.Swift).to.be.a('string');
                expect(data.Swift).to.be("");
                expect(data.NationalClearingCode).to.be.a('string');
                expect(data.NationalClearingCode).to.be("");
                {
                  let dataCtr = data.PopulatedAccountFields;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Flipdish.AccountFieldKeyValuePair);
                    expect(data.Key).to.be.a('string');
                    expect(data.Key).to.be("Iban");
                    expect(data.Value).to.be.a('string');
                    expect(data.Value).to.be("");
    
                          }
                }
                expect(data.RejectionReason).to.be.a('string');
                expect(data.RejectionReason).to.be("");
                expect(data.BusinessType).to.be.a('string');
                expect(data.BusinessType).to.be("Individual");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCountriesWithFieldDefinitions', function() {
        it('should call getCountriesWithFieldDefinitions successfully', function(done) {
          // TODO: uncomment, update parameter values for getCountriesWithFieldDefinitions call and complete the assertions
          /*
          var appId = "appId_example";

          instance.getCountriesWithFieldDefinitions(appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiArrayResultCountryWithAccountFieldsDefinitions);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.CountryWithAccountFieldsDefinitions);
                expect(data.CountryCode).to.be.a('string');
                expect(data.CountryCode).to.be("");
                expect(data.DisplayName).to.be.a('string');
                expect(data.DisplayName).to.be("");
                expect(data.SupportType).to.be.a('string');
                expect(data.SupportType).to.be("");
                {
                  let dataCtr = data.FieldDefinitions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Flipdish.AccountFieldDefinition);
                    expect(data.Key).to.be.a('string');
                    expect(data.Key).to.be("Iban");
                    expect(data.DisplayName).to.be.a('string');
                    expect(data.DisplayName).to.be("");
                    expect(data.Type).to.be.a('string');
                    expect(data.Type).to.be("None");
                    expect(data.MinLength).to.be.a('number');
                    expect(data.MinLength).to.be(0);
                    expect(data.MaxLength).to.be.a('number');
                    expect(data.MaxLength).to.be(0);
                    expect(data.DigitsOnly).to.be.a('boolean');
                    expect(data.DigitsOnly).to.be(false);
                    expect(data.Regex).to.be.a('string');
                    expect(data.Regex).to.be("");
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFieldDefinitions', function() {
        it('should call getFieldDefinitions successfully', function(done) {
          // TODO: uncomment, update parameter values for getFieldDefinitions call and complete the assertions
          /*
          var appId = "appId_example";

          instance.getFieldDefinitions(appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAccountFieldsDefinitions);
            expect(data.Data).to.be.a(Flipdish.AccountFieldsDefinitions);
                  {
                let dataCtr = data.Data.DefinitionsPerCountry;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.Array);
                  expect(data.Key).to.be.a('string');
                  expect(data.Key).to.be("Iban");
                  expect(data.DisplayName).to.be.a('string');
                  expect(data.DisplayName).to.be("");
                  expect(data.Type).to.be.a('string');
                  expect(data.Type).to.be("None");
                  expect(data.MinLength).to.be.a('number');
                  expect(data.MinLength).to.be(0);
                  expect(data.MaxLength).to.be.a('number');
                  expect(data.MaxLength).to.be(0);
                  expect(data.DigitsOnly).to.be.a('boolean');
                  expect(data.DigitsOnly).to.be(false);
                  expect(data.Regex).to.be.a('string');
                  expect(data.Regex).to.be("");
  
                        }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateBankAccount', function() {
        it('should call updateBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for updateBankAccount call
          /*
          var appId = "appId_example";
          var bankAccountId = 56;
          var account = new Flipdish.BankAccountCreate();
          account.BankAddress = "";
          account.BankCountryCode = "";
          account.AccountHolderAddress = "";
          account.AccountHolderCountryCode = "";
          account.VatNumber = "";
          account.CurrencyCode = "EUR";
          account.StoreIds = [0];
          account.BankName = "";
          account.AccountName = "";
          account.Iban = "";
          account.Swift = "";
          account.NationalClearingCode = "";
          account.PopulatedAccountFields = [new Flipdish.AccountFieldKeyValuePair()];
          account.PopulatedAccountFields[0].Key = "Iban";
          account.PopulatedAccountFields[0].Value = "";
          account.RejectionReason = "";
          account.BusinessType = "Individual";

          instance.updateBankAccount(appId, bankAccountId, account, function(error, data, response) {
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
      describe('updateBankAccountState', function() {
        it('should call updateBankAccountState successfully', function(done) {
          // TODO: uncomment, update parameter values for updateBankAccountState call
          /*
          var appId = "appId_example";
          var bankAccountId = 56;
          var state = "state_example";
          var reason = "reason_example";

          instance.updateBankAccountState(appId, bankAccountId, state, reason, function(error, data, response) {
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
