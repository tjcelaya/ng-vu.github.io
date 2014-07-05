
define('tabs/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  this.tabs = m.u.init(m.ui.tabs([{
    label: 'Tab 1',
    module: tab1
  }, {
    label: 'Tab 2',
    module: tab2
  }]));
};

demo.view = function(ctrl) {
  return m("div", [
    ctrl.tabs.$view()
  ]);
};

var tab1 = {};
tab1.controller = function() {};
tab1.view = function(ctrl) {
  return m("div", ["This is tab 1 content"]);
};

var tab2 = {};
tab2.controller = function() {};
tab2.view = function(ctrl) {
  return m("div", ["This is tab 2 content"]);
};
// END

demo.doc = m("div", [
  m("p", ["Tabs is a Mithril version of ", m("a", {
    href: "http://getbootstrap.com/javascript/#tabs"
  }, ["Bootstrap's tabs plugin"]), "."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.tabs(tabSettings)"]), ": Return a tabs component with given modules. ", m("code", ["tabSettings"]), " is an Array of:"]),
  m("ul", [
    m("li", [m("code", ["label"]), ": Label of tab."]),
    m("li", [m("code", ["module"]), ": Mithril module."])
  ])
]);
demo.small = 'm.ui.tabs';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  this.tabs = m.u.init(m.ui.tabs([{\r\n    label: 'Tab 1',\r\n    module: tab1\r\n  }, {\r\n    label: 'Tab 2',\r\n    module: tab2\r\n  }]));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n\r\nvar tab1 = {};\r\ntab1.controller = function(){};\r\ntab1.view = function(ctrl) {\r\n  return INCLUDE('./tab1');\r\n};\r\n\r\nvar tab2 = {};\r\ntab2.controller = function(){};\r\ntab2.view = function(ctrl) {\r\n  return INCLUDE('./tab2');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.tabs';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n  '_tab1.jsx': CONTENT('./_tab1.jsx'),\r\n  '_tab2.jsx': CONTENT('./_tab2.jsx')\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  {ctrl.tabs.$view()}\r\n</div>\r\n",
  '_tab1.jsx': "<div>This is tab 1 content</div>\r\n",
  '_tab2.jsx': "<div>This is tab 2 content</div>\r\n"
};
module.exports = demo;
}); // tabs/docs/demo
