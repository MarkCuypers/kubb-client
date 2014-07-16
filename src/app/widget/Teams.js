define(["dojo/_base/declare", "dojo/_base/lang",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dojo/text!./teams.html",
        "app/repository/TeamsStore",
        "dgrid/OnDemandGrid", "dgrid/Keyboard", "dgrid/Selection",

        "dojox/mvc/at",
        "dijit/form/TextBox",

        "xstyle/css!./teams.css"
    ],
    function (declare, lang,
              _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
              template,
              TeamsStore,
              OnDemandGrid, Keyboard, Selection) {

        var TeamsGrid = declare([OnDemandGrid, Keyboard, Selection]);

        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

            templateString: template,

            baseClass: "kubbTeams",

            _teamsStore: TeamsStore,

            _teamsGridNode: null,

            _teamsGrid: null,

            _filterText: null,

            postCreate: function () {
                var self = this;
                self.inherited(arguments);

                self._teamsGrid = new TeamsGrid({
                    store: self._teamsStore,
                    columns: {
                        name: {
                            field: "name",
                            sortable: false,
                            label: "Ploeg"
                        }
                    }
                }, self._teamsGridNode);
                self._teamsGrid.startup();
                self.own(self.watch("_filterText", function (propName, oldValue, newValue) {
                    self._filter(newValue);
                }));
            },

            _filter: function (filterText) {
                this._teamsGrid.set("query", {name: filterText});
            }

        })
    });