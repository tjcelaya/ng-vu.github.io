
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
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  this.carousel = m.u.init(m.ui.carousel());\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  {ctrl.carousel.$view()}\r\n</div>\r\n",
};
module.exports = demo;
}); // carousel/docs/demo
