// Thanks @stimulus: and I got it from @alpinejs
// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
export function domReady() {
    return new Promise(resolve => {
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", resolve)
        } else {
            resolve()
        }
    })
}

/**
 * Create a new document element
 *
 * the documentFragment bit is abstracted from https://codereview.stackexchange.com/a/187006
 * innerHTML and outerHTML with a reduce function is meh
 *
 * @param {string} element element tag name
 * @param {object}
 */
export function newElement(element, { children, classes }) {
    const parent = document.createElement(element)
    const documentFragment = document.createDocumentFragment()

    addClasses(parent, classes || '')

    if (children) /*run*/ {
        children.forEach(child => {
            if (Array.isArray(child)) {

                child.forEach(child => documentFragment.appendChild(child))
            } else {
                documentFragment.appendChild(child)
            }
        })
    }

    parent.appendChild(documentFragment)
    return parent
}

export function addClasses(element, classes = '') {
    const splitClasses = classes.trim().split(' ')
    element.classList.add(...splitClasses)

    return element
}

/**
 * Binds all the methods on a JS Class to the `this` context of the class.
 * Adapted from https://github.com/sindresorhus/auto-bind
 * @param {object} self The `this` context of the class
 * @return {object} The `this` context of the class
 */
export function autoBind(self) {
    const keys = Object.getOwnPropertyNames(self.constructor.prototype)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const val = self[key]
        if (key !== 'constructor' && typeof val === 'function') {
            self[key] = val.bind(self)
        }
    }

    return self
}

/**
 * Gets the data-* values that area related to the config of the template options.
 *
 * @param {HTMLElement} element
 * @return {Object}
 */
export function getElementOptions(element) {
    return {
        template: element.dataset.template,
        html: element.getAttribute('has-html') == "" ? true : false,
        dismissFor: element.dataset.dismissFor || null,
    }
}

/**
 * Determines if the banner has been dismissed.
 *
 * @todo add option to check the hash on the stored value
 *
 * @returns boolean
 */
export function isDismissed() {

    if (localStorage) {
        var dismissDate = localStorage.getItem('h-bar_dismiss_for')
        if (!dismissDate) {
            return false
        }

        dismissDate = dismissDate
        var ourDate = (new Date()).getTime()

        if (ourDate <= dismissDate) {
            return true
        }
    }

    return false
}
