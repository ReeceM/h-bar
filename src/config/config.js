/**
 * The default configuration for the package
 *
 * @var {object} config
 * @var {object} config.fetchOptions
 * @var {string} config.version
 * @var {bool} config.production
 */
export const config = {
    fetchOptions: {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Accept': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
    },
    version: require('../../package.json').version,
    production: process.env.production
}
