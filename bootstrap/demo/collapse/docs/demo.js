
define('collapse/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};

demo.controller = function() {
  var module = {
    controller: function() {},
    view: function() {
      return m("pre", ["Sample content"]);
    }
  };

  this.collapse = m.u.init(m.ui.collapse({
    content: module,
    disabled: false
  }));
};

demo.view = function(ctrl) {
  return m("div", [
    m("div", [
      m("span", {
        class: "btn btn-default",
        onclick: ctrl.collapse.toggle
      }, ["Toggle collapse"])
    ]),
    m("br"),
    ctrl.collapse.$view()
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Mithril version of Bootstrap's collapse plugin. Provides a simple way to hide and show an element with a css transition."]),
  m("p", [m("strong", ["TODO"]), ": open, close"]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.collapse(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["content"]), " ", m("em", ["(required)"]), ": Content inside, a customize components."])]),
    m("li", [m("p", [m("code", ["disabled"]), ": Components is allows to work or not."])])
  ]),
  m("h3", {
    id: "methods"
  }, ["Methods"]),
  m("ul", [
    m("li", [m("code", ["toggle()"]), ": To open/close the collapse."])
  ])
]);
demo.small = 'm.ui.collapse';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\n\r\ndemo.controller = function() {\r\n  var module = {\r\n    controller: function() {},\r\n    view: function() {\r\n      return <pre>Sample content</pre>;\r\n    }\r\n  };\r\n\r\n  this.collapse = m.u.init(m.ui.collapse({\r\n    content: module,\r\n    disabled: false\r\n  }));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.collapse';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <div>\r\n    <span class=\"btn btn-default\" onclick={ctrl.collapse.toggle}>Toggle collapse</span>\r\n  </div>\r\n  <br/>\r\n  {ctrl.collapse.$view()}\r\n</div>\r\n",
};
module.exports = demo;
}); // collapse/docs/demo
