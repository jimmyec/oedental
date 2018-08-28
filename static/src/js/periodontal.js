odoo.define('oedental.periodontal', function (require) {
"use strict";
    var Class = require('web.Class');
    var Widget = require('web.Widget');
    var core = require('web.core');
    var data = require('web.data');
	var form_common = require('web.form_common');
    var utils = require('web.utils');
    var _t = core._t;
    var _lt = core._lt;
    var QWeb = core.qweb;

    var homePage = Widget.extend({
        init: function(parent) {
            this._super(parent);
            console.log("Hola dental, I'm inside of init.");
        },
        start: function() {
            var products = new periodontalWidget(
                this, ["cpu", "mouse", "keyboard", "graphic card", "screen"], "#FFAA00");
            products.appendTo(this.$el);
        },
    });

    var periodontalWidget = Widget.extend({
        template: "periodontalWidget",
        init: function(parent, products, color) {
            this._super(parent);
            this.products = products;
            this.color = color;
        },
    });

    
    core.action_registry.add('periodontal', homePage);

});
