
define('tooltip/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  this.tooltip = m.u.init(m.ui.tooltip({}));
};

demo.view = function(ctrl) {
  return m("div", [ctrl.tooltip.$view()]);
};
// END

demo.doc = m("div", [
  m("p", ["Document"])
]);
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  this.tooltip = m.u.init(m.ui.tooltip({\r\n  }));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>{ctrl.tooltip.$view()}</div>\r\n",
};
module.exports = demo;
}); // tooltip/docs/demo
