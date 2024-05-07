'use strict';

/**
 * cmp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cmp.cmp');
