define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "app/widget/Teams", "dojo/dom-construct",
    "dojo/text!./app.html",

    "xstyle/css!./app.css"
],
    function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
              Teams, domConstruct,
              template) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

            templateString: template,

            baseClass: "kubbApp",

            _appContent: null,

            constructor: function (params) {
                this.inherited(arguments);
                console.log(this.baseClass + ": main.constructor");
            },

            postCreate: function () {
                this.inherited(arguments);
                var self = this;
                console.log(this.baseClass + ": main.postCreate");
                var teams = new Teams();
                teams.startup();
                teams.placeAt(self._appContent);
            },

            startup: function () {
                this.inherited(arguments);
                console.log(this.baseClass + ": main.startup");
            }
        });
    });
