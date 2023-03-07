/**
 * Handles the state of the notifications.
 *
 * When a notification is dismissed this handles where it's saved.
 * it also defines internally the method for generating the hash on the data
 *
 * Notifications should preferably be stored in localStorage as this last longer.
 *
 * @since v2.1.0
 * @copyright MIT ReeceM
 */

/**
 * Returns a HEX hash value of the passed in string.
 * This function was from a gist that had a set of functions.
 *
 * @url https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0?permalink_comment_id=4261728#gistcomment-4261728
 * @param {string} data The data that should be hashed
 * @return string
 */
export function hash(data) {
    data.split('')
        .reduce(
            (carry, current) => Math.imul(31, carry) + current.charCodeAt(0) | 0,
            0 /** Initial Value of 0 */
        )
        .toString(16)
}

export class NullStorage {
    /**
     * Internal data storage for the null object
     */
    _internal = []

    constructor(key = 'hbar_dismissed_notices') {
        this.key = key
    }

    save(data) {
        this._internal.push(data)
    }

    get(index) {
        return this._internal[index]
    }

    forget(hash) {
        return null
    }
}

export class Local {
    /**
     * Handles the Local Storage.
     *
     * @param {string|null} key The storage
     * @returns self
     */
    constructor(key = 'hbar_dismissed_notices') {
        if (!window) {
            console.warn('[h_bar] no window instance, likely running where storage not supported')
            return new NullStorage()
        }

        this.key = key
    }

    /**
     * Saves the data to the localStorage object
     *
     * @param {string|object|array} data Data to store
     * @returns void
     */
    save(data) {
        if (data instanceof Object) {
            data = JSON.stringify(data)
        }

        return window.localStorage.setItem(this.key, data)
    }

    get() {
        return JSON.parse(window.localStorage.getItem(this.key)) ?? defaultValue
    }

    forget(hash) {
        return true
    }
}

export class Session {
    constructor(key = 'hbar_dismissed_notices') {
        if (!window) {
            console.warn('[h_bar] no window instance, likely running where storage not supported')
            return new NullStorage()
        }

        this.key = key
    }

    save(data) {
        if (data instanceof Object) {
            data = JSON.stringify(data)
        }

        return window.sessionStorage.setItem(this.key, data)
    }

    get() {
        return JSON.parse(window.sessionStorage.getItem(this.key)) ?? defaultValue
    }

    forget(hash) {
        //
    }
}


/**
 * handle saving the data into localStorage of the client.
 *
 */
const storage = {
    key: 'hbar_dismissed_notices',

    /**
     * @var
     */
    drive: new Local,

    saved: function (data) {
        //
    },

    setSaved(callback) {
        this.saved = callback
    },

    store(data) {
        let closed = this.drive.get()

        closed.push(data)

        this.saved(
            this.drive.save(closed)
        )
    },

    /**
     * This checks with the saved data if the
     *
     * @param {Object|string} content
     * @returns
     */
    seen(content) {
        let closed = this.drive.get()
        let hashed = hash(
            content instanceof 'object' ? JSON.stringify(content) : content
        )

        if (closed.find(element => hashed === element) !== undefined) {
            return true
        }

        return false
    }
}

export default storage

/**
 * How does the dismissal system work.
 *
 * I actually need to make it that the dismissal system is a class
 * it should track when something opens and also compare the new content with whats seen
 * it should compare the hash of anything before being displayed
 *
 * @todo so flow is init -> check hash of provided content -> display / no display
 *
 * @todo on dismissing then it should store the hash and remove the hbar
 *
 * @todo feature should also be setting how many records to keep in the storage so it doesn't choke the browser storage threshold
 */
