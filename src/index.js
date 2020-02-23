/**
 * h-bar announcement banner
 *
 * @version 0.2.0
 * @author ReeceM
 */
import "./styles.css"
import {init} from "./functions/init"
import { themes } from "./config/styling"
import { domReady, newElement } from "./utils"
import { normaliser } from "./functions/normalise"

const hBar = {
    /**
     * h-bar version number
    */
    version: "0.2.0",

    /**
     * Initialise the hBar package
     *
     * @inheritdoc
     * @returns {hBar}
     */
    init: init,

    /**
     * Fetch the data from the endpoint
     */
    fetchData() {
        fetch(this.url, this.config.fetchOptions)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (typeof json == "object") {
                    normaliser(json)
                        .then(({ title, link, secondaryLinks }) => {
                            this.postTitle = title
                            this.postLink = link
                            this.secondaryLinks = secondaryLinks || []

                            this.render()
                        })
                        .catch(error => {
                            console.error(error)
                            this.destroy();
                        });
                } else {
                    console.error(`${this.url} Did not return an object`);
                }
            });
    },

    /**
     * Render the element.
     */
    render() {
        domReady().then(() => {

            let secondaryLinkList = this.createSecondaryLinks()
            let secondaryElement = newElement('div', {
                children: secondaryLinkList,
                classes: `${this.styling.linkWrapper} ${themes[this.theme].linkWrapper}`
            })

            let badge = newElement('span', {classes: `${this.styling.badge} ${themes[this.theme].badge}`})
            let postLink = newElement('a', { classes: `${this.styling.postTitle} ${themes[this.theme].postTitle}` })

            badge.innerText = this.badge;
            postLink.href = this.postLink;
            postLink.innerText = this.postTitle;

            let postElement = newElement('div', {
                classes: `${this.styling.linkWrapper} ${themes[this.theme].linkWrapper}`,
                children: [badge, postLink]
            })

            let _hbar = newElement('div', {
                classes: `${this.styling.wrapper} ${themes[this.theme].wrapper}`,
                children: [postElement, secondaryElement]
            })

            let container = document.getElementById(this.ele);

            container.innerHTML = ""
            container.appendChild(_hbar)

            // ? what to send out
            this.onCompleted({ element: container, id: this.ele });
        })
    },

    /**
     * Removes the element in the case of it having issues.
     * Rather an aggressive option.
     */
    destroy() {
        document.getElementById(this.ele).remove()
    },

    /**
     * Creates the secondary links for the bar.
     */
    createSecondaryLinks() {
        if (!this.secondaryLinks) return [];

        return this.secondaryLinks.map(({ title, link }) => {
                let style = `${this.styling.secondaryLink} ${themes[this.theme].secondaryLink}`;
                let butter = newElement('a', { classes: style })
                butter.href = link;
                butter.innerText = title;

                return butter;
            }, this);
    }
}

export default hBar
