/**
 * h-bar announcement banner
 *
 * @version 0.3.0
 * @author ReeceM
 */
import "./styles.css"
import { init } from "./functions/init"
import { themes } from "./config/styling"
import { domReady, newElement } from "./utils"
import { normaliser } from "./functions/normalise"

const hBar = {
    /**
     * h-bar version number
    */
    version: "0.3.0",

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
        if (this.isDismissed()) return;

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
        if (this.isDismissed()) return;
        domReady().then(() => {

            if (!this.postTitle) {
                console.error('[h-bar] no post data, unable to render');
                return;
            }

            let secondaryElement = null;

            if (!this.dismissible) {
                let secondaryLinkList = this.createSecondaryLinks()
                secondaryElement = newElement('div', {
                    children: secondaryLinkList,
                    classes: `${this.styling.linkWrapper} ${themes[this.theme].linkWrapper}`
                })
            } else {
                secondaryElement = this.dismissibleButton();
            }

            let badge = newElement('span', { classes: `${this.styling.badge} ${themes[this.theme].badge}` })
            let postLink = newElement('a', { classes: `${this.styling.postTitle} ${themes[this.theme].postTitle}` })

            badge.innerText = this.badge;
            postLink.href = this.postLink;
            postLink.innerText = this.postTitle;

            postLink.innerHTML += `
            <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            `

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
     *
     * Also used when dismissing.
     */
    destroy() {
        try {
            document.getElementById(this.ele).remove()

            return true;
        } catch (error) {
            console.error('Unable to destroy the h-bar wrapper')
            console.error(error)
        }

        return false;
    },

    /**
     * Creates the HTML node for a dismissible button.
     *
     * @returns HTMLElement
     */
    dismissibleButton() {
        let dismiss = newElement('button', {
            classes: '-mr-1 flex p-1 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800',
        });

        dismiss.innerHTML = `<svg class="h-4 w-4 ${themes[this.theme].dismiss}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>`

        dismiss.onclick = (e) => {
            e.preventDefault();

            // just do it early if we not logging time.
            if (!this.dismissFor) return this.destroy();

            if (localStorage) {
                localStorage.setItem('h-bar_dismiss_for', this.dismissFor.getTime());
            }

            return this.destroy();
        }

        return dismiss;
    },

    /**
     * Determines if the banner has been dismissed.
     *
     * @returns boolean
     */
    isDismissed() {

        if (localStorage) {
            var dismissDate = localStorage.getItem('h-bar_dismiss_for');
            if (!dismissDate) {
                return false;
            }

            dismissDate = dismissDate;
            var ourDate = (new Date()).getTime();

            if (ourDate <= dismissDate) {
                return true;
            }
        }

        return false;
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
