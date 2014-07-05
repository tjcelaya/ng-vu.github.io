
define('typeahead/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  this.countries = m.request({
    method: 'GET',
    url: 'countries.json'
  });
  this.selectedItem = m.prop(undefined);
  this.typeahead = m.u.init(m.ui.typeahead({
    list: this.countries,
    onselect: this.selectedItem,
    label: function(item) {
      return item.name;
    },
    template: function(item) {
      return m("div", [
        m("img", {
          src: item.flag
        }), " ",
        item.name
      ]);
    }
  }));
};

demo.view = function(ctrl) {
  return m("div", [
    ctrl.typeahead.$view(), m("br"),
    m("pre", [
      "Selected: ", JSON.stringify(ctrl.selectedItem(), null, '  ')
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Typeahead is a Mithril version of ", m("a", {
    href: "http://getbootstrap.com/2.3.2/javascript.html#typeahead"
  }, ["Bootstrap v2's typeahead plugin"]), "."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.typeahead(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["list"]), " ", m("em", ["(required)"]), ": Source array."])]),
    m("li", [m("p", [m("code", ["selectedItem"]), " ", m("em", ["(default undefined)"]), ": Current selected item or undefine."])]),
    m("li", [m("p", [m("code", ["label"]), " ", m("em", [m("code", ["function(item) string"])]), ": Return string representation of each item for processing filter and displaying."])]),
    m("li", [m("p", [m("code", ["template"]), " ", m("em", [m("code", ["function(item) virtualDOM"])]), ": Custom template for list item."])]),
    m("li", [m("p", [m("code", ["onselect"]), " ", m("em", [m("code", ["function(item)"])]), ": Listen to user select event."])])
  ])
]);
demo.small = 'm.ui.typeahead';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  this.countries = m.request({\r\n    method: 'GET',\r\n    url: 'countries.json'\r\n  });\r\n  this.selectedItem = m.prop(undefined);\r\n  this.typeahead = m.u.init(m.ui.typeahead({\r\n    list: this.countries,\r\n    onselect: this.selectedItem,\r\n    label: function(item) {\r\n      return item.name;\r\n    },\r\n    template: function(item) {\r\n      return <div>\r\n        <img src={item.flag}/>&nbsp;\r\n        {item.name}\r\n      </div>;\r\n    }\r\n  }));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.typeahead';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  {ctrl.typeahead.$view()}<br/>\r\n  <pre>\r\n    Selected: {JSON.stringify(ctrl.selectedItem(), null, '  ')}\r\n  </pre>\r\n</div>\r\n",
};
module.exports = demo;
}); // typeahead/docs/demo
