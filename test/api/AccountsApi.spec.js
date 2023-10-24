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
    instance = new Flipdish.AccountsApi();
  });

  describe('(package)', function() {
    describe('AccountsApi', function() {
      describe('answerSignUpQuestion', function() {
        it('should call answerSignUpQuestion successfully', function(done) {
          // TODO: uncomment, update parameter values for answerSignUpQuestion call
          /*
          var signupStepAction = "signupStepAction_example";
          var answerId = 56;

          instance.answerSignUpQuestion(signupStepAction, answerId, function(error, data, response) {
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
      describe('changePassword', function() {
        it('should call changePassword successfully', function(done) {
          // TODO: uncomment, update parameter values for changePassword call
          /*
          var changePasswordModel = new Flipdish.ChangePasswordModel();
          changePasswordModel.OldPassword = "";
          changePasswordModel.NewPassword = "";

          instance.changePassword(changePasswordModel, function(error, data, response) {
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
      describe('changePasswordWithPin', function() {
        it('should call changePasswordWithPin successfully', function(done) {
          // TODO: uncomment, update parameter values for changePasswordWithPin call
          /*
          var changePasswordModel = new Flipdish.SetPasswordWithPinModel();
          changePasswordModel.Pin = 0;
          changePasswordModel.NewPassword = "";
          changePasswordModel.RecaptchaToken = "";

          instance.changePasswordWithPin(changePasswordModel, function(error, data, response) {
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
      describe('createAccount', function() {
        it('should call createAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for createAccount call
          /*
          var createAccountModel = new Flipdish.CreateAccountModel();
          createAccountModel.Email = "";
          createAccountModel.StoreName = "";
          createAccountModel.LanguageId = "";
          createAccountModel.Rid = 0;
          createAccountModel.Cid = "";
          createAccountModel.RecaptchaToken = "";

          instance.createAccount(createAccountModel, function(error, data, response) {
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
      describe('createBasicAccount', function() {
        it('should call createBasicAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for createBasicAccount call and complete the assertions
          /*
          var basicAccountModel = new Flipdish.CreateBasicAccountModel();
          basicAccountModel.StoreName = "";
          basicAccountModel.LanguageId = "";
          basicAccountModel.OpportunityId = "";
          basicAccountModel.AccountId = "";

          instance.createBasicAccount(basicAccountModel, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAccountDetails', function() {
        it('should call getAccountDetails successfully', function(done) {
          // TODO: uncomment getAccountDetails call and complete the assertions
          /*

          instance.getAccountDetails(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiResultAccountDetail);
            expect(data.Data).to.be.a(Flipdish.AccountDetail);
                  expect(data.Data.Email).to.be.a('string');
              expect(data.Data.Email).to.be("");
              {
                let dataCtr = data.Data.SignupSteps;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Flipdish.SignupStep);
                  expect(data.Action).to.be.a('string');
                  expect(data.Action).to.be("Question");
                  expect(data.Question).to.be.a('string');
                  expect(data.Question).to.be("");
                  {
                    let dataCtr = data.PredefinedAnswers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Flipdish.PredefinedAnswer);
                      expect(data.Id).to.be.a('number');
                      expect(data.Id).to.be(0);
                      expect(data.Text).to.be.a('string');
                      expect(data.Text).to.be("");
      
                            }
                  }
  
                        }
              }
              expect(data.Data.IsVerified).to.be.a('boolean');
              expect(data.Data.IsVerified).to.be(false);
              expect(data.Data.IsSelfServeUser).to.be.a('boolean');
              expect(data.Data.IsSelfServeUser).to.be(false);
              expect(data.Data.AccountId).to.be.a('number');
              expect(data.Data.AccountId).to.be(0);
              expect(data.Data.Name).to.be.a('string');
              expect(data.Data.Name).to.be("");
              expect(data.Data.Language).to.be.a('string');
              expect(data.Data.Language).to.be("");
              expect(data.Data.TimeZoneInfoId).to.be.a('string');
              expect(data.Data.TimeZoneInfoId).to.be("");
              expect(data.Data.DisplayTimesInUserLocalTimeZone).to.be.a('boolean');
              expect(data.Data.DisplayTimesInUserLocalTimeZone).to.be(false);
              expect(data.Data.ShowHiddenFeatures).to.be.a('boolean');
              expect(data.Data.ShowHiddenFeatures).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLocalisedTimeZones', function() {
        it('should call getLocalisedTimeZones successfully', function(done) {
          // TODO: uncomment getLocalisedTimeZones call and complete the assertions
          /*

          instance.getLocalisedTimeZones(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiArrayResultLocalisedTimeZone);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.LocalisedTimeZone);
                expect(data.TimeZoneId).to.be.a('string');
                expect(data.TimeZoneId).to.be("");
                expect(data.IanaTimeZoneId).to.be.a('string');
                expect(data.IanaTimeZoneId).to.be("");
                expect(data.DisplayName).to.be.a('string');
                expect(data.DisplayName).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('login', function() {
        it('should call login successfully', function(done) {
          // TODO: uncomment, update parameter values for login call
          /*
          var loginModel = new Flipdish.LoginModel();
          loginModel.Email = "";
          loginModel.Password = "";

          instance.login(loginModel, function(error, data, response) {
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
      describe('loginSso', function() {
        it('should call loginSso successfully', function(done) {
          // TODO: uncomment loginSso call
          /*

          instance.loginSso(function(error, data, response) {
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
      describe('loginWithPin', function() {
        it('should call loginWithPin successfully', function(done) {
          // TODO: uncomment, update parameter values for loginWithPin call
          /*
          var loginModel = new Flipdish.LoginWithPinModel();
          loginModel.Email = "";
          loginModel.Pin = 0;

          instance.loginWithPin(loginModel, function(error, data, response) {
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
      describe('logout', function() {
        it('should call logout successfully', function(done) {
          // TODO: uncomment logout call
          /*

          instance.logout(function(error, data, response) {
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
      describe('passwordResetWithToken', function() {
        it('should call passwordResetWithToken successfully', function(done) {
          // TODO: uncomment, update parameter values for passwordResetWithToken call
          /*
          var passwordResetModel = new Flipdish.PasswordResetModel();
          passwordResetModel.TokenId = "";
          passwordResetModel.Email = "";
          passwordResetModel.Password = "";
          passwordResetModel.PasswordConfirmation = "";
          passwordResetModel.Token = "";

          instance.passwordResetWithToken(passwordResetModel, function(error, data, response) {
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
      describe('recaptchaValidate', function() {
        it('should call recaptchaValidate successfully', function(done) {
          // TODO: uncomment, update parameter values for recaptchaValidate call
          /*
          var token = "token_example";

          instance.recaptchaValidate(token, function(error, data, response) {
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
      describe('requestLoginPin', function() {
        it('should call requestLoginPin successfully', function(done) {
          // TODO: uncomment, update parameter values for requestLoginPin call and complete the assertions
          /*
          var requestLoginPinRequest = new Flipdish.RequestLoginPinModel();
          requestLoginPinRequest.Email = "";

          instance.requestLoginPin(requestLoginPinRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RequestLoginPinResponse);
            expect(data.LoginPinSentViaEmail).to.be.a('boolean');
            expect(data.LoginPinSentViaEmail).to.be(false);
            expect(data.ForceOktaLogin).to.be.a('boolean');
            expect(data.ForceOktaLogin).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('requestPasswordReset', function() {
        it('should call requestPasswordReset successfully', function(done) {
          // TODO: uncomment, update parameter values for requestPasswordReset call
          /*
          var requestPasswordResetModel = new Flipdish.RequestPasswordResetModel();
          requestPasswordResetModel.Email = "";
          requestPasswordResetModel.RecaptchaToken = "";

          instance.requestPasswordReset(requestPasswordResetModel, function(error, data, response) {
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
      describe('sendPinForPasswordReset', function() {
        it('should call sendPinForPasswordReset successfully', function(done) {
          // TODO: uncomment, update parameter values for sendPinForPasswordReset call and complete the assertions
          /*
          var requestPasswordResetRequest = new Flipdish.RequestPasswordResetModel();
          requestPasswordResetRequest.Email = "";
          requestPasswordResetRequest.RecaptchaToken = "";

          instance.sendPinForPasswordReset(requestPasswordResetRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RequestPasswordResetPinResponse);
            expect(data.PasswordResetPinSentViaEmail).to.be.a('boolean');
            expect(data.PasswordResetPinSentViaEmail).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('skipSignupStep', function() {
        it('should call skipSignupStep successfully', function(done) {
          // TODO: uncomment, update parameter values for skipSignupStep call
          /*
          var signupStepAction = "signupStepAction_example";

          instance.skipSignupStep(signupStepAction, function(error, data, response) {
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
      describe('updateAccount', function() {
        it('should call updateAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAccount call
          /*
          var updateAccountModel = new Flipdish.AccountDetailBase();
          updateAccountModel.Name = "";
          updateAccountModel.Language = "";
          updateAccountModel.TimeZoneInfoId = "";
          updateAccountModel.DisplayTimesInUserLocalTimeZone = false;
          updateAccountModel.ShowHiddenFeatures = false;

          instance.updateAccount(updateAccountModel, function(error, data, response) {
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
