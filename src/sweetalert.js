/**
 * Sweet alert module. Includes a queue for the sweet alert library.
 * @module sweetalert
 * @private
 */
'use strict';

var util = require('./util'),
    windowprovider = require('./providers/window'),
    swal = require('../external/swal'),
    queue = [],
    isOpen = false,
    isClosing = false,
    originalClose = swal.close;

//Overwrite the close function.
swal.close = function() {
    var window = windowprovider.get();
    isClosing = true;
    originalClose();
    isOpen = false;
    window.setTimeout(function() {
        onClosed();
    }, 400);
};

/**
 * Open a sweet alert or queue it if one is already open.
 * @returns {void}
 */
function openSwal() {
    if (isOpen || isClosing) {
        queue.push(arguments);
    } else {
        swal.apply(null, arguments);
        isOpen = true;
    }
}

/**
 * Sweetalert close event.
 * @returns {void}
 */
function onClosed() {
    isClosing = false;
    if (queue.length)
        openSwal.apply(null, queue.shift());
}

/**
 * Fix alert messages.
 * @param {string} msg Alert message to fix.
 * @returns {string} Alert message
 */
function fixMessage(msg) {

    // Replace new lines with line breaks.
    msg = msg.replace(/\n/g, '<br />');

    return msg;
}

/**
 * Shows a sweet alert. Queues the alert if an alert is already displayed.
 * @param {string} msg Message to display
 * @param {function():void} [callback] Callback function to execute after the dialog is dismissed.
 * @param {string} [title="Application Confirmation"] Title of the dialog.
 * @param {string} [icon] Icon URL to display in the dialog.
 * @returns {void}
 */
function show(msg, callback, title, icon) {

    msg = fixMessage(msg);
    title = title || '';

    if (title.indexOf('Error') !== -1) {

        if (title === 'Application Error')
            title = 'Oops';

        openSwal({
            title: title,
            text: msg,
            type: 'error',
            width: (util.width() < 438 ? util.width() - 60 : null)
        },
            callback
        );

    } else {

        var type = 'warning';
        if (msg.toLowerCase().indexOf('done') !== -1 ||
            msg.toLowerCase().indexOf('success') !== -1 ||
            title.toLowerCase().indexOf('done') !== -1 ||
            title.toLowerCase().indexOf('success') !== -1)
            type = 'success';

        if (title === 'Application Message')
            title = '';

        openSwal({
            title: title,
            text: msg,
            type: (icon ? null : type),
            imageUrl: icon,
            width: (util.width() < 438 ? util.width() - 60 : null)
        },
            callback
        );
    }
}

module.exports = {
    show: show
};
