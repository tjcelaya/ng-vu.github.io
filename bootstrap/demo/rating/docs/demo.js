
define('rating/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  this.rating = m.u.init(m.ui.rating({
    iconOff: m("span", {
      class: "glyphicon glyphicon-ok-circle"
    }),
    iconOn: m("span", {
      class: "glyphicon glyphicon-ok-sign"
    }),
    max: 10,
    rating: 7,
    hover: true,
    readOnly: false
  }));
};

demo.view = function(ctrl) {
  var clear = function() {
    ctrl.rating.clear();
  };

  var toggle = function() {
    ctrl.rating.readOnly(!ctrl.rating.readOnly());
  };
  return m("div", [
    m("div", [
      ctrl.rating.$view()
    ]),
    m("br"),
    m("div", [
      "Rating: ", m("b", [ctrl.rating.rating()]), " -" + ' ' +
      "Read only is ", m("b", [ctrl.rating.readOnly()]), " -" + ' ' +
      "Hovering over ", m("b", [
        ctrl.rating.hovering() ? ctrl.rating.hovering() : 'none'
      ])
    ]),
    m("br"),
    m("button", {
      class: "btn btn-danger",
      onclick: clear,
      disabled: ctrl.rating.readOnly() ? 'disabled' : ''
    }, [
      "Clear"
    ]), " ",
    m("button", {
      class: "btn btn-default",
      onclick: toggle
    }, [
      "Toggle Read Only"
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Rating directive that will take care of visualising a star rating bar."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.rating(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["iconOff"]), ": Unrated icon."])]),
    m("li", [m("p", [m("code", ["iconOn"]), ": Rated icon."])]),
    m("li", [m("p", [m("code", ["max"]), ": Rating scale (default: 5)."])]),
    m("li", [m("p", [m("code", ["rating"]), ": Default rating (Default: 0)."])]),
    m("li", [m("p", [m("code", ["hover"]), ": Hover or not."])]),
    m("li", [m("p", [m("code", ["readOnly"]), ": Read only or not."])])
  ])
]);
demo.small = 'm.ui.rating';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  this.rating = m.u.init(m.ui.rating({\r\n    iconOff: <span class=\"glyphicon glyphicon-ok-circle\"></span>,\r\n    iconOn: <span class=\"glyphicon glyphicon-ok-sign\"></span>,\r\n    max: 10,\r\n    rating: 7,\r\n    hover: true,\r\n    readOnly: false\r\n  }));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  var clear = function() {\r\n    ctrl.rating.clear();\r\n  };\r\n\r\n  var toggle = function() {\r\n    ctrl.rating.readOnly(!ctrl.rating.readOnly());\r\n  };\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.rating';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <div>\r\n    {ctrl.rating.$view()}\r\n  </div>\r\n  <br/>\r\n  <div>\r\n    Rating: <b>{ctrl.rating.rating()}</b> -\r\n    Read only is <b>{ctrl.rating.readOnly()}</b> -\r\n    Hovering over <b>\r\n      {ctrl.rating.hovering()? ctrl.rating.hovering(): 'none'}\r\n    </b>\r\n  </div>\r\n  <br />\r\n  <button class=\"btn btn-danger\" onclick={clear}\r\n    disabled={ctrl.rating.readOnly()?'disabled':''} >\r\n    Clear\r\n  </button>&nbsp;\r\n  <button class=\"btn btn-default\" onclick={toggle}>\r\n    Toggle Read Only\r\n  </button>\r\n</div>\r\n",
};
module.exports = demo;
}); // rating/docs/demo
