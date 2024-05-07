'use strict';

/**
 * skincare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skincare.skincare');
