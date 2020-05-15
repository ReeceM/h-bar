/**
 * The default configuration for the package
 *
 * @var {object} config
 * @var {string} config.url
 * @var {string} config.ele
 * @var {boolean} config.dismissible
 * @var {Date} config.dismissFor
 * @var {string} config.badge
 * @var {string} config.theme
 * @var {array} config.secondaryLinks
 * @var {object} config.customStyles
 * @var {function} config.onCompleted
 * @var {function} config.parser
 * @var {string} config.link
 * @var {string} config.title
 * @var {object} config.fetchOptions
 */
export const config = {
    url: '',
    ele: 'h-bar',
    dismissible: false,
    dismissFor: null,
    badge: 'New',
    theme: "gray",
    secondaryLinks: [],
    customStyles: {},
    onCompleted: () => { },
    parser: null,
    link: null,
    title: null,
    fetchOptions: {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Accept': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
    }
}
