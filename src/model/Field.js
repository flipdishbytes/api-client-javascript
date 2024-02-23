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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ValidValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.Field = factory(root.Flipdish.ApiClient, root.Flipdish.ValidValue);
  }
}(this, function(ApiClient, ValidValue) {
  'use strict';

  /**
   * The Field model module.
   * @module model/Field
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Field</code>.
   * @alias module:model/Field
   * @class
   * @param Name {String} 
   * @param Description {String} 
   * @param Key {String} 
   * @param Position {Number} 
   * @param FieldType {module:model/Field.FieldTypeEnum} 
   */
  var exports = function(Name, Description, Key, Position, FieldType) {
    this.Name = Name;
    this.Description = Description;
    this.Key = Key;
    this.Position = Position;
    this.FieldType = FieldType;
  };

  /**
   * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Field} obj Optional instance to populate.
   * @return {module:model/Field} The populated <code>Field</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Key'))
        obj.Key = ApiClient.convertToType(data['Key'], 'String');
      if (data.hasOwnProperty('Tooltip'))
        obj.Tooltip = ApiClient.convertToType(data['Tooltip'], 'String');
      if (data.hasOwnProperty('Position'))
        obj.Position = ApiClient.convertToType(data['Position'], 'Number');
      if (data.hasOwnProperty('DefaultValue'))
        obj.DefaultValue = ApiClient.convertToType(data['DefaultValue'], 'String');
      if (data.hasOwnProperty('ValidValues'))
        obj.ValidValues = ApiClient.convertToType(data['ValidValues'], [ValidValue]);
      if (data.hasOwnProperty('ValidationRegex'))
        obj.ValidationRegex = ApiClient.convertToType(data['ValidationRegex'], 'String');
      if (data.hasOwnProperty('FieldType'))
        obj.FieldType = ApiClient.convertToType(data['FieldType'], 'String');
      if (data.hasOwnProperty('IsFlipdishRestricted'))
        obj.IsFlipdishRestricted = ApiClient.convertToType(data['IsFlipdishRestricted'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * @member {String} Key
   */
  exports.prototype.Key = undefined;

  /**
   * @member {String} Tooltip
   */
  exports.prototype.Tooltip = undefined;

  /**
   * @member {Number} Position
   */
  exports.prototype.Position = undefined;

  /**
   * @member {String} DefaultValue
   */
  exports.prototype.DefaultValue = undefined;

  /**
   * @member {Array.<module:model/ValidValue>} ValidValues
   */
  exports.prototype.ValidValues = undefined;

  /**
   * @member {String} ValidationRegex
   */
  exports.prototype.ValidationRegex = undefined;

  /**
   * @member {module:model/Field.FieldTypeEnum} FieldType
   */
  exports.prototype.FieldType = undefined;

  /**
   * @member {Boolean} IsFlipdishRestricted
   */
  exports.prototype.IsFlipdishRestricted = undefined;



  /**
   * Allowed values for the <code>FieldType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FieldTypeEnum = {
    /**
     * value: "Text"
     * @const
     */
    Text: "Text",

    /**
     * value: "TextArea"
     * @const
     */
    TextArea: "TextArea",

    /**
     * value: "Integer"
     * @const
     */
    Integer: "Integer",

    /**
     * value: "Decimal"
     * @const
     */
    Decimal: "Decimal",

    /**
     * value: "Date"
     * @const
     */
    _Date: "Date",

    /**
     * value: "DateTime"
     * @const
     */
    DateTime: "DateTime",

    /**
     * value: "Time"
     * @const
     */
    Time: "Time",

    /**
     * value: "Select"
     * @const
     */
    Select: "Select",

    /**
     * value: "Boolean"
     * @const
     */
    _Boolean: "Boolean",

    /**
     * value: "ActionButton"
     * @const
     */
    ActionButton: "ActionButton"
  };

  return exports;

}));
