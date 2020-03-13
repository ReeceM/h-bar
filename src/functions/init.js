import { config } from '../config/config'
import { initNormalise } from "./normalise"
import { styling } from "../config/styling"

/**
 *
 * @param {object} param0
 * @param {string} param0.url
 * @param {string} param0.ele The element id
 * @param {boolean} param0.dismissible
 * @param {string} param0.badge
 * @param {array} param0.secondaryLinks
 * @param {object} param0.options
 * @param {object} param0.customStyles
 * @param {function} param0.parser
 * @param {function} param0.onCompleted
 * @param {string} param0.link Manual override
 * @param {string} param0.title Manual Override
 */
export function init({
    url, /** The URL to fetch data from */
    ele,
    dismissible,
    badge,
    secondaryLinks,
    options,
    customStyles,
    onCompleted,
    parser,
    link, /** The link for the new post/article, manual override */
    title, /** The title of the post/article, manual override */
}) {
    this.url = url;

    this.ele = ele || 'h-bar';

    // we will default to false for this
    this.dismissible = dismissible || false;

    this.config = Object.assign(config, options);
    this.styling = Object.assign(styling, customStyles);

    this.secondaryLinks = secondaryLinks

    this.onCompleted = onCompleted || function () { };

    this.badge = badge || 'New';
    this.postLink = link
    this.postTitle = title

    this.theme = this.config.theme

    initNormalise(parser)

    return this
}
