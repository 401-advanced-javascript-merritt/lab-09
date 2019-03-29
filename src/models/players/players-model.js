'use strict';

const Model = require('../mongo-model.js');
const schema = require('./players-schema.js');
/**
 * @param  {} schema
 */
class Players extends Model {}

module.exports = new Players(schema);

