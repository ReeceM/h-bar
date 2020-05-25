/**
 * h-bar announcement banner
 *
 * @version 1.1.0
 * @author ReeceM
 */
import "./styles.css"
import { init } from "./functions/init"
import { themes } from "./config/styling"
import { domReady, newElement } from "./utils"
import { normaliser } from "./functions/normalise"
import { render } from "./functions/banner"

const hBar = {
    /**
     * h-bar version number
    */
    version: "1.1.0",

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
    render: render,
}

export default hBar
