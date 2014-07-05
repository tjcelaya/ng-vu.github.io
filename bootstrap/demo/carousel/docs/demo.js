
define('carousel/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  this.carousel = m.u.init(m.ui.carousel());
};

demo.view = function(ctrl) {
  return m("div", [
    ctrl.carousel.$view()
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Carousel is a Mithril component"])
]);
demo.files = {
  'demo.jsx': "// START\nvar demo = {};\ndemo.controller = function() {\n  this.carousel = m.u.init(m.ui.carousel());\n};\n\ndemo.view = function(ctrl) {\n  return INCLUDE('./template');\n};\n// END\n\ndemo.doc =  INCLUDE('./readme');\ndemo.files = {\n  'demo.jsx': CONTENT('./demo.jsx'),\n  '_template.jsx': CONTENT('./_template.jsx'),\n};\nmodule.exports = demo;\n",
  '_template.jsx': "<div>\n  {ctrl.carousel.$view()}\n</div>\n",
};
module.exports = demo;
}); // carousel/docs/demo
