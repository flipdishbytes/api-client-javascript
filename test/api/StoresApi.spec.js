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
    instance = new Flipdish.StoresApi();
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

  describe('StoresApi', function() {
    describe('archiveStore', function() {
      it('should call archiveStore successfully', function(done) {
        //uncomment below and update the code to test archiveStore
        //instance.archiveStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignMenu', function() {
      it('should call assignMenu successfully', function(done) {
        //uncomment below and update the code to test assignMenu
        //instance.assignMenu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloneStore', function() {
      it('should call cloneStore successfully', function(done) {
        //uncomment below and update the code to test cloneStore
        //instance.cloneStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureStoreServiceCharge', function() {
      it('should call configureStoreServiceCharge successfully', function(done) {
        //uncomment below and update the code to test configureStoreServiceCharge
        //instance.configureStoreServiceCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBusinessHoursOverrideByStoreId', function() {
      it('should call createBusinessHoursOverrideByStoreId successfully', function(done) {
        //uncomment below and update the code to test createBusinessHoursOverrideByStoreId
        //instance.createBusinessHoursOverrideByStoreId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStore', function() {
      it('should call createStore successfully', function(done) {
        //uncomment below and update the code to test createStore
        //instance.createStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStoreInProperty', function() {
      it('should call createStoreInProperty successfully', function(done) {
        //uncomment below and update the code to test createStoreInProperty
        //instance.createStoreInProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBusinessHoursOverride', function() {
      it('should call deleteBusinessHoursOverride successfully', function(done) {
        //uncomment below and update the code to test deleteBusinessHoursOverride
        //instance.deleteBusinessHoursOverride(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBankAccountForStore', function() {
      it('should call getBankAccountForStore successfully', function(done) {
        //uncomment below and update the code to test getBankAccountForStore
        //instance.getBankAccountForStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBusinessHours', function() {
      it('should call getBusinessHours successfully', function(done) {
        //uncomment below and update the code to test getBusinessHours
        //instance.getBusinessHours(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBusinessHoursOverrideByStoreId', function() {
      it('should call getBusinessHoursOverrideByStoreId successfully', function(done) {
        //uncomment below and update the code to test getBusinessHoursOverrideByStoreId
        //instance.getBusinessHoursOverrideByStoreId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEndOfDayReport', function() {
      it('should call getEndOfDayReport successfully', function(done) {
        //uncomment below and update the code to test getEndOfDayReport
        //instance.getEndOfDayReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPreOrderConfig', function() {
      it('should call getPreOrderConfig successfully', function(done) {
        //uncomment below and update the code to test getPreOrderConfig
        //instance.getPreOrderConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPreOrderPreview', function() {
      it('should call getPreOrderPreview successfully', function(done) {
        //uncomment below and update the code to test getPreOrderPreview
        //instance.getPreOrderPreview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProcessingFeeConfigsByStoreId', function() {
      it('should call getProcessingFeeConfigsByStoreId successfully', function(done) {
        //uncomment below and update the code to test getProcessingFeeConfigsByStoreId
        //instance.getProcessingFeeConfigsByStoreId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProcessingFeeConfigsByStoreIdAndPaymentAccountType', function() {
      it('should call getProcessingFeeConfigsByStoreIdAndPaymentAccountType successfully', function(done) {
        //uncomment below and update the code to test getProcessingFeeConfigsByStoreIdAndPaymentAccountType
        //instance.getProcessingFeeConfigsByStoreIdAndPaymentAccountType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreById', function() {
      it('should call getStoreById successfully', function(done) {
        //uncomment below and update the code to test getStoreById
        //instance.getStoreById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreDeliveryFeeConfig', function() {
      it('should call getStoreDeliveryFeeConfig successfully', function(done) {
        //uncomment below and update the code to test getStoreDeliveryFeeConfig
        //instance.getStoreDeliveryFeeConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreFeeConfig', function() {
      it('should call getStoreFeeConfig successfully', function(done) {
        //uncomment below and update the code to test getStoreFeeConfig
        //instance.getStoreFeeConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreHeadersByAppId', function() {
      it('should call getStoreHeadersByAppId successfully', function(done) {
        //uncomment below and update the code to test getStoreHeadersByAppId
        //instance.getStoreHeadersByAppId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreLeadTimes', function() {
      it('should call getStoreLeadTimes successfully', function(done) {
        //uncomment below and update the code to test getStoreLeadTimes
        //instance.getStoreLeadTimes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreNetSales', function() {
      it('should call getStoreNetSales successfully', function(done) {
        //uncomment below and update the code to test getStoreNetSales
        //instance.getStoreNetSales(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreServiceCharge', function() {
      it('should call getStoreServiceCharge successfully', function(done) {
        //uncomment below and update the code to test getStoreServiceCharge
        //instance.getStoreServiceCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStores', function() {
      it('should call getStores successfully', function(done) {
        //uncomment below and update the code to test getStores
        //instance.getStores(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoresByAppId', function() {
      it('should call getStoresByAppId successfully', function(done) {
        //uncomment below and update the code to test getStoresByAppId
        //instance.getStoresByAppId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoresByStoreIdWithValidations', function() {
      it('should call getStoresByStoreIdWithValidations successfully', function(done) {
        //uncomment below and update the code to test getStoresByStoreIdWithValidations
        //instance.getStoresByStoreIdWithValidations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publishStore', function() {
      it('should call publishStore successfully', function(done) {
        //uncomment below and update the code to test publishStore
        //instance.publishStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putStoreDeliveryFeeConfig', function() {
      it('should call putStoreDeliveryFeeConfig successfully', function(done) {
        //uncomment below and update the code to test putStoreDeliveryFeeConfig
        //instance.putStoreDeliveryFeeConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setBusinessHours', function() {
      it('should call setBusinessHours successfully', function(done) {
        //uncomment below and update the code to test setBusinessHours
        //instance.setBusinessHours(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setPreOrdeEnabled', function() {
      it('should call setPreOrdeEnabled successfully', function(done) {
        //uncomment below and update the code to test setPreOrdeEnabled
        //instance.setPreOrdeEnabled(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setStoreLeadTimes', function() {
      it('should call setStoreLeadTimes successfully', function(done) {
        //uncomment below and update the code to test setStoreLeadTimes
        //instance.setStoreLeadTimes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storesSetPropertyId', function() {
      it('should call storesSetPropertyId successfully', function(done) {
        //uncomment below and update the code to test storesSetPropertyId
        //instance.storesSetPropertyId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('supportedSalesChannelsTypes', function() {
      it('should call supportedSalesChannelsTypes successfully', function(done) {
        //uncomment below and update the code to test supportedSalesChannelsTypes
        //instance.supportedSalesChannelsTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unpublishStore', function() {
      it('should call unpublishStore successfully', function(done) {
        //uncomment below and update the code to test unpublishStore
        //instance.unpublishStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePreOrderConfig', function() {
      it('should call updatePreOrderConfig successfully', function(done) {
        //uncomment below and update the code to test updatePreOrderConfig
        //instance.updatePreOrderConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStore', function() {
      it('should call updateStore successfully', function(done) {
        //uncomment below and update the code to test updateStore
        //instance.updateStore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStoreAddress', function() {
      it('should call updateStoreAddress successfully', function(done) {
        //uncomment below and update the code to test updateStoreAddress
        //instance.updateStoreAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStoreAddressCoordinates', function() {
      it('should call updateStoreAddressCoordinates successfully', function(done) {
        //uncomment below and update the code to test updateStoreAddressCoordinates
        //instance.updateStoreAddressCoordinates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStoreAddressForm', function() {
      it('should call updateStoreAddressForm successfully', function(done) {
        //uncomment below and update the code to test updateStoreAddressForm
        //instance.updateStoreAddressForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
