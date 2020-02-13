import "./styles.css"
import { domReady, createElement, addClasses } from "./utils";


// let template = `
// <div class="flex w-full text-sm py-2 md:px-20 px-2 items-center justify-between bg-gray-900 text-gray-100">
//     <div class="flex items-center">
//         <span class="px-2 mx-2 bg-white text-gray-900 leading-relaxed tracking-wider uppercase font-semibold rounded-full text-xs">New</span>
//         <a href="{{$link}} class="hover:underline hover:text-gray-300">{{$message}} &rightarrow;</a>
//     </div>
//     <div class="flex items-center">
//         <a href="#" class="mx-5 cursor-pointer hover:underline">Docs</a>
//         <a href="#" class="mx-5 cursor-pointer hover:underline">Support</a>
//     </div>
// </div>
// `;

const hBar = {
    url: '',
    callback: null,
    postLink: '',
    postTitle: '',

    parentClasses: 'hb-flex hb-w-full hd-flex-col md:hb-flex-row sm:hb-flex-row hb-text-sm hb-py-2 md:hb-px-20 hb-px-1 hb-items-center hb-justify-between hb-bg-gray-900 hb-text-gray-100',
    linksParent: 'hb-flex hb-items-center',
    badge: 'hb-px-2 hb-mx-2 hb-bg-white hb-text-gray-900 hb-leading-relaxed hb-tracking-wider hb-uppercase hb-font-semibold hb-rounded-full hb-text-xs',
    postTitleClass: 'hover:hb-underline hover:hb-text-gray-300',
    secondaryLinks: 'hb-mx-5 hb-cursor-pointer hover:hb-underline hover:hb-text-gray-300',

    /**
     * Initialise the hBar package
     * @param {string} url The endpoint to get data from
     * @param {function} callback The function that is called when done
     */
    init({ url, callback }) {
        this.url = url;
        this.callback = callback;
    },

    fetchData() {
        fetch(this.url, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Accept': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
        })
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
            let _hbar = createElement('div')
            let postNoticeBody = createElement('div')
            let badge = createElement('span')
            let postLink = createElement('a')

            let docs = createElement('a')
            let support = createElement('a')
            let linksBody = createElement('div')

            addClasses(_hbar, this.parentClasses)

            addClasses(postNoticeBody, this.linksParent)
            addClasses(badge, this.badge)
            addClasses(postLink, this.postTitleClass)

            addClasses(linksBody, this.linksParent)
            addClasses(docs, this.secondaryLinks)
            addClasses(support, this.secondaryLinks)


            docs.href = "#"
            support.href = "#"
            docs.textContent = "Docs"
            support.textContent = "Support"
            linksBody.appendChild(docs)
            linksBody.appendChild(support)

            badge.textContent = 'New'
            postLink.href = this.postLink
            postLink.innerHTML = `${this.postTitle} &rightarrow;`

            postNoticeBody.appendChild(badge)
            postNoticeBody.appendChild(postLink)

            _hbar.appendChild(postNoticeBody)
            _hbar.appendChild(linksBody)

            document.getElementById('h-bar').appendChild(_hbar)
        })
    }
}

export default hBar
