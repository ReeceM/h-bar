/**
 * h-bar banner and dynamic announcement library
 *
 * @version 2.0.0
 * @license MIT
 * @copyright @ReeceM
 */
import "./styles.css"

import { init } from './functions/init'
import { normaliser } from "./functions/normalise"
import { getElementOptions, isDismissed } from "./utils"
import Renderer from './functions/renderer'
import Banner from './banner/banner'
import { config } from "./config/config"

/**
 * Set all the configuration options for the hBar library
 *
 * @property {string} el The element id
 * @property {string} url
 * @property {boolean} dismissible
 * @property {Date|boolean} dismissFor
 * @property {string} badge
 * @property {DOMPurify} DOMPurify the DOMPurify library
 * @property {array} secondaryLinks
 * @property {object} headers
 * @property {object} customStyles
 * @property {function} parser
 * @property {object} renderer
 * @property {function} onCompleted
 * @property {function} onFailure
 * @property {string} link Manual override
 * @property {string} title Manual Override
 */
const hBar = {
    version: config.version,
    rendered: false,
    fetching: false,
    usingBanner: true,

    /**
     * Set all the configuration options for the hBar library
     *
     * @param {object} options
     * @param {string} options.el The element id
     * @param {string} options.url
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
    init: function (options = {}) {
        Object.assign(this, init(options))

        this.$elementOpt = getElementOptions(document.querySelector(this.$el))

        if (this.$elementOpt.template) {
            this.renderer = new Renderer(this.$elementOpt.template, this.DOMPurify)
        } else if (options.renderer) {
            /**
             * @todo this was added on a whim... bad idea possibly
             */
            this.renderer = new options.renderer(this)
        } else {
            this.renderer = new Banner(this)
        }

        Object.defineProperties(this, {
            'renderer': {
                configurable: false,
                writable: false,
            }
        })
    },

    /**
     * Gets the data from the url endpoint.
     *
     * This is called by the
     */
    fetch: function () {

        if (this.rendered) return

        if (isDismissed()) return

        this.fetching = true

        fetch(this.url, this.fetchOptions)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (typeof json == "object") {
                    this.render(json)
                } else {
                    console.error(`${this.url} Did not return an object`)
                }

                this.fetching = false
            })
            .catch(error => {
                console.error(error)
                this.fetching = false
                this.rendered = false
            })
    },

    /**
     * Render the response to the actual message
     *
     * @param {Object} result
     */
    render: function (result) {

        normaliser(result)
            .then((result) => {
                let element = document.querySelector(this.$el)

                element.innerHTML = this.renderer.resolve(result)
                element.__hbar__ = this

                this.rendered = true

                this.onCompleted({ __hbar__: this, result: element })
            })
            .catch(error => {
                console.error(error)
                this.destroy()
                this.fetching = false
                this.rendered = false
                this.onFailure({ __hbar__: this })
            })
    },

    /**
     * Removes the element in the case of it having issues.
     * Rather an aggressive option.
     *
     * Also used when dismissing.
     */
    destroy: function () {
        try {
            document.querySelector(this.$el).innerHTML = ''
            return true
        } catch (error) {
            console.error('Unable to destroy the h-bar wrapper')
            console.error(error)
        }
        return false
    },
}

Object.defineProperties(hBar, {
    /**
     * Config method should not be changed
     */
    'init': {
        writable: false,
        configurable: false,
    },
    'destroy': {
        writable: false,
        configurable: false,
    },
    'fetch': {
        writable: false,
        configurable: false,
    }
})

export default hBar
