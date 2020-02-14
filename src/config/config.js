/**
 * The default configuration for the package
 *
 * @var {object} config
 */
export const config = {
    url: '',
    theme: "gray",
    secondaryLinks: [],
    onCompleted: null,
    fetchOptions: {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Accept': 'application/json',
            'h-bar-version': process.env.APP_VERSION
        },
        redirect: 'follow', // manual, *follow, error
    }
}