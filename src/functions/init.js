import { themes } from '../config/styling';
import { config } from '../config/config'
import { initNormalise } from "./normalise"

/**
 * Set all the configuration options for the hBar library
 *
 * @param {object} options
 * @param {string} options.el The element id
 * @param {string} options.template The template id
 * @param {string} options.url
 * @param {boolean} options.dismissible
 * @param {Date|boolean} options.dismissFor
 * @param {string} options.badge
 * @param {array} options.secondaryLinks
 * @param {object} options.headers
 * @param {object} options.customStyles
 * @param {function} options.parser
 * @param {function} options.onCompleted
 * @param {function} options.onFailure
 * @param {string} options.link Manual override
 * @param {string} options.title Manual Override
 */
export function init(options = {}) {
    let configuration = {};

    configuration.$el = options.el;

    configuration.url = options.url;
    // if the user has dompurify installed. It can be optional
    configuration.DOMPurify = options.DOMPurify || null;

    configuration.theme = themes[options.theme] || 'grey';
    configuration.badge = options.badge || 'New';

    // we will default to false for configuration
    configuration.dismissible = options.dismissible || false;
    configuration.dismissFor = options.dismissFor || false;

    configuration.secondaryLinks = options.secondaryLinks || [];

    /**
     * These will be the fallbacks if something isn't found.
     */
    configuration.title = options.title || null;
    configuration.link = options.link || null;

    configuration.onCompleted = options.onCompleted || function () { };
    configuration.onFailure = options.onFailure || function () { };

    if (typeof options.fetch == 'function') {
        configuration.fetch = options.fetch;
    }
    configuration.fetchOptions = config.fetchOptions;
    configuration.fetchOptions.headers = Object.assign(config.fetchOptions.headers, options.headers)

    initNormalise(options.parser || null)

    return configuration;
}
