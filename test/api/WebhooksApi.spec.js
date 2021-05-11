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
    instance = new Flipdish.WebhooksApi();
  });

  describe('(package)', function() {
    describe('WebhooksApi', function() {
      describe('craeteWebhookSubscription', function() {
        it('should call craeteWebhookSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for craeteWebhookSubscription call and complete the assertions
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscription = new Flipdish.WebhookSubscription();
          webhookSubscription.Id = 0;
          webhookSubscription.OwnerUserId = 0;
          webhookSubscription.Version = "";
          webhookSubscription.EventNames = [""];
          webhookSubscription.CallbackUrl = "";
          webhookSubscription.Enabled = false;
          webhookSubscription.VerifyToken = "";
          var appId = "appId_example";

          instance.craeteWebhookSubscription(oauthAppId, webhookSubscription, appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiIntegerResult);
            expect(data.Data).to.be.a('number');
            expect(data.Data).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createWebhookSubscriptionEventNames', function() {
        it('should call createWebhookSubscriptionEventNames successfully', function(done) {
          // TODO: uncomment, update parameter values for createWebhookSubscriptionEventNames call
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = 56;
          var eventName = "eventName_example";
          var appId = "appId_example";

          instance.createWebhookSubscriptionEventNames(oauthAppId, webhookSubscriptionId, eventName, appId, function(error, data, response) {
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
      describe('deleteWebhookSubscription', function() {
        it('should call deleteWebhookSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteWebhookSubscription call
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = 56;
          var appId = "appId_example";

          instance.deleteWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, function(error, data, response) {
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
      describe('deleteWebhookSubscriptionEventName', function() {
        it('should call deleteWebhookSubscriptionEventName successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteWebhookSubscriptionEventName call
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = 56;
          var eventName = "eventName_example";
          var appId = "appId_example";

          instance.deleteWebhookSubscriptionEventName(oauthAppId, webhookSubscriptionId, eventName, appId, function(error, data, response) {
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
      describe('getWebhookEventNames', function() {
        it('should call getWebhookEventNames successfully', function(done) {
          // TODO: uncomment, update parameter values for getWebhookEventNames call and complete the assertions
          /*
          var appId = "appId_example";

          instance.getWebhookEventNames(appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiStringArrayResult);
            {
              let dataCtr = data.Data;
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
      describe('getWebhookEventNamesBySubscriptionId', function() {
        it('should call getWebhookEventNamesBySubscriptionId successfully', function(done) {
          // TODO: uncomment, update parameter values for getWebhookEventNamesBySubscriptionId call and complete the assertions
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = 56;
          var appId = "appId_example";

          instance.getWebhookEventNamesBySubscriptionId(oauthAppId, webhookSubscriptionId, appId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiStringArrayResult);
            {
              let dataCtr = data.Data;
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
      describe('getWebhookEventSample', function() {
        it('should call getWebhookEventSample successfully', function(done) {
          // TODO: uncomment, update parameter values for getWebhookEventSample call and complete the assertions
          /*
          var eventName = "eventName_example";
          var appId = "appId_example";
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = "webhookSubscriptionId_example";
          var opts = {};
          opts.version = "version_example";

          instance.getWebhookEventSample(eventName, appId, oauthAppId, webhookSubscriptionId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.WebhookEventSample);
            expect(data.Type).to.be.a('string');
            expect(data.Type).to.be("");
            expect(data.CreateTime).to.be.a(Date);
            expect(data.CreateTime).to.be(new Date());
            expect(data.Body).to.be.a(Flipdish.FlipdishEventBase);
                  expect(data.Body.EventName).to.be.a('string');
              expect(data.Body.EventName).to.be("");
              expect(data.Body.FlipdishEventId).to.be.a('string');
              expect(data.Body.FlipdishEventId).to.be("00000000-0000-0000-0000-000000000000");
              expect(data.Body.CreateTime).to.be.a(Date);
              expect(data.Body.CreateTime).to.be(new Date());
              expect(data.Body.Position).to.be.a('number');
              expect(data.Body.Position).to.be(0);
              expect(data.Body.AppId).to.be.a('string');
              expect(data.Body.AppId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWebhookLogs', function() {
        it('should call getWebhookLogs successfully', function(done) {
          // TODO: uncomment, update parameter values for getWebhookLogs call and complete the assertions
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = 56;
          var start = new Date("2013-10-20T19:20:30+01:00");
          var end = new Date("2013-10-20T19:20:30+01:00");
          var appId = "appId_example";
          var opts = {};
          opts.page = 56;
          opts.limit = 56;

          instance.getWebhookLogs(oauthAppId, webhookSubscriptionId, start, end, appId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiPaginationResultWebhookLog);
            expect(data.Page).to.be.a('number');
            expect(data.Page).to.be(0);
            expect(data.Limit).to.be.a('number');
            expect(data.Limit).to.be(0);
            expect(data.TotalRecordCount).to.be.a('number');
            expect(data.TotalRecordCount).to.be(0);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.WebhookLog);
                expect(data.WebhookSubscriptionOwnerUserId).to.be.a('number');
                expect(data.WebhookSubscriptionOwnerUserId).to.be(0);
                expect(data.EventCreated).to.be.a('string');
                expect(data.EventCreated).to.be("");
                expect(data.WebhookTriggered).to.be.a('string');
                expect(data.WebhookTriggered).to.be("");
                expect(data.WebhookEventName).to.be.a('string');
                expect(data.WebhookEventName).to.be("");
                expect(data.WebhookSubscriptionCallbackUrl).to.be.a('string');
                expect(data.WebhookSubscriptionCallbackUrl).to.be("");
                expect(data.HttpResponseStatusCode).to.be.a('string');
                expect(data.HttpResponseStatusCode).to.be("");
                expect(data.HttpResponseStatus).to.be.a('string');
                expect(data.HttpResponseStatus).to.be("");
                expect(data.RequestHeaders).to.be.a('string');
                expect(data.RequestHeaders).to.be("");
                expect(data.RequestBody).to.be.a('string');
                expect(data.RequestBody).to.be("");
                expect(data.ResponseHeaders).to.be.a('string');
                expect(data.ResponseHeaders).to.be("");
                expect(data.ResponseBody).to.be.a('string');
                expect(data.ResponseBody).to.be("");
                expect(data.Duration).to.be.a('string');
                expect(data.Duration).to.be("");
                expect(data.RetryCount).to.be.a('number');
                expect(data.RetryCount).to.be(0);
                expect(data.FlipdishWebhookId).to.be.a('string');
                expect(data.FlipdishWebhookId).to.be("00000000-0000-0000-0000-000000000000");
                expect(data.Version).to.be.a('string');
                expect(data.Version).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWebhookSubscriptions', function() {
        it('should call getWebhookSubscriptions successfully', function(done) {
          // TODO: uncomment, update parameter values for getWebhookSubscriptions call and complete the assertions
          /*
          var oauthAppId = "oauthAppId_example";
          var appId = "appId_example";
          var opts = {};
          opts.page = 56;
          opts.limit = 56;

          instance.getWebhookSubscriptions(oauthAppId, appId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Flipdish.RestApiPaginationResultWebhookSubscription);
            expect(data.Page).to.be.a('number');
            expect(data.Page).to.be(0);
            expect(data.Limit).to.be.a('number');
            expect(data.Limit).to.be(0);
            expect(data.TotalRecordCount).to.be.a('number');
            expect(data.TotalRecordCount).to.be(0);
            {
              let dataCtr = data.Data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Flipdish.WebhookSubscription);
                expect(data.Id).to.be.a('number');
                expect(data.Id).to.be(0);
                expect(data.OwnerUserId).to.be.a('number');
                expect(data.OwnerUserId).to.be(0);
                expect(data.Version).to.be.a('string');
                expect(data.Version).to.be("");
                {
                  let dataCtr = data.EventNames;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.CallbackUrl).to.be.a('string');
                expect(data.CallbackUrl).to.be("");
                expect(data.Enabled).to.be.a('boolean');
                expect(data.Enabled).to.be(false);
                expect(data.VerifyToken).to.be.a('string');
                expect(data.VerifyToken).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateWebhookSubscription', function() {
        it('should call updateWebhookSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for updateWebhookSubscription call
          /*
          var oauthAppId = "oauthAppId_example";
          var webhookSubscriptionId = 56;
          var webhookSubscription = new Flipdish.WebhookSubscription();
          webhookSubscription.Id = 0;
          webhookSubscription.OwnerUserId = 0;
          webhookSubscription.Version = "";
          webhookSubscription.EventNames = [""];
          webhookSubscription.CallbackUrl = "";
          webhookSubscription.Enabled = false;
          webhookSubscription.VerifyToken = "";
          var appId = "appId_example";

          instance.updateWebhookSubscription(oauthAppId, webhookSubscriptionId, webhookSubscription, appId, function(error, data, response) {
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
