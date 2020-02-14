import "./styles.css"
import { domReady, newElement } from "./utils"
import { styling, themes } from "./config/styling"
import { config } from './config/config'

process.env.APP_VERSION = 'h-bar v1.0.0'

const hBar = {
    /**
     * Initialise the hBar package
     * @param {string} url The endpoint to get data from
     * @param {function} callback The function that is called when done
     *
     * @returns {hBar}
     */
    init({ url, onCompleted, postLink, postTitle, secondaryLinks, options, customStyles}) {
        this.url = url;
        this.config = { ...config, ...options };
        this.styling = { ...styling, ...customStyles };
        this.callback = onCompleted;
        this.postLink = postLink
        this.postTitle = postTitle
        this.secondaryLinks = secondaryLinks
        this.theme = this.config.theme
        return this
    },

    fetchData() {
        fetch(this.url, this.config.fetchOptions)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (typeof json == "object") {
                    this.normaliseResponse(json[0]);
                    this.render();
                }
            });
    },
    /**
     * gets the data out
     */
    normaliseResponse({ title: { rendered }, link}) {
        this.postLink = link
        this.postTitle = rendered
    },

    /**
     * Render the element.
     */
    render() {
        domReady().then(() => {

            let secondaryLinkList = this.createSecondaryLinks()
            let secondaryElement = newElement('div', {
                children: secondaryLinkList,
                classes: `${this.styling.linkWrapper} ${themes[this.config.theme].linkWrapper}`
            })

            let badge = newElement('span', {classes: `${this.styling.badge} ${themes[this.config.theme].badge}`})
            let postLink = newElement('a', { classes: `${this.styling.postTitle} ${themes[this.config.theme].postTitle}` })

            badge.innerText = 'NEW';
            postLink.href = this.postLink;
            postLink.innerText = this.postTitle;

            let postElement = newElement('div', {
                classes: `${this.styling.linkWrapper} ${themes[this.config.theme].linkWrapper}`,
                children: [badge, postLink]
            })

            let _hbar = newElement('div', {
                classes: `${this.styling.wrapper} ${themes[this.config.theme].wrapper}`,
                children: [postElement, secondaryElement]
            })

            document.getElementById('h-bar').appendChild(_hbar)
        })
    },

    /**
     * Creates the secondary links for the bar.
     */
    createSecondaryLinks() {
        if (!this.secondaryLinks) return [];

        return this.secondaryLinks.map(({ title, link }) => {
                let style = `${this.styling.secondaryLink} ${themes[this.config.theme].secondaryLink}`;
                let butter = newElement('a', { classes: style })
                butter.href = link;
                butter.innerText = title;

                return butter;
            }, this);
    }
}

export default hBar
