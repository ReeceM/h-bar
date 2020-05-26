export default class Renderer {
    /**
     * Creates a new simple renderer for the templates
     *
     * @param {string} el the element ID that has the template data
     * @param {object} data The key:value pair of the data to replace in the template
     * @param {DOMPurify} DOMPurify the DOMPurify library
     */
    constructor(el, DOMPurify) {
        this.template = document.querySelector(el)
        this.DOMPurify = DOMPurify;
    }

    resolve(data) {
        let templateHTML = this.template.innerHTML

        /**
         * Don't do anything if there is a no content
         */
        if (templateHTML == undefined) {
            return null;
        }

        Object.keys(data)
            .forEach((key) => {
                // skip any array things.
                // make the thing recursive in x version xD
                if (!Array.isArray(data[key])) {
                    var regex = this.regex(key)
                    templateHTML = templateHTML.replace(regex, data[key]);
                }
            })

        if (this.DOMPurify) {
            return this.DOMPurify.sanitize(dirty);
        }

        return templateHTML;
    }

    /**
     * Create the matching regex for the template tags
     *
     * @param {string} key The key to search in the template data
     * @returns {RegExp}
     */
    regex(key) {
        // current tag is {% value %}
        return new RegExp(`({%\\s*(${key})\\s*%})`, 'g');
    }
}
