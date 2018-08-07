import { settings } from '../settings';
import { isMobileDevice } from '../util';
import { get as getIcons } from '../providers/icons';
import { get as getJQuery } from '../providers/jquery';
import { Component } from '../classes/component';

/**
 * @class
 * @extends {Component}
 * @description
 * Action button component.
 */
export class ActionComponent extends Component {

    /**
     * @constructor
     * @param {PageActionMeta} action Action meta data.
     * @param {ActionRunner} actionRunner Action runner function. Wraps the on click function.
     */
    constructor(action, actionRunner) {

        super();

        /**
         * @description
         * Page action meta data.
         * @type {PageActionMeta}
         */
        this.action = action;

        /**
         * @description
         * Function to run on click.
         * @type {function()}
         */
        this.onclick = null;

        /**
        * @description
        * Action runner function.
        * @type {ActionRunner}
        */
        this.actionRunner = actionRunner;
    }

    /**
     * @description
     * Load the component into the container.
     * @param {JQuery} container JQuery element to load the component into.
     * @returns {ActionComponent} Returns itself for chaining.
     */
    load(container) {

        const $ = getJQuery(),
            icons = getIcons();

        this.container = $('<div id="' + this.id + '" class="action-button unselectable" ' +
            'data-ripple></div>');
        $(icons.get(this.action.icon, isMobileDevice() ? '1.2rem' : '1rem', this.action.iconColor || settings.style.colors.header))
            .appendTo(this.container)
            .css(isMobileDevice() ? {
                'display': 'block'
            } : {});
        this.container.append('&nbsp;' + this.action.text);
        if (this.action.className)
            this.container.addClass(this.action.className);
        this.container.ripple().click(() => this.actionRunner(this.action, this.onclick));
        this.container.appendTo(container);
        return this;
    }

    /**
     * @description
     * Set the on click function.
     * @param {function()} func On click function.
     * @returns {ActionComponent} Returns itself for chaining.
     */
    click(func) {
        this.onclick = func;
        return this;
    }

}