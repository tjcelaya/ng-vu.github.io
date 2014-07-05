
define('accordion/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
/** @jsx m */
var module1 = {
  controller: function() {},
  view: function() {
    return m("span", ["Static Content"]);
  }
};

/** @jsx m */
var module2 = {
  controller: function() {
    var ctrl = this;
    ctrl.data = m.prop([]);
    ctrl.addItem = function() {
      ctrl.data().push('Item' + (ctrl.data().length + 1));
    };
  },
  view: function(ctrl) {
    return m("div", [
      m("p", [
        "The body of the accordion group grows to fit the contents"
      ]),
      m("button", {
        class: "btn btn-default",
        onclick: ctrl.addItem
      }, [
        "Add item"
      ]),

      ctrl.data().map(function(item) {
        return m("div", [item]);
      })

    ]);
  }
};

var demo = {};
demo.controller = function() {
  var ctrl = this;
  ctrl.oneAtATime = m.prop(false);
  ctrl.disabled = m.prop(false);

  ctrl.accordion = m.u.init(m.ui.accordion({
    group: [{
      heading: 'Static',
      disabled: ctrl.disabled,
      module: module1
    }, {
      heading: m("span", ["Header can also have markup",
        m("span", {
          class: "pull-right glyphicon glyphicon-star"
        })
      ]),
      module: module1
    }, {
      heading: 'Dynamic',
      module: module2
    }],
    closeOthers: ctrl.oneAtATime
  }));
};

demo.view = function(ctrl) {
  var toggle = function() {
    ctrl.accordion.toggle(0);
  };

  var toggleDisabled = function() {
    ctrl.disabled(!ctrl.disabled());
  };

  return m("div", [
    m("p", [
      m("button", {
        class: "btn btn-default",
        onclick: toggle
      }, [
        "Toggle first panel"
      ]), " ",
      m("button", {
        class: "btn btn-default",
        onclick: toggleDisabled
      }, [
        "Enable/Disable first panel"
      ])
    ]),
    m("label", [
      m("input", {
        type: "checkbox",
        onchange: m.withAttr("checked", ctrl.oneAtATime)
      }), " " + ' ' +
      "Only one at a time"
    ]),
    m("br"),
    ctrl.accordion.$view()
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["The accordion components provide a list of items, with collapsible bodies that are collapsed or expanded by clicking on the item`s header."]),
  m("p", [m("strong", ["TODO"]), ": open, close, config"]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.accordion(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["group"]), " ", m("em", ["(required)"]), ": List of components including information such as ", m("em", [m("code", ["heading"])]), " for toggle label, ", m("em", [m("code", ["module"])]), " for content and ", m("em", [m("code", ["disabled"]), " (optional, default: false)"]), " for the component working or not"])]),
    m("li", [m("p", [m("code", ["closeOthers"]), ": Define that the accordion allows more than one component open at the same time or not."])]),
    m("li", [m("p", [m("code", ["toggle(index)"]), ": To open a component based on its index."])])
  ])
]);
demo.small = 'm.ui.accordion';
demo.files = {
  'demo.jsx': "// START\r\nINCLUDE('./module1')\r\nINCLUDE('./module2')\r\n\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  var ctrl = this;\r\n  ctrl.oneAtATime = m.prop(false);\r\n  ctrl.disabled = m.prop(false);\r\n\r\n  ctrl.accordion = m.u.init(m.ui.accordion({\r\n    group: [{\r\n      heading: 'Static',\r\n      disabled: ctrl.disabled,\r\n      module: module1\r\n    }, {\r\n      heading: <span>Header can also have markup\r\n        <span class=\"pull-right glyphicon glyphicon-star\"></span></span>,\r\n      module: module1\r\n    }, {\r\n      heading: 'Dynamic',\r\n      module: module2\r\n    }],\r\n    closeOthers: ctrl.oneAtATime\r\n  }));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  var toggle = function() {\r\n    ctrl.accordion.toggle(0);\r\n  };\r\n\r\n  var toggleDisabled = function() {\r\n    ctrl.disabled(!ctrl.disabled());\r\n  };\r\n\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.accordion';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n  '_module1.jsx': CONTENT('./_module1.jsx'),\r\n  '_module2.jsx': CONTENT('./_module2.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <p>\r\n    <button class=\"btn btn-default\" onclick={toggle}>\r\n      Toggle first panel\r\n    </button>&nbsp;\r\n    <button class=\"btn btn-default\" onclick={toggleDisabled}>\r\n      Enable/Disable first panel\r\n    </button>\r\n  </p>\r\n  <label>\r\n    <input type=\"checkbox\"\r\n    onchange={m.withAttr(\"checked\", ctrl.oneAtATime)} />&nbsp;\r\n    Only one at a time\r\n  </label>\r\n  <br/>\r\n  {ctrl.accordion.$view()}\r\n</div>\r\n",
  '_module1.jsx': "var module1 = {\n  controller: function() {},\n  view: function() {\n    return <span>Static Content</span>;\n  }\n};\n",
  '_module2.jsx': "var module2 = {\n  controller: function() {\n    var ctrl = this;\n    ctrl.data = m.prop([]);\n    ctrl.addItem = function() {\n      ctrl.data().push('Item' + (ctrl.data().length + 1));\n    };\n  },\n  view: function(ctrl) {\n    return <div>\n      <p>\n        The body of the accordion group grows to fit the contents\n      </p>\n      <button class=\"btn btn-default\" onclick={ctrl.addItem}>\n        Add item\n      </button>\n      {\n        ctrl.data().map(function(item) {\n          return <div>{item}</div>;\n        })\n      }\n    </div>;\n  }\n};\n",
};
module.exports = demo;
}); // accordion/docs/demo
