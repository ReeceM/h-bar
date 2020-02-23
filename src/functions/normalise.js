/**
 * Gets the normal format of the returned API data
 *
 * This is split up just incase it needs to be expanded feature wise
 */

 /**
  * Converts the JSON result form the Wordpress wp-json api.
  *
  * @param {string} data.title.rendered
  * @param {string} data.link
  * @return {object} {title, link}
  */
function wpJsonParser(data) {
    let { title: { rendered }, link } = data[0];

    if (rendered == undefined) {
        console.error("WP-json response doesn't have real values %o", data[0]);
    }

    return {
        title: rendered,
        link: link
    };
}

/**
 * Default normaliser parser assignment.
 */
let normaliseParser = wpJsonParser

/**
 * Sets the parser for the data normaliser.
 *
 * @param {Function} parser
 */
export function initNormalise(parser) {
    // if the parser is a function set it
    // if not just use the default one
    normaliseParser = typeof parser == 'function'
        ? parser
        : wpJsonParser;
}

/**
 * Uses the defined parser to normalise the data that comes out.
 *
 * @param {object} data Mixed incoming data
 */
export function normaliser(data) {
    return new Promise((resolve, reject) => {
        if (data) {
            try {
                resolve(normaliseParser(data));
            } catch (error) {
                reject(error);
            }
        }

        reject({ "error": "No Data", data: data });
    })
}
