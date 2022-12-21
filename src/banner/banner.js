import { domReady, newElement, isDismissed } from "../utils"
import { styling } from './styling'

export default class Banner {

    /**
     *
     * @param {object} param0
     */
    constructor({ $el, dismissible, dismissFor, theme, badge, customStyles = null }) {
        this.$el = $el
        this.dismissible = dismissible
        this.dismissFor = dismissFor
        this.badge = badge
        this.theme = theme

        // use the top level styling preferences
        this.styling = customStyles != null ? customStyles : styling
    }

    /**
     * Render the element.
     */
    resolve({ title, link, secondaryLinks }) {
        if (isDismissed()) return

        domReady().then(() => {

            if (!title) {
                console.error('[h-bar] no post data, unable to render')
                return
            }

            let secondaryElement = null

            if (!this.dismissible) {
                let secondaryLinkList = this.createSecondaryLinks(secondaryLinks)
                secondaryElement = newElement('div', {
                    children: secondaryLinkList,
                    classes: `${this.styling.linkWrapper} ${this.theme.linkWrapper}`
                })
            } else {
                secondaryElement = this.dismissibleButton()
            }

            let badgeElement = null
            if (this.badge) {
                badgeElement = newElement('span', { classes: `${this.styling.badge} ${this.theme.badge}` })
                badgeElement.innerText = this.badge
            }
            let postLink = newElement('a', { classes: `${this.styling.postTitle} ${this.theme.postTitle}` })

            postLink.href = link
            postLink.innerText = title

            postLink.innerHTML += `
                <svg class="hb-h-3 hb-w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                `
            let postChildren = [postLink]
            if (badgeElement) {
                postChildren.unshift(badgeElement)
            }

            let postElement = newElement('div', {
                classes: `${this.styling.linkWrapper} ${this.theme.linkWrapper}`,
                children: postChildren
            })

            let _hbar = newElement('div', {
                classes: `${this.styling.wrapper} ${this.theme.wrapper}`,
                children: [postElement, secondaryElement]
            })

            let container = document.querySelector(this.$el)

            container.innerHTML = ""
            container.appendChild(_hbar)
        })
    }

    /**
     * Removes the element in the case of it having issues.
     * Rather an aggressive option.
     *
     * Also used when dismissing.
     */
    destroy() {
        try {
            document.querySelector(this.$el).innerHTML = ''
            return true
        } catch (error) {
            console.error('Unable to destroy the h-bar wrapper')
            console.error(error)
        }
        return false
    }

    /**
     * Creates the HTML node for a dismissible button.
     *
     * @returns HTMLElement
     */
    dismissibleButton() {
        let dismiss = newElement('button', {
            classes: `hb--mr-2 hb-flex hb-p-1 hb-rounded-md ${this.theme.dismiss} hover:hb-text-white hover:hb-bg-gray-800 focus:hb-outline-none focus:hb-bg-gray-800`,
        })

        dismiss.innerHTML = `<svg class="hb-h-4 hb-w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>`

        dismiss.onclick = (e) => {
            e.preventDefault()

            // just do it early if we not logging time.
            if (!this.dismissFor) return this.destroy()

            if (localStorage) {
                localStorage.setItem('h-bar_dismiss_for', this.dismissFor.getTime())
            }

            return this.destroy()
        }

        return dismiss
    }

    /**
     * Creates the secondary links for the bar.
     */
    createSecondaryLinks(secondaryLinks) {
        if (!secondaryLinks) return []

        return secondaryLinks.map(({ title, link }) => {
            let style = `${this.styling.secondaryLink} ${this.theme.secondaryLink}`
            let butter = newElement('a', { classes: style })
            butter.href = link
            butter.innerText = title

            return butter
        }, this)
    }
}
