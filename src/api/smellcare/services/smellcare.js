'use strict';

/**
 * smellcare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smellcare.smellcare');
