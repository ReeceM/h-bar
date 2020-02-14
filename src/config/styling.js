/**
 * The class styling configurations.
 *
 * Has the base styles and the themes
 *
 * @var {object} styling
 */
export const styling = {
    wrapper: "hb-flex hb-w-full hd-flex-col md:hb-flex-row sm:hb-flex-row hb-text-sm hb-py-2 md:hb-px-20 hb-px-1 hb-items-center hb-justify-between",
    linkWrapper: "hb-flex hb-items-center",
    badge: "hb-px-2 hb-mx-2 hb-leading-relaxed hb-tracking-wider hb-uppercase hb-font-semibold hb-rounded-full hb-text-xs",
    postTitle: "hover:hb-underline",
    secondaryLink: "hb-mx-5 hb-cursor-pointer hover:hb-underline",
}

/**
 * THe themes for the bars
 *
 * @var {object} themes
 */
export const themes = {
    gray: {
        wrapper: "hb-bg-gray-900 hb-text-gray-100",
        linkWrapper: "",
        badge: "hb-bg-white hb-text-gray-900",
        postTitle: "hover:hb-text-gray-300",
        secondaryLink: "hover:hb-text-gray-300"
    },
    blue: {
        wrapper: "hb-bg-blue-900 hb-text-blue-100",
        linkWrapper: "",
        badge: "hb-bg-blue-100 hb-text-blue-900",
        postTitle: "hover:hb-text-blue-300",
        secondaryLink: "hover:hb-text-blue-300"
    },
}
