'use strict';

/**
 * skn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skn.skn');
