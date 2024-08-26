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
    instance = new Flipdish.AuditLogsApi();
  });

  describe('(package)', function() {
    describe('AuditLogsApi', function() {
      describe('addOrderAuditLog', function() {
        it('should call addOrderAuditLog successfully', function(done) {
          // TODO: uncomment, update parameter values for addOrderAuditLog call
          /*
          var orderId = 56;
          var externalEventCreate = [new Flipdish.ExternalStoreAuditLog()];
          externalEventCreate[0].ExternalCreateTime = new Date();
          externalEventCreate[0].StoreId = 0;
          externalEventCreate[0].Description = "";
          externalEventCreate[0].Source = "";
          externalEventCreate[0].Version = "";
          externalEventCreate[0].DescriptionFormat = "";
          externalEventCreate[0].DescriptionFields = "";
          externalEventCreate[0].DescriptionId = "";
          externalEventCreate[0].Ref1 = "";
          externalEventCreate[0].Ref2 = "";
          externalEventCreate[0].Ref3 = "";
          externalEventCreate[0].Ref4 = "";
          externalEventCreate[0].OrderId = 0;
          externalEventCreate[0].Tags = [""];
          externalEventCreate[0].FieldChanges = [new Flipdish.AuditLogFieldChangeInformation()];
          externalEventCreate[0].FieldChanges[0].Path = "";
          externalEventCreate[0].FieldChanges[0].Name = "";
          externalEventCreate[0].FieldChanges[0].Key = "";
          externalEventCreate[0].FieldChanges[0].OldValue = "";
          externalEventCreate[0].FieldChanges[0].NewValue = "";

          instance.addOrderAuditLog(orderId, externalEventCreate, function(error, data, response) {
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
      describe('addStoreAuditLogEvent', function() {
        it('should call addStoreAuditLogEvent successfully', function(done) {
          // TODO: uncomment, update parameter values for addStoreAuditLogEvent call
          /*
          var storeId = 56;
          var externalEventCreate = [new Flipdish.ExternalStoreAuditLog()];
          externalEventCreate[0].ExternalCreateTime = new Date();
          externalEventCreate[0].StoreId = 0;
          externalEventCreate[0].Description = "";
          externalEventCreate[0].Source = "";
          externalEventCreate[0].Version = "";
          externalEventCreate[0].DescriptionFormat = "";
          externalEventCreate[0].DescriptionFields = "";
          externalEventCreate[0].DescriptionId = "";
          externalEventCreate[0].Ref1 = "";
          externalEventCreate[0].Ref2 = "";
          externalEventCreate[0].Ref3 = "";
          externalEventCreate[0].Ref4 = "";
          externalEventCreate[0].OrderId = 0;
          externalEventCreate[0].Tags = [""];
          externalEventCreate[0].FieldChanges = [new Flipdish.AuditLogFieldChangeInformation()];
          externalEventCreate[0].FieldChanges[0].Path = "";
          externalEventCreate[0].FieldChanges[0].Name = "";
          externalEventCreate[0].FieldChanges[0].Key = "";
          externalEventCreate[0].FieldChanges[0].OldValue = "";
          externalEventCreate[0].FieldChanges[0].NewValue = "";

          instance.addStoreAuditLogEvent(storeId, externalEventCreate, function(error, data, response) {
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
