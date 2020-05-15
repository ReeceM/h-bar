import { config } from '../config/config'
import { initNormalise } from "./normalise"
import { styling } from "../config/styling"

/**
 *
 * @param {object} options
 * @param {string} options.url
 * @param {string} options.ele The element id
 * @param {boolean} options.dismissible
 * @param {Date|boolean} options.dismissFor
 * @param {string} options.badge
 * @param {array} options.secondaryLinks
 * @param {object} options.headers
 * @param {object} options.customStyles
 * @param {function} options.parser
 * @param {function} options.onCompleted
 * @param {string} options.link Manual override
 * @param {string} options.title Manual Override
 */
export function init(options = {}) {
    this.url = options.url;

    this.ele = options.ele || 'h-bar';

    // we will default to false for this
    this.dismissible = options.dismissible || false;

    this.dismissFor = options.dismissFor || false;

    this.config = config;
    this.config.fetchOptions.headers = Object.assign(config.fetchOptions.headers, options.headers)
    this.styling = Object.assign(styling, options.customStyles);

    this.secondaryLinks = options.secondaryLinks

    this.onCompleted = options.onCompleted || function () { };

    this.badge = options.badge || 'New';
    this.postLink = options.link
    this.postTitle = options.title

    this.theme = options.theme

    initNormalise(options.parser)

    return this
}
