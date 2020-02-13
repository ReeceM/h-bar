// Thanks @stimulus:
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
 * @param {string} element element tag name
 */
export function createElement(element) {
    return document.createElement(element)
}

export function addClasses(element = null, classes = '') {
    let splitClasses = classes.split(' ')

    element.classList.add(...splitClasses);

    return element
}
